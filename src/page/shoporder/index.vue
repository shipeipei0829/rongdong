<template>
  <div class="order">
    <Headers :title="title" />
    <!-- 导航 -->
    <div class="con">
      <div class="leftNav">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="促销活动" />
          <van-sidebar-item title="酒水" />
          <van-sidebar-item title="休闲零食" />
          <van-sidebar-item title="方便面" />
          <van-sidebar-item title="洗漱日化" />
          <van-sidebar-item title="百货类" />
        </van-sidebar>
      </div>
      <div>
        <!-- 产品列表 -->
        <Productitem class="productitem" />
        <!-- 加入购物车 -->
        <van-icon name="shopping-cart" info="9" color="#FF9623" size="1.2rem" style="position:absolute;right:.8rem;bottom:2rem" @click="handleshop()"/>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from "@/components/header/index";
import Productitem from "@/components/product/index";
import { TreeSelect } from "vant";

Vue.use(TreeSelect);
import { Icon } from "vant";

Vue.use(Icon);
export default {
  name: "Order",
  data() {
    return {
      active: 0,
      activeKey: 0,
      activeId: 1,
      title: "北京东直门雅辰悦居酒店"
    };
  },
  props: {
    msg: {}
  },
  methods: {
    handleshop(val) {
      this.$router.push({path:'/shoporder/shop'})
    },
    onClickNav(index) {
      this.mainActiveIndex = index;
    },
    onClickItem(data) {
      this.activeId = data.id;
    }
  },
  mounted() {},
  components: {
    Productitem,
    Headers
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order >>> .van-button--warning {
  background-color: #008489;
  border: 1px solid #008489;
}
.order >>> .van-button__icon {
  vertical-align: middle;
}
.order {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.productitem {
  flex: 1;
}
.con {
  display: flex;
  flex: 1;
}
.leftNav {
  width: 2.87rem;
  background-color: #e5e5e5;
  float: left;
}
.selectedCon {
  flex: 1;
}
.van-sidebar {
  width: 100%;
  background-color: #e5e5e5;
}
.van-sidebar-item {
  background-color: #e5e5e5;
}
.van-sidebar-item--select {
  background-color: #fff;
  border-color: transparent;
}
.van-sidebar-item__text {
  line-height: 1;
}
.leftNav a {
  display: block;
  width: 100%;
  font-size: 0.5rem;
  color: #000000;
}
.leftNav .selected {
  background-color: #fff;
}
</style>
