<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import Filter from './components/Filter.vue';
import ExerciseCard from './components/ExerciseCard.vue';
import Modal from './components/Modal.vue';
import ExerciseForm from './components/ExerciseForm.vue';

const exercises = ref([''])
const filter = ref('');
const title = ref('');
const description = ref('');
const category = ref('');
const intensity = ref('');
const duration = ref(0);
const image = ref('');
const showModal = ref(false);
const selectedExercise = ref(null);
const isEditMode = ref(false);

function openAddModal() {
  selectedExercise.value = {
    title: '',
    description: '',
    category: '',
    intensity: 'medium',
    duration: 30,
    image: ''
  };
  isEditMode.value = false;
  showModal.value = true;
}

function openEditModal(exercise) {
  selectedExercise.value = { ...exercise };
  isEditMode.value = true;
  showModal.value = true;
}

function saveExercise(exerciseData) {
  if (isEditMode.value) {
    onEditExercise(exerciseData);
  } else {
    onAddExercise(exerciseData);
  }
  showModal.value = false;
}

onMounted(() => {
  const storedExercises = localStorage.getItem('exercises');
  if (storedExercises) {
    exercises.value = JSON.parse(storedExercises);
  }else {
    localStorage.setItem('exercises', JSON.stringify(exercises.value));
  }
});

watch(exercises, (newExercises) => {
  localStorage.setItem('exercises', JSON.stringify(newExercises));
}, { deep: true });

function onFilterChange(newFilter) {
  filter.value = newFilter;
}

function onAddExercise(exerciseData) {
  console.log('Add exercise');
  const newExercise ={
    id: exercises.value.length + 1,
    ...exerciseData
  };
  exercises.value.push(newExercise);

  title.value = '';
  description.value = '';
  category.value = '';
  intensity.value = '';
  duration.value = 0;
  image.value = '';
}

function onEditExercise(updateExercise) {
  console.log('Edit exercise');
  exercises.value = exercises.value.map(exercise => {
    if (exercise.id === updateExercise.id) {
      return {...exercise, ...updateExercise};
    }
    return exercise;
  });
}

function onDeleteExercise(exerciseId) {
  console.log('Delete exercise', exerciseId);
  exercises.value = exercises.value.filter(exercise => exercise.id !== exerciseId); 
  
}

const filteredExercises = computed(() => {
  if(filter.value === 'all') {
    return exercises.value;
  } 
  return exercises.value.filter(exercise => exercise.intensity === filter.value);
});
</script>
<template>
  <div class="app-container">
    <header class="header">
      <h1 class="header-title">FitMotion</h1>
    </header>
    <main class="main-content">
      <Filter @filter-changed="onFilterChange" @add-exercise="openAddModal"/>
      <div class="exercise-list">
        <ExerciseCard 
          v-for="exercise in filteredExercises" 
          :key="exercise.id" :exercise="exercise" 
          @edit-exercise="openEditModal" 
          @delete-exercise="onDeleteExercise" />
      </div>
      <Modal v-if="showModal" @close="showModal = false">
        <ExerciseForm 
          :exercise="selectedExercise" 
          :isEdit="isEditMode" 
          @save="saveExercise" 
          @cancel="showModal = false" 
        />
      </Modal>
  </main>
  <footer class="footer">
    <p>&copy; 2024 Myrella's App. All rights reserved.</p>
  </footer>
  </div>
</template>
<style scoped>

  .app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f4f8; /* Fondo de la página */
  color: #333;
  overflow: hidden;
}

/* Header */
.header {
  background-image: url('/src/assets/header-background.jpg'); /* Ruta de la imagen de fondo */
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

/* Contenido principal */
.main-content {
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  overflow-y: auto;
}
  .exercise-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  /* Footer */
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  font-size: 0.9em;
}
</style>
