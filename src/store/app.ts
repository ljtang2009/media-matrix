import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export default defineStore('app', () => {
  const count = ref(0);
  const name = ref('Eduardo2');
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  return {
    count,
    name,
    doubleCount,
    increment,
  };
});
