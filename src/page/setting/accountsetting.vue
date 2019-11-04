<template>
  <div class="setting" style="height:100vh;width:100%">
    <Headertop :title="title" />
    <ul>
      <li class="setting_item" @click="updatetel">
        <div class="item_left">修改手机号</div>
        <div class="item_right">+86 132****1234&nbsp;&nbsp;<van-icon name="arrow" /></div>
      </li>
      <li class="setting_item" @click="updatepwd">
        <div class="item_left">修改登录密码</div>
        <div class="item_right"><van-icon name="arrow" /></div>
      </li>
      <li class="setting_item" style="margin-top:.25rem">
        <div class="item_left">
          <img src="../../img/wcharticon.png" alt />绑定微信
        </div>
        <div class="item_right">已绑定&nbsp;&nbsp;<van-icon name="arrow" /></div>
      </li>
      <li class="setting_item">
        <div class="item_left">
          <img src="../../img/QQ icon.png" alt />绑定QQ
        </div>
        <div class="item_right">未绑定&nbsp;&nbsp;<van-icon name="arrow" /></div>
      </li>
      <li class="setting_item">
        <div class="item_left">
          <img src="../../img/sinaicon.png" alt />绑定新浪微博
        </div>
        <div class="item_right">已绑定&nbsp;&nbsp;<van-icon name="arrow" /></div>
      </li>
    </ul>
  </div>
</template>

<script>
import Headertop from "@/components/header/index";
import { Icon } from 'vant';

Vue.use(Icon);
export default {
  name: "Setting",
  data() {
    return {
      active: 0,
      activeKey: 0,
      activeId: 1,
      title: "设置"
    };
  },
  props: {
    msg: {}
  },
  methods: {
    //修改手机号
    updatetel(){
      this.$router.push({path:'/setting/telsetting'})
    },
    //修改登录密码
    updatepwd(){
      this.$router.push({path:'/setting/pwdsetting'})
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
  line-height: 1.18rem;
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
img {
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.15rem;
}
.van-icon{
  top: 5%;
}
</style>
