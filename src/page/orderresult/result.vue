
<template>
  <div class="result" style="background:#fff;height:100vh;">
    <Headertop :title="title" />
    <!-- 下单失败显示 -->
    <van-icon name="close" size="2.2rem" color="red" v-if="!issuccess" />
    <!-- 下单成功显示 -->
    <van-icon name="checked" size="2.2rem" color="#008489" v-if="issuccess" />
    <!-- 下单成功提示 -->
    <div class="resultinfo" v-if="issuccess" >
        <p style="font-size:.48rem;color:#FFD925">提交订单成功</p>
        <p style="font-size:.42rem;color:#171717;margin-top:.48rem;margin-bottom:.33rem;">订单编号：{{orderId}}</p>
        <p style="font-size:.36rem;color:#171717;margin-bottom:2.74rem;">商家平均接单时间：<span style="color:#FFD925">15分钟</span></p>
    </div>
    <!-- 下单失败提示 -->
    <div class="resultinfo" v-if="!issuccess" >
        <p style="font-size:.48rem;color:red">订单提交失败</p>
        <p style="font-size:.42rem;color:#171717;margin-top:.48rem;margin-bottom:.33rem;">订单失败原因：抱歉，此房间已经出售</p>
        <p style="font-size:.36rem;color:#171717;margin-bottom:2.74rem;">请选择别的房间，谢谢！</p>
    </div>
    <!-- 下单成功按钮 -->
    <div class="buttons" style="color:#010101;border:none;" v-if="issuccess" is="router-link" to="/order/index">查看订单</div>
    <div class="buttons" style="background:#008489;color:#fff;display:block;"  is="router-link" to="/home/index">返回首页</div>
  </div>
</template>

<script>
import Headertop from "@/components/header/index";
import { Icon } from "vant";
Vue.use(Icon);

export default {
  name: "Result",
  data() {
    return {
      title: "下单成功",
      issuccess: true, //下单成功true,下单失败false
      orderId:this.$route.query.orderId,//订单编号
    };
  },
  props: {},
  methods: {},
  mounted() {},
  components: {
    Headertop
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result>>>.van-icon{
    margin-top: 2.36rem;
    margin-bottom: 1.81rem;
}
p{
    line-height:1;
}
.buttons{
    width: 5.28rem;
    height: .88rem;
    line-height: .88rem;
    border:1px solid #008489;
    border-radius: .1rem;
    margin: 0 auto .42rem;
    font-size: .42rem;
}
</style>
