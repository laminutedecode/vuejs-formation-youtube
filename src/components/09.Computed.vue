<template>
  <div id="box">
    <button v-on:click="compteurA++">+</button>
    <button v-on:click="compteurA--">-</button>
    <p>Valeur du compteur A: {{ compteurA }}</p>
    
    <hr />
    
    <button v-on:click="compteurB++">+</button>
    <button v-on:click="compteurB--">-</button>
    <p>Valeur du compteur B: {{ compteurB }}</p>

    <hr>
    
    <p>Méthode : {{ statusMethod() }}</p>

    <p>Computed : {{ statusComputed }}</p>
  </div>
</template>

    <script>
    export default {
      data() {
        return {
          compteurA: 0,
          compteurB: 0,
        };
      },
      methods: {
        statusMethod() {
          console.log("Méthode exécutée !");
          return this.compteurA > 10 ? "Il est supérieur à 10" : "Il est inférieur ou égal à 10";
        }
      },
      computed: {
        statusComputed() {
          console.log("Computed exécuté !");
          return this.compteurA > 10 ? "Il est supérieur à 10" : "Il est inférieur ou égal à 10";
        }
      }
    };
    </script>


