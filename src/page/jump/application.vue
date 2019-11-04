<template>
  <div>
    <div class="hotel" style="margin-bottom:1.46rem;">
      <!-- 返回上一级 -->
      <Leftheader title="订单详情" />
      <!-- 包含图片的提示  -->
      <!-- <div src="ffftime" v-if="this.$route.query.ordertype==0">商家付款时间<span>51分23秒</span> -->
      <div class="timeInfo" src="ffftime" v-if="this.$route.query.ordertype==0">
        <img class="timeInfo_img" src="../../img/ffftime.png" alt />
        剩余付款时间
        <span>
          <van-count-down :time="pageinfo.remainPayTime|parseInt" />
        </span>
      </div>
      <div class="timeInfo" src="ffftime" v-if="this.$route.query.ordertype==1">
        <img class="timeInfo_img" src="../../img/ffftime.png" alt />
        商家剩余接单时间
        <span>
          <van-count-down :time="pageinfo.remainOrderTime|parseInt" />
        </span>
      </div>
      <!-- <Stayaimg src="ffftime" value="3小时51分钟后入住" v-if="this.$route.query.ordertype==2"></Stayaimg> -->
      <Stayaimg
        src="ffftime"
        :value="pageinfo.distanceCheckInTime"
        v-if="this.$route.query.ordertype==2"
      ></Stayaimg>
      <Firsthead
        valuea="1小时51分23秒后转售结束"
        valueb="（转售时间结束后剩余时间将作废，建议提前续存商家）"
        v-if="this.$route.query.ordertype==6"
      ></Firsthead>
      <Firsthead valuea valueb="取消原因：个人原因，暂时无法去入住申请取消订单，谢谢。" v-if="this.$route.query.ordertype==11"></Firsthead>
      <Stayaimg
        src="ffftime"
        value="距离退房时间还剩1小时59分钟"
        v-if="this.$route.query.ordertype==5"
        style="background:red;"
      ></Stayaimg>
      <!-- 预定下单页面详情 -->
      <div class="hotel_top" style="margin:0.3rem 0;">
        <div style="background:#f8f8f8">
          <div class="staylist_top">
            <div class="staylist_banner">
              <div>
                <p>
                  <img src="./../../img/jiu.png" alt />
                </p>
                <p>{{pageinfo.hotelName}}</p>
              </div>
              <p class="jiedai" v-if="this.$route.query.ordertype==1">待接单</p>
              <p class="jiedai" v-if="this.$route.query.ordertype==2">待入住</p>
              <p
                class="jiedai"
                v-if="this.$route.query.ordertype==3||this.$route.query.ordertype==4 ||this.$route.query.ordertype==5"
              >入住中</p>
              <p class="jiedai" style="color:#E72D2D;" v-if="this.$route.query.ordertype==6">转售中</p>
              <p class="jiedai" v-if="this.$route.query.ordertype==11">已取消</p>
              <p class="jiedai" v-if="this.$route.query.ordertype==8">入住完成</p>
            </div>
            <!-- 中间大图片 -->
            <div style="width:100%; height:100%;">
              <img src="./../../img/pageda.png" alt style="width:100%; height:100%;" />
            </div>
            <dl class="staylist_banner staylist_last">
              <dt class="tent_top" v-if="this.$route.query.ordertype!=999">
                <p>悦局60平{{roomList.roomName}}</p>
                <p>1间房丨含早丨{{roomList.roomName}}丨{{isWindow}}丨60m²丨{{roomList.floorNum}}层</p>
              </dt>
              <!-- 跳转提交订单详情 -->
              <dt class="tent_top" v-if="this.$route.query.ordertype==999">
                <p>悦局60平{{pageinfo.roomName}}</p>
                <p>1间房丨含早丨{{pageinfo.roomName}}丨{{pageinfo.isWindow==1?'有窗':'没有窗'}}丨60m²丨{{pageinfo.floorNum}}层</p>
              </dt>
              <dd class="tent_bottom" @click="ontap()">
                <a :href="'tel:'+tel">
                  <p>
                    <img src="./../../img/tap.png" alt />
                  </p>
                  <p>联系商家</p>
                </a>
              </dd>
            </dl>
            <div class="dizhi">
              <div class="dizhi_left">
                <p>
                  <img src="./../../img/weizhi.png" alt />
                </p>
                <p>{{pageinfo.address}}</p>
              </div>

              <!-- 显示地图 -->
              <div class="dizhi_right" @click="()=>{this.$router.push({path:'/mapdetails/index'})}">
                <p>详情</p>
                <van-icon name="arrow" color="#ff9623" size=".3rem" style="top: 16%;" />
              </div>
            </div>
            <div class="staylist_bottom" v-if="this.$route.query.ordertype!=999">
              <div>
                <p>入住</p>
                <p>
                  {{pageinfo.checkInTime|timeFilter}}
                  <span>{{pageinfo.checkInTime|weekFilter}}</span>
                </p>
                <p>{{pageinfo.checkInTime|dateFilter}}</p>
              </div>
              <p @click="hotelShow()">共{{pageinfo.hour}}小时</p>
              <div>
                <p>离店</p>
                <p>
                  {{pageinfo.leaveTime|timeFilter}}
                  <span>{{pageinfo.leaveTime|weekFilter}}</span>
                </p>
                <p>{{pageinfo.leaveTime|dateFilter}}</p>
              </div>
            </div>
            <div class="staylist_bottom" v-if="this.$route.query.ordertype==999">
              <div>
                <p>入住</p>
                <p>
                  {{orderinfos.startDate|timeFilter}}
                  <span>{{orderinfos.startDate|weekFilter}}</span>
                </p>
                <p>{{orderinfos.startTime}}</p>
              </div>
              <p @click="hotelShow()">共{{hour}}小时</p>
              <div>
                <p>离店</p>
                <p>
                  {{orderinfos.endDate|timeFilter}}
                  <span>{{orderinfos.endDate|weekFilter}}</span>
                </p>
                <p>{{orderinfos.endTime}}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 订房的规则 -->
        <div class="hotel_toplist">
          <p>
            <span @click="toHomeRule()">订房必读</span>
            <van-icon name="arrow" color="#ff9623" size=".3rem" style="top: 0.08rem;" />
          </p>
        </div>
      </div>

      <!-- 转售中 -->
      <Walktime v-if="this.$route.query.ordertype==4"></Walktime>
      <!-- 房东和消息提醒 -->
      <Landlady v-if="!true"></Landlady>
      <!-- 商城购物信息 -->

      <!-- 退款信息 -->
      <Steps v-if="this.$route.query.ordertype==11"></Steps>
      <!-- 转售成功 -->
      <Addlist v-if="this.$route.query.ordertype==8"></Addlist>
      <!-- 转售失败 -->
      <Addtwo v-if="this.$route.query.ordertype==9" />
      <!-- 购物车 -->
      <div class="shopping" v-if="this.$route.query.ordertype!=6">
        <div class="shopping_top">
          <div
            class="juxing"
            v-if="this.$route.query.ordertype!=7||this.$route.query.ordertype!=8||this.$route.query.ordertype!=9"
          >
            <p>
              <img src="./../../img/juxing.png" alt />
            </p>
            <p>商城购物城</p>
          </div>
          <Detailsshop
            class="Detailsshop"
            v-if="this.$route.query.ordertype!=7||this.$route.query.ordertype!=8||this.$route.query.ordertype!=9"
          ></Detailsshop>
          <Duwuqing></Duwuqing>
        </div>
      </div>
      <!-- 个人的入住信息 -->
      <MenuList
        :startdate="this.pageinfo.startDate"
        :starttime="this.pageinfo.startTime"
        v-if="this.$route.query.ordertype==999"
      ></MenuList>
      <Failparent
        v-if="this.$route.query.ordertype!=999&&this.$route.query.ordertype!=6"
        :personlist="person"
      ></Failparent>

      <!-- 订单金额 -->
      <Dingjin
        v-if="this.$route.query.ordertype==0||this.$route.query.ordertype==1||this.$route.query.ordertype==2 || this.$route.query.ordertype==3 || this.$route.query.ordertype==4|| this.$route.query.ordertype==7 || this.$route.query.ordertype==9||this.$route.query.ordertype==10|| this.$route.query.ordertype==11 || this.$route.query.ordertype==5|| this.$route.query.ordertype==8"
      ></Dingjin>

      <!-- 押金 -->
      <Yajin
        v-if="this.$route.query.ordertype==0||this.$route.query.ordertype==1||this.$route.query.ordertype==2 || this.$route.query.ordertype==3 || this.$route.query.ordertype==4 || this.$route.query.ordertype==7|| this.$route.query.ordertype==9||this.$route.query.ordertype==10|| this.$route.query.ordertype==11 || this.$route.query.ordertype==5|| this.$route.query.ordertype==8"
      />

      <!-- 转售信息 -->
      <Zhuanshou v-if=" this.$route.query.ordertype==30"></Zhuanshou>

      <!-- 订单信息 -->
      <Dingdan v-if=" this.$route.query.ordertype!=999"></Dingdan>

      <!-- 众多选项 -->
      <Mltiple v-if="this.$route.query.ordertype==999"></Mltiple>
      <!-- <div class="check" v-if="this.$route.query.ordertype==999">
        <div class="check_wrap yajin">
          <div class="check_top yajin_top">
            <p>
              <img src="./../../img/yajin.png" alt />
            </p>
            <p>押金（到店支付）</p>
          </div>
          <p>￥200.00</p>
        </div>
      </div>-->
      <!-- 转售多余时间 -->
      <Denttime v-if="this.$route.query.ordertype==999"></Denttime>
      <!-- 订单金额 -->
      <div class="check jine" v-if="this.$route.query.ordertype==999">
        <div class="check_wrap">
          <div class="check_top bordeer">
            <p>
              <img src="./../../img/jinbi.png" alt />
            </p>
            <p>订单金额</p>
          </div>
          <!-- 订单金额结束 -->
          <ol class="ollist">
            <li>
              <p>房费</p>
              <p>￥{{price}}</p>
            </li>
            <li>
              <p>商城</p>
              <p>￥0.00</p>
            </li>
            <li>
              <p>押金</p>
              <p>￥{{pageinfo.depositAmounts}}.00（{{payMethod}}）</p>
            </li>
            <div>
              <p>合计支付</p>
              <p>￥{{parseFloat(pageinfo.depositAmounts)+parseFloat(price)}}</p>
            </div>
          </ol>
        </div>
      </div>

      <div class="footer_left">
        <Footertext></Footertext>
      </div>

      <!-- 第一种按钮 -->
      <div class="button_bottom">
        <!-- 正常流程下单 -->
        <div class="button_child" v-if="this.$route.query.ordertype==999">
          <p style="background:#f8f8f8">￥{{parseFloat(pageinfo.depositAmounts)+parseFloat(price)}}</p>
          <p @click.stop="submit(params)">提交订单</p>
        </div>

        <!-- 订单列表跳转 -->
        <div class="button_two" v-if="this.$route.query.ordertype!=999">
          <p
            @click="zhuan(ordertype,orderId)"
            v-if="this.$route.query.ordertype==2 || this.$route.query.ordertype==3"
          >转售/续存</p>
          <p
            @click="xuding(orderId)"
            v-if="this.$route.query.ordertype==5"
            style="background-color:#FF9623"
          >续定</p>

          <p
            @click="cancel()"
            v-if="this.$route.query.ordertype==0||this.$route.query.ordertype==1||this.$route.query.ordertype==2"
            style="background-color:#E72D2D"
          >取消订单</p>
          <p
            @click="pay(orderId,price)"
            v-if="this.$route.query.ordertype==0"
            style="background-color:#FF9623"
          >去支付</p>
          <p
            @click="tuifang(orderId)"
            v-if="this.$route.query.ordertype==3 ||this.$route.query.ordertype==5"
            style="background-color:#118589"
          >退房</p>
          <p @click="zhuanshang(orderId)" v-if="this.$route.query.ordertype==6">转存商家</p>
          <p
            @click="xiaozhuan(orderId)"
            v-if="this.$route.query.ordertype==6"
            style="background-color:#E72D2D"
          >取消转售</p>
          <p
            @click="delOrder(orderId)"
            v-if="this.$route.query.ordertype==11 || this.$route.query.ordertype==8 || this.$route.query.ordertype==9 || this.$route.query.ordertype==10"
            style="background-color:#E72D2D"
          >删除订单</p>
          <p
            @click="toviewComment(orderId)"
            v-if="this.$route.query.ordertype==8 || this.$route.query.ordertype==9 || this.$route.query.ordertype==10"
            style="background-color:#FF9623"
          >查看评论</p>
          <p
            @click="comment(orderId)"
            v-if="this.$route.query.ordertype==7"
            style="background-color:#118589"
          >评论</p>
        </div>
      </div>
    </div>
    <!-- 弹出遮罩层 -->
    <Marks v-if="show" class="marks" @show="()=>{show=false;}" />
  </div>
