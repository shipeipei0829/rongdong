<template>
  <div class="steps_w">
    <Fail src="deleta" value="退款信息"></Fail>
    <div class="steps">
      <!-- 房费步骤条 -->
      <p style="color:#118589">房费</p>
      <van-steps :active="active" active-color="#FF9623">
        <van-step>
          <div>
            <h3>客户取消</h3>
            <p>2019.07.12 10:31</p>
          </div>
        </van-step>
        <van-step>
          <div>
            <h3>平台受理</h3>
            <p>2019.07.12 10:31</p>
          </div>
        </van-step>
        <van-step>
          <div>
            <h3>退款成功</h3>
          </div>
        </van-step>
      </van-steps>
      <div class="info">
        <div>
          <span>房费退款金额</span>
          <i>¥134.00</i>
        </div>
        <div>
          <span>退款账户</span>
          <i>原支付账户</i>
        </div>
      </div>

      <!-- 商品步骤条 -->
      <p v-if="false">商品</p>
      <van-steps :active="active" active-color="#FF9623" v-if="false">
        <van-step>
          <div>
            <h3>客户取消</h3>
            <p>2019.07.12 10:31</p>
          </div>
        </van-step>
        <van-step>
          <div>
            <h3>平台受理</h3>
            <p>2019.07.12 10:31</p>
          </div>
        </van-step>
        <van-step>
          <div>
            <h3>退款成功</h3>
          </div>
        </van-step>
      </van-steps>
    </div>
  </div>
</template>
<script>
import Fail from "@/components/fail/index.vue";
import { Step, Steps } from "vant";
Vue.use(Step).use(Steps);
export default {
  name: "Steps_w",
  data() {
    return {
      active: 2
    };
  },
  components: {
    Fail
  }
};
</script>
<style>
.steps_w {
  margin: 0.3rem 0.5rem;
  background: #fff;
  padding-right: 0.16rem;
  padding-left: 0.27rem;
}
.steps > p {
  padding: 0.27rem 0rem;
  font-size: 0.5rem;
  font-weight: bold;
}
.van-steps--horizontal {
  padding: 0 0.8rem !important;
}
.van-step__circle {
  width: 0.3rem !important;
  height: 0.3rem !important;
}
.van-step__title {
  margin-top: 1rem;
}
.van-step--horizontal:first-child .van-step__title {
  margin-left: -3.5rem;
}
.van-step--horizontal .van-step__title {
  margin-left: -1.6rem;
}
.van-step--horizontal:last-child .van-step__title {
  margin-right: -0.5rem;
}
.van-step--horizontal.van-step--process .van-icon {
  font-size: 0.42rem;
  top: 0.1rem;
}
/* 步骤条的修改 */
.info {
  padding-bottom: 0.2rem;
}
.info div {
  overflow: hidden;
  height: 0.6rem;
  line-height: 0.6rem;
}
.info div span {
  font-size: 0.3rem;
  color: #737373;
  float: left;
  padding-left: 0.3rem;
}
.info div i {
  font-size: 0.3rem;
  color: #000000;
  float: right;
  padding-right: 0.3rem;
}
.van-step__title div p {
  font-size: 0.24rem;
  color: #737373;
}
</style>