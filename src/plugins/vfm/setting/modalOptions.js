import CustomModal from "@/plugins/vfm/setting/CustomModal";
import CustomOpenModal from "@/plugins/vfm/setting/CustomOpenModal";

// alert / confirm 용 params
export const getParams = (resolve, param, bind) => {
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
export const getOpenParams = (resolve, component, param, bind) => {
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
        bind: {
          ...param,
        },
      },
    },
  };
};
