<script setup>
import {reactive, ref, watch, watchEffect} from 'vue';

const question = ref('')
const pen = reactive({count: 0})

// watch 的第一个参数可以是不同形式的“数据源”：它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组
// watch(question, (newQuestion, oldQuestion) => {
//   console.log('newQuestion:', newQuestion)
//   console.log('oldValue:', oldQuestion)
//   question.value = newQuestion
// }, {immediate : true})

watch(() => pen.count, (newPenVal, oldPenValue) => {pen.count = newPenVal}, {immediate : true})

watchEffect((newQuestion, oldQuestion) => {
  question.value = 1234
})

setTimeout(() => {
  question.value = '现在你有值了'
  pen.count = 100
}, 5000)

</script>
<template>
  <input type="text" v-model="question">
  <br>
  <input type="text" v-model="pen.count">
</template>
<style scoped>
input {
  margin-bottom: 20px;
}
</style>
