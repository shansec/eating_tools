import {createPinia} from 'pinia'

// pinia 插件是一个函数
function SecretPiniaPlugin () {
  return { secret: 'may' }
}


const pinia = createPinia()
pinia.use(SecretPiniaPlugin)

export default pinia
