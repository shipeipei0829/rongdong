<template>
  <div
    class="card"
    :style="'background: linear-gradient(to left,'+bgcolor1
  +', '+bgcolor2+');top:'+top"
  >
    <!-- <div class="card_rt" :style="'color:'+bgcolor2">{{title}}</div>
    <div class="hotel">如家连锁酒店</div>
    <div class="time">使用时间2019.06.01——2020.06.01</div>
    <div class="number">1234 5678 0000</div>-->
    <!-- <div class="rule">{{用卡规则}}</div> -->
    <div class="card_rt" :style="'color:'+bgcolor2">{{title}}</div>
    <div class="hotel">{{hotel}}</div>
    <div class="time">{{timeInfo}}{{time}}</div>
    <div class="number">{{num}}</div>
    <div class="discount">
      <i v-if="price != ''">￥</i>
      {{discount}}{{discountInfo}}
    </div>
    <div class="discountLeft">{{discountLeft}}{{discountLeftInfo}}</div>
    <div class="priceRight">{{priceRight}}{{priceRightInfo}}</div>
    <div class="price">
      <i v-if="price != ''">￥</i>
      {{price}}
    </div>
    <div class="rule">{{remark}}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {};
  },
  props: {
    bgcolor1: {
      type: String,
      default: ""
    },
    bgcolor2: {
      type: String,
      default: ""
    },
    top: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    hotel: {
      type: String,
      default: ""
    },
    timeInfo: {
      type: String,
      default: ""
    },
    discountLeft: {
      type: String,
      default: ""
    },
    discountLeftInfo: {
      type: String,
      default: ""
    },
    priceRight: {
      type: String,
      default: ""
    },
    priceRightInfo: {
      type: String,
      default: ""
    },
    time: {
      type: String,
      default: ""
    },
    num: {
      type: String,
      default: ""
    },
    discount: {
      type: String,
      default: ""
    },
    discountInfo: {
      type: String,
      default: ""
    },
    remark: {
      type: String,
      default: ""
    },
    price: {
      type: String,
      default: ""
    }
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
.card {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 8.94rem;
  height: 5.04rem;
  border-radius: 0.4rem;
  /* background: linear-gradient(to left, #fc5b59, #fe795f); */
  color: #fff;
  text-align: left;
  padding: 0.64rem 0.61rem 0 0.78rem;
}
.card_rt {
  width: 2.16rem;
  height: 0.96rem;
  line-height: 0.96rem;
  font-size: 0.44rem;
  /* color: #fe795f; */
  font-weight: bold;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0 0.4rem 0 0.4rem;
  background: rgba(255, 255, 255, 0.5);
  text-align: center;
}
.hotel {
  font-size: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-weight: bold;
}
.discountLeft {
  font-size: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-weight: bold;
  position: absolute;
  top: 3rem;
}
.priceRight {
  font-size: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-weight: bold;
  position: absolute;
  right: 0.6rem;
  bottom: 0.7rem;
}
.time {
  font-size: 0.3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  margin-bottom: 1.87rem;
  padding-top: 0.53rem;
}
.number {
  font-size: 0.48rem;
}
.discount {
  position: absolute;
  font-size: 0.7rem;
  right: 0.6rem;
  bottom: 2rem;
}
.price {
  position: absolute;
  font-size: 0.7rem;
  right: 0.6rem;
  bottom: 0.5rem;
  /* font-weight: bold; */
}
i {
  font-size: 0.36rem;
}
.rule {
  font-size: 0.3rem;
  text-align: right;
}
</style>