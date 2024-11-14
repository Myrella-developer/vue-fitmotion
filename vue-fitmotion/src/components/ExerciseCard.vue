<script setup>
import { defineProps, defineEmits } from 'vue';


const props = defineProps({
    exercise: Object,
});
const emit = defineEmits(['edit-exercise', 'delete-exercise', 'toggle-status']);

function editExercise() {
    emit('edit-exercise', props.exercise);
}

function deleteExercise() {
    emit('delete-exercise', props.exercise.id);
}

function toggleStatus() {
  emit('toggle-status', props.exercise); 
}

</script>           
<template>
    <div class="exercise-card" :class="{ 'completed-exercise': props.exercise.completed }" @click="toggleStatus">
        <img :src="exercise.image" alt="Exercise image">
        <p>{{ exercise.title }}</p>
        <p>{{ exercise.description }}</p>
        <p>{{ exercise.duration }} minutes</p>
        <p>{{ exercise.category }}</p>
        <button @click="editExercise">Edit</button>
        <button @click="deleteExercise">Delete</button>
    </div>
</template>
<style>
    .exercise-card {
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 8px;
        text-align: center;
        max-width: 200px;
    }
    .exercise-card img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .completed-exercise {
  background-color: lightgreen;
}
  
</style>
