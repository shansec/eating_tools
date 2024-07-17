<script setup>
import {reactive, ref} from 'vue';

// const isActive = ref(true)
const classObject = reactive({
  isActive: true,
  'text-align': true,
})
const color = ref("red")
const styleObject = reactive({
  color: 'blue',
  fontSize: '18px',
  border: '1px solid red'
})
</script>
<template>
<!--  <div :class="classObject">1111</div>-->
  <div :style="styleObject">内联样式</div>
</template>
<style scoped>
div {
  width: 100px;
  height: 100px;
  border: 1px solid #333;
  color: #fff;
}
.isActive {
  background-color: red;
}
.text-align {
  text-align: center;
}
</style>
