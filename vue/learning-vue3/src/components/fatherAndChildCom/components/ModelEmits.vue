<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // inheritAttrs 设置为 false 可以屏蔽非 props 属性
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: 'title',
    },
    index: Number,
    uid: Number,
    userName: String,
  },
  emits: ['update:user-name'],
  setup(props, context) {
    // attrs 可以获取父组件传递给子组件的非 props 属性
    console.log(context.attrs)
    setTimeout(() => {
      context.emit('update:user-name', 'vue3')
      console.log('更新 userName')
    }, 2000)
  },
})
</script>
<template>
  <div>
    <p>标题：{{ title }}</p>
    <p>索引：{{ index }}</p>
    <p>用户id：{{ uid }}</p>
    <p>用户名：{{ userName }}</p>
  </div>
</template>
