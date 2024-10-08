<script lang="js" setup>

import { formatDate, useCounter, useDebouncedRefHistory } from '@vueuse/core';
import { ref } from 'vue';
const format = (time) => {
  return formatDate(new Date(time), 'YYYY-MM-DD HH:mm:ss')
}
const delay = ref(1000)
const { count, inc, dec } = useCounter()
const { history, undo, redo, canUndo, canRedo } = useDebouncedRefHistory(
  count,
  { capacity: 100, debounce: delay.value }
)
</script>
<template>
  <div>count: {{ count }}</div>
  <button @click="inc()">Inc</button>
  <button @click="dec()">Dec</button>
  <span class="ml-2"></span>
  <button :disabled="!canUndo" @click="undo()">Undo</button>
  <button :disabled="!canRedo" @click="redo()">Redo</button>
  <br />
  <span>Delay (in ms):</span>
  <input v-model="delay" type="number" />
  <br />
  <br />
  <note>History (limited to 10 records for demo)</note>
  <div class="code-block mt-4">
    <div v-for="i in history" :key="i.timestamp">
      <span class="opacity-50 mr-2 font-mono">{{ format(i.timestamp) }}</span>
      <span class="font-mono">{ value: {{ i.snapshot }} }</span>
    </div>
  </div>
</template>
