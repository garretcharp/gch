<script>
  import EmailIcon from "../Images/email.svg";
  import LinkedinIcon from "../Images/linkedin.svg";
  import GithubIcon from "../Images/github.svg";

  export let skills = [],
    skillHeading;
</script>

<div class="m-0 p-0 text-white text-center">
  <h1 class="font-bold text-4xl pt-24">{skillHeading}</h1>
  <div
    class="p-10 pt-0 flex flex-auto flex-col md:flex-row items-start mx-auto
    max-w-screen-lg">
    {#each skills as skill}
      <div
        class="flex flex-auto flex-col items-center p-10 w-9/12 mx-auto
        md:w-3/12">
        <img
          class="w-full"
          alt={skill.heading}
          src={`/skillImages/${skill.image}`} />
        <h2 class="font-bold text-3xl pb-1 ">{skill.heading}</h2>
        <hr class="w-full pb-2" />
        {#each skill.skillTypes as skillType}
          <h3 class="font-bold text-xl underline pb-2">{skillType.heading}:</h3>
          {#if skillType.skillsWithHeadings}
            {#each skillType.skillsWithHeadings as skillsWithHeadings}
              <h4 class="font-bold p-0 text-lg underline">
                {skillsWithHeadings.subHeading}
              </h4>
              <div
                class="flex flex-auto flex-row flex-wrap pb-3 justify-center">
                {#each skillsWithHeadings.skills as skillName}
                  <h4 class="text-md p-2">{skillName}</h4>
                {/each}
              </div>
            {/each}
          {/if}
          {#if skillType.skills}
            <div class="flex flex-auto flex-row flex-wrap pb-3 justify-center">
              {#each skillType.skills as skillName}
                <h4 class="text-md p-2">{skillName}</h4>
              {/each}
            </div>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</div>
