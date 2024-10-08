<script lang="js" setup>
import { useProvideCounterStore } from './useCounterStore';

useProvideCounterStore(0)
</script>
<template>
  <div>
    <slot />
  </div>
</template>
