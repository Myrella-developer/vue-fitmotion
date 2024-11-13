<script setup>
 import { ref, defineEmits, onMounted } from 'vue';   
  const selectedFilter = ref('all');
  const emit = defineEmits(['filter-changed', 'add-exercise']);

  function applyFilter () {
    emit('filter-changed', selectedFilter.value);
  };

  function addExercise() {
    emit('add-exercise');
  };
  
  onMounted(() => {
    applyFilter();
  });

</script>
<template>
    <div class="filter">
        <label for="filter">Filter Intensity:</label>
        <select v-model="selectedFilter" @change="applyFilter">
            <option value="all">All</option>
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