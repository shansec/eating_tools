<script setup>
import {ref} from 'vue'

const open = ref(false)
</script>

<template>
  <button @click="open = true">Open Modal</button>

  <!-- <Teleport> 接收一个 to prop 来指定传送的目标。
       to 的值可以是一个 CSS 选择器字符串，也可以是一个 DOM 元素对象。
       这段代码的作用就是告诉 Vue“把以下模板片段传送到 body 标签下”。
  -->
  <!-- 可以通过 disabled 属性来禁用 Teleport -->
  <teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="open = false">Close</button>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
