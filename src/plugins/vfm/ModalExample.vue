<template>
  <div>
    <div>오랑우탄 1<br />오랑우탄 2<br />오랑우탄 3<br />오랑우탄 4</div>
  </div>
</template>

<script>
// 팝업페이지는 받아야 하는 것은 props에 정의하고
// 리턴해야 하는 data는 data에 returnValue에 값을 넣어야 한다.

export default {
  props: {
    kakao: {
      type: String,
    },
  },
  data() {
    return {
      returnValue: "naver123",
    };
  },
  mounted() {
    console.log("mounted", this.kakao);
  },
};
</script>
