export default {
  methods: {
    confirm(value) {
      this.$emit("confirm", { close: this.modalClose, value });
    },
    close() {
      this.$emit("cancel", this.modalClose);
    },
    modalClose() {
      this.$parent.$parent.$emit("input", false);
    },
  },
};
