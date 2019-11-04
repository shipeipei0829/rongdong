<template>
  <div style class="resaless">
    <Leftheader title="房间剩余时间转售"></Leftheader>
    <div class="surplus">
      <!-- 转售时间 -->
      <div class="surplus_top">
        <div
          class="surplus_top_item"
          style="border-bottom:1px solid #F0F0F0;display:flex;"
          @click="showdate = true"
        >
          <p>转售房间可入住开始时间：</p>
          <div class="surplus_top_item_right">
            <p class="text_time">{{startTime}}</p>
            <van-icon name="arrow" style="position: absolute;top: 1.77rem;" />
          </div>
        </div>
        <div class="surplus_top_item">
          <p>转售房间可入住结束时间：</p>
          <div class="surplus_top_item_right">
            <p class="text_time">{{leaveTime}}</p>
          </div>
        </div>
      </div>
      <!-- 出售信息 -->
      <div class="surplus_top" style="margin-top:0.3rem;">
        <div class="surplus_top_item" style="border-bottom:1px solid #F0F0F0;">
          <p>转售剩余{{hour}}小时</p>
          <div class="surplus_top_item_right">￥{{resalePrice}}</div>
        </div>
        <div class="surplus_top_item" style="border-bottom:1px solid #F0F0F0;">
          <p>打折出售</p>
          <div class="surplus_top_item_right step1" style="position:relative;">
            <van-stepper v-model="value" min="1" max="9" />
            <span style="position:absolute;top:.0;left:1.3rem;">折</span>
          </div>
        </div>
        <div class="surplus_top_item" style="position:relative;">
          <p>出售价格</p>
          <h6 style="position:absolute;font-size:.28rem;color:#6C6C6C;top:.4rem;">打折出售，成交速度更快哟！</h6>
          <div class="surplus_top_item_right" style="color:red;">¥ {{salePrice}}</div>
        </div>
      </div>
      <!-- 限时出售 -->

      <div class="surplus_top" style="margin-top:0.3rem;">
        <div class="surplus_top_item" style="border-bottom:1px solid #F0F0F0;position:relative;">
          <van-checkbox v-model="checked" style="top:.4rem" color="#008489"></van-checkbox>
          <p style="  position: absolute; left: .6rem;">限时出售</p>
          <h6
            style="position:absolute;font-size:.28rem;color:#6C6C6C;top:.4rem;left:0.6rem;"
          >超时未出售，预存商家</h6>
          <div class="surplus_top_item_right step2" style="position:relative;">
            <van-stepper v-model="time" step="0.5" min="0" :max="max" />
            <span style="position:absolute;top:-.02rem;left:1.6rem;">小时</span>
          </div>
        </div>
        <div class="surplus_top_item">
          <p>转售成功后支付打扫费</p>
          <div class="surplus_top_item_right" style="color:red;">¥ {{cleanPrice}}.00</div>
        </div>
      </div>
    </div>
    <!-- 按钮 -->
    <div class="mask_button" @click="submit()">确认转售</div>
    <!-- 弹窗 -->
    <!-- 时间选择 -->
    <van-popup v-model="showdate" position="bottom">
      <van-datetime-picker
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="showdate = false"
        @confirm="handleConfirm"
        :filter="filter"
      />
    </van-popup>
  </div>
