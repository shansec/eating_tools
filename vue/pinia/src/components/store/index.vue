<script setup>
import {storeToRefs} from 'pinia'
import useCountStore from '@/store/modules/store.js'

const useCounter = useCountStore()

const {count} = storeToRefs(useCounter)
const {increate, minus} = useCounter
</script>
<template>
  <button @click="minus">-</button>
  <div>
    {{ count }}
  </div>
  <button @click="increate">+</button>
</template>