</template>
<script>
import {
  submitResidents,
  findHotleOrderInfo,
  updateHotelOrder
  // saveHotelRoomComment, //添加评论
} from "../../api/order";
import { CountDown } from "vant";
Vue.use(CountDown);
import { loadRoomDetail } from "../../api/home/details";
// import { setToken } from "@/api/util";
import params from "../../api/date/params.js";

import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
import { Toast } from "vant";
Vue.use(Toast);
// 图片组件
import Stayaimg from "@/components/staya/index.vue";
import Firsthead from "@/components/firsthead/index.vue";
// 返回上一级
import Leftheader from "@/components/header/index";
import Detailsshop from "@/module/detailsshop/index.vue";
// 酒店介绍
// import Hotel from "@/components/hotel/hotel.vue";
// 购物清单
import Duwuqing from "@/components/duwuqing/index.vue";
// 多余时间转让
import Denttime from "@/components/denttime/index.vue";
// 转售中
import Walktime from "@/components/walktime/index.vue";
// 房东和消息
import Landlady from "@/components/landlady/index.vue";
// 个人入住信息
import MenuList from "@/components/menulist/index.vue";
import Failparent from "@/components/failparent/index.vue";
//订单金额
import Dingjin from "@/components/dingjin/index.vue";
// 押金
import Yajin from "@/components/yajin/index.vue";
// 转售
import Zhuanshou from "@/components/zhuanshou/index.vue";
// 订单信息
import Dingdan from "@/components/dingdan/index.vue";
// 众多选项
import Mltiple from "@/components/multiple/index.vue";
// 底部文字
import Footertext from "@/components/footertext/index.vue";
// 取消订单遮罩
import Marks from "@/components/mark/index.vue";
// 退款信息
import Steps from "@/components/steps/index.vue";
// 转售成功
import Addlist from "@/components/addlist/index.vue";
// 转售失败
import Addtwo from "@/components/addtwo/index.vue";
export default {
  data() {
    return {
      tel: "15901065056",
      numerous: false,
      roomrecomItem: {},
      page: "",
      pageinfo: "",
      ordermsg: {
        //订单信息
        orderCode: "",
        phoneNumber: "",
        userName: "",
        createTime: ""
      },
      roomList: "", //订单房间信息
      isWindow: "", //是否有窗
      person: [],
      show: false,
      ordertype: this.$route.query.ordertype,
      orderId: this.$route.query.orderId,
      params: params,
      orderinfos: "",
      hour: "",
      toShopTime: {
        value: "",
        value1: ""
      }, //预计到店时间
      payMethod: "", //支付方式
      isResale: "", //是否转售
      reSaleDiscount: "", //转售折扣
      reSaleStartTime: "", //转售开始时间 2018-01-03 00:00:00
      roomType: "",
      hotelId: "",
      price: "",
      resaleWay: "", //转售方式
      depositType: "", //押金支付方式
      priceAll: "" //合计支付金额
    };
  },
  created() {
    this.roomType = this.$route.query.roomType;
    this.hotelId = this.$route.query.hotelId;
    // console.log(this.roomType,this.hotelId)
    this.orderinfos = JSON.parse(window.sessionStorage.getItem("filterDate"));
    var sid = this.$route.query.rmb;
    this.orderinfos.actualPay = sid.substring(sid.lastIndexOf("=")+1, sid.length);
    this.orderinfos.enterTime =
      this.orderinfos.startDate + " " + this.orderinfos.startTime;
    this.orderinfos.leaveTime =
      this.orderinfos.endDate + " " + this.orderinfos.endTime;
    var enterTime = new Date(this.orderinfos.enterTime);
    var leaveTime = new Date(this.orderinfos.leaveTime);
    var hour = leaveTime - enterTime;
    // console.log(enterTime, leaveTime);
    // console.log(hour);
    this.hour = hour / 1000 / 60 / 60;
    if (window.localStorage.getItem("resaleMsg")) {
      this.isResale = 1; //存在转售
      this.reSaleStartTime =
        JSON.parse(window.localStorage.getItem("resaleMsg")).startTime + ":00";
      this.reSaleDiscount = JSON.parse(
        window.localStorage.getItem("resaleMsg")
      ).discount;
      this.resaleWay = JSON.parse(
        window.localStorage.getItem("resaleMsg")
      ).resaleWay;
      // console.log(this.isResale,this.reSaleDiscount,this.reSaleStartTime)
    } else {
      this.isResale = 0; //不存在转售
      this.reSaleDiscount = 1;
      this.reSaleStartTime = "2018-01-03 00:00:00";
    }
  },
  mounted() {
    // console.log(this.$route.query);
    // 下单详情界面
    if (this.$route.query.ordertype == 999) {
      var roomType = this.$route.query.roomType;
      var hotelId = this.$route.query.hotelId;
      this.getloadRoomDetail(hotelId, roomType);
      // 房费
      var price = this.$route.query.rmb;
      this.price = this.getCaption(price);
    }

    // 订单列表跳转页面详情
    if (this.$route.query.ordertype != 999) {
      var orderId = this.$route.query.orderId;
      // console.log(orderId);
      //订单跳转获取订单详情信息
      this.getHotleOrderInfo(orderId);
    }
  },
  methods: {
    getCaption(obj) {
      var index = obj.lastIndexOf("=");
      obj = obj.substring(index + 1, obj.length);
      //  console.log(obj);
      return obj;
    },
    toHomeRule() {
      this.$router.push({ path: "/page/homeRule/reserveHomeRule" });
    },
    //预定跳转过来的详情
    getloadRoomDetail(hotelId, roomType) {
      loadRoomDetail({ hotelId, roomType }).then(res => {
        if (res.code == 0) {
          this.pageinfo = res.data;
          // console.log(res.data);
          var depositType = res.data.depositType;
          // console.log(depositType);
          var depoist = [
            {
              type: "1",
              value: "线上支付"
            },
            {
              type: "2",
              value: "线下支付"
            },
            {
              type: "3",
              value: "免押金"
            }
          ];
          for (var i = 0; i < depoist.length; i++) {
            if (depoist[i]['type'] == depositType) {
              depositType = depoist[i].value;
              this.payMethod = depositType;
            }
          }
        }
        // console.log(res.data);
      });
    },
    //订单跳转获取订单详情信息
    getHotleOrderInfo(orderId) {
      findHotleOrderInfo({ orderId: orderId })
        .then(res => {
          // Toast.loading({
          //   mask: true,
          //   message: "加载中..."
          // });
          if (res.code == 0) {
            this.pageinfo = res.data;
            // console.log(res.data);
            // 订单信息
            this.ordermsg.orderCode = res.data.orderCode;
            this.ordermsg.phoneNumber = res.data.phoneNumber;
            this.ordermsg.userName = res.data.userName;
            this.ordermsg.createTime = res.data.createTime;
            window.localStorage.setItem(
              "ordermsg",
              JSON.stringify(this.ordermsg)
            );
            //订单房间信息
            this.roomList = res.data.roomList[0];
            //是否有窗
            if (res.data.roomList[0].isWindow == "0") {
              this.isWindow = "无窗";
            } else if (res.data.roomList[0].isWindow == "1") {
              this.isWindow = "有窗";
            } else {
              this.isWindow = "部分有窗";
            }
            //入住人信息
            this.person = res.data.roomList[0].residentsList;

            // console.log(this.roomList);
          }
        })
        .catch();
    },
    hotelShow() {
      this.$parent.show = true;
    },
    ontap() {
      // window.location.href = 'tel://15901065056'
    },
    //提交订单
    submit() {
      // 没选入住信息弹框警告
      if (localStorage.getItem("person") == null) {
        Toast("请选择入住人");
        return false;
      }
      if (localStorage.getItem("toShopTime") == null) {
        Toast("请选择预计到店时间");
        return false;
      }
      var person = JSON.parse(localStorage.getItem("person"));
      this.toShopTime.value1 = JSON.parse(
        window.localStorage.getItem("toShopTime")
      ).value1; //预计到店时间
      this.payMethod = JSON.parse(window.localStorage.getItem("payMethod")); //支付方式
      var str = "";
      for (var i = 0; i < person.length; i++) {
        str += person[i].residentsId + ",";
        var checkIns = str.substring(0, str.length - 1);
      }
      //是否转售
      if (
        !window.localStorage.getItem("isResale") ||
        window.localStorage.getItem("isResale") == 0
      ) {
        this.isResale = 0;
      } else {
        this.isResale = 1;
      }
      const params = {
        precPay: this.orderinfos.actualPay, //优惠前金额
        checkInTime: this.orderinfos.enterTime, //预计入住时间
        leaveTime: this.orderinfos.leaveTime, //预计离店时间
        hour: this.hour, //订单小时数
        isResale: this.isResale, //是否存在转售 0 不存在 1 存在 "isResale": 0,
        reSaleStartTime: this.reSaleStartTime, //转售开始时间
        checkIns: checkIns, //入住人
        toShopTime: this.toShopTime.value1, //预计到店时间
        payType: this.payMethod, //支付方式 1在线 2账户
        cardIds: 0, //会员卡id固定
        couponIds: 1,
        hourCurrencyIds: 1,
        depositStatus: this.pageinfo.depositType, //押金类型
        deposit: this.pageinfo.depositAmounts, //押金金额
        actualPay:
          parseFloat(this.pageinfo.depositAmounts) + parseFloat(this.price), //实际支付
        roomType: this.roomType,
        hotelId: this.hotelId,
        reSaleDiscount: this.reSaleDiscount, //转售折扣
        resaleWay: this.resaleWay ,//转售方式限时or一直
        limitResaleTime:'',//限时转售时间
      };
      // console.log(params);
      // 存储的转售信息空
      window.localStorage.removeItem("resaleMsg");
      window.localStorage.removeItem("person");
      window.localStorage.removeItem("toShopTime");
      window.localStorage.removeItem("payMethod");
      window.localStorage.removeItem("isResale");
      submitResidents(params)
        .then(res => {
          // console.log(res);
          if (res.code == 0) {
            Toast("提交成功");
            this.$router.push({ path: "/page/jump/payment",query:this.$route.query });
            window.localStorage.setItem("orderFnMsg", JSON.stringify(res.data));
          }
        })
        .catch();
    },
    //转售续存
    zhuan(ordertype, orderId) {
      this.$router.push({
        path: "/page/jump/residtwo",
        query: { ordertype: ordertype, orderId: orderId }
      });
    },
    // 续订
    xuding(orderId) {
      this.$router.push({
        path: "/page/jump/continue",
        query: { orderId: orderId }
      });
    },
    //取消订单
    cancel() {
      this.show = true;
    },
    //评论
    comment(orderId) {
      this.$router.push({
        path: "/page/jump/checkout",
        query: { orderId: orderId }
      });
    },
    //查看评论
    toviewComment(orderId) {
      this.$router.push({
        path: "/page/jump/checkout",
        query: { orderId: orderId, commentType: 1 }
      }); //路径要改
    },
    //退房
    tuifang(orderId) {
      //点击退房
      updateHotelOrder({ orderId: orderId, orderStatus: 8 }).then();
    },
    //转存商家
    // zhuanshang(orderId) {console.log(orderId)},
    //取消转售
    // xiaozhuan(orderId) {console.log(orderId)},
    //去支付
    pay(orderId, price) {
      this.$router.push({
        path: "/page/jump/payment",
        query: { status: "onPay", orderId: orderId, price: price }
      });
    },
    //删除订单
    delOrder(orderId) {
      updateHotelOrder({ orderId: orderId, orderStatus: 10 }).then(
        // console.log(res);
        this.$router.push({ path: "/order/index" })
      );
    }
  },
  filters: {
    timeFilter(time) {
      var date = new Date(time);
      var m = date.getMonth() + 1;
      var d = date.getDate();
      return m + "月" + d + "日";
    },
    weekFilter(time) {
      var date = new Date(time);
      var n = date.getDay();
      var arr = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      return arr[n];
    },
    dateFilter(time) {
      var date = new Date(time);
      var h = date.getHours();
      var min = date.getMinutes();
      h = h > 9 ? h : "0" + h;
      min = min > 9 ? min : "0" + min;
      return h + ":" + min;
    },
    parseInt(time) {
      return parseInt(time);
    }
  },
  components: {
    Leftheader,
    // Hotel,
    Detailsshop,
    Duwuqing,
    Denttime,
    Walktime,
    Landlady,
    MenuList,
    Mltiple,
    Footertext,
    Stayaimg,
    Failparent,
    Dingjin, //订单金额
    Yajin, //押金
    Dingdan, //订单信息
    Marks, //弹出遮罩层
    Firsthead, //ordertype为6info
    Zhuanshou, //转售信息
    Addlist, //转售成功
    Addtwo, //转售失败
    Steps //退款信息
  }
};
</script>
<style>
.timeInfo {
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  background: #ff9623;
  color: #fff;
  font-size: 0.3rem;
  font-weight: bold;
  text-align: left;
  padding-left: 1rem;
}
.timeInfo_img {
  width: 0.35rem;
  height: 0.35rem;
  margin-right: 0.2rem;
  vertical-align: middle;
}
.van-count-down {
  color: #fff;
  font-size: 0.3rem;
}
.payWay {
  margin: 0.3rem 0.5rem 0 0.46rem;
  padding: 0rem 0.5rem 0rem 0.46rem;
  display: flex;
  padding: 0.33rem 0.3rem 0.31rem 0.36rem;
  background: #fff;
  font-size: 0.36rem;
  color: #000;
  border-radius: 0.1rem;
  justify-content: space-between;
}
.marks {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
/* Hotel */
.resale_resale {
  margin-bottom: 0.3rem;
}
.staylist {
  width: 100%;
  padding: 0rem 0.5rem;
}

.staylist_top {
  border-radius: 0.1rem;
  margin: 0rem 0.49rem 0rem 0.51rem;
  background-color: #fff;
}

.staylist_banner {
  display: flex;
  justify-content: space-between;
  background: #fff;
}

.jiedai {
  font-size: 0.33rem;
  font-weight: 400;
  color: #4f4f4f;
  padding-top: 0.28rem;
}

.staylist_banner div {
  display: flex;
  padding: 0.21rem 0rem 0.23rem 0rem;
}

.staylist_banner div p:first-child {
  width: 0.55rem;
  height: 0.55rem;
  margin-right: 0.15rem;
}

.staylist_banner div p:first-child img {
  width: 100%;
  height: 100%;
}

.staylist_banner div p {
  font-size: 0.36rem;
  font-weight: 600;
}

.staylist_last {
  padding: 0.33rem 0.1rem 0.18rem 0.25rem;
  border-bottom: 0.03rem solid #e6e5e5;
}

.tent_top p:first-child {
  font-size: 0.36rem;
  font-weight: 500;
  color: #000;
  margin-left: -2.6rem;
}

.tent_bottom > a {
  display: block;
  display: flex;
}

.tent_bottom > a > p:first-child {
  width: 0.41rem;
  height: 0.41rem;
  margin-right: 0.12rem;
}

.tent_bottom {
  padding-top: 0.51rem;
}

.tent_bottom > a > p:first-child img {
  width: 100%;
  height: 100%;
}

.tent_bottom > a > p:last-child {
  font-size: 0.3rem;
  font-weight: 300;
  color: #ff9623;
}

.dizhi {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.1rem 0rem 0.25rem;
}

.dizhi div {
  display: flex;
}

.dizhi_left p:first-child {
  width: 0.55rem;
  height: 0.44rem;
  margin-right: 0.1rem;
}

.dizhi_left p:first-child img {
  width: 100%;
  height: 100%;
}

.dizhi_left p:last-child {
  font-size: 0.3rem;
  font-weight: 400;
  color: rgba(46, 46, 46, 1);
  width: 6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dizhi_right p:first-child {
  font-size: 0.3rem;
  font-weight: 300;
  color: #ff9623;
  margin-right: 0.18rem;
}

.dizhi_right p:last-child {
  margin-top: 0.05rem;
  width: 0.14rem;
  height: 0.3rem;
}

.dizhi_right p:last-child img {
  width: 100%;
  height: 100%;
}

.staylist_bottom {
  display: flex;
  padding: 0.5rem 0.25rem 0rem 0.25rem;
  justify-content: space-between;
  background: #fff;
}

.staylist_bottom div p:first-child {
  font-size: 0.36rem;
  font-weight: 300;
  color: rgba(74, 74, 74, 1);
  text-align: center;
}

.staylist_bottom div p:nth-child(2) {
  font-size: 0.3rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  text-align: center;
}

.staylist_bottom div p:last-child {
  font-size: 0.3rem;
  font-weight: 400;
  color: rgba(74, 74, 74, 1);
  text-align: center;
}

.staylist_bottom > p {
  background: #008489;
  width: 1.48rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  text-align: center;
  line-height: 0.6rem;
  color: #fff;
  font-size: 0.24rem;
  font-weight: 400;
  margin-top: 0.6rem;
}
/* 1111111111111 */
.bordeer {
  border-bottom: 0.03rem solid #e6e5e5;
}

.hotel_toplist {
  margin: 0rem 0.49rem 0rem 0.51rem;
  background: #fff;
  padding: 0 0.51rem 0 0.49rem;
  border-radius: 0 0 0.1rem 0.1rem;
}

.hotel_toplist p {
  border-top: #e6e5e5 solid 0.03rem;
  font-size: 0.3rem;
  font-weight: 400;
  color: rgba(255, 150, 35, 1);
  display: flex;
  justify-content: flex-end;
  padding: 0.25rem 0rem 0.3rem;
}

.hotel_toplist p span:first-child {
  margin-right: 0.29rem;
  display: block;
}

.hotel_toplist p span:first-child {
  display: block;
}

.hotel_toplist p span:last-child {
  width: 0.17rem;
  height: 0.28rem;
}

.hotel_toplist p span:last-child img {
  width: 100%;
  height: 100%;
}

/*商城购物 */
.shopping {
  background: #f8f8f8;
  padding: 0rem 0.5rem 0rem 0.46rem;
}

.shopping_top {
  background: #fff;
  border-radius: 0.1rem;
  padding-right: 0.16rem;
  padding-left: 0.27rem;
}

.juxing {
  display: flex;
  border-bottom: #e6e5e5 solid 0.03rem;
  padding: 0.33rem 0rem 0.31rem 0.16rem;
}

.juxing p:first-child {
  width: 0.42rem;
  height: 0.39rem;
  margin-right: 0.1rem;
}

.juxing p:first-child img {
  width: 100%;
  height: 100%;
}

.juxing p:last-child {
  font-size: 0.36rem;
  font-weight: 500;
  color: #000;
  margin-top: -0.05rem;
}

.Detailsshop {
  margin-top: 0.25rem;
  border-bottom: #e6e5e5 solid 0.03rem;
}

.juxing_bottom {
  display: flex;
  justify-content: flex-end;
  padding: 0.44rem 0.05rem 0.39rem 0rem;
}

.juxing_bottom span {
  display: block;
}

.juxing_bottom > span:first-child {
  font-size: 0.24rem;
  color: #000;
}

.juxing_bottom > span:last-child {
  color: #ff0023;
  font-size: 0.24rem;
}

.check {
  margin-top: 0.3rem;
  padding: 0rem 0.5rem 0rem 0.46rem;
}

.check_wrap {
  background: #fff;
  padding: 0rem 0.16rem;
}

.check_top {
  padding: 0.33rem 0rem 0.31rem 0.16rem;
  display: flex;
}

.check_top p:first-child {
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.1rem;
}

.check_top p:first-child img {
  width: 100%;
  height: 100%;
}

.check_top p:last-child {
  font-size: 0.36rem;
  color: #000;
  font-weight: 500;
}

.check_content_top {
  display: flex;
  padding: 0.44rem 0rem 0.38rem;
  border-bottom: 0.03rem solid #e6e5e5;
}

.check_content_top p:first-child {
  margin-right: 1.3rem;
}

.check_content_top p,
.check_dl dt {
  color: #000000;
  font-size: 0.36rem;
  font-weight: 400;
}

/* 入住的个人信息 */
.check_dl {
  display: flex;
  padding: 0.41rem 0rem;
  position: relative;
}

.check_dl dd {
  flex: 1;
  border-bottom: 0.03rem solid #e6e5e5;
  text-align: left;
  font-size: 0.36rem;
  color: #737373;
}

.check_dl dd p {
  border-bottom: 0.03rem solid #e6e5e5;
  padding-bottom: 0.51rem;
  padding-left: 0.21rem;
  width: 6.52rem;
}

.check_dl dd div {
  padding: 0.48rem 0rem 0.58rem 0.21rem;
}

.touxiang {
  position: absolute;
  width: 0.6rem;
  height: 0.56rem;
  right: 0.37rem;
  top: 1.14rem;
}

.touxiang > img {
  width: 100%;
  height: 100%;
}

.check_dl dt {
  margin-right: 0.36rem;
}

.lianxi {
  text-align: left;
  display: flex;
  font-size: 0.36rem;
  color: #000;
  border-bottom: 0.03rem solid #e6e5e5;
  padding-bottom: 0.41rem;
}

.lianxi p:first-child {
  padding-left: 0.1rem;
  padding-right: 0.57rem;
}

.lianxi p:nth-child(2) {
  margin-right: 0.37rem;
}

.lianxi p:nth-child(3) {
  padding-left: 0.24rem;
  border-left: 0.03rem solid #e6e5e5;
  margin-right: 3rem;
}

.lianxi p:last-child {
  width: 0.38rem;
}

.lianxi p {
  height: 0.44rem;
  line-height: 0.44rem;
}

.lianxi p:last-child img {
  width: 100%;
  height: 100%;
}

.daodian {
  display: flex;
  padding: 0.41rem 0rem 0.41rem 0.1rem;
  font-size: 0.36rem;
  color: #000;
  font-weight: 400;
}

.daodian p:first-child {
  margin-right: 0.25rem;
}

.yajin {
  display: flex;
  justify-content: space-between;
}

.yajin-top {
  border: none;
}

.yajin > p {
  padding-right: 0.22rem;
  font-size: 0.4rem;
  font-weight: 400;
  color: rgba(231, 45, 45, 1);
  line-height: 44px;
}

.jine {
  margin-top: 0.3rem;
}

.ollist {
  padding: 0.4rem 0rem;
  font-size: 0.36rem;
  font-weight: 400;
}

.ollist > li {
  display: flex;
}

.ollist > li > p:last-child {
  padding-left: 1.46rem;
}

.ollist > div {
  display: flex;
  margin-top: 0.09rem;
}

.ollist > div > p:last-child {
  color: #e72d2d;
  padding-left: 0.72rem;
}

.text_wenzi {
  margin-bottom: 0.76rem;
}

.text_wenzi p {
  font-size: 0.3rem;
  font-weight: 400;
  padding-right: 2.4rem;
  text-align: left;
}

/* 转售多余时间 */

/* 按钮的各种样式 */
.button_child {
  display: flex;
  font-size: 0.5rem;
}

.button_child p {
  flex: 1;
  line-height: 1.46rem;
}

.button_child p:first-child {
  color: #d93e3e;
}

.button_child p:last-child {
  background: #d93e3e;
  color: #fff;
}

/* 第二种 */
.button_two {
  height: 1.46rem;
  display: flex;
}

.button_two p {
  flex: 1;
  font-size: 0.5rem;
  font-weight: 400;
  line-height: 1.46rem;
  color: #fff;
}

.button_two p:first-child {
  background: #ff9623;
}

.button_two p:last-child {
  background: #e41b2e;
}

/* 第三种 */
.button_three {
  width: 100%;
  width: 100%;
  height: 1.46rem;
  background: #e72d2d;
  color: #ffffff;
  font-weight: 400;
  font-size: 0.5rem;
}

.button_three > p {
  line-height: 1.46rem;
}

/* 转售中 */
.walk {
  width: 100%;
  padding: 0rem 0.48rem;
  margin-bottom: 0.3rem;
}

.walk_content {
  background: #fff;
  border-radius: 0.1rem;
}

.walk_content > p {
  font-size: 0.5rem;
  font-weight: bold;
  color: #118589;
  padding: 0.4rem 0rem;
}

.walk_content > div {
  display: flex;
  padding-bottom: 0.45rem;
}

.walk_content > div > p {
  flex: 1;
  font-size: 0.3rem;
  font-weight: bold;
  color: #000000;
}

/* 房东的介绍 */
.landlady {
  margin: 0.21rem 0.48rem 0.18rem 0.43rem;
}

.landlady > div {
  width: 1.3rem;
  height: 1.3rem;
}

.landlady > div > img {
  width: 100%;
  height: 100%;
}

.landlady > p,
.landlady_right > p {
  font-size: 0.3rem;
  font-family: PingFangSC-Light;
  font-weight: bold;
  color: rgba(1, 1, 1, 1);
}

.landlady_body,
.landlady_right,
.landlady_right > div {
  display: flex;
}

.landlady_right {
  text-align: left;
}

.landlady_right > p {
  margin-top: 0.63rem;
}

.landlady_right > div p {
  width: 0.5rem;
  height: 0.5rem;
}

.landlady_right > div {
  margin-top: 1.27rem;
}

.landlady_right > div p:first-child {
  margin-right: 0.31rem;
}

.landlady_right > div p:last-child {
  margin-right: 0.2rem;
}

.landlady_right > div p img {
  width: 100%;
  height: 100%;
}

.footer_left {
  padding-left: 0.3rem;
}
.button_bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>