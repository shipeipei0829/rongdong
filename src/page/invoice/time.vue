
<template>
  <div class="time" style="background:#F0F0F0;height:100vh;width:100%">
    <Headertop :title="title" />

    <!-- 账户余额 -->
    <div class="hours_tp">
      <div class="hours_tt">账户余额（小时币）</div>
      <div class="hours_tm">240.00</div>
    </div>

    <!-- 充值通用时间币 -->
    <div class="hours_explain">
      <div class="hours_info">
        <van-icon name="info-o" size=".4rem" />小时币使用说明
      </div>

      <ul class="addtime">
        <li class="addtime_item">
          <div class="addtime_item_lf">充值通用时间币</div>
          <div class="addtime_item_rt"></div>
        </li>
        <hr>
        <li class="addtime_item">
          <div class="addtime_item_lf">100小时币</div>
          <div class="addtime_item_rt">
            <span class="price_old">
              原价
              <i>￥</i>200
            </span>
            <span class="price_now">
              <i>￥</i>160
            </span>
          </div>
        </li>
        <hr>
        <li class="addtime_item">
          <div class="addtime_item_lf">100小时币</div>
          <div class="addtime_item_rt"></div>
        </li>
        <hr>
        <li class="addtime_item">
          <div class="addtime_item_lf">100小时币</div>
          <div class="addtime_item_rt"></div>
        </li>
        <hr>
        <li class="addtime_item">
          <div class="addtime_item_lf">自定义</div>
          <div class="addtime_item_rt"></div>
        </li>
      </ul>

      <div class="hours_info">
        <van-icon name="info-o" size=".4rem" />充值说明
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
Vue.use(Icon);
import Headertop from "@/components/header/index";
export default {
  name: "Time",
  data() {
    return {
      title: "储蓄时间"
    };
  },
  props: {},
  methods: {},
  mounted() {},
  components: {
    Headertop
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr{
  margin: 0 auto;
  height: 1px;
  background-color: #d8d8d8;
  border: none;
  width: 8.86rem;
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
}
/* 充值通用时间 */
.addtime {
  padding-bottom: 0.17rem;
  background: #fff;
  width: 9.84rem;
}
.addtime_item {
  height: 1.3rem;
  line-height: 1.3rem;
  overflow: hidden;
  padding: 0 0.49rem;
}
.addtime_item_lf {
  font-size: 0.48rem;
  width: 5.45rem;
  text-align: left;
  float: left;
}
.addtime_otem_rt {
  float: left;
}
i{
  font-size: .26rem;
}
.price_old {
  
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
</style>
