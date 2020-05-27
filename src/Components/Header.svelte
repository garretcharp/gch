<script>
  export let name, role, topSkills;
</script>

<div class="bg-gray-900 m-0 p-0 text-white">
  <div
    class="p-5 px-10 flex flex-auto flex-col md:flex-row items-center mx-auto
    max-w-screen-lg">
    <img
      class="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full"
      src="/favicon.png"
      alt={name} />
    <div class="flex flex-auto flex-col items-center md:items-start">
      <h1 class="font-bold text-2xl ml-5">{name}</h1>
      <h3 class="text-2xl ml-5">{role}</h3>
    </div>
    <div class="hidden md:flex flex-auto flex-col items-end">
      <h1 class="font-bold text-lg">Top Skills</h1>
      <div class="flex flex-auto flex-row">
        {#each topSkills as skill, index}
          <p class="pl-2">{skill}</p>
          {#if index !== topSkills.length - 1}
            <p class="pl-2">•</p>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</div>
