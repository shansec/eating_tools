<script>
import { h } from "vue";

export default {
  setup() {
    return () =>
      h("input", {
        onClickCapture() {
          console.log("onClickCapture");
        },
        onKeyupOnce() {
          console.log("onKeyupOnce");
        },
        onMouseoverOnceCapture() {
          console.log("onMouseoverOnceCapture");
        },
      });
  },
};
</script>
