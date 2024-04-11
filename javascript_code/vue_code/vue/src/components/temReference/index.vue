<script setup>
import {ref} from 'vue';

const input = ref(null)

function getRef() {
  console.log(input)
}

</script>
<template>
  <input type="text" ref="input">
  <br>
  <button @click="getRef">点击获取 input 模版引用</button>
</template>
<style scoped>
input {
  margin-bottom: 10px;
}
</style>
