<template>
  <div>
    <button @click="toggleVisible">Toggle Element</button>
    <transition name="fade">
      <p v-if="isVisible">Je suis un élément visible avec transition !</p>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(false);

const toggleVisible = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
