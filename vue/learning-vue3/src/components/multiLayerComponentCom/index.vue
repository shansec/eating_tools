<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import oneLayerCom from '../multiLayerComponentCom/components/OneLayerCom.vue'

export default defineComponent({
  name: 'MultiLayerComponentCom',
  components: {
    oneLayerCom,
  },
  setup() {
    const msg = ref<string>('multi layer com')
    provide('msg', msg)

    return {
      msg,
    }
  },
})
</script>
<template>
  <one-layer-com></one-layer-com>
</template>
