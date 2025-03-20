<template>
  <div class="container">
    <button @click="addItem">Ajouter un élément</button>
    <button @click="removeItem" :disabled="items.length === 0">Supprimer un élément</button>

    <transition-group name="list" tag="ul">
      <li v-for="item in items" :key="item" class="list-item">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([]);
let nextId = ref(1);

const addItem = () => {
  items.value.push(`Élément ${nextId.value++}`);
};

const removeItem = () => {
  items.value.pop();
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 20px;
}

button {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

.list-item {
  background: #42b983;
  color: white;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  transition: all 0.5s ease;
}


.list-enter-active, .list-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
