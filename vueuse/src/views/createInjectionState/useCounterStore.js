import { createInjectionState } from '@vueuse/core'
import { computed, ref } from 'vue'

const [useProvideCounterStore, useCounterStore] = createInjectionState(initialValue => {
  const count = ref(initialValue)

  const double = computed(() => count.value * 2)

  const increment = () => {
    count.value++
  }
  return { count, double, increment }
})

const useCounterStoreWithDefaultValue = () => {
  return (
    useCounterStore() ?? {
      count: ref(0),
      double: ref(0),
      increment: () => {}
    }
  )
}

const useCounterStoreOrThrow = () => {
  const counterStore = useCounterStore()
  if (!counterStore) {
    throw new Error('Please call `useProvideCounterStore` on the appropriate parent component')
  }
  return counterStore
}

export { useProvideCounterStore, useCounterStore, useCounterStoreWithDefaultValue, useCounterStoreOrThrow }
