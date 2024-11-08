<script setup>
import { ref, computed } from 'vue';
import Filter from './components/Filter.vue';
import ExerciseCard from './components/ExerciseCard.vue';

const exercises = ref([
  {
    id: 1,
    title: "Push Ups",
    description: "A classic bodyweight exercise that targets the chest, shoulders, and triceps.",
    category: "Strength",
    intensity: "medium",
    duration: 30,
    image: "https://example.com/push-ups.jpg"
  },
  {
    id: 2,
    title: "Squats",
    description: "A compound exercise that targets the quadriceps, glutes, and hamstrings.",
    category: "Strength",
    intensity: "medium",
    duration: 30,
    image: "https://example.com/squats.jpg"
  },
  {
    id: 3,
    title: "Plank",
    description: "A core-strengthening exercise that targets the abdominal muscles.",
    category: "Core",
    intensity: "medium",
    duration: 30,
    image: "https://example.com/plank.jpg"
  },
  {
    id: 4,
    title: "Lunges",
    description: "A lower body exercise that targets the quadriceps, hamstrings, and glutes.",
    category: "Strength",
    intensity: "medium",
    duration: 30,
    image: "https://example.com/lunges.jpg"
  }

])
const filter = ref('');

function onFilterChange(newFilter) {
  filter.value = newFilter;
}

function onAddExercise() {
  console.log('Add exercise');
  exercises.value.push({
    id: exercises.value.length + 1,
    title: title,
    description: description,
    category: category,
    intensity: intensity,
    duration: duration,
    image: image
  });
}

function onEditExercise() {
  console.log('Edit exercise');
  exercises.value = exercises.value.map(exercise => {
    if (exercise.id === id) {
      return {
        ...exercise,
        title: title,
        description: description,
        category: category,
        intensity: intensity,
        duration: duration,
        image: image
      }
    }
    return exercise;
  });
}

function onDeleteExercise() {
  console.log('Delete exercise', id);
  exercises.value = exercises.value.filter(exercise => exercise.id !== id); 
  
}

const filteredExercises = computed(() => {
  if (!filter.value) {
    return exercises.value;
  }
  return exercises.value.filter(exercise => exercise.intensity === filter.value);
});
</script>
<template>
  <Filter @filter-changed="onFilterChange" @add-exercise="onAddExercise"/>
  <div class="exercise-list">
    <ExerciseCard 
      v-for="exercise in filteredExercises" 
      :key="exercise.id" :exercise="exercise" 
      @edit-exercise="onEditExercise" 
      @delete-exercise="onDeleteExercise" />
  </div>
</template>
<style scoped>
  .exercise-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
