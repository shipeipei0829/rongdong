<template>
  <div
    class="order"
    id="order"
    style="background:#f0f0f0;height:100vh;padding-top:1.3rem;z-index:100;"
  >
    <Leftheader title="订单" :fixed="fixed" id="header"></Leftheader>

    <van-tabs
      v-model="active"
      :color="'#008489'"
      @click="onDome(active)"
      style="overflow:auto;"
      id="listWrap"
    >
      <van-tab v-for="(item,index) in dome" :title="item.test" :key="index">
        <!-- 订单列表开始 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div class="list" id="list">
            <!-- ----------------------------------------------------- -->
            <div class="wrap" v-for="item in list" :key="item.orderId">
              <div>
                <!-- 单条订单top -->
                <div class="wrap_top text-top">
                  <div class="test-img">
                    <p>
                      <img src="./../../img/jiu.png" alt />
                    </p>
                    <p
                      style="white-space: nowrap; overflow: hidden;width: 6rem;"
                    >{{item.hotelName}}</p>
                  </div>
                  <p
                    class="last-top"
                    ref="lasttop"
                    @click="application()"
                    v-if="item.orderStatus==0"
                  >等待付款</p>
                  <p
                    class="last-top"
                    ref="lasttop"
                    @click="application()"
                    v-if="item.orderStatus==1"
                  >待商家接单</p>
                  <p
                    class="last-top"
                    ref="lasttop"
                    @click="application()"
                    v-if="item.orderStatus==2||item.orderStatus==4"
                  >待入住</p>
                  <p
                    class="last-top"
                    ref="lasttop"
                    @click="application()"
                    v-if="item.orderStatus==3||item.orderStatus==5"
                  >入住中</p>
                  <p class="last-top" ref="lasttop" @click="application()" v-if="item.code==6">转售中</p>
                  <p
                    class="last-top"
                    ref="lasttop"
                    @click="application()"
                    v-if="item.orderStatus==8||item.orderStatus==9"
                  >入住完成</p>
                  <p class="last-top" ref="lasttop" @click="application()" v-if="item.code==8">转售成功</p>
                  <p class="last-top" ref="lasttop" @click="application()" v-if="item.code==9">转售失败</p>
                  <p
                    class="last-top"
                    ref="lasttop"
                    @click="application()"
                    v-if="item.code==10"
                  >留存5小时</p>
                  <p
                    class="last-top"
                    ref="lasttop"
                    @click="application()"
                    v-if="item.orderStatus==6||item.orderStatus==7"
                  >已取消</p>
                </div>
                <!-- 单条订单middle -->
                <dl class="wrap_top" @click="handlerRouter(item)">
                  <dt>
                    <img :src="getsrcurl()" alt />
                  </dt>
                  <dd class="content_content">
                    <div class="context">房间名称</div>
                    <!-- <div class="context">{{item.roomName}}</div> -->
                    <div class="context-content">
                      <!-- <p>10月18日10:00-10月18日21:00</p> -->
                      <p>{{item.checkInTime|filterTime}}-{{item.leaveTime|filterTime}}</p>
                      <p>共{{item.hour}}小时</p>
                    </div>
                    <div class="fangjia">
                      <p>房价：￥{{item.actualPay}}</p>
                      <p>￥{{item.precPay}}</p>
                    </div>
                  </dd>
                </dl>
                <!-- 单条订单bottom -->
                <div class="last_div">
                  <div class="last_div_first" v-if="item.orderStatus==0">
                    <div>
                      <img src="./../../img/time.png" alt />
                    </div>
                    <!-- <p ref="tent" style="color:#E72D2D;">剩余付款时间:14分钟46秒</p> -->
                    <p ref="tent" style="color:#E72D2D;">剩余付款时间:</p>
                    <van-count-down :time="item.remainPayTime|parseInt" />
                  </div>
                  <div class="last_div_first" v-if="item.orderStatus==2">
                    <div>
                      <img src="./../../img/time.png" alt />
                    </div>
                    <!-- <p ref="tent" style="color:#E72D2D;">3小时24分后入住</p> -->
                    <p ref="tent" style="color:#E72D2D;">{{ item.distanceCheckInTime}}</p>
                  </div>
                  <div class="last_div_first" v-if="item.orderStatus==5||item.orderStatus==4">
                    <div>
                      <img src="./../../img/time.png" alt />
                    </div>
                    <!-- <p ref="tent" style="color:#E72D2D;">09.7.1-13:00至09.7.2-19:00房间转售中</p> -->
                    <p ref="tent" style="color:#E72D2D;">{{item.corderStatus}}</p>
                  </div>
                  <div class="last_div_first" v-if="item.code==5">
                    <div>
                      <img src="./../../img/time.png" alt />
                    </div>
                    <!-- <p ref="tent" style="color:#E72D2D;">2小时后离店</p> -->
                    <p ref="tent" style="color:#E72D2D;">{{item.distanceLeaveTime}}</p>
                  </div>
                  <div class="last_div_first" v-if="item.code==6">
                    <div>
                      <img src="./../../img/time.png" alt />
                    </div>
                    <p ref="tent" style="color:#E72D2D;">剩余{{item.remainTime}}小时</p>
                  </div>
                  <!-- 按钮 -->
                  <div class="last_div_last">
                    <p
                      @click="handlerStatus({status:'onPay',orderId:item.orderId,price:item.actualPay})"
                      style="background:#FF9623;"
                      v-if="item.orderStatus==0"
                    >去支付</p>
                    <p
                      style="background:#3981F0;"
                      v-if="item.orderStatus==20"
                      @click="handlerStatus({status:'onSuccess',orderId:item.orderId})"
                    >已入住</p>
                    <!-- <p
                      style="background:#E72D2D;"
                      v-if="item.orderStatus==2||item.orderStatus==3"
                      @click="handlerStatus({status:'jumpsale',orderId:item.orderId})"
                    >转售/续存</p>-->
                    <!-- 判断是否可以转售，两个状态有转售按钮 -->
                    <p
                      style="background:#E72D2D;"
                      v-if="(item.orderStatus==2&&item.resaleStatus==1)||(item.orderStatus==3&&item.resaleStatus==1)"
                      @click="handlerStatus({status:'jumpsale',orderId:item.orderId})"
                    >转售/续存</p>
                    <p
                      style="background:#FFD925;"
                      v-if="item.orderStatus==20"
                      @click="handlerStatus({status:'onContinue',orderId:item.orderId})"
                    >续住</p>
                    <p
                      style="background:#008489;"
                      v-if="item.orderStatus==3||item.orderStatus==5"
                      @click="handlerStatus({status:'tuiHome',orderId:item.orderId})"
                    >退房</p>

                    <p
                      @click="handlerStatus({status:'archivedMerchants',orderId:item.orderId})"
                      style="background:#E72D2D;"
                      v-if="item.code==6"
                    >转存商家</p>
                    <p
                      @click="handlerStatus({status:'removejumpsale',orderId:item.orderId})"
                      style="background:#FF9623;"
                      v-if="item.code==6"
                    >取消转售</p>
                    <p
                      @click="handlerStatus({status:'onCancel',orderId:item.orderId})"
                      style="background:#FF9623;"
                      v-if="item.orderStatus==1||item.orderStatus==2||item.orderStatus==4"
                    >取消订单</p>
                    <p
                      style="background:#E72D2D;"
                      v-if="item.code==8||item.code==9||item.code==10||item.orderStatus==6||item.orderStatus==7"
                      @click="handlerStatus({status:'onError',orderId:item.orderId})"
                    >删除订单</p>

                    <p
                      style="background:#3981F0;"
                      v-if="item.orderStatus==9||item.code==9||item.code==10"
                      @click="handlerStatus({status:'onGetcomment',orderId:item.orderId})"
                    >查看评价</p>
                    <p
                      style="background:#3981F0;"
                      v-if="item.orderStatus==8||item.code==9||item.code==10"
                      @click="handlerStatus({status:'onComment',orderId:item.orderId})"
                    >评价</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- ----------------------------------------------------- -->
            <div
              v-if="noHasMore"
              style="height:2rem;line-height:2rem;font-size:.32rem;"
            >没有更多数据.......</div>
          </div>
        </van-pull-refresh>
        <!-- 订单列表结束 -->
      </van-tab>
    </van-tabs>
    <!--头部导航  -->
    <Footers />
    <!--底部导航-->
  </div>
