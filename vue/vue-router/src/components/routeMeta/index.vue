<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const home = () => {
  router.push({
    path: '/routeMetaHome',
    query: {
      name: 'may',
      age: 23
    }
  })
}

const about = () => {
  router.push({
    name: 'routeMetaAbout',
    state: {
      value: 'shansec',
      age: 30
    }
  })
}
</script>
<template>
  <div>
    <ul>
      <li @click="home">首页</li>
      <li @click="about">关于</li>
    </ul>
  </div>
</template>
