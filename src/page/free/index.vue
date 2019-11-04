<template>
  <div class="free">
    <!-- title  -->
    <Headertop :fixed="fixed" :title="title" />

    <!-- 芝麻信用 -->
    <div class="credit">
      <p class="credit_tt">芝麻信用</p>
      <p class="credit_ct">支付宝芝麻信用700分以上免支付押金</p>
      <p class="credit_bd">绑定授权</p>
    </div>
  </div>
</template>

<script>
import Img from "@/img/bgfree.png";
import Headertop from "@/components/header/index";
export default {
  name: "Free",
  data() {
    return {
      fixed: true,
      title: "押金",
      img: Img
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
<style scoped>
.free {
  padding-top: 1.4rem;
}
.credit {
  width: 9.6rem;
  margin: .5rem auto 0;
  padding-top: 0.5rem;
  border-radius: 0.3rem;
  color: #fff;
  background: burlywood;
  background: -webkit-linear-gradient(
    35deg,
    #4c9cf7,
    #62d5f8,
    #59c3f3
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    35deg,
    #4c9cf7,
    #62d5f8,
    #59c3f3
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    35deg,
    #4c9cf7,
    #62d5f8,
    #59c3f3
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    35deg,
    #4c9cf7,
    #62d5f8,
    #59c3f3
  ); /* 标准的语法 */
}
.credit_tt {
  font-size: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: left;
  padding-left: 0.5rem;
  font-weight: bold;
}
.credit_ct,
.credit_bd {
  font-size: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.credit_ct {
  margin-top: 0.22rem;
  text-align: left;
  padding-left: 0.5rem;
  margin-bottom: 0.61rem;
}
.credit_bd {
  text-align: right;
  height: 1.12rem;
  line-height: 1.12rem;
  font-size: 0.4rem;
  font-weight: bold;
  border-top: 1px solid #fff;
  padding-right: 0.5rem;
}
</style> 