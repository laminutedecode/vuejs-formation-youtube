<template>
  <div>
    <h2>Données chargées !</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref(null);

const asyncSetup = new Promise((resolve) => {
  setTimeout(() => {
    message.value = "Voici des données chargées après 2 secondes.";
    resolve();
  }, 2000);
});

await asyncSetup;
</script>
