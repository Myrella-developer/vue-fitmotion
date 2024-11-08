<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['exercise']);
const emit = defineEmits(['edit-exercise', 'delete-exercise']);

function editExercise() {
    emit('edit-exercise', props.exercise);
}

function deleteExercise() {
    emit('delete-exercise', props.exercise.id);
}

</script>           
<template>
    <div class="exercise-card">
        <img :src="exercise.image" alt="Exercise image">
        <p>{{ exercise.title }}</p>
        <button @click="editExercise">Edit</button>
        <button @click="deleteExercise">Eliminar</button>
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
</style>
