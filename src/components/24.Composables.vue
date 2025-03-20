<template>
  <div>
    <h2>Compteur : {{ count }}</h2>
    <button @click="increment">➕ Ajouter</button>
    <button @click="decrement">➖ Retirer</button>
  </div>
</template>

<script setup>
import { useCounter } from '../composables/useCounter.ts';

// Utilisation du composable
const { count, increment, decrement } = useCounter();
</script>
