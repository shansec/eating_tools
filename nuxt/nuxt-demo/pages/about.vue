<template>
  <section>
    <p>此页面将显示在 /about 路由。</p>
  </section>
</template>
<script>
import 'animate.css'
definePageMeta({
  layout: 'orange',
  pageTransition: {
    name: 'rotate',
    onBeforeEnter: el => {},
    onEnter: (el, done) => {},
    onAfterEnter: el => {}
  }
})
</script>
<style>
@import url('animate.css');
</style>
