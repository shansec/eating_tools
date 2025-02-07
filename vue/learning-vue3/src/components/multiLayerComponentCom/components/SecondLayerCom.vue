<script lang="ts">
import { defineComponent, inject, type Ref } from 'vue'

export default defineComponent({
  setup() {
    const SecondLayerMsg = inject<Ref<string>>('msg')
    const nullCom = inject<string>('msgValue', 'nullValue')
    return {
      SecondLayerMsg,
      nullCom,
    }
  },
})
</script>
<template>
  <p>二层子组件： {{ SecondLayerMsg }}</p>
  <p>默认值： {{ nullCom }}</p>
</template>
