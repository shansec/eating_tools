import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import i18Plugin from './plugins/i18n'

// 全局注册组件
import Common from './components/component/commonComponent.vue'

const app = createApp(App).component("common", Common).use(i18Plugin, {
  greetings: {
    hello: 'Bonjour!'
  }
}).mount('#app')
