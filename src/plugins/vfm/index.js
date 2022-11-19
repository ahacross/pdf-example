import CustomModal from "@/plugins/vfm/CustomModal";

const getParams = (resolve, param, bind) => {
  let result = null;
  return {
    component: CustomModal,
    bind: {
      ...bind,
    },
    on: {
      // event by custom-modal
      cancel(close) {
        result = false;
        close();
      },
      confirm(close) {
        result = true;
        close();
      },
      closed() {
        resolve(result);
      },
    },
    params: { ...param },
    opened() {}, // $vfm.show 실행하면 opened에 resolve 되는 함수 있음. 그거 초기화 시키는 용도로 쓰임.
  };
};

export default {
  install(Vue) {
    const pop = new Vue();

    Vue.prototype.$alert = (param) => {
      return new Promise((resolve) => {
        const params = getParams(resolve, param, {});
        pop.$vfm.show(params);
      });
    };

    Vue.prototype.$confirm = (param) => {
      return new Promise((resolve) => {
        const params = getParams(resolve, { isConfirm: true, ...param }, {});
        pop.$vfm.show(params);
      });
    };

    Vue.prototype.$modal = () => {};
  },
};
