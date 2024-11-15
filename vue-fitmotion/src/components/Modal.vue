<!-- Modal.vue -->
<script setup>
const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
}
</script>

<template>
    <div class="modal-backdrop" @click.self="closeModal">
      <div class="modal-content">
        <slot></slot>
        <button @click="closeModal" class="close-button">Close</button>
      </div>
    </div>
</template>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    max-width: 80%;
  }
  
  .close-button {
    margin-top: 10px;
    background: #f44336;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  