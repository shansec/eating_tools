<template>
  <div>
    <h1>Post {{ postId }}</h1>
    <p>{{ postContent }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const postId = route.params.id
const postContent = ref('Loading...')
</script>

<style scoped>
h1 {
  color: #2c3e50;
  font-size: 2em;
}

p {
  color: #34495e;
  font-size: 1.2em;
}
</style>
