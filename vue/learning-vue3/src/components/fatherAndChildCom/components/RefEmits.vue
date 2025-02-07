<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const name = ref('vue3')
    return {
      name,
    }
  },
})
</script>
<template>
  <p>名称： {{ name }}</p>
</template>
