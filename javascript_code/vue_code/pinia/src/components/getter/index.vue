<script setup>
import useGetterStore from '../../store/modules/getter'

const getterStore = useGetterStore()
</script>
<template>
  <div>Double count is {{ getterStore.doublePlusOne }}</div>
</template>
