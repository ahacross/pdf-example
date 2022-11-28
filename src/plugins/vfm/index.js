import { getParams, getOpenParams } from "@/plugins/vfm/setting/modalOptions";

export default {
  install(Vue) {
    const pop = new Vue();

    Vue.prototype.$alert = (param, bind) => {
      return new Promise((resolve) =>
        pop.$vfm.show(getParams(resolve, param, bind))
      );
    };

    Vue.prototype.$confirm = (param, bind) => {
      return new Promise((resolve) =>
        pop.$vfm.show(getParams(resolve, { isConfirm: true, ...param }, bind))
      );
    };

    Vue.prototype.$modal = (component, param, bind) => {
      return new Promise((resolve) =>
        pop.$vfm.show(getOpenParams(resolve, component, { ...param }, bind))
      );
    };
  },
};
