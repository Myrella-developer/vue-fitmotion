<script setup>
 import { ref, defineEmits } from 'vue';   
  const selectedFilter = ref('');
  const emit = defineEmits(['filter-changed', 'add-exercise']);

  function applyFilter () {
    emit('filter-changed', selectedFilter.value);
  };

  function addExercise() {
    emit('add-exercise');
  };

</script>
<template>
    <div class="filter">
        <label for="filter">Filter Intensity:</label>
        <select v-model="selectedFilter" @change="applyFilter">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <button @click="addExercise">New</button>
    </div>
</template>
<style scoped>
    .filter {
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>