import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref("이승민");

  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name ,doubleCount, increment }
})
