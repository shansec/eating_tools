<script>
import { h } from "vue";

export default {
  props: ["foo", "bar"],
  setup(props, { slots }) {
    return () =>
      h(
        "div",
        slots.foo({
          text: props.foo,
        })
      );
  },
};
</script>
