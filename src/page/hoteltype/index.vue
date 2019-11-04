<template>
  <div class="hoteltype">

    <div class="bgimgwap">
        <Headers  bgcolor="rgb(17, 133, 137, 0)" class="headers" />
        <img class="bgimg" src="./../../img/teltypes.jpg" alt="">
        <div class="hoteltypewap">
          
          <div class="hoteltypecon">
            <p class="titleTime">{{titleTime}}</p>

            <ul>
              <li>
                <Datetime v-if="timevalshow" :timeval="timeval" />
              </li>
              <li @click="handleRouter('alldayip')">
                {{ipcon}}
              </li>
              <li @click="handleRouter('rmbstar')">
                {{star.value == '' ? '星级' : star.value}}/{{(rmb.strvalue == '') && (rmb.endvalue == '') ? '价格' : rmbstatus(rmb)}}
              </li>
              <li class="li">
                <Buttons @click.native="handleRouter('list')" borderradiue=".1rem" width="4.32rem" height=".87rem" value="搜索酒店" />
              </li>
            </ul>
            
          </div>
      </div>

    </div>
    <div class="recmed">
      <p>特惠推荐</p>
      <div>
          <Detailsscheme v-for="(x,index) in countroom" :key="index" :objdate="x" class="recommendcon" haveornot="1" />
      </div>
    </div>

  </div>
</template>

<script>
import Headers from '@/components/header/index'
import Buttons from '@/components/button/index'
import Tagbtn from '@/components/tagbtn/index'
import Datetime from '@/components/datetime/index'
import Detailsscheme from '@/module/detailsscheme/index'

