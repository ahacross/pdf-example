export default {
  methods: {
    modalConfirm(value) {
      this.$emit("confirm", { close: this.mixinClose, value });
    },
    modalClose() {
      this.$emit("cancel", this.mixinClose);
    },
    mixinClose() {
      this.$parent.$parent.$emit("input", false);
    },
  },
};
