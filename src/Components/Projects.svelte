<script>
  import EmailIcon from "../Images/email.svg";
  import LinkedinIcon from "../Images/linkedin.svg";
  import GithubIcon from "../Images/github.svg";

  export let projects = [],
    projectsHeading;
</script>

<div class="m-0 p-0 text-white text-center">
  <h1 class="font-bold text-4xl pt-24">{projectsHeading}</h1>
  <div
    class="p-10 pt-0 flex flex-wrap flex-col md:flex-row items-start mx-auto
    max-w-screen-lg">
    {#each projects as project}
      <div
        class="flex flex-initial flex-col items-center p-5 w-9/12 mx-auto
        md:w-5/12">
        <img
          class="w-24 h-24"
          alt={project.heading}
          src={`/projectImages/${project.image}`} />
        <h2 class="font-bold text-3xl pb-1 ">{project.heading}</h2>
        <hr class="w-full pb-2" />
        <p class="text-md">{project.description}</p>
        <h3 class="font-bold text-2xl pt-3">{project.subHeading}</h3>
        <div class="flex flex-auto flex-row flex-wrap pb-3 justify-center">
          {#each project.tools as tool}
            <h4 class="text-md p-2">{tool}</h4>
          {/each}
        </div>
        <p>
          View Project:
          <a class="text-blue-300" href={project.link}>{project.link}</a>
        </p>
      </div>
    {/each}
  </div>
</div>
