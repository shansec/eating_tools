<script>
import { h } from "vue";

import componentIf from "./componentIf.vue";
import componentFor from "./componentFor.vue";
import componentOn from "./componentOn.vue";
import componentModifier from "./componentModifier.vue";
import componentSlot from "./componentSlot.vue";

export default {
  // setup() {
  //   return () => h(componentSlot);
  // },
  // 插槽使用
  setup() {
    return () =>
      h(componentSlot, null, {
        foo: () => h("div", "foo"),
        bar: () => h("div", "bar"),
      });
  },
};
</script>
