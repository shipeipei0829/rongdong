
<template>
  <ul class="invoicemsg1">
    
    <!-- 纸质发票 -->
    
    <li class="typea_des_item">
      <div class="typea_des_item_lf">收件人</div>
      <div class="typea_des_item_rt">填写收件人，限16字符</div>
    </li>
    <li class="typea_des_item">
      <div class="typea_des_item_lf">联系电话</div>
      <div class="typea_des_item_rt">填写联系人电话</div>
    </li>
    <li class="typea_des_item">
      <div class="typea_des_item_lf">邮寄地址</div>
      <div class="typea_des_item_rt">填写详细地址，限100字符</div>
    </li>
    <li class="typea_des_item">
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
  name: "Invoicemsg1",
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
.invoicemsg1 {
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
