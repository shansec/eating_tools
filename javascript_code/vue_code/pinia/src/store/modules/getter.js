import {defineStore} from 'pinia'

const useGetterStore = defineStore('getterId', {
  state: () => ({
    count: 2
  }),
  getters: {
    double: state => state.count * 2,
    /**
     * 返回 count 的值乘以 2 加 1
     *
     * @returns {number}
     */
    doublePlusOne() {
      return this.double + 1
    }
  }
})

export default useGetterStore
