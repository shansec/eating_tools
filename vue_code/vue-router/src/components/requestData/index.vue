<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const home = () => {
  router.push({
    path: '/requestDataHome'
  })
}
</script>
<template>
  <div>
    <ul>
      <li @click="home">首页</li>
    </ul>
  </div>
</template>
