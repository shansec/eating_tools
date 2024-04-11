<script setup>
 import {ref} from 'vue';

 const count =ref(0)

 function btnClick() {
   console.log('button 被点击了')
 }

 function aClick() {
   console.log('a 被点击了')
 }

 function inputClick(e) {
   console.log(e.target.value)
 }
</script>
<template>
  <button @click="btnClick"><a @click.stop="aClick">点击</a></button>
  <br>
  <input type="text" @keyup.left="inputClick">
</template>
<style scoped>
button {
  margin-bottom: 20px;
}
</style>
