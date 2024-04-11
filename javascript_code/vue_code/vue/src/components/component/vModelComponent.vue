<script setup>
import {ref} from 'vue';

const firstName = ref('')
const lastName = ref('')
</script>

<template>
  <div class="container">
    <p>父组件</p>
    <p>{{firstName}}:{{lastName}}</p>
    <common v-model:firstName="firstName" v-model:lastName="lastName" ></common>
  </div>
</template>
<style scoped></style>
