import Vue from "vue";
import App from "./App.vue";

import VfmPlugin from "vue-final-modal";
import vfm from "./plugins/vfm/";

Vue.config.productionTip = false;

Vue.use(VfmPlugin);
Vue.use(vfm);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
