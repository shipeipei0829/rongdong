<template>
  <div class="rule" style="height:100vh;background:#f0f0f0f">
    <Headertop :title="title" />
    <!-- 优惠券 -->
    <div class="coupon">
      <h2>{{tit}}</h2>
      <div class="couponmsg">
        <div style="float:left;">
          <span style="font-size:.8rem;">{{num}}</span>
          &nbsp;&nbsp;{{unit}}
        </div>
        <div style="float:right;padding-top:.6rem;">{{rule.endDate}}</div>
      </div>
    </div>
    <!-- 使用须知 -->
    <div class="notice">
      <h2>使用须知</h2>
      <ul>
        <li v-for="(item,index) in rule.ruleList" :key="index">{{item.title}}</li>
        <!-- <li>不可与优惠券同时使用</li>
        <li>可叠加使用</li>
        <li>可与时间账户一起使用</li>
        <li>不可与商家折扣一同使用</li>-->
      </ul>
    </div>
    <!-- 可用门店 -->
    <div class="storewrap" style="padding-bottom:.3rem;">
      <h2>可用门店</h2>
      <div class="store">
        <span v-for="(item,index) in rule.rangeNameList" :key="index">
          {{item.hotelName}}
          <i>、</i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { findSaveHour, findcoupon } from "../../api/mine";
import Headertop from "@/components/header/index";
// options 为可选参数，无则不传
export default {
  name: "Rule",
  data() {
    return {
      id: this.$route.query.id,
      title: "使用规则",
      rule: "",
      unit: "",
      list: [
        "格林豪泰—西单店店",
        "格林豪泰—王府井店",
        "格林豪泰—东单店",
        "格林豪泰—果园店",
        "格林豪泰—通州万达店",
        "格林豪泰—双井店",
        "格林豪泰—大望路店"
      ],
      tit:'',
      num:''
    };
  },
  props: {},
  //beforeRouteLeave (to, from, next) {    // 导航离开该组件的对应路由时调用

  //},
  methods: {},
  mounted() {
    if (this.$route.query.full == 1) {
      findSaveHour({ id: this.id }).then(res => {
        if (res.code == 0) {
          this.rule = res.data;
          this.tit = res.data.hotelName;
          this.unit = "小时";
        }
      });
    }
    if (this.$route.query.full == 2) {
      findcoupon({ id: this.id }).then(res => {
        console.log(res);
        if (res.code == 0) {
          this.rule = res.data;
          this.tit = this.rule.name;
          this.num = this.rule.couponTypeValue
          this.unit = "满"+this.rule.fullValue+"减";    
        }
      });
    }
  },
  watch: {},
  components: {
    Headertop
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rule {
  text-align: left;
}
h2 {
  font-size: 0.42rem;
  font-weight: bold;
  padding-top: 0.3rem;
}
.coupon,
.notice {
  margin-top: 0.3rem;
}
.coupon,
.notice,
.storewrap {
  padding: 0 0.42rem;
  background: #fff;
}
.notice {
  padding-bottom: 0.3rem;
  border-bottom: 1px dotted #000;
}
.couponmsg {
  overflow: hidden;
}
ul li {
  height: 0.6rem;
  line-height: 0.6rem;
}
li:before {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border: 0.08rem solid #000;
  border-radius: 50%;
  margin-right: 0.1rem;
}
.store span {
  display: inline;
}
</style>
