<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import Filter from './Filter.vue';
import ExerciseCard from './ExerciseCard.vue';
import Modal from './Modal.vue';
import ExerciseForm from './ExerciseForm.vue';
import { useExercisesStore } from '../stores/exercises'
import { v4 as uuidv4 } from 'uuid';


const exercisesStore = useExercisesStore()

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


onMounted(() => {
  exercisesStore.fetchExercises()
  console.log('Luego de onMount: ', exercisesStore.exercises);
});

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


function onFilterChange(newFilter) {
  filter.value = newFilter;
}

function onAddExercise(exerciseData) {

  const newExercise = {
    id: uuidv4(),
    completed: false,
    ...exerciseData
  };

  //Guarda en FireBase
  exercisesStore.postExercise(newExercise)

  title.value = '';
  description.value = '';
  category.value = '';
  intensity.value = '';
  duration.value = 0;
  image.value = '';
}

function onEditExercise(updateExercise) {
  exercisesStore.editExercise(updateExercise)
}

function onDeleteExercise(exerciseId) {
  console.log('Delete exercise', exerciseId);
  exercisesStore.deleteExercise(exerciseId)
}

function onToggleStatus(exercise) {
  onEditExercise({ ...exercise, completed: !exercise.completed })
}


const filteredExercises = computed(() => {
  if (filter.value === 'all') {
    return exercisesStore.exercises;
  }
  return exercisesStore.exercises.filter(exercise => exercise.intensity === filter.value);
});
</script>

<template>
  <div class="app-container">

    <main class="main-content">

      <Filter @filter-changed="onFilterChange" @add-exercise="openAddModal" />

      <div class="exercise-list">
        <p v-if="exercisesStore.loading">Cargando Ejercicios...</p>
        <p v-else-if="exercisesStore.exercises.length === 0">No hay Ejercicios en BBDD</p>
        <p v-else-if="filteredExercises.length === 0">No hay ejercicios con este filtro</p>

        <ExerciseCard v-else v-for="exercise in filteredExercises" :key="exercise.id" :exercise="exercise"
          @edit-exercise="openEditModal" @delete-exercise="onDeleteExercise" @toggle-status="onToggleStatus" />
      </div>

      <Modal v-if="showModal" @close="showModal = false">
        <ExerciseForm :exercise="selectedExercise" :isEdit="isEditMode" @save="saveExercise"
          @cancel="showModal = false" />
      </Modal>

    </main>
    <footer class="footer">
      <p>&copy; 2024. All rights reserved.</p>
    </footer>
  </div>
</template>


<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f4f8;
  /* Fondo de la página */
  color: #333;
  overflow: hidden;
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
  margin: 20px;
  border: 1px solid #838181;
  border-radius: 8px;
  padding: 10px;
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
