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
        <p class="exercise-title">{{ exercise.title }}</p>
        <p class="exercise-description">{{ exercise.description }}</p>
        <p class="exercise-duration">Tiem: {{ exercise.duration }} minutes</p>
        <p class="exercise-duration">Intensity: {{ exercise.intensity }}</p>
        <p class="exercise-category">Category: {{ exercise.category }}</p>
        <button @click.stop="editExercise" class="button-edit">Edit</button>
        <button @click.stop="deleteExercise" class="button-delete">Delete</button>
    </div>
</template>
<style>

.exercise-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  max-width: 200px;
  text-align: center;
}

.exercise-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.exercise-info {
  text-align: left;
  padding: 10px;
}

.exercise-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.exercise-description,
.exercise-duration,
.exercise-category {
  margin-bottom: 5px;
}

.button-container {
  display: flex;
  justify-content: center;
}

.button-edit,
.button-delete {
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
}

.button-edit {
    margin: 5px;
    background-color: #007bff;
    color: #fff;
}

.button-delete {
    margin: 5px;
    background-color: #dc3545;
    color: #fff;
}

.completed-exercise {
  background-color: lightgreen;
}
</style>
