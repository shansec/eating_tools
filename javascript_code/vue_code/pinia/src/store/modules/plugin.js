import {defineStore} from 'pinia'

const usePluginStore = defineStore('plugin', {
  state: () => ({
    count: 0
  }),
  getters: {},
  actions: {}
})

export default usePluginStore
