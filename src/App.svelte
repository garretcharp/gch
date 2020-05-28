<script>
  import Header from "./Components/Header.svelte";
  import Hero from "./Components/Hero.svelte";
  import Skills from "./Components/Skills.svelte";

  export let name,
    role,
    topSkills,
    heroHeading,
    heroDescription,
    github,
    linkedin,
    email,
    skills,
    skillHeading;
</script>

<Header {...{ name, role, topSkills }} />

<Hero {...{ heroHeading, heroDescription, email, linkedin, github }} />

<Skills {...{ skills, skillHeading }} />
