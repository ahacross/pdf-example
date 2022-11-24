<template>
  <div>
    <h4>야호</h4>
    <div>오랑우탄 1<br />오랑우탄 2<br />오랑우탄 3<br />오랑우탄 4</div>
    <div>
      <button @click="modalConfirm('kakao123123')">야호</button>
      <button @click="modalClose">닫기</button>
    </div>
  </div>
</template>

<script>
import ModalMixin from "@/plugins/vfm/setting/modalMixin";

// 팝업페이지는 mixin 을 유지해야 한다.
// parameter를 추가할 땐 props에 추가해 주면 받을 수 있다.
// return 하는 값이 있을 땐 this.modalConfirm(value) 이런식으로 modalConfirm 함수에 값을 넣어준다.
// 닫을 땐 this.modalClose()를 이용한다.

export default {
  mixins: [ModalMixin],
  props: {
    kakao: {
      type: Number,
    },
  },
  mounted() {
    console.log("mounted", this.kakao);
  },
};
</script>
