
<template>
  <ul class="invoicemsg">
    <li class="typea_des_item">
      <div class="typea_des_item_lf">发票类型</div>
      <div class="typea_des_item_rt">
        <van-radio-group
          v-model="radio"
          style="display:flex;height:1.14rem;line-height:1.14rem;justify-content: space-between;"
        >
          <van-radio name="1" checked-color="#008489">企业单位</van-radio>
          <van-radio name="2" checked-color="#008489">个人/非企业单位</van-radio>
        </van-radio-group>
      </div>
    </li>
    <li class="typea_des_item">
      <div class="typea_des_item_lf">发票抬头</div>
      <div class="typea_des_item_rt">请输入公司名称，限100字符</div>
    </li>
    <li class="typea_des_item">
      <div class="typea_des_item_lf">纳税人识别号</div>
      <div class="typea_des_item_rt">请填写纳税人识别号</div>
    </li>
    <li class="typea_des_item">
      <div class="typea_des_item_lf">发票内通</div>
      <div class="typea_des_item_rt weight">住宿费</div>
    </li>
    <li class="typea_des_item">
      <div class="typea_des_item_lf">开票金额</div>
      <div class="typea_des_item_rt weight">900元</div>
    </li>
    <li class="typea_des_item" style="border:none">
      <div class="typea_des_item_lf">更多信息</div>
      <div class="typea_des_item_rt">填写备注、开户银行等</div>
    </li>
    <li class="typea_des_item_bz">
      <van-icon name="info" color="#F7AC39" size=".32rem" style="padding: 0 .1rem;top:10%" />电子发票最快5分钟开具，请留意短信和邮件
    </li>
    <li class="typea_des_item" style="border:none">
      <div class="typea_des_item_lf">电子邮件</div>
      <div class="typea_des_item_rt">请填写电子邮件</div>
    </li>
    
  </ul>
</template>

<script>
// 引入单选框
import { RadioGroup, Radio } from "vant";
Vue.use(RadioGroup);
Vue.use(Radio);
// icon
import { Icon } from "vant";
Vue.use(Icon);

export default {
  name: "Invoicemsg",
  data() {
    return {
      radio: "1"
    };
  },
  props: {},
  methods: {},
  mounted() {},
  components: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.invoicemsg {
  padding: 0 0.58rem;
  background-color: #fff;
}
.typea_des_item {
  overflow: hidden;
  height: 1.15rem;
  line-height: 1.15rem;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
}
.typea_des_item_lf {
  float: left;
  width: 4.04rem;
  color: #4f4f4f;
  font-size: 0.4rem;
}
.typea_des_item_rt {
  color: #c6c6c6;
  font-size: 0.34rem;
}
.weight {
  color: #000;
}
/* 备注 */
.typea_des_item_bz {
  width: 9.65rem;
  height: 0.46rem;
  line-height: 0.46rem;
  color: #b5b5b5;
  font-size: 0.3rem;
  border: 1px solid #c5c5c5;
  border-radius: 0.1rem;
}

</style>
