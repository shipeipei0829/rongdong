<template>
  <li class="orderlist" style="list-style:none">
    <div class="van_card_top">
      <img src="../../img/order1.png" alt class="van-card__thumb" />
      <div class="van_card_con">
        <div class="title">北冰洋330ml橙汁汽水</div>
        <div class="number">x3</div>
      </div>
      <div class="van_card_rig" style="margin-left:auto">
        <div class="price_current">￥3.99</div>
        <div class="price_original" style="
  margin-top: .35rem;">￥4.50</div>
      </div>
    </div>
    <div class="van_card_bottom">
      <div class="num_total">共3件商品</div>
      <div class="price_total">
        合计：
        <span>￥11.97</span>
      </div>
      <div class="operation apply_refund" @click="applyrefund">申请退款</div>
    </div>
  </li>
</template>

<script>
export default {
  name: "Orderlist",
  data() {
    return {};
  },
  props: {
    msg: {}
  },
  methods: {
    handlelogin(val) {},
    onClickNav(index) {
      this.mainActiveIndex = index;
    },
    onClickItem(data) {
      this.activeId = data.id;
    },
    applyrefund(){
      this.$router.push({path:'/order/applyrefund'})
    }
  },
  mounted() {},
  components: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.orderlist {
  margin-top: 0.3rem;
  padding: 0 0.48rem 0;
  background-color: #fff;
}
.van_card_top {
  display: flex;
}
.van-card__thumb {
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 0.1rem;
  margin: 0.2rem 0.29rem 0.2rem 0;
}
.van_card_con {
  text-align: left;
}
.van_card_con .title {
  font-weight: bold;
  font-size: 0.36rem;
  line-height: 1.06rem;
}
.van_card_con .number {
  color: #6c6c6c;
  font-size: 0.3rem;
  line-height: 0.3rem;
}
.price_current {
  margin-top: 0.41rem;
  font-size: 0.36rem;
  height: 0.36rem;
  line-height: 0.36rem;
  font-weight: bold;
}
.price_original {
  font-size: 0.3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #6c6c6c;
  font-weight: bold;
  text-decoration: line-through;
}

.van_card_bottom {
  border-top:1px solid #F0F0F0;
  display: flex;
  color: #6C6C6C;
  font-size: .3rem;
  height: .88rem;
  line-height: .88rem;
  position: relative;
}
.num_total{
  padding-left: 2.11rem;
  
}
.price_total{
  padding-left: 1em;
}
.price_total span{
  font-size: .34rem;
  color: #000;
  font-weight: bold;
}
.operation{
  width: 1.96rem;
  height: .56rem;
  line-height: .56rem;
  border: 1px solid #6C6C6C;
  border-radius: .1rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
/* 退款中 */
.refunding{
  color: #E72D2D;
}
/* 已退款 */
.refund{
  color: #6C6C6C;
}
/* 申请退款 */
.apply_refund{
  color:#008489;
}
</style>