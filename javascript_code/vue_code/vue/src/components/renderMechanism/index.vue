<script setup>
import { ref } from "vue";

const vnode = {
  type: "div",
  props: {
    id: "hello",
  },
  children: [],
};
// 一个运行时渲染器将会遍历整个虚拟 DOM 树，并据此构建真实的 DOM 树。这个过程被称为挂载 (mount)。
// 如果我们有两份虚拟 DOM 树，渲染器将会有比较地遍历它们，找出它们之间的区别，并应用这其中的变化到真实的 DOM 上。这个过程被称为更新 (patch)。

const dynamic = ref("天气");
</script>
<template>
  <div>
    <!-- foo 和 bar 这两个 div 是完全静态的，Vue编译的时候会自动提升这两部分到这个模板的渲染函数之外，并在每次渲染的时候都使用相同的 vnode -->
    <div>foo</div>
    <div>bar</div>
    <div>{{ dynamic }}</div>
  </div>
</template>
