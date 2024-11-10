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
  if (!filter.value) {
    return exercises.value;
  }
  return exercises.value.filter(exercise => exercise.intensity === filter.value);
});
</script>
<template>
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
</template>
<style scoped>
  .exercise-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
