<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import Filter from './Filter.vue';
import ExerciseCard from './ExerciseCard.vue';
import Modal from './Modal.vue';
import ExerciseForm from './ExerciseForm.vue';
import { useExercisesStore } from '../stores/exercises'
import { v4 as uuidv4 } from 'uuid';


const exercisesStore = useExercisesStore()   

const exercises = ref([])

const filter = ref('');
const title = ref('');
const description = ref('');
const category = ref('');
const intensity = ref('');
const duration = ref(0);
const image = ref('');
const completed = ref(false)
const showModal = ref(false);
const selectedExercise = ref(null);
const isEditMode = ref(false);
const usr = 'juan';
const apiUrl = 'https://json-app-1d643-default-rtdb.europe-west1.firebasedatabase.app/gym-app/' + usr;
//jsonId relacion de IDs de app con IDs de firebase
const jsonId = {};
let isLoading = ref(false);


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
// ******* Funciones API: Inicio *******
//Se obtiene actividades desde FireBase y se inicia jsonId
// function apiGet() {
//       isLoading.value = true
//       try {
//         fetch(apiUrl+'.json')
//           .then((response) => response.json())
//           .then((data) => {
//             for(let obj in data) {
//               //Inicializar jsonId
//               jsonId[data[obj].id] = obj
//               exercises.value.push(data[obj])
//               }
//             isLoading.value = false;                          
//             console.log('Ejs del API: ', exercises.value);            
//             console.log('IdAPI-IdLocal', jsonId);            
//           });
//       } catch (error) {
//         console.log(error);
//       }      
// }



// function apiPost(newCard) {
//   fetch(apiUrl + '.json', {
//     method: 'POST',
//     body: JSON.stringify(newCard)
//   })
//   .then((response) => response.json())
//           .then((data) => {
//           jsonId[newCard.id] = data.name
//   });
// }

function apiEdit(card) {  
  fetch(apiUrl + `/${jsonId[card.id]}.json`,
        {
            method: 'PATCH',
            body: JSON.stringify(card)
        }
    )
    .then(res => res.json())
    .then(res => console.log('Respuesta API',res))    
}

function apiDelete(cardId) {
  fetch(apiUrl + `/${jsonId[cardId]}.json`,
        {
            method: 'DELETE'
        }
    )
    .then(res => res.json())
    .then(res => console.log(res))  
}
// ******* Funciones API: Fin *******


function saveExercise(exerciseData) {
  if (isEditMode.value) {
    onEditExercise(exerciseData);    
  } else {
    onAddExercise(exerciseData);
  }
  showModal.value = false;
}

onMounted(() => {
  // apiGet()
  exercisesStore.fetchExercises()
  console.log('Luego de onMount: ', exercisesStore.exercises);
  
  // const storedExercises = localStorage.getItem('exercises');
  // console.log(storedExercises);
  
  // if (storedExercises) {
  //   exercises.value = JSON.parse(storedExercises);
  //   console.log(exercises.value[0]);
    
  // }else {
  //   localStorage.setItem('exercises', JSON.stringify(exercises.value));
  // }
});

// watch(exercises, (newExercise) => {
//   // localStorage.setItem('exercises', JSON.stringify(newExercises));
//   console.log('Nuevo ejercicio', newExercise);
  
// }, { deep: true });

function onFilterChange(newFilter) {
  filter.value = newFilter;
}

function onAddExercise(exerciseData) {
  console.log('Add exercise');
  const newExercise = {
    id: uuidv4(),
    completed: false,
    ...exerciseData
  };
  //Guarda en Variable local
  exercises.value.push(newExercise);  
  //Guarda en FireBase
  exercisesStore.postExercise(newExercise)  

  title.value = '';
  description.value = '';
  category.value = '';
  intensity.value = '';
  duration.value = 0;
  image.value = '';
}

function onEditExercise(updateExercise) {
  
  console.log('Edit exercise');
  apiEdit(updateExercise)
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
  // apiDelete(exerciseId)
}

function onToggleStatus(exercise) {
  onEditExercise({...exercise, completed: !exercise.completed})
}

const filteredExercises = computed(() => {
  if(filter.value === 'all') {
    return exercises.value;
  } 
  return exercises.value.filter(exercise => exercise.intensity === filter.value);
});
</script>

<template>
  <div class="app-container">
    
    <main class="main-content">
      
      <Filter @filter-changed="onFilterChange" @add-exercise="openAddModal"/>

      <div class="exercise-list">
        <p v-if="exercisesStore.loading">Cargando Ejercicios...</p>
        <p v-else-if="exercisesStore.exercises.length === 0">No hay Ejercicios</p>
        <ExerciseCard 
        v-else
        v-for="exercise in exercisesStore.exercises" 
        :key="exercise.id" :exercise="exercise" 
        @edit-exercise="openEditModal" 
        @delete-exercise="onDeleteExercise"
        @toggle-status="onToggleStatus"
          />
      </div>

      

      <Modal v-if="showModal" @close="showModal = false">
        <ExerciseForm 
          :exercise="selectedExercise" 
          :isEdit="isEditMode" 
          @save="saveExercise" 
          @cancel="showModal = false" 
        />
      </Modal>

  </main>
  <footer class="footer">
    <p>&copy; 2024. All rights reserved.</p>
  </footer>
  </div>
</template>


<style scoped>

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f4f8; /* Fondo de la página */
  color: #333;
  overflow: hidden;
}

/* Contenido principal */
.main-content {
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  overflow-y: auto;
}
.exercise-list {
    margin: 20px;
    border: 1px solid #838181;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}
  /* Footer */
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  font-size: 0.9em;
}
</style>
