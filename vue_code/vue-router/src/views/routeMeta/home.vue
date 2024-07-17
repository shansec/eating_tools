<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.query)
</script>
<template>
  <div>routeMetaHome</div>
</template>
