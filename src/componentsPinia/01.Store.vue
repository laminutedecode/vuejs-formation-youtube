<template>
  <div>
    <h2>Valeur du compteur : {{ counterStore.count }}</h2>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/useCounterStore'


const counterStore = useCounterStore()
</script>
