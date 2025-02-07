<script setup>
import { RouterLink } from "vue-router";
</script>

<template> 
  <div class="container">
    <nav>
      <RouterLink to="/jde">JSON Diff Editor</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.container {
  margin-top: 3rem;
  text-align: center;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

</style>

