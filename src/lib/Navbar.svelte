<script>
    import { page } from "$app/stores";

    let page_title = $page.url.pathname;

    switch ($page.url.pathname) {
        case "/exp":
            page_title = "Experience";
            break;
        case "/projects":
            page_title = "Projects";
            break;
        default:
            page_title = "";
    }
</script>

<svelte:head>
    <title>Brendon {page_title !== "" ? ` - ${page_title}` : ""}</title>
</svelte:head>

<nav class="pb-12 text-center [&>a]:mr-3">
    <a href="/">home</a>
    <a href="/exp">experience</a>
    <a href="/projects">projects</a>
</nav>
