<script setup>
import { ref, watchEffect } from "vue";

let A0 = 1;
let A1 = 2;
let A2;
const update = () => {
  A2 = A0 + A1;
};
// 这个 update() 函数会产生一个副作用，或者就简称为作用 (effect)，因为它会更改程序里的状态。
// A0 和 A1 被视为这个作用的依赖 (dependency)，因为它们的值被用来执行这个作用。
// whenDepsChange 是魔法函数
const whenDepsChange = (update) => {
  let activeEffect;
  const effect = () => {
    activeEffect = effect;
    update();
    activeEffect = null;
  };
  effect();
};

// ******* 使用 Vue API 实现上述同样的功能
const A00 = ref(1);
const A11 = ref(2);
const A22 = ref();

watchEffect(() => {
  A22.value = A00.value + A11.value;
  console.log(A22.value);
});
A11.value = 5;
</script>
<template></template>
