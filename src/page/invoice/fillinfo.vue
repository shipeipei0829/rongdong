
<template>
  <div class="fillinfo" style="background:#F0F0F0;height:100vh;width:100%">
    <Headertop :title="title" />
    <!-- 请选择发票类型 -->
    <div class="type">
      <h2>请选择发票类型</h2>
      <van-tabs type="card" v-model="activeName">
        <van-tab title="电子发票" name="a"></van-tab>
        <van-tab title="纸质发票" name="b"></van-tab>
      </van-tabs>

      <!-- 发票信息 -->
      <div class="typewrap">
        <div class="infowrap">
          <!-- typea提示 -->
          <div class="info info_a" v-if="activeName=='a'">
            <van-icon name="info" color="#F7AC39" size=".32rem" style="padding: 0.05rem .1rem 0" />
            <p>电子发票与纸质发票具有同等法律效力，可支持报销入账</p>
          </div>

          <!-- typeb提示 -->
          <div class="info info_b" v-if="activeName=='b'">
            <van-icon name="info" color="#F7AC39" size=".32rem" style="padding: 0.05rem .1rem 0" />
            <div>
              <p style="text-align:left">电子发票与纸质发票具有同等法律效力，可支持报销入账。</p>
              <p style="text-align:left">推荐使用电子发票</p>
            </div>
          </div>
        </div>

        <h2>发票详情</h2>

        <!-- 开票信息 -->
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
            <input type="tetx" class="typea_des_item_rt" placeholder="请输入公司名称，限100字符" />
          </li>
          <li class="typea_des_item">
            <div class="typea_des_item_lf">纳税人识别号</div>
            <input type="tetx" class="typea_des_item_rt" placeholder="请填写纳税人识别号" />
          </li>
          <li class="typea_des_item">
            <div class="typea_des_item_lf">发票内通</div>
            <div class="typea_des_item_rt weight">住宿费</div>
          </li>
          <li class="typea_des_item">
            <div class="typea_des_item_lf">开票金额</div>
            <div class="typea_des_item_rt weight">900元</div>
          </li>
          <li class="typea_des_item" style="border:none" @click="moremsg">
            <div class="typea_des_item_lf">更多信息</div>
            <div class="typea_des_item_rt">填写备注、开户银行等</div>
          </li>
          <li class="typea_des_item_bz" v-if="activeName=='a'">
            <van-icon name="info" color="#F7AC39" size=".32rem" style="padding: 0 .1rem;top:10%" />电子发票最快5分钟开具，请留意短信和邮件
          </li>
          <li class="typea_des_item" style="border:none" v-if="activeName=='a'">
            <div class="typea_des_item_lf">电子邮件</div>
            <input type="tetx" class="typea_des_item_rt" placeholder="请填写电子邮件" />
          </li>
        </ul>
        <h2 v-if="activeName=='b'">接收方式（发票将于5个工作日内寄出）</h2>

        <!-- 纸质发票 -->
        <ul class="invoicemsg1" v-if="activeName=='b'">
          <li class="typea_des_item">
            <div class="typea_des_item_lf">收件人</div>
            <input type="text" class="typea_des_item_rt" placeholder="填写收件人，限16字符" />
          </li>
          <li class="typea_des_item">
            <div class="typea_des_item_lf">联系电话</div>
            <input type="text" class="typea_des_item_rt" placeholder="填写联系人电话" />
          </li>
          <li class="typea_des_item">
            <div class="typea_des_item_lf">邮寄地址</div>
            <input type="text" class="typea_des_item_rt" placeholder="填写详细地址，限100字符" />
          </li>
          <li class="typea_des_item">
            <div class="typea_des_item_lf">电子邮件</div>
            <input type="text" class="typea_des_item_rt" placeholder="请填写电子邮件" />
          </li>
        </ul>

        <!-- 确认按钮 -->
        <Buttons :value="value" style="margin:1rem 0;" />
      </div>
      <!-- </van-tabs> -->
    </div>

    <!-- 发票详情 -->
    <div class="details"></div>
  </div>
</template>

<script>
import Headertop from "@/components/header/index";
// import invoicemsg from "@/components/invoice/invoicemsg";
// import invoicemsga from "@/components/invoice/invoicemsg1";

// 引入单选框
import { RadioGroup, Radio } from "vant";
Vue.use(RadioGroup);
Vue.use(Radio);
// icon
import { Icon } from "vant";
Vue.use(Icon);

import Buttons from "../../login/components/buttons/index";

// tab切换
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);

export default {
  name: "Fillinfo",
  data() {
    return {
      title: "填写发票信息",
      activeName: "a",
      radio: "1",
      value: "确定"
    };
  },
  props: {
    msg: {}
  },
  methods: {
    moremsg() {
      this.$router.push({ path: "/invoice/moreinfo" });
    }
  },
  mounted() {},
  components: {
    Headertop,
    // invoicemsg,
    // invoicemsga,
    Buttons
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fillinfo {
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
  height: 100vh;
  padding-bottom: 2rem;
}
h2 {
  font-size: 0.46rem;
  height: 1.32rem;
  line-height: 1.32rem;
  font-size: 0.42rem;
  font-weight: bold;
  text-align: left;
  padding-left: 0.58rem;
}
.fillinfo >>> .van-tabs__nav--card {
  border: none;
}
.fillinfo >>> .van-tabs__wrap {
  background-color: #fff;
  height: 2rem;
  padding-top: 0.47rem;
}
.fillinfo >>> .van-tabs__nav {
  margin-right: -1.6rem;
  height: 1.1rem;
  background: #fff;
}
.fillinfo >>> .van-tab {
  width: 3.82rem;
  height: 1.1rem;
  line-height: 1.1rem;
  border-radius: 0.1rem;
  background-color: #c5c5c5 !important;
  margin-right: 2rem;
  color: #fff !important;
  font-size: 0.38rem;
}
.fillinfo >>> .van-tab.van-tab--active {
  background-color: #f7ac39 !important;
  border-color: #f7ac39 !important;
}

.fillinfo >>> .van-tabs__content {
  position: relative;
  top: 1rem;
  padding-top: 0.2rem;
  background: #fff;
}
.infowrap {
  background: #fff;
  padding-bottom: 0.4rem;
}
.info {
  width: 9.65rem;
  line-height: 0.46rem;
  color: #b5b5b5;
  font-size: 0.3rem;
  border: 1px solid #c5c5c5;
  border-radius: 0.1rem;
  display: flex;
  position: relative;
  background: #fff;
  margin: 0 auto;
}
.info_a {
  padding-left: 0.5rem;
}
.fillinfo >>> .van-icon-success {
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.fillinfo >>> .van-radio__icon--round {
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
}

/*  */
.invoicemsg {
  padding: 0 0.58rem;
  background-color: #fff;
}
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
input {
  outline: none;
  border: none;
  width: 5rem;
}
.van-tabs--card {
  height: 2rem;
}
.fillinfo >>> .van-icon-success:before {
  font-size: 0.4rem !important;
}
</style>
