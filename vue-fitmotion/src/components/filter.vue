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
    justify-content: center;
    gap: 15px;
    margin: 20px 0;
    padding: 10px;
    border-radius: 8px;
    color: #4a5568;
    background-color: #ded7ed; /* Fondo más claro para darle frescura */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); /* Sombra suave para destacar */
    transition: box-shadow 0.3s ease;
}

.filter:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Sombra más profunda al pasar el ratón */
}

.filter select {
    background-color: #fff;
    border: 1px solid #cbd5e0; /* Borde suave */
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 1em;
    color: #4a5568;
    transition: border-color 0.3s ease, transform 0.3s ease;
    cursor: pointer;
}

.filter select:focus {
    border-color: #3182ce; /* Borde azul al enfocarse */
    outline: none;
    transform: scale(1.05); /* Pequeño efecto de escala para enfoque */
}

.filter option {
    font-size: 1em;
    padding: 8px;
}

.filter button {
    background-color: #3182ce; /* Azul suave para el botón */
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.filter button:hover {
    background-color: #2b6cb0; /* Azul más oscuro al pasar el ratón */
    transform: scale(1.05); /* Efecto de escala al pasar el ratón */
}
</style>