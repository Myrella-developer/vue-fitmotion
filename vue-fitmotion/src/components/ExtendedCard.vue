<script setup>
import { defineProps, computed } from 'vue';
import { useExercisesStore } from '../stores/exercises'

const exercisesStore = useExercisesStore()

const props = defineProps({
    exerciseId: String,
});

const exercise = computed(() => {
  console.log('Llega id a componente', props.exerciseId);
  return exercisesStore.exercises.find(exercise => exercise.id === props.exerciseId)
})

</script>           
<template>
    <div class="exercise-card">
        <h3 class="exercise-title">{{ exercise.title }}</h3>
        <img :src="exercise.image" alt="Exercise image">
        <p class="exercise-description">{{ exercise.description }}</p>
        <p class="exercise-duration">Time: {{ exercise.duration }} minutes</p>
        <p class="exercise-duration">Intensity: {{ exercise.intensity }}</p>
        <p class="exercise-category">Category: {{ exercise.category }}</p>        
    </div>
</template>

<style scoped>
img {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.exercise-card {
  background-color: #e0e0e0; /* Platinum-like color */
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 25px;
  margin: 15px auto;
  max-width: 500px;
  text-align: center;
  transition: all 0.3s ease;
}

.exercise-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.exercise-title {
  font-size: 1.4em;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.exercise-description {
  font-size: 1em;
  line-height: 1.6;
  margin-top: 15px;
  color: #555;
}

.exercise-duration,
.exercise-intensity,
.exercise-category {
  font-size: 0.95em;
  color: #777;
  margin: 5px 0;
}
</style>
