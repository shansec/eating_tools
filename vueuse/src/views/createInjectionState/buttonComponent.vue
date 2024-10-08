<script lang="js" setup>
import { useCounterStore } from './useCounterStore';

const { increment } = useCounterStore()
</script>
<template>
  <button @click="increment">+</button>
</template>
