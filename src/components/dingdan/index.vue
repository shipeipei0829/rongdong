<template>
  <div class="dingdan">
    <Fail value="订单信息" src="dingren"></Fail>
    <ul class="ruzhu_list">
      <li>
        <div>
          <p>订单编号</p>
        </div>
        <p>{{ordermsg.orderCode}}</p>
      </li>
      <li class="ruzhu_top">
        <div>
          <p>预定人</p>
        </div>
        <p>{{ordermsg.userName}} {{ordermsg.phoneNumber}}</p>
      </li>
      <li class="ruzhu_top">
        <div>
          <p>下单时间</p>
        </div>
        <p>{{ordermsg.createTime}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Fail from "@/components/fail/index.vue";
export default {
  data() {
    return {
      ordermsg: {
        //订单信息
        orderCode: "",
        phoneNumber: "",
        userName: "",
        createTime: ""
      }
    };
  },
  components: {
    Fail
  },
  methods: {},
  created(){
    this.ordermsg = JSON.parse(window.localStorage.getItem('ordermsg'))
  },
  mounted() {}
};
</script>
<style>
.dingdan {
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