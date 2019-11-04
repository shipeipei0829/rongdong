<template>
  <div class="refunddetails" style="height:100vh;background:#F0F0F0;">
    <Headers :title="title" />
    <!-- 退款状态 -->
    <div class="refundstatus" v-if="isshow">
      <h2 class="refundstatus_tit">退款状态：待卖家同意</h2>
      <div class="refundstatus_con" style="position:relative">
        <img
          src="../../img/rate.png"
          alt
          style="width:.31rem;height:1.84rem;position:absolute;left:-.4rem;"
        />
        <p style="font-size:.4rem;line-height:.4rem;height:.4rem;margin-top:.4rem">已申请退款，等待卖家处理</p>
        <p
          style="font-size:.36rem;line-height:.36rem;height:.36rem;margin-top:.32rem;"
        >(如果卖家在1天内未处理，系统将自动确认同意退款)</p>
        <p style="font-size:.4rem;line-height:.4rem;height:.4rem;margin-top:.37rem">{{nowTime}}</p>
      </div>
    </div>
    <div class="refundstatus" v-if="!isshow">
      <h2 class="refundstatus_tit">退款状态：已退款</h2>
      <div class="refundstatus_con" style="position:relative">
        <img
          src="../../img/rate.png"
          alt
          style="width:.31rem;height:1.84rem;position:absolute;left:-.4rem;"
        />
        <p style="font-size:.4rem;line-height:.4rem;height:.4rem;margin-top:.4rem">退款成功</p>
        <p
          style="font-size:.36rem;line-height:.36rem;height:.36rem;margin-top:.32rem;"
        >(将在3个工作日内，按原支付方式返回)</p>
        <!-- <p
          style="font-size:.4rem;line-height:.4rem;height:.4rem;margin-top:.37rem"
        >2019-05-11 01:12:45</p> -->
         <p
          style="font-size:.4rem;line-height:.4rem;height:.4rem;margin-top:.37rem"
        >{{nowTime}}</p>
      </div>
    </div>
    <!-- 退款原因 -->
    <ul class="refund_cause" style="margin-top:.3rem">
      <li class="refund_item">
        <div class="refund_title">退款原因</div>
        <div class="refund_con">{{result}}</div>
      </li>
      <li class="refund_item">
        <div class="refund_title">退款金额</div>
        <div class="refund_con">¥ {{this.pageinfo.rmb}}</div>
      </li>
      <li class="refund_item">
        <div class="refund_title">退款方式</div>
        <div class="refund_con">退款方式</div>
      </li>
      <li class="refund_item">
        <div class="refund_title">退款方式</div>
        <div class="refund_con">按原支付方式返回</div>
        <!-- <div class="refund_con">商品暂时无货，与商家协商决定退款。</div> -->
      </li>
    </ul>
    <!-- <Refund v-if="query.ordertype!=1" :title="refund" /> -->
    <div v-if="isshow" style="width:100%;height:1.46rem;line-height:1.46rem;background:#fff;color:#E72D2D;font-size:.5rem;position:fixed;bottom:0;" @click="quxiao">取消退款</div>
  </div>
</template>

<script>
import Headers from "@/components/header/index";
import Refund from "@/components/refund/index";
import { setTimeout } from 'timers';
import { Toast } from 'vant';
Vue.use(Toast);
export default {
  name: "Applyrefund",
  data() {
    return {
      title: "申请退款",
      refund: "取消退款",
      isshow: true,
      nowTime: "",
      result: "客户取消订单",
      query: "",
      page:'',
      pageinfo:{
        rmb:'100'
      }
    };
  },
  props: {
    msg: {}
  },
  methods: {
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
    },
    quxiao(){
      this.$router.go(-2)
    }
  },
  created() {
   
  },
  mounted() {
    var date = new Date();
    var d = new Date(date);
    this.nowTime =d.getFullYear() +"-" +(d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    
    var t = this;
    setTimeout(function(){
      t.isshow=false;
    },5000)

    
  },
  filters: {},
  components: {
    Headers,
    Refund
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.refunddetails >>> .van-nav-bar__title {
  color: #e72d2d;
}
.refundstatus {
  background-color: #ff9623;
  height: 3.7rem;
  color: #fff;
  padding: 0.29rem 0 0 0.43rem;
  text-align: left;
}
.refundstatus_tit {
  font-size: 0.44rem;
}
.refundstatus_con {
  margin-left: 0.64rem;
}
.refund_item {
  display: flex;
  height: 1.2rem;
  line-height: 1.2rem;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.4rem;
  background: #fff;
}
.refund_title {
  color: #6c6c6c;
  padding-left: 0.48rem;
}
.refund_con {
  color: #000;
  padding-left: 0.84rem;
}
</style>
