<template>
  <div>
    <h2>Tab 2</h2>
    <p>Contenu de l'onglet 2</p>
    <button @click="increment">Cliquez pour augmenter le compteur : {{ count }}</button>
  </div>
</template>

<script setup>
import { ref, onActivated, onDeactivated } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};

onActivated(() => {
  console.log('Tab2 activé');
});

onDeactivated(() => {
  console.log('Tab2 désactivé');
});
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>
