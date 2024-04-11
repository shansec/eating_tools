<script setup>
  import  { shallowRef } from 'vue';
  import ComA from '@/components/keepLiveInnerCom/ComA.vue';
  import ComB from '@/components/keepLiveInnerCom/ComB.vue';

  const current = shallowRef(ComA)
</script>

<template>
  <div class="demo">
    <label><input type="radio" v-model="current" :value="ComA"> A</label>
    <label><input type="radio" v-model="current" :value="ComB"> B</label>

    <keep-alive>
      <component :is="current"></component>
    </keep-alive>
  </div>
</template>
