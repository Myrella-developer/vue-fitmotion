<!-- ExerciseForm.vue -->
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    exercise: Object,
    isEdit: Boolean
  });
  const emit = defineEmits(['save', 'cancel']);
  
  const exerciseData = ref({ ...props.exercise });
  
  const categoryImagens = {
    cardio: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    strength: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    flexibility: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    core: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  }

  function updateImageForCategory() {
    exerciseData.value.image = categoryImagens[exerciseData.value.category] || '';
  }

  watch(() => exerciseData.value.category, updateImageForCategory, { immediate: true});

  watch(() => props.exercise, (newExercise) => {
    exerciseData.value = { ...newExercise };
  });
  
  function saveExercise() {
    emit('save', exerciseData.value);
  }
  
  function cancel() {
    emit('cancel');
  }

  </script>
 <template>
    <div>
      <h3>{{ isEdit ? "Edit Exercise" : "New Exercise" }}</h3>
      <form @submit.prevent="saveExercise">
        <label>Title:</label>
        <input v-model="exerciseData.title" required />
  
        <label>Description:</label>
        <textarea v-model="exerciseData.description" required></textarea>
  
        <label>Category:</label>
        <select v-model="exerciseData.category" required>
          <option value="cardio">Cardio</option>
          <option value="strength">Strength</option>
          <option value="flexibility">Flexibility</option>
          <option value="core">Core</option>
        </select>
        
        <div v-if="exerciseData.image">
          <img :src="exerciseData.image" alt="Category Image">
        </div>

        <label>Intensity:</label>
        <select v-model="exerciseData.intensity">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
  
        <label>Duration:</label>
        <input type="number" v-model="exerciseData.duration" required />
  
        <button type="submit">{{ isEdit ? "Update" : "Add" }} Exercise</button>
        <button type="button" @click="cancel">Cancel</button>
      </form>
    </div>
  </template> 