</template>
<script>
import { findHotleOrderInfo, sendSubOrders } from "../../api/order";
import { loadRoomDetail } from "../../api/home/details";
import { Stepper } from "vant";
Vue.use(Stepper);
import { Collapse, CollapseItem } from "vant";
Vue.use(Collapse).use(CollapseItem);
import { Checkbox, CheckboxGroup } from "vant";
Vue.use(Checkbox).use(CheckboxGroup);
import { Icon } from "vant";
Vue.use(Icon);
import { Toast } from 'vant';
Vue.use(Toast);
import { DropdownMenu, DropdownItem } from "vant";
Vue.use(DropdownMenu).use(DropdownItem);
import Leftheader from "@/components/header/index";
export default {
  data() {
    return {
      value: "9",
      time: "0.5",
      max: "2", //限时转售最大小时值
      showdate: false,
      minDate: "",
      maxDate: "",
      currentDate: new Date(),
      leaveTime: "", //转售结束时间
      checked: true, //是否限时转售
      option: [{ text: "0.5", value: 0 }, { text: "1", value: 1 }],
      startTime: "请选择",
      hour: "", //转售剩余时间
      endtimes: "",
      oldPrice: "", //房间定价
      resalePrice: "", //转售定价
      salePrice: "", //打折价格
      cleanPrice: "", //清洁费用
      limitResaleTime: "" //限时转售时间，一直转售'',限时转换成小时
    };
  },
  components: {
    Leftheader
  },
  methods: {
    filter(type, options) {
      if (type === "minute") {
        return options.filter(option => option % 60 === 0);
      }

      return options;
    },
    handleConfirm(value) {
      var date = value;
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      var h = date.getHours();
      var mi = date.getMinutes();
      if (m >= 1 && m <= 9) {
        var mm = "0" + m;
      }
      if (d >= 0 && d <= 9) {
        d = "0" + d;
      }
      if (h >= 0 && h <= 9) {
        h = "0" + h;
      }
      if (mi >= 0 && mi <= 9) {
        mi = "0" + mi;
      }

      // 2018-01-03 00:00:00
      this.startTime = y + "-" + mm + "-" + d + " " + h + ":" + mi;
      if (this.$router.query == 999) {
        this.hour = parseInt((this.endtimes - date) / (1000 * 60 * 60)) - 1;
      } else {
        this.hour =
          (new Date(this.leaveTime) - new Date(this.startTime)) /
            (1000 * 60 * 60) -
          1;
      }
      // this.resalePrice = Math.round((this.oldPrice / 24) * this.hour);
      var resalePrice = (this.oldPrice / 24) * this.hour * 0.9;
      // console.log(resalePrice);
      this.resalePrice = resalePrice.toFixed(2);
      this.salePrice = parseFloat(this.resalePrice).toFixed(2);
      // console.log(this.resalePrice,this.hour, this.resalePrice);
      // window.localStorage.setItem('toShopTime',JSON.stringify(this.toShopTime))
      this.showdate = false;
    },
    //确认转售
    submit() {
      var resaleMsg = {
        orderId: this.$route.query.orderId, //7
        reSaleStartTime: this.startTime, //转售开始时间  //1
        hour: this.hour, //转售共计小时  //2
        leaveTime: this.leaveTime, //转售结束时间  //3
        precPay: this.oldPrice, //4
        resaleWay: this.checked == true ? "1" : "0", //转售订单方式5  0一直转售 1限时转售
        reSaleDiscount: this.value / 10, //转售折扣6
        limitResaleTime: this.limitResaleTime, //限时转售的时间 7  一直转售默认为空
        startTime: this.startTime, //转售开始时间
        actualLeaveTime: this.leaveTime,
        discount: this.value / 10, //打折
        realPrice: this.resalePrice, //实际出售价格
        saleTime: this.time, //限时长出售
        cleanPrice: this.cleanPrice //转售成功的打扫费
      };
      if (this.$route.query.ordertype == 999) {
        window.localStorage.setItem("resaleMsg", JSON.stringify(resaleMsg));
        this.$router.go(-1);
      } else {
        if (resaleMsg.hour <= 0) {
          alert("无可转售时间，请重新选择");
        } else {
          sendSubOrders(resaleMsg).then(res => {
            this.$router.push({ path: "/order/index" });
            console.log(res);
          });
        }
      }
    }
  },
  watch: {
    // 监听折扣变化
    value() {
      this.salePrice = (this.resalePrice * parseFloat(this.value / 10)).toFixed(
        2
      );
    },
    //房间转售时间小于1小时不可转售
    hour(value) {
      console.log(value);
    }
    //是否限时转售

    //限时时长
  },
  created() {
    //订单列表提交的转售
    if (this.$route.query.ordertype != "999") {
      //订单转售
      var orderId = this.$route.query.orderId;
      //获取订单详情
      findHotleOrderInfo({ orderId: orderId }).then(res => {
        if (res.code == 0) {
          console.log(res.data);
          this.minDate = new Date(res.data.checkInTime);
          this.maxDate = new Date(res.data.leaveTime);
          this.leaveTime = res.data.leaveTime.slice(0, 16); //转售结束时间
          this.startTime = "请选择";
          this.hour = res.data.hour; //转售剩余时间
          this.oldPrice = res.data.actualPay; //房间定价
          this.resalePrice = res.data.actualPay; //转售定价
          this.salePrice = (
            this.resalePrice * parseFloat(this.value / 10)
          ).toFixed(2); //打折价格
          this.cleanPrice = "20"; //清洁费用
        }
      });
    }

    //下单直接转售
    if (this.$route.query.ordertype == "999") {
      // 转售房间结束时间  2019-06-13 13:00
      if (window.sessionStorage.getItem("filterDate"))
        var endDate = JSON.parse(window.sessionStorage.getItem("filterDate"))
          .endDate;
      var endTime = JSON.parse(window.sessionStorage.getItem("filterDate"))
        .endTime;
      var time = endDate + " " + endTime;
      var d1 = new Date(time);
      var d2 = d1.getTime() - 1 * 60 * 60 * 1000;
      d2 = new Date(d2);
      this.endtimes = d1;
      var year = d1.getFullYear();
      var mon = d1.getMonth() + 1;
      mon = mon > "10" ? mon : "0" + mon;
      var day = d1.getDate() > "10" ? d1.getDate() : "0" + d1.getDate();
      var hour = d1.getHours() > "10" ? d1.getHours() : "0" + d1.getHours();
      var min =
        d1.getMinutes() > "10" ? d1.getMinutes() : "0" + d1.getMinutes();
      this.leaveTime = year + "-" + mon + "-" + day + " " + hour + ":" + min;
      this.maxDate = d2;

      //     开始时间
      if (window.sessionStorage.getItem("filterDate"))
        var startDate = JSON.parse(window.sessionStorage.getItem("filterDate"))
          .startDate;
      var startTime = JSON.parse(window.sessionStorage.getItem("filterDate"))
        .startTime;
      var time = startDate + " " + startTime;
      var d = new Date(time);
      var year = d.getFullYear();
      var mon = d.getMonth() + 1;
      mon = mon > "10" ? mon : "0" + mon;
      var day = d.getDate() > "10" ? d.getDate() : "0" + d.getDate();
      var hour = d.getHours() > "10" ? d.getHours() : "0" + d.getHours();
      var min = d.getMinutes() > "10" ? d.getMinutes() : "0" + d.getMinutes();
      // this.startTime = year + "-" + mon + "-" + day + " " + hour + ":" + min;
      this.minDate = d;
      // 开始显示的剩余转售时间
      this.hour = parseInt((d1 - d) / (1000 * 60 * 60));
      // 开始显示的转售时间和转售价格
      var sid = this.$route.query.rmb;
      sid = sid.substring(sid.lastIndexOf("=") + 1, sid.length);
      this.oldPrice = sid;
      var resalePrice = (this.oldPrice / 24) * this.hour * 0.9;
      this.resalePrice = resalePrice.toFixed(2);
      this.salePrice = parseFloat(this.resalePrice).toFixed(2);
      this.resalePrice = this.oldPrice;
      this.salePrice = (this.resalePrice * parseFloat(this.value / 10)).toFixed(
        2
      );
      // 打扫费用
      var roomType = this.$route.query.roomType;
      var hotelId = this.$route.query.hotelId;
      loadRoomDetail({ roomType, hotelId }).then(res => {
        if (res.code == 0) {
          this.cleanPrice = res.data.cleanCost;
        }
      });
    }
  },
  mounted() {}
};
</script>
<style scoped>
.resaless >>> .van-stepper__input {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  margin: 0 !important;
}
.resaless >>> .van-stepper__minus,
.resaless >>> .van-stepper__plus {
  width: 0.64rem !important;
  height: 0.64rem !important;
}
.resaless >>> .step2 .van-stepper__input {
  width: 1.5rem !important;
  height: 0.64rem !important;
  text-align: left !important;
  padding-left: 0.25rem;
  font-size: 0.32rem !important;
}
.resaless >>> .step1 .van-stepper__input {
  width: 0.8rem !important;
  height: 0.64rem !important;
  text-align: left !important;
  padding-left: 0.25rem;
  font-size: 0.32rem !important;
}
.surplus_top_item_right {
  overflow: hidden;
  color: #6c6c6c;
  text-align: right;
  font-size: 0.36rem;
  padding-right: 0.2rem;
}

.resaless {
  background: #f0f0f0;
  height: 100vh;
  font-size: 0.4rem;
  color: #000;
}
.resale >>> .van-popup--top {
  width: 3rem !important;
  top: 9.45rem !important;
  left: 2.4rem !important;
}
.option {
  background: #fff;
  display: inline-block;
  height: 0.6rem;
  line-height: 0.6rem;
  padding-right: 0.3rem;
  border-radius: 0.2rem;
  margin-right: 0.3rem;
}
.mask_button {
  width: 100%;
  padding: 0.15rem 0.35rem;
  position: absolute;
  left: 0;
  bottom: 0;
}
.van-cell {
  font-size: 0.12rem;
}
.mask_button {
  height: 1.44rem;
  line-height: 1.44rem;
  color: #fff;
  font-size: 0.5rem;
  font-weight: 400;
  background: #118589;
}

.surplus {
  height: 100%;
}

.surplus_top {
  text-align: left;
  background: #fff;
  padding: 0 0.35rem;
}
.surplus_top_item {
  height: 1.35rem;
  line-height: 1.35rem;
  display: flex;
  justify-content: space-between;
}
</style>