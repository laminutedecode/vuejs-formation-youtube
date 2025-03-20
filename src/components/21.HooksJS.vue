<template>
  <div>
    <button @click="toggleVisible">Toggle Element</button>

    <transition
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <p v-if="isVisible">Je suis un élément avec des hooks JavaScript !</p>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(false);

const toggleVisible = () => {
  isVisible.value = !isVisible.value;
};

const beforeEnter = (el) => {
  console.log('Avant l\'entrée', el);
  el.style.opacity = 0;
};

const enter = (el, done) => {
  console.log('En cours d\'entrée', el);
  el.offsetHeight; 
  el.style.transition = 'opacity 1s ease';
  el.style.opacity = 1;
  done(); 
};

const afterEnter = (el) => {
  console.log('Après l\'entrée', el);
};

const leave = (el, done) => {
  console.log('En cours de sortie', el);
  el.style.transition = 'opacity 1s ease';
  el.style.opacity = 0;
  done();
};
</script>

<style scoped>
</style>
