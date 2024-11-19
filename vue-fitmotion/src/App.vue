<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
      <h1 class="header-title ">FitMotion</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
  
</template>

<style>
/* Header */
.header {
  background-image: url('./assets/header-background.jpg'); /* Ruta de la imagen de fondo */
  background-size: cover;
  background-position: center;
  padding: 50px 0; /* Espaciado alrededor del título */
  text-align: center;
  color: white;
}

.header-title {
  font-size: 2.5em;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Sombra para mayor legibilidad */
}

header {
  background-color: #e7e3e3;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

nav {
  display: flex;
  background-color: #f1f1f1;
  justify-content: end;
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