import CustomModal from "@/plugins/vfm/CustomModal";
import CustomOpenModal from "@/plugins/vfm/CustomOpenModal";

// alert / confirm 용 params
const getParams = (resolve, param, bind) => {
  let result = null;
  const name = `${param.isConfirm ? "confirm" : "alert"}-${Math.random()
    .toString(36)
    .slice(2, 7)}`;
  return {
    component: CustomModal,
    bind: {
      name,
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
        console.log("closed");
        resolve(result);
      },
    },
    params: { ...param },
    opened() {}, // $vfm.show 실행하면 opened에 resolve 되는 함수 있음. 그거 초기화 시키는 용도로 쓰임.
  };
};

// component open 용 params
const getOpenParams = (resolve, component, param, bind) => {
  let result = null;
  const name = `modal-${Math.random().toString(36).slice(2, 7)}`;
  return {
    component: CustomOpenModal,
    bind: {
      name,
      ...bind,
    },
    on: {
      // event by custom-modal
      cancel(close) {
        result = false;
        close();
      },
      closed() {
        resolve(result);
      },
    },
    params: { ...param },
    opened() {}, // $vfm.show 실행하면 opened에 resolve 되는 함수 있음. 그거 초기화 시키는 용도로 쓰임.
    slots: {
      default: {
        component,
        on: {
          confirm({ close, value }) {
            result = value;
            close();
          },
          cancel(close) {
            result = false;
            close();
          },
        },
      },
    },
  };
};

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
