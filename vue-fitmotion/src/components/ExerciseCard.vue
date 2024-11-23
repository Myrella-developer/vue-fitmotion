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

.button-edit,
.button-delete {
  border: none;
  border-radius: 20px; /* Bordes completamente redondeados */
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: #fff; /* Texto blanco para contraste */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Sombra sutil */
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2); /* Sombra para efecto de profundidad */
}

.button-edit {
  background: linear-gradient(135deg, #4c51a5, #6e7dff); /* Gradiente moderno */
}

.button-edit:hover {
  background: linear-gradient(135deg, #6e7dff, #4c51a5); /* Inversión del gradiente */
  transform: scale(1.1); /* Efecto de ampliación */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Sombra más fuerte */
}

.button-delete {
  background: linear-gradient(135deg, #e53e3e, #fc8181); /* Gradiente rojo */
}

.button-delete:hover {
  background: linear-gradient(135deg, #fc8181, #e53e3e); /* Inversión del gradiente */
  transform: scale(1.1); /* Efecto de ampliación */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Sombra más fuerte */
}

a.router-link {
  display: inline-block;
  margin-top: 10px;
  color: #4c51a5; /* Azul brillante */
  font-size: 14px;
  font-weight: bold;
  text-decoration: none; /* Quita el subrayado */
  padding: 6px 12px;
  border-radius: 20px;
  background: linear-gradient(145deg, #d5d7ff, #a3a8f3); /* Gradiente suave */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2); /* Sombra para efecto de profundidad */
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

a.router-link:hover {
  background: linear-gradient(145deg, #a3a8f3, #d5d7ff); /* Inversión del gradiente */
  transform: scale(1.1); /* Efecto de ampliación */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Sombra más fuerte */
}

.completed-exercise {
  background-color: #9ae3a2; /* Verde claro */
  border: 2px solid #38a169; /* Borde verde oscuro */
  opacity: 0.85; /* Un poco más translúcido */
  position: relative; /* Necesario para el ícono */
  box-shadow: 0 0 10px 2px #68d391; /* Efecto de brillo */
  transform: scale(1.02); /* Leve ampliación */
}

.completed-exercise::after {
  content: '✔'; /* Ícono de verificación */
  position: absolute;
  top: 10px;
  right: 10px;
  color: #38a169; /* Verde oscuro */
  font-size: 18px;
  font-weight: bold;
  background-color: #f0fff4; /* Fondo claro */
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Sombra para el ícono */
}
</style>

