import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', {
  state: () => ({ count: 0, name: '이승민' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})