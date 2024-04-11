<script setup>
import {ref} from 'vue';

const show = ref(true)

const clickBtn = () => {
  console.log(import.meta.env.BASE_URL)
  show.value = !show.value
}
</script>
<template>
  <p>%VITE_USER_NAME%</p>
  <button @click="clickBtn">点击</button>
  <Transition name="slide-fade">
    <p v-if="show">Hello</p>
  </Transition>
</template>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
