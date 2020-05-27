<script>
  import Header from "./Components/Header.svelte";

  export let name, role, topSkills;
</script>

<Header {...{ name, role, topSkills }} />
