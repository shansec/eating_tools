<script setup>
import {reactive} from 'vue';

const styleObj = reactive({
  color: 'red',
  fontSize: '18px',
})
function callback (step) {
  console.log('触发父组件.....')
  console.log(step)
  styleObj.fontSize = (parseInt(styleObj.fontSize.substring(0, 2)) + step.step) + 'px'
}
</script>
<template>
  <div class="container">
    <p :style="styleObj">我的父组件</p>
    <common @submit="callback"></common>
  </div>
</template>
<style scoped></style>
