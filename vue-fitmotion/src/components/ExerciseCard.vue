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
        <RouterLink :to="'exercise/' + exercise.id">Más...</RouterLink>
        <p class="exercise-duration">Time: {{ exercise.duration }} minutes</p>
        <p class="exercise-duration">Intensity: {{ exercise.intensity }}</p>
        <p class="exercise-category">Category: {{ exercise.category }}</p>
        <button @click.stop="editExercise" class="button-edit">Edit</button>
        <button @click.stop="deleteExercise" class="button-delete">Delete</button>
    </div>
</template>

<style scoped>
.exercise-card {
  box-sizing: border-box;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  width: 220px;
  text-align: center;
  background: linear-gradient(145deg, #6e7dff, #4c51a5); /* Gradiente futurista */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera */
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.exercise-card:hover {
  transform: translateY(-8px); /* Mayor elevación al pasar el mouse */
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
  border-color: #4c51a5; /* Color de borde al pasar el mouse */
  cursor: pointer;
}

.exercise-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 10px; /* Bordes más suaves */
  margin-bottom: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Sombra ligera alrededor de la imagen */
}

.exercise-info {
  text-align: left;
  padding: 10px;
}

.exercise-title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
  color: #fff; /* Color de texto brillante para contraste */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); /* Sombra sutil para darle un efecto futurista */
}

.exercise-description,
.exercise-duration,
.exercise-category {
  margin-bottom: 8px;
  font-size: 14px;
  color: #e1e1e1; /* Texto más claro para una apariencia futurista */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}

.button-edit,
.button-delete {
  border: none;
  border-radius: 8px;
  padding: 8px 18px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button-edit {
  margin: 0 5px;
  background-color: #3182ce;
  color: #fff;
}

.button-edit:hover {
  background-color: #2b6cb0;
  transform: scale(1.05); /* Efecto de ampliación */
}

.button-delete {
  margin: 0 5px;
  background-color: #e53e3e;
  color: #fff;
}

.button-delete:hover {
  background-color: #c53030;
  transform: scale(1.05); /* Efecto de ampliación */
}

.completed-exercise {
  background-color: #9ae3a2; /* Verde claro */
  border: 1px solid #68d391; /* Borde verde para marcar como completado */
}
</style>

