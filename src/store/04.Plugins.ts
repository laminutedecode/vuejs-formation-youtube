// Les plugins Pinia permettent d'étendre les fonctionnalités du store en ajoutant des propriétés globales, des méthodes, ou en persistant les données. Ils sont utiles pour :

// ✅ Ajouter des fonctionnalités communes à tous les stores (ex : logs, timestamps).
// ✅ Sauvegarder automatiquement des données dans localStorage ou sessionStorage.
// ✅ Étendre les capacités du store sans modifier chaque store individuellement.


import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})
