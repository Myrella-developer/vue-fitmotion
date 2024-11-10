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
    cardio: '/src/assets/cardio.jpg',
    strength: '/src/assets/strength.jpg',
    flexibility:'/src/assets/flexibility.jpg',
    core: '/src/assets/core.jpg'
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
  <div class="modal">
    <div class="modal-content">
      <h3>{{ isEdit ? "Edit Exercise" : "New Exercise" }}</h3>
      <form @submit.prevent="saveExercise">
        <label>Title:</label>
        <input v-model="exerciseData.title" class="input-field" required />
  
        <label>Description:</label>
        <textarea v-model="exerciseData.description" class="textarea-field" required></textarea>
  
        <label>Category:</label>
        <select v-model="exerciseData.category" class="select-field" required>
          <option value="cardio">Cardio</option>
          <option value="strength">Strength</option>
          <option value="flexibility">Flexibility</option>
          <option value="core">Core</option>
        </select>
        
        <div v-if="exerciseData.image" class="image-container">
          <img :src="exerciseData.image" alt="Category Image" class="category-image">
        </div>

        <label>Intensity:</label>
        <select v-model="exerciseData.intensity" class="select-field">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
  
        <label>Duration:</label>
        <select v-model="exerciseData.duration" class="select-field">
          <option value="30">30 minutes</option>
          <option value="45">45 minutes</option>
          <option value="60">60 minutes</option>
        </select>
        
        <div>
          <button type="submit" class="submit-button">{{ isEdit ? "Update" : "Add" }} Exercise</button>
          <button type="button" @click="cancel" class="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  </div>
  </template> 
<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background: #ffffff;
  padding: 40px;
  border-radius: 8px;
  width: 300px;
  max-width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h3 {
  margin-bottom: 20px;
  color: #333;
}

.input-field, .select-field, .textarea-field {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.textarea-field {
  resize: vertical;
}

.select-field{
  text-align: center;
}

.image-container {
  margin: 15px 0;
}

.category-image {
  max-width: 100%;
  max-height: 150px;
  border-radius: 4px;
  margin: 0 auto;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #45a049;
}

.cancel-button:hover {
  background-color: #e53935;
}
</style>