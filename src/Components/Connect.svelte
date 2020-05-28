<script>
  import EmailIcon from "../Images/email.svg";
  import LinkedinIcon from "../Images/linkedin.svg";
  import GithubIcon from "../Images/github.svg";

  export let email, linkedin, github;
</script>

<div class="m-0 p-0 text-white">
  <div
    class="p-20 px-10 flex flex-auto flex-col items-center mx-auto
    max-w-screen-lg">
    <h1 class="font-bold text-5xl">Lets Connect!</h1>
    <div class="flex flex-auto flex-row">
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
