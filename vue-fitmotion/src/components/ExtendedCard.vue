<script setup>
import { defineProps, computed } from 'vue';
import { useExercisesStore } from '../stores/exercises'

const exercisesStore = useExercisesStore()

const props = defineProps({
    exerciseId: String,
});
// const emit = defineEmits(['edit-exercise', 'delete-exercise', 'toggle-status']);

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
  width: 200px;
}
.exercise-card {
  background-color: #fff;
  border-radius: 5px;
  background-color: rgb(161, 151, 139);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px auto; 
  max-width: 500px; 
  text-align: center; 
}

.exercise-title {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.exercise-description {
  font-size: 0.9em;
  line-height: 1.5;
  margin-top: 15px;
}

</style>
