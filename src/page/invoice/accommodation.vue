
<template>
  <div class="acccommodation" style="background:#F0F0F0;height:100vh;width:100%">
    <Headertop :title="title" />
    <!-- 发票明细 -->
    <div class="details">
      <h2 class="details_date">04月</h2>
      <div class="details_con">
        <div class="details_item">
          <van-checkbox v-model="checked" style="margin-left:.26rem"></van-checkbox>
          <div class="details_item_con">
            <div class="time_st">
              <span class="icon">住</span>2019-04-15 12:00
            </div>
            <div class="item_title">北京东直门雅辰悦居酒店-悦居60平双床房</div>
            <div class="time_ed">
              <span class="icon">离</span>2019-04-18 9:00
            </div>
            <div class="item_bt">
              <div class="item_num">订单编号 ：20189348276423987</div>
              <div class="item_price">
                <i style="font-size:.4rem">￥</i>968.00
              </div>
            </div>
          </div>
        </div>
        <div class="details_item">
          <van-checkbox v-model="checked" style="margin-left:.26rem"></van-checkbox>
          <div class="details_item_con">
            <div class="time_st">
              <span class="icon">住</span>2019-04-15 12:00
            </div>
            <div class="item_title">北京东直门雅辰悦居酒店-悦居60平双床房</div>
            <div class="time_ed">
              <span class="icon">离</span>2019-04-18 9:00
            </div>
            <div class="item_bt">
              <div class="item_num">订单编号 ：20189348276423987</div>
              <div class="item_price">
                <i style="font-size:.4rem">￥</i>968.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 全选 合计 下一步 -->
    <div class="checked_all">
      <van-checkbox v-model="checked" style="margin-left:.26rem;float:left;height: 1.4rem;  ">全选</van-checkbox>
      <div class="checked_all_right">
        <span style="color:#282828;font-size:.36rem;">合计</span>
        <span style="color:#FAAB38;font-size:.36rem;margin:0 .3rem;">￥0</span>
        <van-button round type="danger" to="/invoice/fillinfo" style="font-size:.4rem;">下一步</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Headertop from "@/components/header/index";
// 复选框
import { Checkbox, CheckboxGroup } from "vant";
Vue.use(Checkbox).use(CheckboxGroup);
// 按钮
import { Button } from "vant";
Vue.use(Button);

export default {
  name: "Acccommodation",
  data() {
    return {
      title: "住宿发票",
      checked: true,
      data: []
    };
  },
  props: {
    msg: {}
  },
  methods: {},
  mounted() {},
  components: {
    Headertop
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.details {
  margin: 0.46rem 0.3rem 0;
}
.details_date {
  font-size: 0.46rem;
  height: 0.46rem;
  line-height: 0.46rem;
  text-align: left;
  padding-left: 0.28rem;
}
.details_item {
  border-radius: 0.1rem;
  margin: 0.4rem auto 0.8rem;
  display: flex;
  text-align: left;
  width: 10.2rem;
  height: 2.73rem;
  background: #fff;
}
.details_item_con {
  flex: 1;
  margin-left: 0.79rem;
}
.icon {
  width: 0.44rem;
  height: 0.44rem;
  line-height: 0.44rem;
  border-radius: 50%;
  display: inline-block;
  background: #008489;
  color: #ffffff;
  text-align: center;
  margin-right: 0.2rem;
}
.time_st,
.time_ed {
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: 0.3rem;
  color: #3e3e3e;
  margin: 0.2rem 0;
}
.item_title {
  color: #3e3e3e;
  font-size: 0.42rem;
  font-weight: bold;
  height: 0.42rem;
  line-height: 0.42rem;
}
.item_bt {
  margin: 0.02rem 0 0.1rem;
  overflow: hidden;
  height: 0.5rem;
  line-height: 0.5rem;
}
.item_num {
  float: left;
  color: #949494;
  font-size: 0.3rem;
}
.item_price {
  float: right;
  color: #faab38;
  font-size: 0.5rem;
  font-weight: bold;
  padding-right: 0.26rem;
}
/* 合计 */
.checked_all {
  overflow: hidden;
  height: 1.4rem;
  line-height: 1.4rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.checked_all_right {
  float: right;
}
.acccommodation >>> .van-checkbox__label {
  font-size: 0.36rem;
  color: #676767;
}
/* 按钮 */
.acccommodation >>> .van-button--danger {
  height: 0.96rem;
  line-height: .96rem;
  vertical-align: middle;
  margin-right: .3rem;
  /* background: linear-gradient(left #FF8D00 #FF5900)!important; */
}
.acccommodation>>>.van-icon{
  width: .4rem!important;
  height: .4rem!important;
  line-height: .4rem!important;
  top: 35%;
}
.acccommodation>>>.van-icon-success:before {
    content: "\F0C1";
    font-size: .4rem;
}
.acccommodation>>>.van-checkbox__icon{
  height:1.4rem;
  position: relative;
}
</style>
