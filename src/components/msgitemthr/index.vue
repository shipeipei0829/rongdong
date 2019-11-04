<template>
  <div class="msgitemthr">
    <div class="msgtime">{{time}}</div>

    <div class="msgcover">
      <img src="../../img/msgitem.png" alt />
      <div class="mark">
        <p>平台推出限时充值优惠活动，快来参加吧！</p>
        <p>注册享好礼，冲100小时送20小时...</p>
      </div>
    </div>
    <ul class="msgitemwrap">
      <li class="msgitem">
        <img src="../../img/hotel1.jpg" alt class="itempic" />
        <div class="msgitem_con">
          <p>平台推出限时充值优惠活动，快来参加吧！</p>
          <p>注册享好礼，冲100小时送20小时...</p>
        </div>
      </li>
      <li class="msgitem">
        <img src="../../img/hotel2.jpg" alt class="itempic" />
        <div class="msgitem_con">
          <p>平台推出限时充值优惠活动，快来参加吧！</p>
          <p>注册享好礼，冲100小时送20小时...</p>
        </div>
      </li>
      <li class="msgitem">
        <img src="../../img/hotel3.jpg" alt class="itempic" />
        <div class="msgitem_con">
          <p>平台推出限时充值优惠活动，快来参加吧！</p>
          <p>注册享好礼，冲100小时送20小时...</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Msgitemthr",
  data() {
    return {
      time: ""
    };
  },
  props: {},
  methods: {
    second(n) {
      if (n <= 10) {
        return "0" + n;
      } else {
        return n;
      }
    }
  },
  mounted() {
    var d = new Date();
    this.time =
      this.second(d.getMonth() + 1) +
      "-" +
      this.second(d.getDate()) +
      " " +
      this.second(d.getHours()) +
      ":" +
      this.second(d.getMinutes());
    console.log(this.time);
  }
};
</script>
<style scoped>
.msgitemthr {
  width: 9.84rem;
  margin: 0 auto;
}
.msgtime {
  width: 3rem;
  height: 0.49rem;
  line-height: 0.49rem;
  margin: 0.32rem auto;
}
img {
  height: 4rem;
  width: 100%;
  height: 100%;
}
.msgcover {
  margin: 0 auto;
  position: relative;
  width: 9.84rem;
  height: 4rem;
}
.mark {
  width: 9.84rem;
  height: 1.42rem;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 0rem;
  left: 0;
  padding: 0.21rem 0;
}
.mark p {
  font-weight: 400;
  color: #fff;
  font-size: 0.46rem;
  padding-left: 0.47rem;
  text-align: left;
  height: 0.5rem;
  line-height: 0.5rem;
}
/* 3条 */
.msgitemwrap {
  width: 9.84rem;
  background-color: #fff;
  border-radius: 0 0 .2rem .2rem;
}
.msgitem {
  display: flex;
  height: 2rem;
  padding: 0 0.48rem;
}

.itempic {
  width: 1.2rem;
  height: 1.2rem;
  margin: auto 0;
}
.msgitem_con {
  border-bottom: 1px solid #e5e5e5;
  font-size: 0.36rem;
  text-align: left;
  height: 2rem;
  margin-left: .78rem;
  padding: .5rem 0;
}
.msgitem_con p {
  line-height: 0.42rem;
  height: 0.42rem;
}
</style>