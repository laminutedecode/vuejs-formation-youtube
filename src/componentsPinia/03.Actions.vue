<template>
  <div>
    <h2>Valeur du compteur : {{ counterStore.count }}</h2>
    <h2>Valeur doublée : {{ counterStore.doubleCount }}</h2>

    <button @click="counterStore.increment">➕ Incrémenter</button>
    <button @click="counterStore.decrement">➖ Décrémenter</button>
    <button @click="counterStore.reset">🔄 Réinitialiser</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/useCounterStore'

const counterStore = useCounterStore()
</script>

<style scoped>
button {
  margin: 5px;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
}
</style>
