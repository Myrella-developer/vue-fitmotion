<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
  header {
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

nav {
  display: flex;
  justify-content: space-between;
}

nav a {
  text-decoration: none;
  color: #333;
  padding: 10px;
  border-radius: 5px;
}

nav a:hover {
  background-color: #ddd;
}
</style>