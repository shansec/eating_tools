<script lang="ts">
import { defineComponent, inject, type Ref } from 'vue'
import SecondLayerCom from './SecondLayerCom.vue'

export default defineComponent({
  components: {
    SecondLayerCom,
  },
  setup() {
    const oneLayerMsg = inject<Ref<string>>('msg')
    return {
      oneLayerMsg,
    }
  },
})
</script>
<template>
  <p>一层子组件： {{ oneLayerMsg }}</p>
  <second-layer-com></second-layer-com>
</template>
