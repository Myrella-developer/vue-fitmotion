<script setup>
  import { ref, defineEmits } from 'vue';   
  const selectedFilter = ref('low');
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
        <label for="filter">Filtro Intesidad:</label>
        <select v-model="selectedFilter" @change="applyFilter">
            <option value="low">Baja</option>
            <option value="medium">Media</option>
            <option value="High">Alta</option>
        </select>
        <button @click="addExercise">Agregar</button>
    </div>
</template>
<style scoped>
    .filter {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;
    }
</style>