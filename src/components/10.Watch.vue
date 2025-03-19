
<template>
  <div>
    <h2>Utilisation de watch</h2>
    
    <button @click="compteurA++">+</button>
    <button @click="compteurA--">-</button>
    <p>Compteur A : {{ compteurA }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      compteurA: 0
    };
  },
  watch: {
    compteurA(newVal) {
      console.log(`Nouvelle valeur : ${newVal}`);
      setTimeout(() => {
        console.log("Reset du compteur A !");
        this.compteurA = 0;
      }, 3000);
    }
  }
};
</script>


