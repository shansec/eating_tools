<script setup>
</script>
<template>
<common>
  <template v-slot:header>
    <span>我是头部</span>
    <p>你好，我是头部，请添加头部内容</p>
  </template>
  <template #footer>
    <span>我是尾部</span>
    <p>你好，我是尾部，请添加尾部内容</p>
  </template>
  <button>点 击 一 下</button>
</common>
</template>
<style scoped></style>
