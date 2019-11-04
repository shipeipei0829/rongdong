<template>
  <van-nav-bar
    :fixed="fixed"
    class="header"
    :title="title"
    left-text
    :right-text="righttext"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    :style="{'background':bgcolor,'color':fontcolor}"
  />
</template>

<script>
import { updateAppuser } from "../../api/mine";
export default {
  name: "Header",
  data() {
    return {
      // me: JSON.parse(window.localStorage.getItem("me"))[0]
      me: ""
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    lefttext: {
      type: String,
      default: ""
    },
    righttext: {
      type: String,
      default: ""
    },
    fixed: {
      type: Boolean,
      default: false
    },
    bgcolor: {
      type: String,
      default: "#118589"
    },
    fontcolor: {
      type: String,
      default: ""
    }
  },
  methods: {
    onClickLeft() {
      if (this.$router.history.current.fullPath == "/setting/personaldata") {
        this.$router.replace({ path: "/mine/index" });
      } else {
        this.$router.go(-1);
      }
    },
    onClickRight() {
      // if (this.$router.history.current.fullPath == "/setting/nicknamesetting") {
      //   //修改昵称
      //   var nickname = localStorage.getItem("nickname");
      //   if (!nickname) {
      //     this.$router.replace({ path: "/setting/personaldata" });
      //     return;
      //   } else {
      //     updateAppuser({ nickName: nickname }).then(res => {
      //       console.log(res);
      //     });
      //   }
      //   // this.$router.push({ path: "/setting/personaldata" });
      //   localStorage.removeItem("nickname");
      // }
      // if (this.$router.history.current.fullPath == "/setting/introsetting") {
      //   //修改简介
      //   var userDesc = localStorage.getItem("userDesc");
      //   if (!userDesc) {
      //     this.$router.replace({ path: "/setting/personaldata" });
      //     return;
      //   } else {
      //     updateAppuser({ userDesc: userDesc }).then(res => {
      //       console.log(res);
      //     });
      //   }

      //   // this.$router.push({ path: "/setting/personaldata" });
      //   localStorage.removeItem("userDesc");
      // }
      if (
        this.$router.history.current.fullPath == "/setting/introsetting" ||
        this.$router.history.current.fullPath == "/setting/nicknamesetting" ||
        this.$router.history.current.fullPath == "/setting/labelsetting"
      ) {
        this.$router.replace({ path: "/setting/personaldata" ,query:{ time: new Date().getTime() }});       
      }
    },
    setlocalStorage(me) {
      window.localStorage.setItem("me", JSON.stringify(me));
    }
  },
  mounted() {},
  created() {}
};
</script>
<style scoped>
.header {
  font-size: 0.25rem;
  z-index: 999;
}

#app .van-nav-bar__text {
  color: #fff;
}

#app .van-nav-bar .van-icon {
  color: #fff;
}

#app .van-nav-bar__title {
  color: #fff;
}

#app .van-hairline--bottom::after {
  border-bottom-width: 0px;
}
</style>