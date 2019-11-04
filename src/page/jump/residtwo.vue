<template>
  <div style="background:#f8f8f8;height:100vh;">
    <Leftheader title="转存续售"></Leftheader>
    <div class="zhuan">
      <p>
        您当前可转售/续存的时间：
        <span>{{hour}}小时</span>
      </p>
    </div>
    <!-- 图片 -->
    <div class="shanghu">
      <div @click="onAlisttime()">
        <img src="./../../img/zhuan.png" alt />
      </div>
      <div>
        <img src="./../../img/shanghu.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
import { findHotleOrderInfo } from "../../api/order";
import Leftheader from "@/components/header/index";
// import Vue from "vue";
import { Dialog } from "vant";
export default {
  data() {
    return {
      orderId: "",
      orderlist: "",
      page: "",
      pageinfo: "",
      hour: "" //当前可转售时间
    };
  },
  components: {
    Leftheader,
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    onAlisttime() {
      //     跳转到转售页面，demo暂时不体现
      this.$router.push({ path: "/page/surpluss/index",query:this.$route.query });

    }
  },
  created() {
    this.orderId = this.$route.query.orderId;
    findHotleOrderInfo({ orderId: this.orderId }).then(res => {
      // console.log(res);
      var hour = res.data.hour;
      this.hour = hour;
    });
  },
  mounted() {
    this.orderId = this.$route.query.orderId;
  }
};
</script>
<style>
.zhuan {
  width: 100%;
  height: 1.2rem;
  background: #e72d2d;
  text-align: left;
  line-height: 1.2rem;
  color: #fff;
  font-size: 0.3rem;
  font-weight: bold;
  padding-left: 0.55rem;
}

.shanghu {
  width: 100%;
  margin-top: 0.54rem;
  margin-left: -0.2rem;
}

.shanghu div {
  width: 100%;
}

.shanghu div > :last-child {
  margin-top: 0.2rem;
}

.shanghu div img {
  width: 100%;
}
</style>