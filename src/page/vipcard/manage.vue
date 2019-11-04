
<template>
  <div class="manage" style="background:#FFF;height:100vh;">
    <Headertop :title="title" />

    <Card
      :bgcolor1="card1.bgcolor1"
      :bgcolor2="card1.bgcolor2"
      :top="card1.top"
      :title="card1.title"
      :hotel="card1.hotel"
      :time="card1.time"
      :num="card1.num"
      :remark="card1.remark"
      :price="card1.price"
    />
    <!-- 会员信息填写  required显示必填*号 -->
    <h2>会员信息</h2>
    <div class="inputwraper">
      <div class="input_row">
        <div>
          <span>会员姓名</span>
          <i>:</i>
        </div>
        <input type="text" v-model="card.username" placeholder="请输入姓名，限10字符" />
      </div>
      <!-- 出生日期 -->
      <div class="input_row" @click="show = true">
        <div>
          <span>出生日期</span>
          <i>:</i>
        </div>
        <input v-model="card.userdata" placeholder="请填写出生日期" disabled />
      </div>

      <div class="input_row">
        <div>
          <span>电话</span>
          <i>:</i>
        </div>
        <input type="tel" v-model="card.usertel" placeholder="13868888779" />
      </div>

      <div class="input_row">
        <div>
          <span>会员性别</span>
          <i>:</i>
        </div>
        <van-radio-group v-model="card.sex">
          <van-radio name="男">男</van-radio>
          <van-radio name="女">女</van-radio>
        </van-radio-group>
      </div>

      <div class="input_row">
        <div>
          <span>邮箱</span>
          <i>:</i>
        </div>
        <input type="email" v-model="card.usermail" placeholder="43286798@163.com" />
      </div>
    </div>

    <!-- 办理会员按钮 -->
    <div class="button">办理会员（¥1980）</div>

    <!-- 出生日期 -->
    <!-- v-model="show"  :formatter="formatter"-->
    <van-popup v-model="show" position="bottom" :overlay="true">
      <van-datetime-picker
        type="date"
        :min-date="minDate"
        :max-date="currentDate"
        @cancel="show = false"
        @confirm="onConfirm"
        @change="onChange"
      />
    </van-popup>
  </div>
</template>

<script>
// 单选框
import { RadioGroup, Radio } from "vant";
Vue.use(RadioGroup);
Vue.use(Radio);

// 头部
import Headertop from "@/components/header/index";
import Card from "@/components/card/index";

// 日期选择
import { Popup } from "vant";
Vue.use(Popup);

export default {
  name: "Manage",
  data() {
    return {
      title: "办理会员卡",
      card: {
        username: "",
        userdata: "",
        usertel: "",
        usermail: "",
        sex: "男"
      },
      card1: {
        idx: "1001",
        bgcolor1: "#fe795f",
        bgcolor2: "#fc5b59",
        top: "0",
        title: "9折",
        hotel: "如家连锁酒店",
        time: "有效期：2020.06.01",
        num: "",
        remark: "",
        price: "1980"
      },
      show: false,
      minDate: new Date(1900, 0, 1),
      currentDate: new Date()
    };
  },
  props: {},
  methods: {
    onChange(e) {
      let endTimeArr = e.getValues(); //["2019", "03", "22", "17", "28"]
      this.card.userdata = `${endTimeArr[0]}-${endTimeArr[1]}-${
        endTimeArr[2]
      } `;
    }, //日期选项改变时触发
    onConfirm() {
      this.show = false;
      this.card.userdata = this.card.userdata;
    } //日期选项确定
    // formatter(type, value) {
    //   if (type === "year") {
    //     return `${value}年`;
    //   } else if (type === "month") {
    //     return `${value}月`;
    //   } else {
    //     return `${value}日`;
    //   }
    //   return value;
    // } //格式化日期
  },
  mounted() {},
  components: {
    Headertop,
    Card
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin: 0.5rem 0;
}
h2 {
  margin-top: 1.2rem;
  font-size: 0.42rem;
  font-weight: bold;
  text-align: left;
  padding-left: 0.48rem;
  height: 0.6rem;
  line-height: 0.6rem;
  margin-bottom: 0.3rem;
}

.input_row {
  display: flex;
  height: 1.05rem;
  line-height: 1.05rem;
  padding-left: 1.2rem;
}
span {
  display: inline-block;
  width: 2.6rem;
  text-align-last: justify;
  color: #008489;
  font-size: 0.42rem;
}
i {
  color: #008489;
  font-size: 0.42rem;
  font-weight: bold;
  padding-right: 0.5rem;
}
input {
  border: none;
  font-size: 0.36rem;
  background-color: #fff;
}
/* 按钮 */
.button {
  width: 100%;
  height: 1.43rem;
  position: fixed;
  bottom: 0;
  background-color: #008489;
  color: #fff;
  font-size: 0.5rem;
  line-height: 1.43rem;
}
.manage >>> .van-radio-group {
  display: flex;
}
.manage >>> .van-icon {
  width: 0.4rem;
  height: 0.4rem;
}
.manage >>> .van-radio {
  margin-right: 0.5rem;
}
.manage >>> .van-icon-success:before {
  font-size: 0.4rem;
}
.manage >>> .van-radio__icon {
  height: 0.4rem;
  line-height: 0.4rem;
}
.manage >>> .van-radio__label {
  font-size: 0.4rem;
}
</style>
