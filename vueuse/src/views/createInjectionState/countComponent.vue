<script lang="js" setup>
import { useCounterStore } from './useCounterStore';

const { count, double } = useCounterStore()
</script>
<template>
  <ul>
    <li>count: {{ count }}</li>
    <li>double: {{ double }}</li>
  </ul>
</template>
