<script>
import { h } from "vue";

export default {
  setup() {
    return () =>
      h(
        "button",
        {
          onClick(event) {
            console.log(event);
          },
        },
        "click me"
      );
  },
};
</script>
