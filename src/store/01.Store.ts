import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0 // Déclaration de l'état initial du compteur
  })
})
