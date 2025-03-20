<template>
  <div>
    <h2>Valeur du compteur : {{ counterStore.count }}</h2>
    <h2>Valeur doublée : {{ counterStore.doubleCount }}</h2>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/useCounterStore'

/**
 * On récupère le store Pinia.
 * En plus du state (count), on utilise un getter (doubleCount)
 * qui nous donne une version dérivée des données.
 */
const counterStore = useCounterStore()
</script>
