<script>
    /**
     * @type {string}
     */
     export let projectId;
    /**
     * @type {string}
     */
     export let projectName;
    /**
     * @type {string[]}
     */
     export let projectBulletpoint;
    /**
     * @type {string}
     */
     export let projectBlurb;
    /**
     * @type {string}
     */
     export let projectLink;
    /**
      * @type {string}
      */
      export let tooltipText;
    /**
     * @type {string}
     */
     export let imageCredits;
     import { base } from '$app/paths';
</script>


<button 
  type="button" 
  disabled={projectBulletpoint.length === 0 && projectLink === ""} 
  class="flex flex-col grow w-full sm:mx-2 group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition  mt-4 md:mt-0" 
  data-hs-overlay="#{projectId}"
>
    <div class="rounded-t-xl w-full">
      <img class="top-0 start-0 group-hover:scale-105 transition-transform duration-500 ease-in-out aspect-video w-full object-cover max-h-[17rem] md:max-h-36" src="{base}/projects/{projectId}.png" alt="Descr">
    </div>
    <div class="p-4 md:p-5 flex flex-col grow w-full text-center">
      <h3 class="text-lg font-bold text-gray-800 ">
        {projectName}
      </h3>
      <div class="flex flex-col grow justify-center">
        <p class="mt-1 text-gray-500 ">
          {projectBlurb}
        </p>
      </div>
      {#if imageCredits !== ""}
        <p class="text-xs font-light text-gray-500 bottom-0 mt-2">
          {imageCredits}
        </p>
      {/if}
    </div>
</button>

{#if projectBulletpoint.length > 0}
<div id="{projectId}" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
    <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
      <div class="w-full max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto ">
        <div class="flex justify-between items-center py-3 px-4 border-b ">
          <h2 class="text-xl font-bold text-gray-800  inline-flex">
            {projectName}
            {#if projectLink !== ""}
            <div class="hs-tooltip inline-flex">
              <a href={projectLink} target="_blank" class="hs-tooltip-toggle flex flex-col justify-center align-middle ml-2 text-blue-500 ">
                <div class="flex flex-col justify-center align-middle w-full font-light hover:underline text-md">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4 hover:scale-125 transition-transform duration-200 ease-in-out">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>  
                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm " role="tooltip">
                      {tooltipText}
                    </span> 
                  </div>
              </a>
            </div>
            {/if}
          </h2>
          <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none " data-hs-overlay="#{projectId}">
            <span class="sr-only">Close</span>
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div class="p-4 overflow-y-auto">
          <div class="space-y-4">
            <div>
                <ul class="ml-4">
                  {#each projectBulletpoint as bulletPoint}
                    <li class="my-1">{bulletPoint}</li>
                  {/each}
                </ul>
            </div>
          </div>
        </div>
        <!-- <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
          <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-overlay="#{projectId}">
            Close
          </button>
        </div> -->
      </div>
    </div>
  </div>
{/if}