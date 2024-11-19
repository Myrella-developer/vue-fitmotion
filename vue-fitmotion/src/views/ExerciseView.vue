<template>
    <ExtendedCard :exerciseId='$route.params.id' />
</template>


<script setup>
    import ExtendedCard  from '../components/ExtendedCard.vue'
</script>