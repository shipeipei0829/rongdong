<template>
  <div class="continue" style="background:#F0F0F0;height:100vh;">
    <Leftheader title="续住"></Leftheader>
    <div class="continue_content">
      <div @click="onContinue()">
        <p>
          <span>*</span>
          <span>续住离店时间</span>
        </p>
        <p class="continue_right" v-if="show">
          <span>请选择</span>
          <span class="continue_img">
            <img src="./../../img/right.png" alt />
          </span>
        </p>
        <p class="continue_right" v-if="!show">{{end_time}}</p>
      </div>
      <div>
        <p>
          <span>*</span>
          <span>
            预估续住价格
            <p style="font-size:0.32rem; color:#73C8FF; font-weight:400;">续住须知</p>
          </span>
        </p>
        <p class="continue_money">
          <span>¥</span>
          <span>200.00</span>
        </p>
      </div>
    </div>
    <!-- 时间选择 -->
    <van-popup v-model="showdate" position="bottom">
      <van-datetime-picker
        type="datetime"
        :min-date="minDate"
        :filter="filter"
        @cancel="showdate = false"
        @confirm="confirm"
        @change="endTimeChange"
      />
    </van-popup>
    <!-- 底部 -->
    <div class="continue_button" @click="continue_button(orderId)">申请续住</div>
  </div>
</template>
<script>
import Leftheader from "@/components/header/index";
import { DatetimePicker } from "vant";
Vue.use(DatetimePicker);
import order from "../../api/date/order";
export default {
  name: "Continue",
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      showdate: false,
      end_time: "",
      show: true,
      orderId: this.$route.query.orderId,
      orderlist: ""
    };
  },
  components: {
    Leftheader
  },
  created() {
    this.orderlist = localStorage.getItem("orderlist")
      ? JSON.parse(localStorage.getItem("orderlist"))
      : null;
  },
  methods: {
    filter(type, values) {
      if (type === "minute") {
        return values.filter(values => values % 10 === 0);
      }
      return values;
    },
    onContinue() {
      this.showdate = true;
    },
    endTimeChange(e) {
      this.show = false;
      let endTimeArr = e.getValues(); //["2019", "03", "22", "17", "28"]
      this.end_time = `${endTimeArr[0]}-${endTimeArr[1]}-${endTimeArr[2]}  ${
        endTimeArr[3]
      }:${endTimeArr[4]}:00`;
    },
    confirm() {
      this.showdate = false;
      this.end_time = this.end_time;
    },
    //申请续订，添加字段renewalTime
    continue_button(orderId) {
      for (var i in this.orderlist) {
        if (this.orderlist[i].orderId == orderId) {
          this.orderlist[i].renewalTime = this.end_time;
        }
      }
      localStorage.setItem("orderlist", JSON.stringify(this.orderlist));
      this.$router.push({
        path: "/page/jump/residence",
        query: { orderId: orderId }
      });
    }
  },
  watch: {
    //     orderlist: {
    //       handler(newVal,oldVal) {
    //         console.log(newVal)
    //         localStorage.setItem("orderlist", JSON.stringify(newVal));
    //       },
    //       deep: true
    //     }
  }
};
</script>
<style>
.continue_content {
  background: #fff;
}

.continue_content > div {
  justify-content: space-between;
  padding: 0.2rem 0.3rem;
}

.continue_content > div,
.continue_content > div p {
  display: flex;
}

.continue_content > div span {
  display: block;
}

.continue_content > div > p:first-child > span:first-child {
  color: #e41b2e;
  font-size: 0.4rem;
  font-weight: 400;
  margin: 0.24rem 0.15rem 0 0.24rem;
}

.continue_content > div > p:first-child > span:last-child {
  font-size: 0.4rem;
  color: #000000;
  font-weight: 400;
  padding-top: 0.2rem;
}

.continue_right {
  color: #6c6c6c;
  font-size: 0.32rem;
  font-weight: 400;
  padding-top: 0.2rem;
  padding-right: 0.25rem;
}

.continue_right > span:first-child {
  margin-right: 0.1rem;
}

.continue_img {
  width: 0.2rem;
  height: 0.3rem;
  margin-top: -0.03rem;
}

.continue_img img {
  width: 100%;
  height: 100%;
}

.continue_content > div:first-child {
  border-bottom: 0.03rem solid #f0f0f0;
}

.continue_money {
  font-size: 0.32rem;
  font-weight: 400;
  padding-right: 0.2rem;
  padding-top: 0.3rem;
}

.continue_money > span:first-child {
  color: #000000;
  margin-right: 0.1rem;
}

.continue_money > span:last-child {
  color: #e41b2e;
}

.continue_text {
  font-size: 0.32rem;
  color: #000000;
  font-weight: 400;
}

/* 底部按钮 */
.continue_button {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1.44rem;
  background: #fff;
  color: #118589;
  font-size: 0.5rem;
  text-align: center;
  box-shadow: 0px -1px 0px 0px rgba(108, 108, 108, 0.2);
  line-height: 1.44rem;
}
</style>