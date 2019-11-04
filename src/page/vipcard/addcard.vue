
<template>
  <div class="addvip" style="background:#FFF;height:100vh;padding-top:1.4rem;">
    <Headertop :title="title" :fixed="fixed" />
    <!-- 选择地区 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" z-index="10" />
    </van-dropdown-menu>
    <!-- 我购买的会员卡 -->
    <div class="buywrap_me">
      <Card
        :bgcolor1="card1.bgcolor1"
        :bgcolor2="card1.bgcolor2"
        :top="card1.top"
        :title="card1.title"
        :hotel="card1.hotel"
        timeInfo="使用时间"
        :time="card1.time"
        :num="card1.num"
        :remark="card1.remark"
        @click.native="manage()"
      />
      <!-- <Card
        :bgcolor1="card2.bgcolor1"
        :bgcolor2="card2.bgcolor2"
        :top="card2.top"
        :title="card2.title"
        :hotel="card2.hotel"
        :time="card2.time"
        :num="card2.num"
        :remark="card2.remark"
        @click.native="manage()"
      />-->
      <!-- <Card
        :bgcolor1="card3.bgcolor1"
        :bgcolor2="card3.bgcolor2"
        :top="card3.top"
        :title="card3.title"
        :hotel="card3.hotel"
        :time="card3.time"
        :num="card3.num"
        :remark="card3.remark"
        @click.native="manage()"
      />-->
    </div>
  </div>
</template>

<script>
import { userCardsHotel, userCardsBaseArea, listArea } from "../../api/mine";
import Headertop from "@/components/header/index";
import Card from "@/components/card/index";
// 下拉菜单
import { DropdownMenu, DropdownItem } from "vant";
Vue.use(DropdownMenu).use(DropdownItem);
export default {
  name: "Addvip",
  data() {
    return {
      title: "添加会员卡",
      fixed: true,
      card1: {
        idx: "1001",
        bgcolor1: "#1C1D1C",
        bgcolor2: "#525557",
        top: "0",
        title: "储值",
        hotel: "如家连锁酒店",
        time: "使用时间2019.06.01——2020.06.01",
        num: "1234 5678 0000",
        remark: "用卡规则"
      },
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
      // card3: {
      //   idx: "1003",
      //   bgcolor1: "#fc5b59",
      //   bgcolor2: "#fe795f",
      //   top: "-5.2rem",
      //   title: "折扣",
      //   hotel: "锦江之星酒店",
      //   time: "使用时间2019.06.01——2020.06.01",
      //   num: "1234 5678 0000",
      //   remark: "用卡规则"
      // },
      value1: "110100",
      option1: [
        // { text: "北京", value: 0 },
        // { text: "武汉", value: 1 },
        // { text: "上海", value: 2 }
      ]
    };
  },
  props: {},
  methods: {
    //跳转到办理会员卡
    manage() {
      this.$router.push({ path: "/vipcard/manage" });
    },
    // 储值卡分页列表
    getuserCardsHotel(cityId) {
      userCardsHotel({ cityId: cityId }).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    // 城市列表
    userCardsBaseArea({ level: 2 }).then(res => {
      console.log(res.data);
      var option1 = res.data;
      for (var i = 0; i < option1.length; i++) {
        option1[i]["text"] = option1[i]["name"];
        option1[i]["value"] = option1[i]["id"];
      }
      console.log(option1);
      this.option1 = option1;
    });
  },
  components: {
    Headertop,
    Card
  },
  watch: {
    value1(newName) {
      console.log(newName);
      this.getuserCardsHotel(newName)
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buywrap_me {
  margin-top: 0.8rem;
}
.addvip >>> .van-dropdown-menu {
  background-color: transparent;
  width: 2.2rem;
  height: 1.3rem;
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0.5rem;
  border: none;
  outline: none;
}
.van-hairline--top-bottom::after {
  border: none !important;
}
.addvip >>> .van-dropdown-menu__title > .van-ellipsis {
  font-size: 0.36rem;
  color: #fff;
}
.addvip >>> .van-dropdown-menu__title::after {
  top: 0.17rem;
  border-color: transparent transparent #fff #fff;
}
.addvip >>> .van-popup--top {
  top: 1.2rem;
}
.addvip >>> .van-cell__title {
  padding-left: 0.8rem;
  text-align: left;
}
.addvip >>> .van-cell__value {
  text-align: right;
  padding-right: 0.8rem;
}
.addvip >>> .van-dropdown-menu__title::after {
  top: 0.06rem !important;
  left: 1.5rem !important;
  border-width: 0.1rem !important;
  border-style: solid !important;
  margin-left: 0.1rem;
}
</style>
