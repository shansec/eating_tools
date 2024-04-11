import {ref} from 'vue'
import {defineStore} from 'pinia'

const useStateStore = defineStore('stateId', () => {
  const count = ref(0)
  const name = ref('禁止')
  const isAdmin = ref(false)

  const up = () => {
    if (isAdmin.value) return false
    count.value++
  }

  const down = () => {
    if (isAdmin.value) return false
    count.value--
  }

  const forbid = () => {
    if (isAdmin.value) {
      isAdmin.value = false
      name.value = '重置'
    } else {
      isAdmin.value = true
      name.value = '解除'
    }
  }

  const $reset = () => {
    count.value = 0
    name.value = '禁止'
    isAdmin.value = false
  }

  return {count, name, isAdmin, up, down, forbid, $reset}
})

export default useStateStore
