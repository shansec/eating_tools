<script setup>
import {watch} from 'vue'
import {storeToRefs} from 'pinia'
import useStateStore from '../../store/modules/state'
import pinia from '@/store/index.js'

const stateStore = useStateStore()
const {count, name, isAdmin} = storeToRefs(stateStore)
const {up, down, forbid, $reset} = stateStore
stateStore.$subscribe((mutation, state) => {
  let localItemId = mutation.storeId
  // 每当状态发生变化时，将整个 state 持久化到本地存储。
  localStorage.setItem(localItemId, JSON.stringify(state))
}, {
  // 默认情况下，state subscription 会被绑定到添加它们的组件上，如果想在组件卸载之后依然保留，可以添加 detached
  detached: true
})
</script>
<template>
  <div>
    <input type="text" v-model="count" :disabled="isAdmin"/>
    <br/>
    <button @click="down">-</button>
    <button @click="up">+</button>
    <br/>
    <button @click="forbid">{{ name }}</button>
    <button @click='$reset'>重置</button>
  </div>
</template>
