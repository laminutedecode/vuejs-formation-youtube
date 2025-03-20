<template>
  <div>
    <h2>Compteur : {{ count }}</h2>
    <button @click="increment">Incrémenter</button>

    <h3>{{ state.message }}</h3>
    <button @click="updateMessage">Changer le message</button>

    <h4>Compteur doublé : {{ doubledCount }}</h4>

    <h4>Valeur surveillée (count) : {{ count }}</h4>

    <h5>Les messages du cycle de vie sont dans la console</h5>

    <p>{{ injectedMessage }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted, provide, inject } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;  
};

const state = reactive({
  message: 'Hello Vue 3!'  
});

const updateMessage = () => {
  state.message = 'Le message a été changé!';
};

const doubledCount = computed(() => count.value * 2);

watch(count, (newVal, oldVal) => {
  console.log(`Le compteur est passé de ${oldVal} à ${newVal}`);
});

onMounted(() => {
  console.log('Le composant a été monté');
});

onUnmounted(() => {
  console.log('Le composant a été démonté');
});

provide('message', 'Hello depuis le parent');

const injectedMessage = inject('message', 'Message par défaut');
</script>