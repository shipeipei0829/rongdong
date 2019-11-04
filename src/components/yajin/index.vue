<template>
  <div class="dingjin">
    <Fail value="押金" src="yajin"></Fail>
    <ul class="ruzhu_list">
      <li>
        <div>
          <p>支付金额</p>
        </div>
        <p style="text-decoration:line-through;"  v-if="depositStatus!=1">￥{{deposit}}.00</p>
        <p  v-if="depositStatus==1">￥{{deposit}}.00</p>
      </li>
      <li style="color:#737373;" v-if="depositStatus==3">支付宝认证已免押金</li>
      <li style="color:#737373;" v-if="depositStatus==2">线上已缴押金</li>
    </ul>
  </div>
</template>
<script>
import { findHotleOrderInfo } from "../../api/order";
import Fail from "@/components/fail/index.vue";
export default {
  data() {
    return {
      deposit: "", //押金金额
      depositStatus: "" //押金类型，1线上，2线下，3免押金
    };
  },
  components: {
    Fail
  },
  methods: {},
  created() {
    var orderId = this.$route.query.orderId;
    findHotleOrderInfo({ orderId: orderId }).then(res => {
      if (res.code == 0) {
        this.deposit = res.data.deposit;
        this.depositStatus = res.data.depositStatus;
      }
    });
  }
};
</script>
<style>
.dingjin {
  margin: 0.3rem 0.5rem;
  background: #fff;
  padding-right: 0.16rem;
  padding-left: 0.27rem;
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
</style>