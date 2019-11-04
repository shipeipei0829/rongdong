<template>
  <div class="Applyrefund" style="height:100vh;">
    <Headertop :title="title" />
    <!-- 我的订单 -->
    <ul>
      <li style="overflow:hidden">
        <div style="float:left">
          <span class="span">*</span>
          <b class="title">退款原因</b>
        </div>
        <div class="change" @click="change">请选择&nbsp;&nbsp;></div>
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      </li>
      <li style="overflow:hidden">
        <div style="float:left">
          <span class="span">*</span>
          <b class="title">退款金额</b>
        </div>
        <div style="float:right;font-size:.4rem">
          ￥
          <span style="color:#E72D2D;font-weight:bold">11.97</span>
        </div>
      </li>
      <li style="overflow:hidden">
        <div style="float:left">
          <span class="span">*</span>
          <b class="title">退款方式</b>
        </div>
        <div style="float:right;color:#6C6C6C;font-size:.32rem;font-weight:bold">原支付方式返回</div>
      </li>
    </ul>
    <!-- 问题描述 -->
    <div class="problem">
      <div class="problemtitle">
        问题描述
        <span class="problemnum">（200字，可不填）</span>
      </div>
      <textarea class="problemdes">请描述具体退款的原因，以便我们更好的为您服务，谢谢！</textarea>
    </div>

    <!--底部操作按钮 -->
    <Refund :title="refund" />

  </div>
</template>

<script>
import { ActionSheet } from "vant";
Vue.use(ActionSheet);
import Headertop from "@/components/header/index";
import Refund from "@/components/refund/index";
export default {
  name: "Applyrefund",
  data() {
    return {
      title: "申请退款",
      refund: "提交申请",
      fontcolor:'#008489',
      show: false,
      actions: [
        { name: "商品质量问题" },
        { name: "商品损坏" },
        { name: "商品缺货" },
        { name: "不想要了" },
        { name: "与商家协商一致" }
      ]
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
    change() {
      // console.log('111')
      this.show = !this.show;
    }
  },
  mounted() {},
  components: {
    Headertop,
    Refund
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Applyrefund>>>.van-nav-bar__title{
  color:#008489
}
ul li {
  height: 1.2rem;
  line-height: 1.2rem;
  padding: 0 0.48rem;
  text-align: left;
  border: 1px solid #f0f0f0;
}
ul li .span {
  color: red;
  font-size: 0.4rem;
  font-weight: bold;
  padding-right: 0.14rem;
}
ul li .title {
  font-size: 0.4rem;
  font-weight: bold;
  color: #000;
}
.change {
  float: right;
  color: #6c6c6c;
  font-size: 0.32rem;
  font-weight: bold;
}
.problem {
  margin-top: 0.3rem;
  padding: 0.32rem 0.48rem;
  background-color: #fff;
  text-align: left;
}
.problemtitle {
  font-size: 0.4rem;
  color: #010101;
  font-weight: bold;
}
.problemnum {
  color: #6c6c6c;
}
.problemdes {
  font-size: 0.36rem;
  color: #6c6c6c;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
