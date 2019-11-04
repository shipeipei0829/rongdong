<template>
  <div class="order" style="background:#f0f0f0;height:100vh;padding-top:1.3rem;z-index:100">
    <Leftheader title="订单" :fixed="fixed"></Leftheader>
    <van-tabs v-model="active" :color="'#008489'" @click="onDome(active)">
      <van-tab v-for="(item,index) in dome" :title="item.test" :key="index">
        <!-- 状态不同饿选项和内容 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" ref="scroll" @scroll="loadMore">
          <van-list v-model="loading" :finished="finished" finished-text="暂无更多数据" @load="onLoad">
            <div class="wrap" v-for="item in list" :key="item.orderId">
              <div>
                <!-- 单条订单top -->
                <div class="wrap_top text-top">
                  <div class="test-img">
                    <p>
                      <img src="./../../img/jiu.png" alt />
                    </p>
                    <p>{{item.hotelName}}</p>
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
                    v-if="item.orderStatus==2"
                  >待入住</p>
                  <p
                    class="last-top"
                    ref="lasttop"
                    @click="application()"
                    v-if="item.orderStatus==3||item.orderStatus==5"
                  >入住中</p>
                  <p class="last-top" ref="lasttop" @click="application()" v-if="item.code==6">转售中</p>
                  <p class="last-top" ref="lasttop" @click="application()" v-if="item.code==7">入住完成</p>
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
                    <div class="context">{{item.roomName}}</div>
                    <div class="context-content">
                      <!-- <p>10月18日10:00-10月18日21:00</p> -->
                      <p>{{item.checkInTime|filterTime}}-{{item.leaveTime|filterTime}}</p>
                      <p>共{{item.hour}}小时</p>
                    </div>
                    <div class="fangjia">
                      <p>房价：1690.00</p>
                      <p>￥1780</p>
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
                    <p ref="tent" style="color:#E72D2D;">{{item.djs}}</p>
                  </div>
                  <div class="last_div_first" v-if="item.orderStatus==2">
                    <div>
                      <img src="./../../img/time.png" alt />
                    </div>
                    <!-- <p ref="tent" style="color:#E72D2D;">3小时24分后入住</p> -->
                    <p ref="tent" style="color:#E72D2D;">{{ item.distanceCheckInTime}}</p>
                  </div>
                  <div class="last_div_first" v-if="item.orderStatus==5">
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
                      @click="handlerStatus({status:'onPay',orderId:item.orderId})"
                      style="background:#FF9623;"
                      v-if="item.orderStatus==0"
                    >去支付</p>
                    <p
                      @click="handlerStatus({status:'onCancel',orderId:item.orderId})"
                      style="background:#FF9623;"
                      v-if="item.orderStatus==1||item.orderStatus==2"
                    >取消订单</p>
                    <p
                      style="background:#3981F0;"
                      v-if="item.orderStatus==20"
                      @click="handlerStatus({status:'onSuccess',orderId:item.orderId})"
                    >已入住</p>
                    <p
                      style="background:#E72D2D;"
                      v-if="item.orderStatus==2||item.resaleStatus==1"
                      @click="handlerStatus({status:'jumpsale',orderId:item.orderId})"
                    >转售/续存</p>
                    <p
                      style="background:#FFD925;"
                      v-if="item.orderStatus==3||item.code==5"
                      @click="handlerStatus({status:'onContinue',orderId:item.orderId})"
                    >续住</p>
                    <p
                      style="background:#008489;"
                      v-if="item.orderStatus==3||item.orderStatus==5||item.code==5"
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
            <!-- 选项内容结束 -->
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
    <!--头部导航  -->
    <Footers />
    <!--底部导航-->
  </div>
</template>
<script>
import { findHotelOrderList, updateHotelOrder } from "../../api/order";
import { List, Toast, Cell, PullRefresh } from "vant";
// 头部返回按钮
import Leftheader from "@/components/header/index";

//底部导航
import Footers from "@/components/footer/index";
import "@/../public/cdn/common.js";
import { setInterval, setTimeout } from "timers";
import { deflate } from "zlib";

// 倒计时

