<template>
  <div class="merchant" style="background:#fff;padding-top:1.3rem;">
    <Headertop :title="title" :fixed="fixed" />
    <div class="list-content" id="list-content" style="height:100vh;">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="暂无更多数据" @load="onLoad">
          <div v-if="isshow">
            <Ticket
              :value="{num:item.num,tit:'小时币'}"
              text="充值优惠 - 通用"
              :date="item.endDate"
              v-for="item in list"
              :key="item.id"
              :id="item.id"
            />
          </div>

          <!-- 优惠卡折扣券 -->
          <div v-if="!isshow">
            <Ticket
              :value="{num:item.couponTypeValue,tit:item.type}"
              :text="item.name"
              :date="item.endDate"
              v-for="item in list"
              :key="item.id"
              :id="item.id"
            />
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { userSaveHour, userCouponlist } from "../../api/mine";
import { List, Toast, Cell, PullRefresh } from "vant";
import Headertop from "@/components/header/index";
import Ticket from "@/components/ticket/index";
import { setTimeout } from "timers";
export default {
  name: "Merchant",
  data() {
    return {
      title: "",
      fixed: true,
      isshow: "",
      page: 1,
      limit: 3,
      list: [],
      finished: false,
      loading: false,
      offset: 0,
      isLoading: false
    };
  },
  props: {},
  methods: {
    //用户预存酒店时间分页列表
    getData() {
      var that = this;
      userSaveHour({ page: that.page, limit: that.limit }).then(res => {
        if (res.code == 0) {
          console.log(res);
          console.log(res.data.records.length);
          if (res.data.records.length) {
            that.list.push(...res.data.records);
            console.log(that.list);
          } else {
            that.finished = true;
          }
          that.loading = false;
        } else {
          that.loading = false;
          that.finished = false;
        }
      });
    },
    //用户领取优惠券列表
    getCouponlist() {

      var that = this;
      userCouponlist({ page: that.page, limit: that.limit }).then(res => {
        if (res.code == 0) {
          console.log(res);
          console.log(res.data.records.length);
          if (res.data.records.length) {
            that.list.push(...res.data.records);
            //type类型
          for (var i = 0; i < that.list.length; i++) {
            console.log(that.list[i]["type"]);
            if (that.list[i]["type"] == 1) {
              that.list[i]["type"] = "抵用";
            } else if (that.list[i]["type"] == 2) {
              that.list[i]["type"] = "折扣";
            } else if (that.list[i]["type"] == 3) {
              that.list[i]["type"] = "满减";
            } else if (that.list[i]["type"] == 4) {
              that.list[i]["type"] = "优惠";
            }
          }
           //优惠券名字
           for(var i = 0; i < that.list.length; i++){
            that.list[i]['name']=that.list[i]['name'].split('-')[0]
           }
           
          } else {
            that.finished = true;
          }
          that.loading = false;
        } else {
          that.loading = false;
          thst.finished = false;
        }
      });
    },
    onLoad() {
      console.log("上拉加载");
      this.page += 1;
      this.offset = this.limit * this.page;
      console.log(this.page, this.offset);
      if (this.$route.params.i == "1") {
        this.getData();
      }else{
        this.getCouponlist();
      }
    },
    onRefresh() {
      //下拉刷新
      console.log("下拉刷新");
      this.finished = true;
      this.isLoading = false;
    }
  },
  created() {},
  mounted() {
    // let winHeight = document.documentElement.clientHeight; //视口大小
    // document.getElementById("list-content").style.height =
    //   winHeight - 100 + "px"; //调整上拉加载框高度
    if (this.$route.params.i == "1") {
      this.isshow = true;
      this.title = "商家结余";
      this.getData();
    } else if (this.$route.params.i == "2") {
      this.isshow = false;
      this.title = "优惠券";
      this.getCouponlist();
    }
  },
  components: {
    Headertop,
    Ticket,
    [List.name]: List,
    [Toast.name]: Toast,
    [Cell.name]: Cell,
    [PullRefresh.name]: PullRefresh
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ticketrow {
  margin-top: 1rem;
  background: #fff;
}
.list-content {
  overflow: scroll;
}
</style>
