<script>
    export let company;
    export let timeFrame;
    export let location;
    export let technologies;
    export let bulletPoints;
    export let companyColor;
    let dropdownOpen = false;
    const handleDropdownClick = () => {
        dropdownOpen = !dropdownOpen;
    };
</script>

<button
    class={`btn col-span-7 text-left m-0 p-0 box ${dropdownOpen ? "" : "hover:bg-gray-100"}`}
    alt={`open job details for ${company}`}
    on:click={handleDropdownClick}
>
    <div class="flex flex-col sm:flex-row [&>*]:py-0 [&>*]:my-0">
        <b style="color: {companyColor}">{company}</b>
        <p class="ml-0 sm:ml-auto">{timeFrame}</p>
    </div>
    <div
        class={`flex flex-col sm:flex-row sm:text-sm sm:mt-[-0.3em] ${dropdownOpen ? "pb-4" : ""}`}
    >
        <p>{location}</p>
        <p class="ml-0 sm:ml-auto text-gray-400">
            {technologies.join(", ")}
        </p>
    </div>
    {#if dropdownOpen}
        <ul class={`list ${dropdownOpen ? "" : "hidden"}`}>
            {#each bulletPoints as bulletPoint}
                <li>
                    {bulletPoint}
                </li>
            {/each}
        </ul>
    {/if}
</button>
