<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
// import PropsEmits from '../fatherAndChildCom/components/PropsEmits.vue'
// import ModelEmits from './components/ModelEmits.vue'
import RefEmits from './components/RefEmits.vue'

interface Member {
  id: number
  name: string
}

export default defineComponent({
  name: 'FatherAndChildCom',
  components: {
    RefEmits,
  },

  setup() {
    const userInfo: Member = {
      id: 1,
      name: 'Petter',
    }
    const refEmits = ref<InstanceType<typeof RefEmits>>()
    onMounted(() => {
      refEmits.value!.name = 'vue3 new'
      console.log(refEmits.value!.name)
    })
    return {
      userInfo,
      refEmits,
    }
  },
})
</script>
<template>
  <!-- <props-emits
    title="用户信息"
    test="test"
    :index="1"
    :uid="userInfo.id"
    :user-name="userInfo.name"
  ></props-emits> -->
  <!-- <p>名称：{{ userInfo.name }}</p>
  <p></p>
  <model-emits
    title="用户信息"
    v-model:index="userInfo.id"
    v-model:uid="userInfo.id"
    v-model:user-name="userInfo.name"
  ></model-emits> -->
  <ref-emits ref="refEmits"></ref-emits>
</template>