import {getTimeLength,timefilter} from '@/api/date/init'//共用函数方法文件getTimeLength(sd+' '+st+':00',ed+' '+et+':00')
import {loadlistHour,loadlistTimeframe,loadlistAllday} from '@/api/home/index'//交互
export default {
  name: 'Hoteltype',
  data(){
    return{
      type:this.$route.query.type,
      titleTime:'',
      countroom:[],
      filterDate:{},
      filterInfo:{},
      ipcon:'',//地区
      star:{value:''},//星级
      rmb:{strvalue:'',endvalue:''},//价格
      timevalshow:false,
      timeval:'0'
    }
  },
  methods:{
    init(){
      var _this = this
      this.filterInfo.lng = this.filterDate.ipcon.lng
      this.filterInfo.lat = this.filterDate.ipcon.lat
      this.filterInfo.cityid = this.filterDate.ipcon.cityid
      this.filterInfo.beganTime = this.filterDate.startDate +' '+ this.filterDate.startTime+':00'
      this.filterInfo.endTime = this.filterDate.endDate +' '+ this.filterDate.endTime+':00'
      this.filterInfo.limit = 3
      this.filterInfo.currentPage = 1
      this.filterInfo.distance = this.filterDate.distance
      this.filterInfo.sRoomPrice = this.filterDate.rmb.startrmb
      this.filterInfo.roomPrice = this.filterDate.rmb.endrmb
      this.filterInfo.starLevel = this.filterDate.start.value
      this.filterInfo.earlyDeparture = this.filterDate.earlyDeparture
      this.filterInfo.maxPeople = this.filterDate.maxPeople
      this.filterInfo.orders = this.filterDate.orders
      this.filterInfo.orderBy = this.filterDate.orderBy
      //this.filterInfo.ipcon.name = this.filterDate.ipcon.name
      this.ipcon = this.filterDate.ipcon.name
      var data = this.filterInfo
      if(_this.type == 'Hour'){//checkInLength为五小时一下
        _this.titleTime = '小时房,5小时内入住自由入住'
        this.timeval = 'Hour'
        this.timevalshow = true
        this.lostHour(data)
      }else if(_this.type == 'Timeframe'){
        _this.titleTime = '时段房,6小时一个时段，安心入住'
        this.timeval = 'Timeframe'
        this.timevalshow = true
        this.lostTimeframe(data)
      }else if(_this.type == 'Allday'){
        _this.titleTime = '全天房'
        this.timeval = 'Allday'
        this.timevalshow = true
        this.lostAllday(data)

      }
    },
    lostHour(data){
      var filterDate = JSON.parse( sessionStorage.getItem('filterDate') )
      loadlistHour({
        hotelId:-1,
        earlyDeparture:filterDate.earlyDeparture,
        maxPeople:filterDate.maxPeople,
        sRoomPrice:filterDate.rmb.startrmb,
        roomPrice:filterDate.rmb.endrmb,
        lng:filterDate.ipcon.lng,
        lat:filterDate.ipcon.lat,
        bottomRoom:-1,
        limit:10,
        currentPage:1,
        timeType:'1',
        distance:'30000'
      }).then(res => {
        console.log(res)
        if(res.code == 0){
          if(res.data.records.length > 0){
            this.notdata = false
            this.countroom = res.data.records
          }else{
            this.countroom = []
          }
        }
      }).finally((res) => {
        
      }).catch((res)=>{
        
      })
    },
    lostTimeframe(data){
      var filterDate = JSON.parse( sessionStorage.getItem('filterDate') )
      loadlistTimeframe({
        hotelId:-1,
        beganTime:filterDate.startDate +' '+ filterDate.startTime+':00',
        endTime:filterDate.endDate +' '+ filterDate.endTime+':00',
        earlyDeparture:filterDate.earlyDeparture,
        maxPeople:filterDate.maxPeople,
        sRoomPrice:filterDate.rmb.startrmb,
        roomPrice:filterDate.rmb.endrmb,
        bottomRoom:-1,
        limit:3,
        currentPage:1,
        timeType:'2',
        distance:'30000'
      }).then(res => {
        console.log(res)
        if(res.code == 0){
          if(res.data.records.length > 0){
            this.notdata = false
            this.countroom = res.data.records
          }else{
            this.countroom = []
          }
        }
      }).finally((res) => {
        
      }).catch((res)=>{
        
      })
    },
    lostAllday(data){
      var filterDate = JSON.parse( sessionStorage.getItem('filterDate') )
      loadlistAllday({
        hotelId:-1,
        beganTime:filterDate.startDate +' '+ filterDate.startTime+':00',
        endTime:filterDate.endDate +' '+ filterDate.endTime+':00',
        earlyDeparture:filterDate.earlyDeparture,
        maxPeople:filterDate.maxPeople,
        sRoomPrice:filterDate.rmb.startrmb,
        roomPrice:filterDate.rmb.endrmb,
        bottomRoom:-1,
        limit:3,
        currentPage:1,
        timeType:'3',
        distance:'30000'
      }).then(res => {
        console.log(res)
        if(res.code == 0){
          if(res.data.records.length > 0){
            this.notdata = false
            this.countroom = res.data.records
          }else{
            this.countroom = []
          }
        }
      }).finally((res) => {
        
      }).catch((res)=>{
        
      })
    },
    handleRouter(type){
      var t = this
      if(type == 'rmbstar'){
        this.$router.push({ path: '/rmbstar/index'})
      }
      if(type == 'list'){
          this.$router.push({path:'/listhotel/index',query:{pageType:t.type}})
        }
      if(type == 'alldayip'){
        this.$router.push({ path: '/alldayip/index'})
      }   
    },
    handleClick(type,val){
      
    },
    rmbstatus(data){
      console.log(data)
      if(data.strvalue != '' && data.endvalue != ''){
        return data.strvalue + '-' + data.endvalue
      }else if(data.strvalue != '' && data.endvalue == ''){
        return data.strvalue+'以上'
      }else if(data.strvalue == '' && data.endvalue != ''){
        return data.endvalue+'以下'
      }
    },
    getsrcurl(icon){
      return require("@/img/"+icon+"");
    },
    setdateinfo(data){
      this.ipcon = data.ipcon.name
    }
  },
  mounted(){
    
    var t = this
    var filterDate = sessionStorage.getItem('filterDate')
    if(filterDate != null){
      this.filterDate = JSON.parse( sessionStorage.getItem('filterDate') ) 
    }
    this.init()
  },
  created(){

  },
  watch:{
    activeNames(val){
      console.log(val)
    }
  },
  components: {
    Headers,
    Buttons,
    Datetime,
    Tagbtn,
    Detailsscheme
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
.hoteltype{
    /deep/ .header{
      .van-icon{
        background-color: rgba(255, 255, 255,0.3);
        padding: .18rem;
        border-radius: 50%;
      }
    }

  .recmed{
    background: #F0F0F0;
    .recommendcon{
      margin-bottom: .2rem;
    }
    p{
      font-size: .5rem;
      line-height: .5rem;
      padding: .45rem;
      background: #F0F0F0;
      text-align: left;
    }

  }
  background: #fff;
  .bgimgwap{
    height: 10.05rem;
    position: relative;
    overflow: hidden
  }
  .bgimg{
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%)
  }
}
.hoteltypecon{
  
  width: 7.45rem;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 2rem;
  margin-left: -3.725rem;

  .titleTime{
      color: #fff;
      font-size: .72rem;
      line-height: .87rem;
      width: 5.87rem;
      margin: 0 auto .3rem auto;
      height: 1.53rem;
  }
  ul{
    background: #fff;
    border-radius: .1rem;
    padding: 0 .48rem;
    height: 5.28rem;
  }

  li{color: #B9B9B9;font-size: .36rem;padding: .3rem .2rem;border-bottom: 1px solid #E6E5E5;line-height: .36rem;}
  .li{padding: 0px;padding-top: .5rem;border-bottom: none}
  /deep/.hoteldatetime{
      .con{
        p{text-align: center;}
        .date{
          margin: .15rem 0 .05rem 0;
          font-size: .3rem;
          line-height: .3rem;
        }
        .title{
          font-size: .3rem;
           line-height: .3rem;
        }
        .time{
          font-size: .3rem;
           line-height: .3rem;
        }
      }
      .center{
        background: #FF9623;
        color: #fff;
        border-radius: .3rem;
        padding: .08rem .14rem;
        font-size: .24rem;
      }
  }
}
</style>
