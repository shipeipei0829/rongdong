<template>
  <div class="marks">
    <!-- 取消订单遮罩-->
    <div class="cancel">
      <div>
        <div class="cancel_img">
          <img src="./../../img/renwu.png" alt />
        </div>
        <!-- x -->
        <div class="cancel_two" @click="cancel_two()">
          <img src="./../../img/guanbi.png" alt />
        </div>
        <div class="cancel_three" @click="cancel_three(orderId)">
          <img src="./../../img/quxiao.png" alt />
        </div>
        <div class="content" style="width:100%;position:absolute;top:2.3rem;color:#000;">
          <p style="font-size:.5rem;">取消订单理由</p>
          <textarea
            name
            id
            cols="30"
            rows="10"
            placeholder="请输入取消订单的理由"
            style="width:90%;padding:.7rem;border:none;font-size:0.36rem;height:3rem;resize:none;"
            v-model="cancelreason"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updateHotelOrder } from "../../api/order";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  name: "Marks",
  data() {
    return {
      cancelreason: "", //取消理由
      // orderlist: "",
      orderId: "",
      query: ""
    };
  },
  mounted() {
    // this.orderlist = JSON.parse(localStorage.getItem("orderlist"));
    this.orderId = this.$route.query.orderId;
    this.query = this.$route.query;
    console.log(this.query);
  },
  props: {},
  components: {},
  methods: {
    //   点x
    cancel_two() {
      this.$emit("show");
    },
    //确认取消
    cancel_three(orderId) {
      if (this.cancelreason == "") {
        Toast("取消理由不能为空");
        return false;
      }
      updateHotelOrder({ orderId: this.orderId, orderStatus: 6 ,cancelResponse:this.cancelreason}).then(res => {
        console.log(res, "取消订单");
        this.$router.push({
          path: "/shoporder/refunddetails",
          query: this.query
        });
      });
    }
  }
};
</script>

<style>
/* 取消订单遮罩 */
.mark {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
}
.cancel {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cancel > div {
  width: 8.9rem;
  height: 9rem;
  background: #fff;
  position: relative;
}

.cancel_img {
  width: 3.67rem;
  height: 3.79rem;
  position: absolute;
  left: 2.67rem;
  top: -1.89rem;
}

.cancel_img img {
  width: 100%;
  height: 100%;
}

.cancel_two {
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  right: 0.64rem;
  top: 0.32rem;
}

.cancel_two img {
  width: 100%;
  height: 100%;
}

.cancel_three {
  width: 5.32rem;
  height: 1.72rem;
  position: absolute;
  left: 1.84rem;
  bottom: 0.58rem;
}

.cancel_three img {
  width: 100%;
  height: 100%;
}
</style>