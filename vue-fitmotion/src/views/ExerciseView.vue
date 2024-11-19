<template>
    <ExtendedCard :exerciseId='$route.params.id' />
</template>


<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import ExtendedCard  from '../components/ExtendedCard.vue'
</script>