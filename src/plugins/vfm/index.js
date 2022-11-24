import { getParams, getOpenParams } from "@/plugins/vfm/setting/modalOptions";

export default {
  install(Vue) {
    const pop = new Vue();

    Vue.prototype.$alert = (param) => {
      return new Promise((resolve) =>
        pop.$vfm.show(getParams(resolve, param, {}))
      );
    };

    Vue.prototype.$confirm = (param) => {
      return new Promise((resolve) =>
        pop.$vfm.show(getParams(resolve, { isConfirm: true, ...param }, {}))
      );
    };

    Vue.prototype.$modal = (component, param) => {
      return new Promise((resolve) =>
        pop.$vfm.show(getOpenParams(resolve, component, { ...param }, {}))
      );
    };
  },
};
