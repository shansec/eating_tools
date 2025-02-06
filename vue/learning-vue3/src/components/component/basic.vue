<script setup>

import {ref} from 'vue';
const postFontSize = ref(1)
</script>
<template>
  <p>这是一个子组件</p>
  <br>
  <div :style="{fontsize: postFontSize + 'em'}">
    <common title="我是子组件" @enlarge-text="console.log('字体大小增加')"></common>
  </div>

</template>
<style scoped></style>
