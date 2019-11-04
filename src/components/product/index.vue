<template>
  <div class="sale">
    <!-- banner -->
    <img src="../../img/banner.png" alt class="banner" />
    <!-- 选区 -->
    <div class="product_list" v-for="item in product" :key="item.id">
      <div class="product_one">
        <div class="product_one_pic">
          <img src="../../img/1.png" alt />
        </div>
        <div class="product_one_con">
          <div class="product_one_con1">{{item.title}}</div>
          <div class="product_one_con2">{{item.guige}}</div>
          <div class="product_one_con3">
            <div class="price">
              <span>￥{{item.price}}</span>/瓶
            </div>
            <div class="number">
              <van-stepper v-model="item.value" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// options 为可选参数，无则不传
import { Stepper } from "vant";

Vue.use(Stepper);
import "@/../public/cdn/common.js";
export default {
  name: "sale",
  data() {
    return {
      active: 0,
      value: 1,
      product: [
        {
          id: "100001",
          title: "北冰洋汽水",
          guige: "橙汁/330ml",
          price: "3.99",
          value: "1"
        },
        {
          id: "100002",
          title: "北冰洋汽水",
          guige: "橙汁/330ml",
          price: "3.99",
          value: "1"
        },
        {
          id: "100003",
          title: "北冰洋汽水",
          guige: "橙汁/330ml",
          price: "3.99",
          value: "1"
        }
      ]
    };
  },
  props: {
    msg: {}
  },
  methods: {},

  components: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sale >>> .van-stepper__minus {
  border: 1px solid #ccc;
  width: 0.48rem;
  height: 0.48rem;
  border-radius: 50%;
}
.sale >>> .van-stepper__input {
  background-color: transparent;
}
.sale >>> .van-stepper__plus {
  background: #008489;
  width: 0.48rem;
  height: 0.48rem;
  border-radius: 50%;
}
.sale {
  float: right;
}
.banner {
  width: 6.7rem;
  height: 1.89rem;
  margin: 0.51rem 0.5rem 0.37rem 0.72rem;
}
.product_one {
  display: flex;
  border-bottom: 0.02rem solid #e5e5e5;
}
.product_one_pic {
  width: 1.8rem;
  height: 1.8rem;
  margin: auto 0;
  position: relative;
}
.product_one_pic img {
  position: absolute;
  width: 90%;
  height: 90%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.product_one_con {
  text-align: left;
  flex: 1;
}
.product_one_con1 {
  font-size: 0.48rem;
  height: 0.48rem;
  line-height: 0.48rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-top: 0.42rem;
  margin-bottom: 0.48rem;
}
.product_one_con2 {
  font-size: 0.36rem;
  height: 0.36rem;
  line-height: 0.36rem;
  margin-bottom: 0.45rem;
}
.product_one_con3 {
  display: flex;
  font-size: 0.38rem;
  height: 0.48rem;
  line-height: 0.48rem;
  margin-bottom: 0.29rem;
}

.product_one_con3 .price span {
  color: #ff9623;
  font-size: 0.42rem;
  flex: 1;
}
.price {
  flex: 1;
  color: #989898;
}
.number {
  text-align: center;
  flex: 1;
  width: 2.16rem;
}
.van-stepper {
  margin-top: -0.15rem;
}
</style>