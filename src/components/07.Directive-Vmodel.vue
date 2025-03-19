<template>
  <div id="box">
    <input type="text" id="txt" v-model="valeur">
    <p>{{ valeur }}</p>
  </div>
</template>


<script setup lang="ts">
  import { ref } from "vue";
  const valeur = ref("");
</script>

