<template>
  <div>
    <h2>Liste des utilisateurs</h2>
    <div v-if="loading">Chargement...</div>  
    <div v-if="error" class="error">Erreur: {{ error }}</div> 
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';


const users = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchUsers = async () => {
  loading.value = true; 
  error.value = null;    

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    users.value = response.data;  
  } catch (err) {
    error.value = err.message;  
  } finally {
    loading.value = false; 
  }
};

t
onMounted(fetchUsers);
</script>

