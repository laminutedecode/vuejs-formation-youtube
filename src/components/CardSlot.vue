<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <div class="content">
      <slot></slot> 
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: String
  });
</script>

<style scoped>
.card {
  border: 2px solid #333;
  padding: 16px;
  border-radius: 8px;
  max-width: 300px;
}
</style>
