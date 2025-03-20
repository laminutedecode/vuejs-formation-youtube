<template>
  <input v-focus placeholder="Je suis automatiquement focus" />

  <p v-color="'red'">Ce texte est rouge</p>
  <p v-color="'blue'">Ce texte est bleu</p>

  <div v-resize="handleResize">
    Redimensionne la fenêtre !
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

const handleResize = (width) => {
  console.log(`Nouvelle largeur : ${width}px`);
};
</script>
