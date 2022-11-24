<template>
  <vue-final-modal
    v-bind="$attrs"
    classes="modal-container"
    content-class="modal-content"
    v-on="$listeners"
  >
    <template v-slot="{ params }">
      <span v-if="params.title" class="modal__title">
        {{ params.title }}
      </span>
      <div class="modal__content">
        {{ params.message }}
      </div>
      <div class="modal__action">
        <button
          v-if="params.isConfirm"
          style="margin-right: 10px"
          @click="$emit('confirm', close)"
        >
          {{ params.confirmTxt || "confirm" }}
        </button>
        <button @click="$emit('cancel', close)">
          {{ params.cancelTxt || "cancel" }}
        </button>
      </div>
    </template>
  </vue-final-modal>
</template>

<script>
export default {
  name: "CustomModal",
  inheritAttrs: false,
  methods: {
    close() {
      this.$emit("input", false);
    },
  },
};
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  text-align: left;
}

.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
  margin: 1.25em 0;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}
.modal__action button {
  /* CSS */
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.modal__close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}

.modal__close img {
  width: 18px;
  height: 18px;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
