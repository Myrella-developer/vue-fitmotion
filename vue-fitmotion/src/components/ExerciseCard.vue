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

function toggleStatus(e) {
    e.stopPropagation()
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
        <button @click.stop="editExercise" class="button-edit">Edit</button>
        <button @click.stop="deleteExercise" class="button-delete">Delete</button>
    </div>
</template>
<style>

    .button-edit {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    }

    .button-delete {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    }

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
