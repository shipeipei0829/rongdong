<template>
  <div class="setting" style="background:#fff;height:100vh;width:100%">
    <Headertop :title="title" />
    <ul>
      <li class="setting_item" @click="accountsetting">
        <div class="item_left">账户设置</div>
        <div class="item_right">
          <van-icon name="arrow" />
        </div>
      </li>
      <li class="setting_item" @click="clearsession">
        <div class="item_left">清除缓存</div>
        <div class="item_right">
          {{session}}K&nbsp;&nbsp;
          <van-icon name="arrow" />
        </div>
      </li>
      <li class="setting_item">
        <div class="item_left">使用须知</div>
        <div class="item_right">
          <van-icon name="arrow" />
        </div>
      </li>
      <li class="setting_item">
        <div class="item_left">给个好评</div>
        <div class="item_right">
          <van-icon name="arrow" />
        </div>
      </li>
      <li class="setting_item">
        <div class="item_left">意见反馈</div>
        <div class="item_right">
          <van-icon name="arrow" />
        </div>
      </li>
      <li class="setting_item">
        <div class="item_left">关于我们</div>
        <div class="item_right">
          <van-icon name="arrow" />
        </div>
      </li>
    </ul>
    <van-button @click="removeItem" plain round type="danger">退出登录</van-button>
  </div>
</template>

<script>
import { Toast } from "vant";

Vue.use(Toast);
import Headertop from "@/components/header/index";
import { Button } from "vant";
import { Icon } from "vant";
import { setTimeout } from "timers";
Vue.use(Icon);
Vue.use(Button);
export default {
  name: "Setting",
  data() {
    return {
      active: 0,
      activeKey: 0,
      activeId: 1,
      title: "设置",
      session: "123.2"
    };
  },
  props: {
    msg: {}
  },
  methods: {
    //账户设置
    accountsetting() {
      this.$router.push({ path: "/setting/accountsetting" });
    },
    removeItem(){
      sessionStorage.removeItem('TOKEN_KEY');
      this.$router.push({path:'/login/ringup'})
    },
    //清除缓存
    clearsession() {
      // localStorage.clear();
      var that = this;
      Toast.loading({
        mask: true,
        message: "正在清理缓存，请稍等..."
      });
      setTimeout(function() {
        that.session = "0";
      }, 3000);
    }
  },
  mounted() {},
  components: {
    Headertop
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.setting_item {
  font-size: 0.42rem;
  padding: 0 0.53rem;
  height: 1.2rem;
  line-height: 1.2rem;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
.item_left {
  font-weight: bold;
}
.item_right {
  color: #6c6c6c;
}
.van-button--plain.van-button--danger {
  width: 6.8rem;
  height: 1.22rem;
  position: fixed;
  left: 50%;
  bottom: 2.63rem;
  transform: translateX(-50%);
}
.van-icon {
  top: 5%;
}
.van-button__text {
  font-size: 0.42rem !important;
}
</style>
