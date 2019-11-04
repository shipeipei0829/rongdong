<template>
  <div class="details">
    <div class="">
      <Headers bgcolor="rgb(17, 133, 137, 0)" class="tophead" />

      <div style="display:none;">
                <van-icon class="shoucang no" name="like-o" />
                <van-icon class="shoucang yes" name="like" />
      </div>
    </div>
    <div class="swip">
        <!--l轮播-->
        <Swipes :objdate="detailsDate"  @click.native="hadnleRouterHotelimg()" />
    </div>
    <div class="hotelnamewap">
      <!--酒店标题-->
      <Detailstitle v-if="flag" :objdate="detailsDate" :type="type" />
    </div>
    <div class="ticketwap"  >
      <!--优惠券-->
      <Detailsticket v-if="flag" :objdate="couponCon" :hotelId="hotelId"  />
    </div>
    <div class="mapwap">
      <!--地图-->
      <Detailsmap v-if="flag" :objdate="detailsDate" @click.native="handlemap()" />

    </div>

    <div class="intaketimewap">
      <!--入驻时间 带筛选(checktype 1) 不带筛选 (checktype 0)-->
      <Detailstime   v-if="flag" :objdate="detailsDate" checktype="0" />

    </div>
    <div class="recommendwap">
      <!--推荐 入驻方案，有方案( haveornot 1 ) 无方案( haveornot 0 )-->
      <Detailsscheme v-for="(x,index) in fangan" :key="index" :objdate="x" class="recommendcon" haveornot="1" />

    </div>



    <div class="shopwap"  v-if="type==1">
      <!--商城列表-->
      <div class="shop">
        <div class="shoptitile">
              <Headertitle style="background:#fff;" value="酒店商城" padtop=".28rem" padbtm=".28rem"/>
              <div class="all" @click="handleshowall()"> 
                <i>查看全部</i><van-icon name="arrow" />
              </div>
        </div>
          <Detailsshop />
      </div>

    </div>

    <div class="landlordwap">
      <!--房主描述-->
      <Detailslandlord v-if="type == 2" />
    </div>

    <div class="hintwap"  style="display:none">
      <!--特别提示-->

      <Detailshint />
      
    </div>

    <div class="paywap" style="display:none">
    <!--支付方式-->
      <Detailspaytype />
    </div>

    <div class="gradewap">
      <!--评分-->
      <Detailsgrade v-if="flag" :objdate="detailsDate" />

    </div>
    <div class="roomiconwap" style="display:none;">
      <!--房间信息 图标-->
      <p class="roomicontitle" style="font-size:.50rem;padding:.32rem 0 .32rem .47rem;background:#F0F0F0;text-align:left;" >悦居40平大床房</p>
      <Headertitle style="background:#fff;" value="房间信息" padtop=".28rem" padbtm=".28rem"/>
      <!--<Detailsroomicon />-->
    </div>

    <div class="facilitywap" style="display:none;">
      <!--配套设施-->
      <Headertitle style="background:#fff;" value="配套设施" padtop=".28rem" padbtm=".28rem"/>
      <Detailsmating />
    </div>

    <div class="roominfowap bgwhite">
      <!--订房须知-->
      <Headertitle style="background:#fff;" value="订房须知" padtop=".28rem" padbtm=".28rem"/>

      <Detailsroominfo  v-if="flag" :objdate="detailsDate"  />

    </div>


    <div class="themapwap">
      <!--位置周边-->
      <Headertitle style="background:#fff;" value="位置周边" padtop=".28rem" padbtm=".28rem"/>
      <Detailsthe  v-if="flag" :objdate="detailsDate" />
    </div>
    

    <div class="noticewap">
      <!--退订须知-->
      <div class="notice">
          <Headertitle style="background:#fff;" value="退订须知" padtop=".28rem" padbtm=".28rem"/>
          <div class="text">
             {{detailsDate.outInformation}}
          </div>
      </div>
    </div>
    
    <div class="bbtns">
            <!-- 底部 按钮 -->
      <Detailspaybtn :type="type" />
    </div>

    


  </div>
</template>

<script>
import Headertitle from '@/components/headertitle/index'
import Footers from '@/components/footer/index'
import Xing from  '@/components/xing/index'
import Tagbtn from '@/components/tagbtn/index'
import Tag from '@/components/tag/index'
import Maps from '@/components/maps/index'
import Headers from '@/components/header/index'
import Ticket from '@/components/ticket/index'
import Swipes from '@/module/swipes/index'
import Detailstitle from '@/module/detailstitle/index'
import Detailsticket from '@/module/detailsticket/index'
import Detailstime from '@/module/detailstime/index'
import Detailsscheme from '@/module/detailsscheme/index'
import Detailsshop from '@/module/detailsshop/index'
import Detailsgrade from '@/module/detailsgrade/index'
import Detailsthe from '@/module/detailsthe/index'
import Detailsroominfo from '@/module/detailsroominfo/index'
import Detailslandlord from '@/module/detailslandlord/index'
import Detailsmap from '@/module/detailsmap/index'
import Detailshint from '@/module/detailshint/index'
import Detailspaytype from '@/module/detailspaytype/index'
import Detailspaybtn from '@/module/detailspaybtn/index'
import Detailsmating from '@/module/detailsmating/index'
import Detailsroomicon from '@/module/detailsroomicon/index'

// options 为可选参数，无则不传
import {getTimeLength,timefilter} from '@/api/date/init'//共用函数方法文件
import {loaddDetails,loaddDetailsRoom,loadcouponlist} from '@/api/home/details'// 加载详情

