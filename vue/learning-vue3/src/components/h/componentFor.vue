<script>
import { h, reactive, ref } from "vue";
const lists = ref([
  { id: 1, text: 1 },
  { id: 2, text: 2 },
]);
export default {
  setup() {
    return () =>
      h(
        "ul",
        lists.value.map(({ id, text }) => {
          return h("li", { key: id }, text);
        })
      );
  },
};
</script>
