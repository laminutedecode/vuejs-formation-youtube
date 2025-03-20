<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute(); 
const id = route.params.id; 
</script>

<template>
  <h1>Single Page {{ id }}</h1> 
</template>

<style>

</style>
