<script setup>
// eventComponent
// defineProps({
//   title: {
//     type: String,
//     required: false,
//     default: '我是子组件'
//   }
// })
// const emit =  defineEmits({
//   submit: ({step}) => {
//     if (step > 2) {
//       return true
//     } else {
//       console.log("step 值不合法")
//       return false
//     }
//   }
// })
//
// function submitForm(step) {
//   emit('submit', {step})
// }

// vModelComponent
// defineProps({
//   firstName: String,
//   lastName: String
// })
// defineEmits(['update:firstName', 'update:lastName'])

// slotsComponent

</script>
<template>
<!-- eventComponent -->
<!--  <p>{{ title }}</p>-->
<!--  <button @click="submitForm(4)">点击</button>-->

<!-- vModelComponent -->
<!--  <span>姓</span>:-->
<!--  <input-->
<!--      :value="firstName"-->
<!--      @input="$emit('update:firstName', $event.target.value)"-->
<!--  />-->
<!--  <br>-->
<!--  <span>名</span>-->
<!--  <input-->
<!--      :value="lastName"-->
<!--      @input="$emit('update:lastName', $event.target.value)"-->
<!--  />-->

<!-- slotsComponent -->
  <div class="slotsComponent">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<style scoped>
.btn {
  color: red;
}
</style>
