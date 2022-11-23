<template>
  <div>
    <h4>야호</h4>
    <div>오랑우탄 1<br />오랑우탄 2<br />오랑우탄 3<br />오랑우탄 4</div>
    <div>
      <button @click="confirm('kakao123123')">야호</button>
      <button @click="close">닫기</button>
    </div>
  </div>
</template>

<script>
import ModalMixin from "@/plugins/vfm/modalMixin";
export default {
  mixins: [ModalMixin],
};
</script>
