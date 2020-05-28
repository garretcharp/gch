<script>
  import Header from "./Components/Header.svelte";
  import Hero from "./Components/Hero.svelte";
  import Skills from "./Components/Skills.svelte";
  import Projects from "./Components/Projects.svelte";

  export let name,
    role,
    topSkills,
    heroHeading,
    heroDescription,
    github,
    linkedin,
    email,
    skills,
    skillHeading,
    projects,
    projectsHeading;
</script>

<Header {...{ name, role, topSkills }} />

<Hero {...{ heroHeading, heroDescription, email, linkedin, github }} />

<Skills {...{ skills, skillHeading }} />

<Projects {...{ projects, projectsHeading }} />
