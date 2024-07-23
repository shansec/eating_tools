<template>
  <div>
    <header>
      <nav>
        <ul>
          <!-- <li><NuxtLink to="/index">首页</NuxtLink></li> -->
          <li><NuxtLink to="/about">关于</NuxtLink></li>
          <li><NuxtLink to="/dashboard">仪表盘</NuxtLink></li>
          <li><NuxtLink to="/posts/1">文章1</NuxtLink></li>
          <li><NuxtLink to="/posts/2">文章2</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<script setup lang="ts">
const title = ref('你好，Nuxt')
</script>
