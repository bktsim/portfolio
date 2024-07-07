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
	 * @type {string}
	 */
     export let projectDescription;
    /**
	 * @type {string}
	 */
     export let projectBlurb;
</script>

<button type="button" class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70" data-hs-overlay="#{projectId}">
    <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
      <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Descr">
    </div>
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-gray-800 dark:text-white">
        {projectName}
      </h3>
      <p class="mt-1 text-gray-500 dark:text-neutral-400">
        {projectBlurb}
      </p>
    </div>
</button>

<div id="{projectId}" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
    <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
      <div class="w-full max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
          <h2 class="font-bold text-gray-800 dark:text-white">
            {projectName}
          </h2>
          <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" data-hs-overlay="#{projectId}">
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
              <p class="mt-1 text-gray-800 dark:text-neutral-400">
                {projectDescription}
              </p>
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
  
  
  