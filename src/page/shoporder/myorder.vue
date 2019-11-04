<template>
  <div class="Myorder" style="height:100vh;">
    <Header :title="title" />
    <!-- 我的订单 -->
    <div class="con">
      <Orderlist />
      <Orderlist />
    </div>
    <!-- 操作按钮 -->
    <Refund />
  </div>
</template>

<script>
import Header from "@/components/header/index";
import Orderlist from "@/components/orderitem/index";
import Refund from "@/components/refund/index";
export default {
  name: "Myorder",
  data() {
    return {
      active: 0,
      activeKey: 0,
      activeId: 1,
      title: "我的订单",
      
    };
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
    }
  },
  mounted() {},
  components: {
    Header,
    Orderlist,
    Refund
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
