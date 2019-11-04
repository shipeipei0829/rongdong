
<template>
  <div class="setting" style="background:#F0F0F0;height:100vh;width:100%">
    <Headertop :title="title" />
    <ul>
      <li class="setting_item" @click="accountsetting" style="margin-top:.51rem"  >
        <div class="item_left">住宿发票</div>
        <div class="item_right">
          <van-icon name="arrow" />
        </div>
      </li>
      <li class="setting_item" style="margin-top:.51rem">
        <div class="item_left">发票历史</div>
        <div class="item_right">
          <van-icon name="arrow" />
        </div>
      </li>
      <li class="setting_item">
        <div class="item_left">发票须知</div>
        <div class="item_right">
          <van-icon name="arrow" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Headertop from "@/components/header/index";
import { Button } from "vant";
import { Icon } from "vant";
Vue.use(Icon);
Vue.use(Button);
export default {
  name: "Setting",
  data() {
    return {
      title: "开具发票"
    };
  },
  props: {
    msg: {}
  },
  methods: {
    //住宿发票
    accountsetting() {
      this.$router.push({ path: "/invoice/accommodation" });
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
</style>
