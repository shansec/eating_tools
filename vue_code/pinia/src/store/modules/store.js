import {defineStore} from 'pinia'
import {ref} from 'vue'

// Option store 定义方式
// export default useAlertStore = defineStore("store", {
//   state: () => ({ count: 0 }),

//   getters: {
//     double: (state) => state.count * 2,
//   },

//   actions: {
//     increate() {
//       this.count++;
//     },
//   },
// });

// Setup store 定义方式
/**
 * ref() 就是 state 属性
 * computed() 就是 getters
 * function() 就是 actions
 */
const useCountStore = defineStore('counter', () => {
  const count = ref(0)

  const increate = () => {
    count.value++
  }

  const minus = () => {
    count.value--
  }

  return {count, increate, minus}
})

export default useCountStore
