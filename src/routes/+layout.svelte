<script>
    import { afterNavigate } from "$app/navigation";
    import "../app.css";

    afterNavigate(() => {
        // @ts-ignore
        window.HSStaticMethods.autoInit();
    });
</script>
  
<slot />