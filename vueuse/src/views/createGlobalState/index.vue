<script lang="js" setup>
import {createGlobalState, useStorage } from '@vueuse/core';

defineOptions({
  name: "createGlobalState",
})
const useState = createGlobalState(() =>
    useStorage('vue-use-local-storage', {
      name: 'Banana',
      color: 'Yellow',
      size: 'Medium',
    })
)
const state = useState()
</script>

<template>
  <div>
    <input v-model="state.name" type="text">
    <input v-model="state.color" type="text">
    <input v-model="state.size" type="text">
  </div>
</template>

<style scoped>

</style>