function InitTime(endtime) {
  var dd,
    hh,
    mm,
    ss = null;
  var time = parseInt(endtime) - new Date().getTime();
  if (time <= 0) {
    return "结束";
  } else {
    dd = Math.floor(time / 60 / 60 / 24);
    hh = Math.floor((time / 60 / 60) % 24);
    mm = Math.floor((time / 60) % 60);
    ss = Math.floor(time % 60);
    var str = dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
    return str;
  }
}
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

      
      pinkFont:true,
      // 上拉刷新、下拉加载
      allLoaded: false, //如果为true,禁止上拉刷新
      autoFill: false, //取消自动填充，



      filterorderlist: [],
      finished: false,
      loading: false,
      offset: 0,
      isLoading: false,
      page: 0,
      limit: 100,
      times: "",
      timestimes: ""
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
      } else if (data.orderStatus == "6") {
        //转售中
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "6", orderId: data.orderId }
        });
      } else if (data.orderStatus == "5") {
        //转售中
        this.$router.push({
          path: "/page/jump/application",
          query: { ordertype: "4", orderId: data.orderId }
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
          query: { ordertype: "5", orderId: data.orderId }
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
        this.$router.push({ path: "" });
      } else if (obj.status == "onCancel") {
        //点击取消订单
        updateHotelOrder({ orderId: obj.orderId, orderStatus: 6 }).then(res => {
          this.getList();
          console.log(res, "取消订单");
        });
      } else if (obj.status == "tuiHome") {
        //点击退房
        updateHotelOrder({ orderId: obj.orderId, orderStatus: 8 }).then(res => {
          this.getList();
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
        //转售
        for (var i in this.list) {
          if (this.list[i].orderId == obj.orderId) {
            this.list[i].code = "6";
          }
        }
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
        updateHotelOrder({ orderId: obj.orderId, orderStatus: 10 }).then(
          res => {
            this.getList();
            console.log(res, "删除订单");
          }
        );
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
    setlocalStorage() {
      // window.localStorage.setItem("orderlist", JSON.stringify(this.list));
      return false;
      if (this.list.length > 0) {
        var str = JSON.stringify(this.list);
        localStorage.setItem("orderlist", str);
      }
    },
    tagstatus(statusval) {
      this.filterorderlist = [];
      //code 待入驻1、2 。 进行中3、4、5 。转售中 6  。已完成 7、8、9
      if (statusval == 0) {
        //待入驻
        for (let x in this.list) {
          if (this.list[x].code == "1" || this.list[x].code == "2") {
            this.filterorderlist.push(this.list[x]);
          }
        }
      } else if (statusval == 1) {
        //进行中
        for (let x in this.list) {
          if (
            this.list[x].code == "3" ||
            this.list[x].code == "4" ||
            this.list[x].code == "5"
          ) {
            this.filterorderlist.push(this.list[x]);
          }
        }
      } else if (statusval == 2) {
        //转售中
        for (let x in this.list) {
          if (this.list[x].code == "6") {
            this.filterorderlist.push(this.list[x]);
          }
        }
      } else if (statusval == 3) {
        //已完成
        for (let x in this.list) {
          if (
            this.list[x].code == "7" ||
            this.list[x].code == "8" ||
            this.list[x].code == "9" ||
            this.list[x].code == "10" ||
            this.list[x].code == "11"
          ) {
            this.filterorderlist.push(this.list[x]);
          }
        }
      }
    },
    getsrcurl(icon) {
      return require("@/img/" + "ding.png");
    },
    gettimes(data) {
      let timenum = data;
    },
    onDome(num) {},
    //订单列表
    getList(checkInStatus) {
      var that = this;
      findHotelOrderList({
        checkInStatus: checkInStatus,
        currentPage: this.page,
        limit: this.limit
      }).then(res => {
        that.list = [];
        if (res.code == 0) {
          if (res.data.records.length) {
            var ary = res.data.records;
            ary.map((obj, index) => {
              this.$set(
                obj,
                "djs",
                obj.remainPayTime //InitTime(obj.remainPayTime)
              );
            });

            that.list.push(...ary);
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

    onLoad() {
      console.log("上拉加载");
      this.page++;
      this.offset = this.limit * this.page;
      console.log(this.active);
      if (this.active == 0) {
        this.getList_a();
      }
    },
    loadMore() {
      // 卷去的高度   当前可见区域  总高
      // 触发scroll事件 可能触发n次  先进来开一个定时器，下次触发时将上一次定时器清除掉
      clearTimeout(this.timer); // 节流
      this.timer = setTimeout(() => {
        let { scrollTop, clientHeight, scrollHeight } = this.$refs.scroll;
        if (scrollTop + clientHeight + 20 > scrollHeight) {
          this.getList(); // 获取更多
        }
      }, 60);
    },
    onRefresh() {
      //下拉刷新
      console.log("下拉刷新");
      this.finished = true;
      this.isLoading = false;
    },
    //倒计时
    countDownTime() {
      var _this = this;
      for (var key in _this.list) {
        var rightTime = _this.list[key]["remainPayTime"];
        if (rightTime > 0) {
          var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24);
          var hh = Math.floor((rightTime / 1000 / 60 / 60) % 24);
          var mm = Math.floor((rightTime / 1000 / 60) % 60);
          var ss = Math.floor((rightTime / 1000) % 60);
          dd = dd > 9 ? dd : "0" + dd;
          hh = hh > 9 ? hh : "0" + hh;
          mm = mm > 9 ? mm : "0" + mm;
          ss = ss > 9 ? ss : "0" + ss;
          _this.list[key]["djs"] =
            dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
        } else {
          _this.list[key]["djs"] = "倒计时结束";
        }
      }
    }
  },
  updated() {},
  created() {},
  mounted() {
    this.countDownTime();
    var _this = this;
    let time = setInterval(() => {
      if (this.flag == false) {
        clearInterval(time);
      }
      this.countDownTime();
    }, 1000);
    // 支付倒计时



    //进页面的时候
    this.active = 0;
    this.onRefresh();

    //
    // 下拉加载更多商品
    console.log(window.outerHeight); //窗口高度
    window.onscroll = function() {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop; //滚动条高度
      var documentHeight =
        document.body.scrollHeight || document.documentElement.scrollHeight; //文档高度
      var windowHeight =
        document.body.clientHeight || document.documentElement.clientHeight; //窗口高度
      console.log(scrollTop, documentHeight, windowHeight);
      if (scrollTop + windowHeight > documentHeight - 100) {
        // 签到页面商品数据
        console.log("231233");
      }
    };
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
    }
  },
  watch: {
    //监听导航变化
    active: {
      handler(newName, oldName) {
        console.log(newName, "导航栏变化");
        if (newName == 0) {
          this.getList(0);
        }
        if (newName == 1) {
          this.getList(1);
          // this.list = [];
        }
        if (newName == 2) {
          this.list = [];
          // this.getList_d();
        }
        if (newName == 3) {
          this.getList(2);
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