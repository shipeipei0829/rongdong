
<template>
  <div class="carddetails" style="background:#F0F0F0;height:100vh;padding-top:1.2rem;">
    <Headertop :title="title" :fixed="true" />

    <!-- 顶部卡片轮播 -->
    <div
      style="-webkit-overflow-scrolling: touch;overflow-y:auto;height:100vh;padding-bottom:1rem;"
    >
      <!-- <van-swipe @change="onChange" :show-indicators="false" class="wraper" :initial-swipe="2"> -->
      <!-- <van-swipe-item v-for="item in list" :key="item.idx" :index="item.idx"> -->
      <Card
        :bgcolor1="card.bgcolor1"
        :bgcolor2="card.bgcolor2"
        :title="cardMsg.discountsType==0?'折扣':'限时特惠'"
        :hotel="cardMsg.title"
        :num="cardMsg.cardNum"
        :discount="cardMsg.discount|parseFloat"
        discountInfo="折卡"
        remark="用卡规则"
      />
      <!-- </van-swipe-item> -->
      <!-- <van-swipe-item>
        <Card :bgcolor1="card2.bgcolor1" :bgcolor2="card2.bgcolor2" :title="card2.title" />
      </van-swipe-item>
      <van-swipe-item>
        <Card :bgcolor1="card3.bgcolor1" :bgcolor2="card3.bgcolor2" :title="card3.title" />
      </van-swipe-item>-->
      <!-- </van-swipe> -->

      <!-- 余额+充值 -->
      <div class="balance">
        <div class="balance_lf">
          <div class="balance_bd">余额</div>
          <div class="balance_nm">¥{{cardMsg.cash}}.00</div>
        </div>
        <div class="balance_rt">充值</div>
        <!-- 优惠卡时显示 -->
        <div class="info" v-if="cardMsg.discountsType==1">
          <van-icon name="info" size=".31rem" />限时特惠卡为商家提供的现实优惠活动，不支卡内再次充值
        </div>
      </div>

      <!-- 交易记录 -->
      <div class="log">
        <h2>交易记录</h2>

        <!-- 交易记录（条）-->
        <Logitem :img="log1.img" />
        <Logitem :img="log2.img" />
        <Logitem :img="log3.img" />
        <Logitem :img="log1.img" />
        <Logitem :img="log1.img" />
      </div>
    </div>
  </div>
</template>

<script>
import { userCardDetail } from "../../api/mine";
//引入icon图标
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);

// 引入轮播
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);

import Headertop from "@/components/header/index";
import Card from "@/components/card/index";
import Logitem from "@/components/logitem/index";
export default {
  name: "Carddetails",
  data() {
    return {
      title: "商家储值卡",
      idx: "", //点进来的id
      isshow: "true",
      cardMsg: "",
      card: {
        bgcolor1: "#1C1D1C",
        bgcolor2: "#525557"
      },
      list: [
        // {
        //   idx: "1001",
        //   bgcolor1: "#1C1D1C",
        //   bgcolor2: "#525557",
        //   top: "0",
        //   title: "储值",
        //   hotel: "如家连锁酒店",
        //   time: "使用时间2019.06.01——2020.06.01",
        //   num: "1234 5678 0000",
        //   remark: "用卡规则"
        // },
        // {
        //   idx: "1002",
        //   bgcolor1: "#FD691C",
        //   bgcolor2: "#FE9225",
        //   top: "-2.6rem",
        //   title: "储值",
        //   hotel: "如家连锁酒店",
        //   time: "使用时间2019.06.01——2020.06.01",
        //   num: "1234 5678 0000",
        //   remark: "用卡规则"
        // },
        // {
        //   idx: "1003",
        //   bgcolor1: "#fc5b59",
        //   bgcolor2: "#fe795f",
        //   top: "-5.2rem",
        //   title: "折扣",
        //   hotel: "锦江之星酒店",
        //   time: "使用时间2019.06.01——2020.06.01",
        //   num: "1234 5678 0000",
        //   remark: "用卡规则"
        // }
      ],
      log1: {
        img: "log1.png"
      },
      log2: {
        img: "log2.png"
      },
      log3: {
        img: "log3.png"
      }
    };
  },
  props: {},
  methods: {
    onChange(index) {
      console.log("当前 Swipe 索引：" + index, 111);
      if (index == "2") {
        this.isshow = true;
      } else {
        this.isshow = false;
      }
    }
  },
  filters:{
    parseFloat(num){
     return (num*10).toString()
    }
  },
  mounted() {
    var cardId = this.$route.query.cardId;
    var data = { cardId: cardId };
    userCardDetail(data).then(res => {
      console.log(res);
      this.cardMsg = res.data.card;
    });
  },
  components: {
    Headertop,
    Card,
    Logitem
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info {
  position: absolute;
  bottom: 0.2rem;
  color: #feaf0d;
  height: 0.32rem;
  line-height: 0.32rem;
}
.van-icon {
  top: 10%;
}
.wraper {
  background: #fff;
}

.card {
  margin: 0.5rem 0;
}

/* 余额 */
.balance {
  background: #fff;
  margin: 0.12rem 0;
  padding: 0.53rem 0 0.55rem 0.47rem;
  overflow: hidden;
  position: relative;
}
.balance_lf {
  text-align: left;
  float: left;
}
.balance_bd {
  font-size: 0.46rem;
  color: #050505;
  height: 0.46rem;
  line-height: 0.46rem;
  margin-bottom: 0.32rem;
}
.balance_nm {
  font-size: 0.48rem;
  height: 0.48rem;
  line-height: 0.48rem;
  color: #faba40;
  font-weight: bold;
}
.balance_rt {
  float: right;
  width: 2.24rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #008489;
  border-radius: 0.1rem;
  font-size: 0.46rem;
  color: #fff;
  position: absolute;
  bottom: 0.55rem;
  right: 0.48rem;
}
/* 交易记录 */
.log {
  padding: 0.5rem 0 0.27rem 0.48rem;
  background-color: #fff;
}
h2 {
  text-align: left;
  font-size: 0.46rem;
  color: #050505;
}
</style>