import '@/../public/cdn/common.js'
export default {
  name: 'Details',
  data(){
    return{
      active:0,
      show:false,
      type:'',//当前id
      hotelId:'',
      lng:'',
      lat:'',
      fangan:[],
      detailsDate:{},
      flag:false,
      couponCon:[],
      startDate:'',//开始日期
      endDate:'',//结束日期
      startTime:'',//开始时间
      endTime:'',//结束时间

    }
  },
  props: {
    msg:{

    }
  },
  methods:{
    
    hadnleRouterHotelimg(){
      this.$router.push({path:'/hotelimg/index'})
    },
    handleshowall(){
      this.$router.push({path:'/shoporder/index'})
    },
    handlemap(){
      this.$router.push({path:'/mapdetails/index'})
    },
    getsrcurl(icon){
      return require("@/img/"+icon+"");
      
    },
    loadetails(){
      var t = this
      loaddDetails({
        hotelId:t.hotelId,
        lng:t.lng,
        lat:t.lat,
      }).then(res => {
          console.log(res)
        if(res.code == 0){
          this.detailsDate = res.data//
          t.flag = true
        }
      }).finally((res) => {
        t.loading = false
      }).catch((res)=>{
        t.finished = true;
        t.loading = false
      })
    },
    loadroomlist(){
      var t = this
      var filterDate = JSON.parse( sessionStorage.getItem('filterDate') )
      loaddDetailsRoom({
        hotelId:t.hotelId,
        beganTime:filterDate.startDate +' '+ filterDate.startTime+':00',
        endTime:filterDate.endDate +' '+ filterDate.endTime+':00',
        earlyDeparture:filterDate.earlyDeparture,
        maxPeople:filterDate.maxPeople,
        sRoomPrice:filterDate.rmb.startrmb,
        roomPrice:filterDate.rmb.endrmb,
        bottomRoom:-1,
        limit:3,
        currentPage:1,
        accType:'小时'
      }).then(res => {
        if(res.code == 0){
          if(res.data.records.length > 0){
            this.fangan = res.data.records
          }else{
            this.fangan = []
          }
        }else{
          this.fangan = []
        }
      }).finally((res) => {
        t.loading = false
      }).catch((res)=>{
        t.finished = true;
        t.loading = false
      })
    },
    couponlist(){
      var t = this
      loadcouponlist({
        hotelId:t.hotelId,
        limit:2,
        page:1,
      }).then(res => {
        if(res.code == 0){
          if(res.data.records.length > 0){
            this.couponCon = res.data.records
          }else{
            this.couponCon = []
          }
        }else{
          this.couponCon = []
        }
      }).finally((res) => {
        t.loading = false
      }).catch((res)=>{
        t.finished = true;
        t.loading = false
      })
      return false
    }
  },
  mounted(){
    this.hotelId = this.$route.query.hotelId
    this.lng = this.$route.query.lng
    this.lat = this.$route.query.lat
    this.loadroomlist()
    this.loadetails()
    this.couponlist()
    




    return false
    var itemid = localStorage.getItem('hotelId')
    var list = JSON.parse( localStorage.getItem('roomrecom') ) 
    var item = list.filter((x)=>{return x.hotelId == itemid})
    this.detailsDate = item[0]
    console.log( this.detailsDate )
    this.fangan = item[0].arraynewroom
    
  },

  components: {
    Footers,
    Swipes,
    Xing,
    Ticket,
    Tagbtn,
    Headers,
    Detailstitle,
    Detailsticket,
    Detailstime,
    Detailsscheme,
    Tag,
    Headertitle,
    Detailsshop,
    Detailsgrade,
    Detailsthe,
    Detailsroominfo,
    Detailslandlord,
    Detailsmap,
    Detailshint,
    Detailspaytype,
    Detailspaybtn, 
    Detailsmating,
    Detailsroomicon,
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.details{
  /deep/ .van-nav-bar .van-icon{
    background:rgba(255,255,255,.5);
    width: .8rem;
    height: .8rem;
    text-align: center;
    line-height: .85rem;
    border-radius: 50%;
  }
}
.ticketrowwap{
  .tickwaps{
    margin-bottom: .3rem;
  }
}
.shoptitile{
  position: relative;
  .all{
    position: absolute;
    top: 0.36rem;
    right: 0.51rem;
    font-size: .3rem;
    line-height: .3rem;
    i{
      vertical-align: middle;
    }
  }
}










/*退订须知*/
.notice .text{
  text-align: left;
  padding: 0 .3rem 1rem .3rem
}
/*总*/

.ticketwap,.intaketimewap,.shopwap,.themapwap,.gradewap,.landlordwap,.noticewap,.facilitywap,.roomiconwap,.paywap,.hintwap,.mapwap{
  background: #fff;
  margin-bottom: .24rem;
}

.themapwap{
  /deep/ .van-ellipsis{
    height: .83rem;
    display: inline-block;
    font-size: .42rem;
  }
  /deep/ .van-tabs--card{
    padding-top: .85rem;
  }
  /deep/ .van-tabs--card>.van-tabs__wrap{
    height: .83rem;
    .van-tabs__nav--card{
      .van-tab{
        line-height: .83rem;
      }
      height: .83rem;
    }
  }
}
.hotelnamewap{
  margin-bottom: .24rem;
}

.swip{
    height: 7.68rem;
    background: #fff;
}
.recommendwap .recommend{
  margin-bottom: .24rem;
}
.tophead{
  position: fixed;
  top: 0;

}
</style>
