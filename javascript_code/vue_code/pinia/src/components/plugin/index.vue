<script setup>
  import usePluginStore from '@/store/modules/plugin.js'

  const pluginStore = usePluginStore()
</script>

<template>
  <div>{{ pluginStore.secret }}</div>
</template>

<style scoped>

</style>
