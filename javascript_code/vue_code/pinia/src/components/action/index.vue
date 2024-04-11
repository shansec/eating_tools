<script setup>
  import useActionStore from '@/store/modules/action.js'

  const actionStore = useActionStore()
</script>

<template>
  <div>{{ actionStore.count }}</div>
  <br>
  <button @click='actionStore.randomizeCounter()'>random</button>
</template>
