<script>
    import { page } from "$app/stores";

    let page_title = $page.url.pathname;

    switch ($page.url.pathname) {
        case "/exp":
            page_title = "experience";
            break;
        case "/projects":
            page_title = "projects";
            break;
        case "/list":
            page_title = "reading list";
            break;
        default:
            page_title = "";
    }
</script>

<svelte:head>
    <title>brendon {page_title !== "" ? ` - ${page_title}` : ""}</title>
</svelte:head>

<nav class="pb-12 text-center [&>a]:mr-3 last:mr-0">
    <a href="/">home</a>
    <a href="/exp">experience</a>
    <a href="/projects">projects</a>
    <a href="/list">reading list </a>
</nav>
