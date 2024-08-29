---
title: A Stroll into the RegEx Trees
date: '2024-08-29'
---

Having worked on a website for Hashbot, a Discord bot that aims to ban impersonators
using RegEx, I've always been a bit interested improving the efficiency of one of the features: Fuzzy Matching.

## The Problem
Fuzzy matching, in this context means to match non-exact strings together. For example, If we have a huge Web3 server with an owner named `astro`, we may create a filter `(?i)^astro$` to ban users with names like `astro` and `Astro`. But realistically, it'd be great if we could also ban names clearly similar, such as `aStrO`, `a5tr0`, `Astro`, `@str0`, etc.

For a character like `a`, characters like `@`, `а` (this is NOT the same - its a cryllic a.. can you tell?) are called confusables. Unicode keeps a [list](https://www.unicode.org/Public/security/latest/confusables.txt) of them up to date. Banning everyone like that may be a strict filter, but it's better than having users in your server losing their crypto/NFTs permanently.

## The Approach
An initial thought may be to use something distance related like Levenshtein Distance or Hamming Distance. However, this will work poorly without significant changes, as `astro` and its visibily equivalent Cryllic partner will not have a close distance at all. They may *look* the same, but the characters are completely different!

Ideally, I would like to make the change in the frontend (parser) instead of the backend, so that we can fully rely and trust the battle-scarred and tested engines to do the heavy lifting and optimize the expression on my behalf.

With RegEx, we can generate filters for each confusable. However, as one can imagine, the naïve implementation ends up with a lot of filters when we consider all confusables `a`, `@`, `A` that match with each `[azAZ]`, especially for large servers with tons of users. Of course, we can do something like changing every `a` to `[a|A|@|...]`, but we end up with really long strings where we first have to modify the string, before having the parser parse the same thing again. Knowing that, it would be great to have:

- some kind of SIMD RegEx where we can feed in a bunch of names and get results back quickly.
- some kind of optimization within the engine that checks alternations in O(1) time for more memory.
- most importantly, other people looking at the changes should be confident that the changes solve the problem. The code should be easily understandable to others without as much context as me, and tests should remain passing.

## Shopping for a Solution

### Hyperscan?

<!-- <div class="video">
    <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/Le67mP-jIa8?si=paNQ_CrtdB_iJy0j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
</div> -->

The first place that I looked at was [intel/hyperscan](https://github.com/intel/hyperscan), the go-to standard for heavy RegEx applications (or so I heard). Used for DPI (Deep Packet Inspection) stacks, it has lots of [whistles & bells](https://www.usenix.org/sites/default/files/conference/protected-files/nsdi19_slides_wang_xiang.pdf) including efficient SIMD processing, but only runs on Intel x86 processors. In short, Hyperscan works by compiling expressions into a immutable database using the [most optimal engine](https://www.intel.com/content/www/us/en/collections/libraries/hyperscan/regular-expression-match.html) for that expression, then accepting strings via its C API to match strings.

Hyperscan is great for standard applications, but isn't a great fit here because:

- We permit users to add/remove expressions on the fly, so precompiling isn't ideal.
- The parser requires `position` information at the Component level, which is not ideal. This is because we are going to 'bloat' the regex with confusables, which would make positions inaccurate. (e.g. `astro` could become `[a|A|@\..]stro`, but parsed into an AST tree).
- The code was hard to comprehend at first glance (... compared to the next option).

### Rust's RegEx Crate
I then looked into Rust's RegEx crate. I've always wanted to have an excuse to work on something in Rust, and this was the perfect chance. [rust-lang/regex](https://github.com/rust-lang/regex) was recently rewritten to use modern methods as well, including SIMD processing. The codebase is also a lot more well documented and easier to understand than Hyperscan, with plenty of comments that explain what each line of code is doing.

The crate is separated into [regex-automata](https://github.com/rust-lang/regex/tree/master/regex-automata) and [regex-syntax](https://github.com/rust-lang/regex/tree/master/regex-syntax). The former contains the implementation for the regex engines, and the latter contains the frontend (parser) for expressions, converting expressions to AST, then to its high level intermediate representation (HIR).

Looking into the implementation of `regex-automata`, the `meta` regex [selects the best
strategies](https://docs.rs/regex-automata/latest/regex_automata/#should-i-be-using-this-crate) for each given expression. With the action plan being to replace the alphabets with large alternations, the strategy also being able to short-circuit [huge alternations with Aho-Corasick](https://github.com/rust-lang/regex/blob/ab88aa5c6824ebe7c4b4c72fe5191681783b3a68/regex-automata/src/meta/strategy.rs#L122) was also a great sign.

## The Solution
All of this meant that  I can focus on modifying the `regex-syntax` crate to get what I wanted. Since I already know that I just want to replace each alphabet (literal) with a large alternation, I can just modify the parser to do that whenever it generates a new `Literal` component for the tree at the [constructor](https://github.com/rust-lang/regex/blob/ab88aa5c6824ebe7c4b4c72fe5191681783b3a68/regex-syntax/src/hir/mod.rs#L342). Since they all end up as some [ClassUnicode objects](https://github.com/rust-lang/regex/blob/ab88aa5c6824ebe7c4b4c72fe5191681783b3a68/regex-syntax/src/hir/mod.rs#L593) in the end after being flattened and optimized, we can just replace the Literal object with a set of ClassUnicodes that are already implemented.

This sounds a little complex, but it actually isn't that hard when you get into it! The comments written at length in the implementation of `regex-syntax` comes in really handy with understanding the code.

An implementation could look like this:

```rust
/*
    New struct for confusables, could have concurrent accesses.
    Mapping each possible alphabet (azAZ) with a set of confusables.
*/
pub struct HirConfusables {
    confusables:
        RwLock<HashMap<char, (HashSet<char>, Vec<ClassUnicodeRange>)>>,
}

impl HirConfusables {
    fn new() -> HirConfusables {
        HirConfusables { confusables: RwLock::new(HashMap::new()) }
    }

    /// Add confusable characters to the map.
    pub fn add_confusables(&self, c: char, confusables: Vec<char>) {
        let mut confusables_map = self.confusables.write().unwrap();
        let (confusables_set, ranges) =
            confusables_map.entry(c).or_insert_with(|| {
                (HashSet::from([c]), vec![ClassUnicodeRange::new(c, c)])
            });
        for confusable in confusables {
            if !confusables_set.contains(&confusable) {
                confusables_set.insert(confusable);
                ranges.push(
                    ClassUnicodeRange::new(confusable, confusable)
                );
            }
        }
    }

    /// Retrieve confusable characters related to an ascii character c
    pub fn get_confusables_data(&self, c: char) -> Vec<ClassUnicodeRange> {
        let confusables_data = self.confusables.read().unwrap();
        if let Some((_, ranges)) = confusables_data.get(&c) {
            return ranges.clone();
        } else {
            return Vec::new();
        }
    }
}

// The Map that gets accessed
pub static HIR_CONFUSABLES_MAP: LazyLock<HirConfusables> =
    LazyLock::new(|| -> HirConfusables {
        let confusables = HirConfusables::new();
        confusables.add_confusables(
            'a',
            vec![
                'ɑ', 'ａ', '𝐚', '𝑎', '𝒂',
                '𝒶', '𝓪', '𝔞', '𝕒', '𝖆',
                '𝖺', '𝗮', '𝘢', '𝙖', '𝚊',
            ],
        );
        confusables
    });

// ...
impl Hir {
    // ...
    #[inline]
    pub fn literal<B: Into<Box<[u8]>>>(lit: B) -> Hir {
        let bytes = lit.into();
        if bytes.is_empty() {
            return Hir::empty();
        }
        // If the literal is a single character, it is ascii: check for confusables
        if bytes.len() == 1 {
            let character = bytes[0] as char;
            let confusables_data =
                HIR_CONFUSABLES_MAP
                    .get_confusables_data(character);
            if confusables_data.len() > 0 {
                Hir::class(Class::Unicode(
                    ClassUnicode::new(confusables_data))
                )
            } else {
                let lit = Literal(bytes);
                let props = Properties::literal(&lit);
                Hir { kind: HirKind::Literal(lit), props }
            }
        } else {
            let lit = Literal(bytes);
            let props = Properties::literal(&lit);
            Hir { kind: HirKind::Literal(lit), props }
        }
    }
    // ...
}
```

All test cases continue to pass with `cargo test` for the whole `regex` crate, and outputs also showed
that the alternations were being generated correctly with additional tests & debug outputs.

With this, we have an implementation that generates the HIR as desired, and the top level [build_from_hir(&self, hir: &Hir)](https://docs.rs/regex-automata/latest/regex_automata/meta/struct.Builder.html#method.build_from_hir) function from `meta::Regex` can directly take the tree and build the automata, knowing that the `regex-automata` implementation will optimize it even further with a hybrid mix of Aho-Corasick and other strategies. By default, the `regex` crate already couples `regex-syntax` and `regex-automata` together for us, so no additional changes need to be made on that front.

## Conclusion
This was pretty fun! Being forced to dig through various regex libraries and arxiv papers, I learned a lot more about how regex engines parse and optimize regex expressions. Also glad to have gotten to write a bit of Rust, albiet it's being simple. Looking forward to more Rust & compilers in the future!
