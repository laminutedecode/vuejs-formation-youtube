<template>
  <div id="box">
    <h2>Compteur: {{ compteur }}</h2>>
    <button @click="plus">+</button>
    <button @click="moins">-</button>

    <p>{{ x }} / {{ y }}</p>

    <div class="box" @mousemove="position"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      compteur: 0, 
      x: 0, 
      y: 0,
    };
  },
  methods: {
    plus() {
      this.compteur++;
    },
    moins() {
      this.compteur--;
    },
    position(e) {
      console.log(e); 
      this.x = e.offsetX; 
      this.y = e.offsetY; 
    },
  },
};
</script>

