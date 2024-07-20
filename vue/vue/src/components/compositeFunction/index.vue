<script setup>
import {useMouse} from '@/components/compositeFunction/mouse';

const  { x, y } = useMouse()
// 组合式函数约定用驼峰命名法命名，并且以 use 作为开头
</script>

<template>
Mouse position is at: {{ x }}, {{ y }}
</template>

<style lang="scss" scoped>

</style>
