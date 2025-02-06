<script setup>
import { inject } from 'vue';
const i18n = inject('i18')
console.log(i18n.greetings.hello)
</script>

<template>
  <h1>{{ $translate('greetings.hello') }}</h1>
</template>

<style scoped>

</style>