</template>
<script>
import { findHotelOrderList, updateHotelOrder } from "../../api/order";
// 头部返回按钮
import Leftheader from "@/components/header/index";

//底部导航
import Footers from "@/components/footer/index";
import "@/../public/cdn/common.js";
// import { setInterval, setTimeout } from "timers";
// import { deflate } from "zlib";
// import { parse } from "path";

// 倒计时

// function InitTime(endtime) {
//   var dd,
//     hh,
//     mm,
//     ss = null;
//   var time = parseInt(endtime) - new Date().getTime();
//   if (time <= 0) {
//     return "结束";
//   } else {
//     dd = Math.floor(time / 60 / 60 / 24);
//     hh = Math.floor((time / 60 / 60) % 24);
//     mm = Math.floor((time / 60) % 60);
//     ss = Math.floor(time % 60);
//     var str = dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
//     return str;
//   }
// }
export default {
  name: "Order",
  data() {
    return {
      active: 1, //进来订单默认展示待入住
      fixed: true,
      dome: [
        //  头部导航栏
        {
          id: 1,
          test: "待入住"
        },
        {
          id: 2,
          test: "进行中"
        },
        {
          id: 3,
          test: "转售中"
        },
        {
          id: 4,
          test: "已完成"
        }
      ],
      list: [], //传来的下单订单
      scroll: true, //判断是否还有数据
      pages: "", //总页数
      page: 1, //当前页
      limit: 5,
      times: "",
      timestimes: "",
      noHasMore: false, //没有更多数据
      isLoading: false,
      precPay: "" //房价
    };
  },
  props: {
    msg: {},
    code: ""
  },
  methods: {
    //更改状态
    handlerRouter(data) {
      console.log(data);

      if (data.orderStatus == "0") {
        //待支付
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "0", orderId: data.orderId }
        });
      } else if (data.orderStatus == "1") {
        //商家未接单
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "1", orderId: data.orderId }
        });
      } else if (data.orderStatus == "2") {
        //待入住
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "2", orderId: data.orderId }
        });
      } else if (data.orderStatus == "3") {
        //进行中
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "3", orderId: data.orderId }
        });
      } else if (data.orderStatus == "20") {
        //转售中
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "6", orderId: data.orderId }
        });
      } else if (data.orderStatus == "5") {
        //转售中
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "5", orderId: data.orderId }
        });
      } else if (data.orderStatus == "6" || data.orderStatus == "7") {
        //已取消
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "11", orderId: data.orderId }
        });
      } else if (data.orderStatus == "20") {
        //续住
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "", orderId: data.orderId }
        });
      } else if (data.orderStatus == "8") {
        //转售成功
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "8", orderId: data.orderId }
        });
      } else if (data.orderStatus == "7") {
        //入住完成
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "7", orderId: data.orderId }
        });
      } else if (data.orderStatus == "9") {
        //转售失败
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "9", orderId: data.orderId }
        });
      } else if (data.code == "10") {
        //转存商家
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "10", orderId: data.orderId }
        });
      }
    },
    handlerStatus(obj) {
      console.log(obj);

      if (obj.status == "onSuccess") {
        //点击已入住

        for (var i in this.list) {
          if (this.list[i].orderId == obj.orderId) {
            this.list[i].code = "3";
          }
        }
      } else if (obj.status == "onPay") {
        //点击支付  跳转到支付页面
        this.$router.push({ path: "/page/jump/payment", query: obj });
      } else if (obj.status == "onCancel") {
        //点击取消订单
        updateHotelOrder({ orderId: obj.orderId, orderStatus: 6 }).then(res => {
          this.getList("0, 1, 2, 4");
          console.log(res, "取消订单");
        });
      } else if (obj.status == "tuiHome") {
        //点击退房
        updateHotelOrder({ orderId: obj.orderId, orderStatus: 8 }).then(res => {
          this.getList("0, 1, 2, 4");
          console.log(res, "退房");
        });
      } else if (obj.status == "onContinue") {
        //点击续住

        for (var i in this.list) {
          if (this.list[i].orderId == obj.orderId) {
            this.list[i].code = "5";
          }
        }
      } else if (obj.status == "jumpsale") {
        //转售续存 跳详情
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "2", orderId: obj.orderId }
        });
      } else if (obj.status == "archivedMerchants") {
        //转存商家
        for (var i in this.list) {
          if (this.list[i].orderId == obj.orderId) {
            this.list[i].code = "10";
          }
        }
      } else if (obj.status == "removejumpsale") {
        //取消转售
        for (var i in this.list) {
          if (this.list[i].orderId == obj.orderId) {
            this.list[i].code = "3";
          }
        }
      } else if (obj.status == "onError") {
        //删除订单
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "11", orderId: obj.orderId }
        });
      } else if (obj.status == "onGetcomment") {
        //查看评论
        this.$router.push({
          path: "/page/jump/checkout",
          query: { commentId: obj.commentId }
        });
      } else if (obj.status == "onComment") {
        //保存评论
        this.$router.push({
          path: "/page/jump/checkout",
          query: {
            orderId: obj.orderId,
            hotelId: obj.hotelId,
            roomId: obj.roomId
          }
        });
      }

      return false;
    },
    application() {
      // this.$router.push({ path: "/page/jump/application" });
    },
    getsrcurl(icon) {
      return require("@/img/" + "ding.png");
    },
    gettimes(data) {
      let timenum = data;
    },
    onDome(num) {},
    //订单列表
    getList(orderStatusStr) {
      if (!this.scroll) {
        this.noHasMore = true;
        return;
      }
      findHotelOrderList({
        orderStatusStr: orderStatusStr,
        currentPage: this.page,
        limit: this.limit
      })
        .then(res => {
          console.log(res);
          if (res.code == 0) {
            //   //总页数
            this.pages = res.data.pages;
            this.list = [...this.list, ...res.data.records];
            if (!res.data.records.length) {
              this.noHasMore = true;
            }
          }
        })
        .catch(err => {
          // console.log(err);
        });
    },
    //转售中订单列表
    getList_t() {
      if (!this.scroll) {
        this.noHasMore = true;
        return;
      }
      findHotelOrderList({
        corderStatus: 1,
        currentPage: this.page,
        limit: this.limit
      })
        .then(res => {
          console.log(res);
          if (res.code == 0) {
            //   //总页数
            this.pages = res.data.pages;
            this.list = [...this.list, ...res.data.records];
            if (!res.data.records.length) {
              this.noHasMore = true;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //滚动事件的监听处理
    handleScroll() {
      var onOff = false;
      let _this = this;
      var scrollTop = document.getElementsByClassName("van-tabs__content")[0]
        .scrollTop;
      var windowHeight = window.innerHeight;
      var scrollHeight = document.getElementById("list").offsetHeight;
      // console.log(scrollTop, windowHeight, scrollHeight);
      if (scrollTop + windowHeight >= scrollHeight + 150) {
        this.page++;
        if (this.active == 0) {
          this.throttle(_this.getList("0, 1, 2, 4"), 1000);
          onOff = true;
        }
        if (this.active == 1) {
          this.throttle(_this.getList("3, 5"), 1000);
          onOff = true;
        }
        if (this.active == 2) {
          this.throttle(_this.getList_t(), 1000);
          onOff = true;
        }
        if (this.active == 3) {
          this.throttle(_this.getList("6, 7, 8, 9"), 1000);
          onOff = true;
        }
        // this.throttle(_this.getList(0), 1000);
        // onOff = true;
      }
    },
    throttle(fn, delay) {
      let lastTime = 0;
      return function() {
        let nowTime = Date.now();
        if (nowTime - lastTime > delay) {
          fn.call(this);
          lastTime = nowTime;
        }
      };
    },
    onRefresh() {
      //下拉刷新
      console.log("下拉刷新");
      this.finished = true;
      this.isLoading = false;
    }
  },
  updated() {},
  created() {},
  mounted() {
    //进页面的时候
    this.active = 0;
    var order = document.getElementById("order");
    order.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    // var order = document.getElementById("order");
    // order.removeEventListener("scroll", this.handleScroll, true);
  },
  components: {
    Footers,
    Leftheader
  },
  filters: {
    filterTime(time) {
      var date = new Date(time);
      var m = date.getMonth() + 1;
      var d = date.getDate();
      var str = time.slice(11);
      return m + "月" + d + "日" + " " + str;
    },
    parseInt(time) {
      return parseInt(time);
    }
  },
  watch: {
    //监听导航变化
    active: {
      handler(newName, oldName) {
        console.log(newName, "导航栏变化");
        if (newName == 0) {
          this.page = 1;
          this.list = [];
          this.getList("0,1,2,4");
        }
        if (newName == 1) {
          this.page = 1;
          this.list = [];
          this.getList("3, 5");
        }
        if (newName == 2) {
          //转售中
          this.list = [];
          this.page = 1;
          this.getList_t();
        }
        if (newName == 3) {
          this.page = 1;
          this.list = [];
          this.getList("6, 7, 8, 9");
        }
      },
      deep: true
    },
    //监听本地orderlist
    list: {
      handler(newName, oldName) {
        console.log(newName, "订单列表数据发生改变");
      },
      deep: true
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.last_div_first div[data-v-6aef3280] {
  color: rgb(231, 45, 45);
  font-size: 0.12rem;
}
.order[data-v-6aef3280] .van-tabs__wrap {
  width: 100%;
}
.banana {
  height: 6.2rem;
}
.van-tab--active {
  color: #008489;
  font-weight: 400;
}

.van-tab {
  font-size: 0.36rem;
}
.order >>> .van-tabs__wrap {
  position: fixed;
  top: 1.3rem;
}
.order >>> .van-tabs__content {
  overflow-y: scroll;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;
  background: #f0f0f0;
  height: 100vh;
  padding-bottom: 4rem;
}
/* 需要渲染的样式设置 */

.wrap {
  width: 100%;
  height: 100%;
  padding: 0rem 0.48rem;
  /* background: #fff; */
}

.wrap > div {
  background: #fff;
  border-radius: 0.1rem;
  margin-top: 0.3rem;
  padding: 0rem 0.3rem 0.3rem 0.3rem;
}

.wrap_top {
  display: flex;
  border-bottom: 0.05rem solid #f0f0f0;
  padding: 0.16rem 0rem 0.15rem 0rem;
}

.text-top {
  justify-content: space-between;
}

.test-img {
  display: flex;
}

.test-img p:first-child {
  width: 0.56rem;
  height: 0.56rem;
  margin-right: 0.13rem;
  margin-top: 0.05rem;
}

.test-img p:first-child img {
  width: 100%;
  height: 100%;
}

.test-img p:nth-child(2) {
  font-size: 0.45rem;
  color: #000000;
  font-weight: 700;
}

.last-top {
  padding-top: 0.1rem;
  color: #4f4f4f;
  font-size: 0.33rem;
  font-weight: 400;
}

.wrap_top dt {
  width: 1.88rem;
  height: 1.94rem;
}

.wrap_top dt img {
  width: 100%;
  height: 100%;
}

.wrap_top dd div {
  display: flex;
}

.context {
  font-size: 0.36rem;
  font-family: 600;
  color: #000;
  padding-top: 0.02rem;
  text-align: left;
  flex-wrap: nowrap;
}

.content_content {
  /* 改变交叉轴的方向 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0.42rem;
}

.context-content {
  margin-left: -0.11rem;
  flex-wrap: nowrap;
  margin-top: -0.3rem;
  font-weight: 400;
  line-height: 44px;
}

.context-content p:first-child {
  color: #6c6c6c;
  font-size: 0.32rem;
  white-space: nowrap;
}

.context-content p:last-child {
  font-size: 0.32rem;
  color: #d93e3e;
  margin-left: 0.5rem;
  white-space: nowrap;
}

.fangjia {
  color: #6c6c6c;
  margin-top: -0.1rem;
}

.fangjia p:first-child {
  font-size: 0.3rem;
  padding-right: 0.4rem;
}

.fangjia p:last-child {
  padding-top: 0.05rem;
  font-size: 0.2rem;
  text-decoration: line-through;
}

.last_div {
  padding-top: 0.27rem;
}

.last_div {
  overflow: hidden;
}

.last_div_first {
  height: 0.6rem;
  line-height: 0.6rem;
  float: left;
  display: flex;
}
.last_div_last {
  float: right;
  display: flex;
  justify-content: space-between;
}
.last_div_first div {
  width: 0.32rem;
  height: 0.32rem;
  margin-right: 0.1rem;
}

.last_div_first div img {
  width: 100%;
  height: 100%;
}

.last_div_last p {
  margin-right: 0.27rem;
}
.last_div_last p:last-child {
  margin-right: 0rem;
}
.last_div_last p {
  width: 2rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  border-radius: 0.1rem;
  color: #ffffff;
  font-size: 0.25rem;
}
</style>