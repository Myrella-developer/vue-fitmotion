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
    align-items: center;
    gap: 20px;
    margin: 20px 0;
    padding: 12px 20px;
    border-radius: 16px; /* Bordes más redondeados */
    background: linear-gradient(145deg, #d5d7ff, #a3a8f3); /* Gradiente suave */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.filter:hover {
    transform: scale(1.02); /* Ligero aumento al pasar el ratón */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Sombra más profunda */
}

.filter select {
    background: linear-gradient(145deg, #ffffff, #f2f2f2); /* Gradiente ligero */
    border: 1px solid #cbd5e0; /* Borde sutil */
    border-radius: 12px;
    padding: 10px 14px;
    font-size: 1em;
    font-weight: bold; /* Texto destacado */
    color: #4a5568; /* Gris oscuro */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra ligera */
    transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    cursor: pointer;
}

.filter select:hover,
.filter select:focus {
    border-color: #6e7dff; /* Azul acorde al diseño */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
    outline: none;
    transform: scale(1.05); /* Efecto de enfoque */
}

.filter option {
    font-size: 1em;
    font-weight: normal;
    padding: 8px;
}

.filter button {
    background: linear-gradient(145deg, #6e7dff, #4c51a5); /* Gradiente azul futurista */
    color: #fff; /* Texto blanco */
    border: none;
    padding: 10px 18px;
    border-radius: 12px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para profundidad */
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.filter button:hover {
    background: linear-gradient(145deg, #4c51a5, #6e7dff); /* Inversión del gradiente */
    transform: scale(1.1); /* Efecto de aumento */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Sombra más intensa */
}

</style>