<template>
  <div class="zhuanshou_w">
    <Fail value="转售信息" @click="onRefund()" src="zhuanshou"></Fail>
    <ul class="ruzhu_list zhuanshou">
      <li style="margin-top:-0.3rem;">
        <p style="padding-left:0.44rem;">转接人</p>
        <p>Lucy</p>
        <p style="width:0.34rem; height:0.32rem; margin-left:0.26rem;">
          <img src="./../../img/xiaoxi.png" alt style="width:100%;height:100%;" />
        </p>
      </li>
      <li style="margin-top:-0.1rem;">
        <p>入住时间</p>
        <p>2019年5月24日 周四 14:00</p>
      </li>
      <li>
        <p>离店时间</p>
        <p>2019年5月24日 周四 17:00</p>
      </li>
      <li>
        <p>离店时间</p>
        <p>2019年5月24日 周四 17:00</p>
      </li>
      <li>
        <p>转售价格</p>
        <p>¥168.00</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Fail from "@/components/fail/index.vue";
export default {
  name: "Zhuanshou",
  data() {
    return {
      
    };
  },
  components: {
    Fail
  },
  methods: {
    onRefund() {
      //申请退款
      this.$router.push({ path: "/page/jump/refund" });
    }
  }
};
</script>
<style>
.zhuanshou_w {
  margin: 0.3rem 0.5rem;
  background: #fff;
  padding-right: 0.16rem;
  padding-left: 0.27rem;
}
.zhuanshou li {
  padding-top: 0.25rem;
  font-size: 0.3rem;
  font-weight: 400;
}

.zhuanshou li > p:first-child {
  color: #737373;
  padding-left: 0.18rem;
  padding-right: 1.2rem;
}

.zhuanshou li > p:last-child {
  color: #000;
}

.ruzhu_list {
  padding: 0.3rem 0rem 0.34rem 0.17rem;
}

.ruzhu_list > li {
  display: flex;
  text-align: left;
}

.ruzhu_list > li > div {
  width: 2.5rem;
  font-weight: 400;
  color: rgba(115, 115, 115, 1);
}

.ruzhu_list > li > p {
  font-size: 0.3rem;
}

.ruzhu_top {
  margin-top: 0.35rem;
}

.bottom_button {
  outline: none;
  border: none;
}
</style>