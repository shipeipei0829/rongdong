
<template>
  <div class="vipcard" style>
    <Headertop :title="title" :fixed="fixed" />
    <div class="vipcard_buywrap" style>
      <!-- 购买商家储值卡 -->
      <div class="buywrap" @click="addvip()">
        <div class="buy">
          <van-icon name="plus" size=".46rem" />购买商家储值卡
        </div>
      </div>

      <!-- 我购买的会员卡 -->
      <div class="buywrap_me">
        <h2>我购买的会员卡</h2>
        <!-- 会员卡 -->
        <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"> -->
        <Card
          v-for="item in list"
          :key="item.cardId"
          :bgcolor1="card.bgcolor1"
          :bgcolor2="card.bgcolor2"
          :top="card.top"
          :title="item.cardType==1?'储值卡':'打折卡'"
          :hotel="item.title "
          timeInfo="使用时间"
          :time="item.endTime"
          :num="item.cardNum"
          remark="用卡规则"
          discount=""
          @click.native="carddetails(item.cardId)"
        />
        <!-- </van-list> -->
      </div>
    </div>
  </div>
</template>

<script>
import { userCardsList } from "../../api/mine";
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
import { List } from "vant";
Vue.use(List);
import Headertop from "@/components/header/index";
import Card from "@/components/card/index";
export default {
  name: "Vipcard",
  data() {
    return {
      title: "商家储值卡",
      fixed: true,
      page: 1,
      limit: 4,
      list: [],
      loading: false,
      finished: false,
      card: {
        //   idx: "1001",
        bgcolor1: "#1C1D1C",
        bgcolor2: "#525557",
        top: "0"
        //   title: "储值",
        //   hotel: "如家连锁酒店",
        //   time: "使用时间2019.06.01——2020.06.01",
        //   num: "1234 5678 0000",
        //   remark: "用卡规则"
      }
      // card2: {
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
    };
  },
  props: {},
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    carddetails(idx) {
      this.$router.push({
        path: "/vipcard/details",
        query: {
          cardId: idx
        }
      });
      console.log(idx);
    },
    addvip() {
      this.$router.push({ path: "/vipcard/addcard" });
    } //添加会员卡
  },
  mounted() {
    userCardsList({ page: this.page, limit: this.limit }).then(res => {
      console.log(res.data.records);
      if (res.code == 0) {
        this.list = res.data.records;
      }
    });
  },
  components: {
    Headertop,
    Card
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vipcard_buywrap {
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.vipcard {
  display: flex;
  flex-direction: column;
  background: #f0f0f0;
  height: 100vh;
  padding-top: 1.2rem;
}
.van-icon {
  font-weight: bold;
  top: 6%;
}
.buywrap {
  height: 2.47rem;
  background-color: #fff;
  padding-top: 0.55rem;
  padding-bottom: 0.47rem;
  margin-bottom: 0.22rem;
}
.buy {
  margin: 0 auto;
  width: 8.88rem;
  height: 1.44rem;
  line-height: 1.44rem;
  border: 1px solid #008489;
  border-radius: 0.1rem;
  background-color: #fff;
  color: #fd9e23;
  font-size: 0.46rem;
  font-weight: bold;
}
.buywrap_me {
  background-color: #fff;
  flex: 1;
  position: relative;
}
h2 {
  font-size: 0.42rem;
  font-weight: bold;
  height: 1.2rem;
  line-height: 1.2rem;
  padding-left: 0.5rem;
  text-align: left;
}
</style>
