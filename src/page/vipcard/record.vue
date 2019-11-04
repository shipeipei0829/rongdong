
<template>
  <div class="record" style="height:100vh;background:#fff">
    <!-- 头部 -->
    <Headertop :title="title" />

    <!-- 充值明细 -->
    <ul class="details">
      <li class="detailsitem">
        <div class="detailsitem_lf">
          <div class="detailsitem_tt">微信支付</div>
          <div class="detailsitem_tm">2019-06-01 12:00:00</div>
        </div>
        <div class="detailsitem_rt">
          <div class="detailsitem_pc">¥300.00</div>
          <div class="detailsitem_fn">完成</div>
        </div>
      </li>
      <li class="detailsitem">
        <div class="detailsitem_lf">
          <div class="detailsitem_tt">微信支付</div>
          <div class="detailsitem_tm">2019-06-01 12:00:00</div>
        </div>
        <div class="detailsitem_rt">
          <div class="detailsitem_pc">¥300.00</div>
          <div class="detailsitem_fn detailsitem_error">支付失败</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { tradingHourCurrency } from "../../api/mine";
import Headertop from "@/components/header/index";
export default {
  name: "Record",
  data() {
    return {
      title: "充值记录"
    };
  },
  props: {},
  methods: {},
  mounted() {
    tradingHourCurrency({page:1,limit:10}).then(res=>{console.log(res)})
  },
  components: {
    Headertop
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detailsitem {
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 0.5rem;
}
.detailsitem_lf,
.detailsitem_rt {
  flex: 1;
  font-size: 0.42rem;
}
.detailsitem_lf {
  text-align: left;
}
.detailsitem_rt {
  text-align: right;
}

.detailsitem_tt,
.detailsitem_tm,
.detailsitem_pc,
.detailsitem_fn {
  line-height: 0.42rem;
  height: 0.42rem;
}
.detailsitem_tt {
  margin: 0.44rem 0 0.47rem 0;
}
.detailsitem_tm {
  color: #6c6c6c;
  margin-bottom: 0.37rem;
}
/* 成功字体颜色 */
.detailsitem_pc,
.detailsitem_fn {
  color: #118589;
}
.detailsitem_pc {
  margin: 0.48rem 0 0.47rem 0;
}
.detailsitem_fn {
  margin-bottom: 0.37rem;
}
/* 支付失败字体颜色 */
.detailsitem_error{
  color: #E72D2D
}
</style>
