<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params);
// 默认情况下，所有的路由不区分大小写，并且能匹配带有或者不带有尾部斜线的路由
// 这种行为可以通过 strict 和 sensitive 选项来修改，它们既可以应用在整个全局路由上，又可以应用于当前路由上
</script>
<template>
  <div>home</div>
</template>
