<script>
import { h, ref } from "vue";
const ok = ref(false);
export default {
  setup() {
    return () => h("div", [ok.value ? h("div", "yes") : h("div", "no")]);
  },
};
</script>
