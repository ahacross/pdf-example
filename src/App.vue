<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <button @click="onAlert">alert</button>
    <button @click="onConfirm">confirm</button>

    <modals-container />
  </div>
</template>

<script>
import { ModalsContainer } from "vue-final-modal";

export default {
  name: "App",
  components: {
    ModalsContainer,
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
      console.log("우와~~", result);
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
</style>
