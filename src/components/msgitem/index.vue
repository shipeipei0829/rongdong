<template>
  <div class="msgitem">
    <div class="msgtime">{{time}}</div>
    <div class="msgdetails">
      <img src="../../img/msgitem.png" alt v-if="isshow"/>
      <div class="msgdetails_con">
        <h2>限时优惠活动</h2>
        <div class="container">平台推出限时充值优惠活动，快来参加吧！注册享好礼， 冲100小时送20小时...</div>
        <div class="more">
          查看全文
          <van-icon name="arrow" style="top:5%"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
Vue.use(Icon);
export default {
  name: "Msgitem",
  data() {
    return {
      time: ""
    };
  },
  props:{
      isshow:{
          type:Boolean,
          default:true
      }
  },
  mounted() {
    var d = new Date();
    this.time =
      d.getFullYear() +
      "-" +
      this.second(d.getMonth() + 1) +
      "-" +
      this.second(d.getDate()) +
      " " +
      this.second(d.getHours()) +
      ":" +
      this.second(d.getMinutes()) +
      ":" +
      this.second(d.getSeconds());
    console.log(this.time);
  },
  methods: {
    second(n) {
      if (n <= 10) {
        return "0" + n;
      } else {
        return n;
      }
    }
  }
};
</script>
<style scoped>
.msgtime {
  width: 3rem;
  height: 0.49rem;
  line-height: 0.49rem;
  border-radius: 0.25rem;
  background: #fff;
  margin: 0.32rem auto;
}
.msgdetails {
  width: 9.8rem;
  /* height: 5.07rem; */
  margin: 0 auto;
  border-radius: 0.2rem;
  background-color: #fff;
}
.msgdetails_con{
    margin: 0 .49rem;
    text-align: left;
    padding: .2rem 0;
}
img {
  width: 100%;
  height: 2.37rem;
}
h2 {
  height: 0.82rem;
  line-height: 0.82rem;
  color: #000000;
  font-size: .42rem;
}
.container{
    font-size: .36rem;
    line-height: .44rem;
    height: 1.1rem;
}
.more{
    height: .78rem;
    line-height: .78rem;
    border-top:1px solid #E5E5E5;
}
</style>