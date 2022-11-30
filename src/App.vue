<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <button @click="onAlert">alert</button>
    <button @click="onConfirm">confirm</button>
    <button @click="onModal">modal</button>
    <modals-container />
  </div>
</template>

<script>
import { ModalsContainer } from "vue-final-modal";
import ModalExample from "@/plugins/vfm/ModalExample";

export default {
  name: "App",
  components: {
    ModalsContainer,
  },
  data() {
    return {
      isTransition: false,
    };
  },
  methods: {
    async onAlert() {
      const result = await this.$alert({
        title: "야호",
        message: "뭐라고?",
        cancelTxt: "끝2",
      });
      console.log("onAlert: ", result);
    },
    async onConfirm() {
      const result = await this.$confirm({
        title: "야호",
        message: "뭐라고?",
        confirmTxt: "컨펌",
        cancelTxt: "끝",
      });
      console.log("onConfirm: ", result);
    },

    async onModal() {
      const result = await this.$modal(ModalExample, {
        title: "오랑우탄 팝업2",
        kakao: "kakao987",
        buttons: ["저장"],
      });
      console.log("onModal: ", result, 123);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.vfm-enter-active,
.vfm-leave-active {
  transition: opacity 5s;
}
.vfm-enter,
.vfm-leave-to {
  transition: opacity 2s;
  opacity: 0;
}
</style>
