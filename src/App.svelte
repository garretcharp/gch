<script>
  import Header from "./Components/Header.svelte";
  import Hero from "./Components/Hero.svelte";

  export let name,
    role,
    topSkills,
    heroHeading,
    heroDescription,
    github,
    linkedin,
    email;
</script>

<Header {...{ name, role, topSkills }} />

<Hero {...{ heroHeading, heroDescription, email, linkedin, github }} />
