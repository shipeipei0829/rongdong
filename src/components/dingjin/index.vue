<template>
  <div class="dingjin">
    <Fail value="订单金额" src="money"></Fail>
    <ul class="ruzhu_list">
      <li>
        <div>
          <p>房费</p>
        </div>
        <p style="color:#E72D2D;">
          {{this.pageinfo.timecon}}时间币
          <span>（¥{{this.pageinfo.duoshiPlanRmb}}）</span>
        </p>
      </li>
      <li>
        <div>
          <p>商品</p>
        </div>
        <p style="color:#E72D2D;">¥0.00</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Fail from "@/components/fail/index.vue";
export default {
  data() {
    return { 
      page: "" ,
      pageinfo:''
      };
  },
  components: {
    Fail
  },
  methods: {},
  created() {
    // var orderlist = localStorage.getItem("orderlist")?JSON.parse(localStorage.getItem("orderlist")):null;
    // this.page = orderlist.find(item => {
    //   console.log(item)
    //   if (item.orderId == this.$route.query.orderId) {
    //     return item;
    //   }
    // });
    // this.pageinfo = this.page.arraynewroom.find(item => {
    //   if (item.roomId == this.page.roomId) {
    //     return item;
    //   }
    // });
  }
};
</script>
<style>
.dingjin {
  margin: 0.3rem 0.5rem;
  background: #fff;
  padding-right: 0.16rem;
  padding-left: 0.27rem;
}
.ruzhu_list {
  padding: 0.3rem 0rem 0.34rem 0.17rem;
}

.ruzhu_list > li {
  display: flex;
  text-align: left;
}

.ruzhu_list > li > div {
  width: 2.5rem;
  font-weight: 400;
  color: rgba(115, 115, 115, 1);
}

.ruzhu_list > li > p {
  font-size: 0.3rem;
}

.ruzhu_top {
  margin-top: 0.35rem;
}
</style>