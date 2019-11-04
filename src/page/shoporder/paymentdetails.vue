<template>
  <div class="paymentdetails" style="height:100vh;">
    <Header :title="title" />
    <!-- 房费支付明细 -->
    <ul style="margin-top:.3rem">
      <li>
        <div class="item_left">支付方式</div>
        <div class="item.right">账户抵扣</div>
      </li>
      <li>
        <div class="item_left">抵扣账户</div>
        <div class="item.right">时间账户</div>
      </li>
      <li>
        <div class="item_left">商家优惠</div>
        <div class="item.right">无</div>
      </li>
      <li>
        <div class="item_left">优惠券</div>
        <div class="item.right">无</div>
      </li>
      <li>
        <div class="item_left" style="font-weight:bold">合计支付</div>
        <div class="item.right" style="color:#FF9623">27小时币</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ActionSheet } from "vant";
Vue.use(ActionSheet);
import Header from "@/components/header/index";
export default {
  name: "Paymentdetails",
  data() {
    return {
      title: "房费支付明细"
    };
  },
  props: {
    msg: {}
  },
  methods: {},
  mounted() {},
  components: {
    Header
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paymentdetails ul li {
  display: flex;
  justify-content: space-between;
  height: 1.5rem;
  line-height: 1.5rem;
  border: 1px solid #f0f0f0;
  padding:0 .48rem;
  font-size: .4rem;
  font-weight: 500;
  background-color: #fff;
  font-style: PingFangSC-Regular;
}
.item_left{
  color: #000;
}
.item_right{
  color: #6C6C6C;
}
</style>
