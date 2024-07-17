import {defineStore} from 'pinia'

const useActionStore = defineStore('action', {
  state: () => ({
    count: 0
  }),
  getters: {},
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
    // action 中可以直接调用其它 store 中的 action 方法

  }
})

export default useActionStore
