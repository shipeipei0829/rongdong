<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// 引数据
import list from "./api/date/order.js";
import me from "./api/date/user.js";
import "@/../public/cdn/common.js";
import Login from "./login/index.vue";

export default {
  name: "app",
  data() {
    return {
      //transitionName: 'transitionRight'//退出
    };
  },
  mounted() {
    // this.$router.push({ path: "/home/index" });
    
    //存
    var orderlist = JSON.stringify(list);
    // window.localStorage.setItem("orderlist", orderlist);
    window.localStorage.setItem("me", JSON.stringify(me));
  },
  components: {
    Login
  }
};
</script>
<style lang="scss">
#app /deep/ .van-toast .van-icon{
  font-size: 3rem
}
#app /deep/ .van-toast{
  font-size: .4rem;

}
#app /deep/ .van-loading{
  margin: 0 auto;
}
#app /deep/ .van-icon-fail:before{
  font-size: 3rem
} 
.transitionBody {
  transition: all 0.2s ease;
  /*定义动画的时间和过渡效果*/
}

.transitionLeft-enter,
.transitionRight-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
  /*当左滑进入右滑进入过渡动画*/
}

.transitionLeft-leave-active,
.transitionRight-enter {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  padding: 0px;
  max-width: 1080px;
  margin: 0 auto;
  min-width: 320px;
  background: #f8f8f8;
  overflow: auto;
  text-align: center;

  /deep/ .van-search {
    font-size: 0.36rem;

    input,
    textarea {
      -webkit-user-select: auto !important;
      user-select: auto !important;
    }

    .van-cell {
      padding: 0px 10px 0px 0;
    }

    .van-field__control {
      height: 0.74rem;
      line-height: 0.74rem;
    }

    .van-field__left-icon {
      line-height: 0.74rem;
    }
  }
}

.bgwhite {
  background: #ffffff;
}

.footer .van-tabbar {
  z-index: 999 !important;
  height: 1.47rem;
}

.footer .van-tabbar-item {
  font-size: 0.36rem;
  color: #686868;
}

.footer .van-tabbar-item__icon {
  font-size: 0.6rem;
}

.footer .van-tabbar-item.van-tabbar-item--active {
  color: #1989fa;
}

/*详情   位置周边*/
.van-tabs__nav--card .van-tab {
  flex-basis: 20% !important;
}

.van-tabs__nav--card .van-tab.van-tab--active {
  background-color: #535353 !important;
  border-color: #535353 !important;
  color: #fff !important;
}

.van-tabs__nav--card .van-tab {
  border-color: #d2d2d2 !important;
  color: #2b2b2b !important;
  background: #f5f5f5 !important;
}

.van-tabs__nav--card {
  color: #2b2b2b !important;

  border-color: #f5f5f5 !important;
}

/* header */
.header {
  height: 1.3rem !important;
  line-height: 1.3rem !important;
}

.van-nav-bar__left .van-icon {
  font-size: 0.5rem !important;
}

.van-nav-bar__title {
  font-size: 0.5rem !important;
}

.van-nav-bar__text {
  font-size: 0.4rem !important;
}
</style>