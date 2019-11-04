
<template>
  <div class="time" style="background:#F0F0F0;width:100%;padding-top:1.2rem;">
    <Headertop :title="title" :fixed="fixed" />
    <div style="-webkit-overflow-scrolling: touch;overflow-y:auto;height:100vh;">
      <!-- 账户余额 -->
      <div class="hours_tp">
        <div class="hours_tt">账户余额（小时币）</div>
        <div class="hours_tm">{{detail.cash}}.00</div>
      </div>

      <!-- 充值通用时间币 -->
      <div class="hours_explain">
        <div class="hours_info">
          <van-icon name="info" size=".4rem" />小时币使用说明
        </div>
        <!-- 酒店类型 -->
        <ul class="addtime" style="margin-bottom:.2rem">
          <li class="addtime_item">
            <div class="addtime_item_lf addtime_item_first">充值通用时间币</div>
            <div class="addtime_item_rt addtime_item_dd"></div>
          </li>
          <li class="addtime_item" v-for="item in detail.hotelLevelHours" :key="item.id">
            <div class="addtime_item_lf addtime_item_first">{{item.title}}酒店</div>
            <div class="addtime_item_rt addtime_item_dd">{{item.cash}}小时币={{item.price}}小时</div>
          </li>
          <!-- <li class="addtime_item">
            <div class="addtime_item_lf addtime_item_first">三星级酒店</div>
            <div class="addtime_item_rt addtime_item_dd">240小时币=80小时</div>
          </li>
          <li class="addtime_item">
            <div class="addtime_item_lf addtime_item_first">四星级酒店</div>
            <div class="addtime_item_rt addtime_item_dd">240小时币=60小时</div>
          </li>
          <li class="addtime_item" style="border:none">
            <div class="addtime_item_lf addtime_item_first">五星级酒店</div>
            <div class="addtime_item_rt addtime_item_dd">240小时币=40小时</div>
          </li> -->
        </ul>
        <!-- 充值通用时间币 -->
        <ul class="addtime">
          <li class="addtime_item">
            <div class="addtime_item_lf addtime_item_first">充值通用时间币</div>
            <div class="addtime_item_rt"></div>
          </li>

          <li class="addtime_item" v-for="item in detail.HourCurrencySells" :key="item.id">
            <div class="addtime_item_lf">
              <span>{{item.num}}</span>小时币
            </div>
            <div class="addtime_item_rt">
              <span class="price_old">
                原价
                <i>￥</i>{{item.price}}
              </span>
              <span class="price_now">
                <i>￥</i>{{item.currentPrice}}
              </span>
            </div>
          </li>

          <!-- <li class="addtime_item">
            <div class="addtime_item_lf">
              <span>100</span>小时币
            </div>
            <div class="addtime_item_rt">
              <span class="price_old">
                原价
                <i>￥</i>200
              </span>
              <span class="price_now">
                <i>￥</i>160
              </span>
            </div>
          </li> -->

          <!-- <li class="addtime_item">
            <div class="addtime_item_lf">
              <span>100</span>小时币
            </div>
            <div class="addtime_item_rt">
              <span class="price_old">
                原价
                <i>￥</i>200
              </span>
              <span class="price_now">
                <i>￥</i>160
              </span>
            </div>
          </li> -->

          <li class="addtime_item" style="border:none;color: #008489;">
            <div class="addtime_item_lf addtime_item_self">自定义</div>
            <div class="addtime_item_rt">
              <span class="price_now">充值</span>
            </div>
          </li>
        </ul>

        <div class="hours_info" style="padding-bottom: 3rem;position:relative">
          <van-icon
            name="info"
            size=".4rem"
            style="position: absolute;top: 0.18rem;right: 1.2rem;"
          />充值说明
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hourCurrencySell } from "../../api/mine";
import { Icon } from "vant";
Vue.use(Icon);
import Headertop from "@/components/header/index";
export default {
  name: "Time",
  data() {
    return {
      title: "储蓄时间",
      fixed: true,
      righttext: "充值明细",
      detail:{
        cash:'',
        hotelLevelHours:'',
        HourCurrencySells:''
      }

    };
  },
  props: {},
  methods: {
    onClickRight() {
      console.log("1111");
    }
  },
  mounted() {
    hourCurrencySell().then(res=>{
      console.log(res.data)
      this.detail.cash = res.data.cash;
      this.detail.hotelLevelHours = res.data.hotelLevelHours; 
      this.detail.HourCurrencySells = res.data.HourCurrencySells
      console.log(this.detail.HourCurrencySells)
    })
  },
  components: {
    Headertop
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-icon {
  top: 10%;
}
.hours_tp {
  height: 5.04rem;
  background-color: #008489;
  color: #fff;
  text-align: left;
  padding-left: 0.5rem;
}
.hours_tt {
  padding-top: 0.8rem;
  font-size: 0.42rem;
  height: 0.42rem;
  line-height: 0.42rem;
}
.hours_tm {
  padding-top: 1.24rem;
  padding-bottom: 1.17rem;
  font-size: 1.92rem;
  height: 1.92rem;
  line-height: 1.92rem;
}
/* bt */
.hours_explain {
  font-size: 0.3rem;
  text-align: right;
  padding: 0 0.5rem;
}
.hours_info {
  color: #f2bb12;
  height: 0.79rem;
  line-height: 0.79rem;
}
/* 充值通用时间 */
.addtime {
  padding-bottom: 0.17rem;
  background: #fff;
  width: 9.84rem;
  border-radius: 0.1rem;
}
.addtime_item {
  height: 1.3rem;
  line-height: 1.3rem;
  overflow: hidden;
  margin: 0 0.49rem;
  border-bottom: 1px solid #ececec;
}
.addtime_item_lf {
  font-size: 0.48rem;
  text-align: left;
  float: left;
}
.addtime_item_first {
  font-size: 0.48rem;
}
.addtime_otem_rt {
  float: left;
}
i {
  font-size: 0.26rem;
}

.price_old {
  color: #585858;
  font-size: 0.3rem;
  margin-right: 0.2rem;
}
.price_now {
  width: 1.95rem;
  height: 0.62rem;
  line-height: 0.62rem;
  display: inline-block;
  border: 1px solid #008489;
  font-size: 0.42rem;
  color: #fff;
  background-color: #008489;
  text-align: center;
  border-radius: 0.1rem;
}

span {
  color: #008489;
}
.addtime_item_dd {
  font-size: 0.36rem;
  color: #008489;
}
/* 充值明细 */
.van-nav-bar__text:active {
  background: transparent;
}
</style>
