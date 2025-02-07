import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    message: 'hello pinia',
    randomMessages: <Array<string>>[],
  }),
})
