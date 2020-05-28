<script>
  import EmailIcon from "../Images/email.svg";
  import LinkedinIcon from "../Images/linkedin.svg";
  import GithubIcon from "../Images/github.svg";

  export let heroHeading, heroDescription, email, linkedin, github;
</script>

<div class="m-0 p-0 text-white">
  <div
    class="p-5 px-10 flex flex-auto flex-col items-center mx-auto
    max-w-screen-lg md:flex-row">
    <div class="flex flex-auto flex-col items-center max-w-lg md:items-start">
      <h1 class="font-bold text-4xl ml-5 lg:text-6xl">{heroHeading}</h1>
      <h3 class="text-xl text-center ml-5 md:text-left md:text-2xl">
        {heroDescription}
      </h3>
    </div>
    <div class="flex flex-auto flex-col pt-5">
      <h1 class="self-center md:self-end font-bold text-3xl">Lets Connect!</h1>
      <div class="flex flex-auto flex-row md:justify-end">
        <a href={`mailto:${email}`} class="m-4 w-16">
          <EmailIcon />
        </a>
        <a href={linkedin} class="m-4 w-16">
          <LinkedinIcon />
        </a>
        <a href={github} class="ml-4 my-4 w-16">
          <GithubIcon />
        </a>
      </div>
    </div>
  </div>
</div>
