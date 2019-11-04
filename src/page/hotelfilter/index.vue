<template>
  <div class="hotelfilter">
    <Headers title="筛选" />
    <van-collapse class="hotelfiltercon" v-model="activeNames">
      <van-collapse-item class="itemwap" name="1">
        <div slot="title" class="clearfix time"><span class="fl title">入住时间</span> <span class="fr con"> {{startDate.split('-')[1]}}月{{startDate.split('-')[2]}}日 {{setgetweek(startDate)}}{{ startTime }} - {{endDate.split('-')[1]}}月{{endDate.split('-')[2]}}日 {{setgetweek(endDate)}}{{ endTime }} </span> </div>
        <div class="timecon">


          <Datetime @strdatetime="strdatetime" @enddatetime="enddatetime" />


        </div>
      </van-collapse-item>

      <van-collapse-item class="itemwap" name="2">
        <div slot="title" class="clearfix time ip"><span class="fl title">位置区域</span>   <span class="fr con"> {{ipcon}} </span></div>
        <div class="ipcon">

          <Ipround @setlng="setlng" @setlat="setlat" @setcityid="setcityid" />

        </div>
      </van-collapse-item>

      <van-collapse-item class="itemwap" name="3">
        <div slot="title" class="clearfix time price"><span class="fl title">价格</span>  <span class="fr con"> {{rmbstatus(rmb)}} </span></div>
        <div class="conwapwap">
            <Cslider v-on:rmbstartStep="startStep"  v-on:rmbendStep="endStep" />
        </div>
      </van-collapse-item>

      <van-collapse-item class="itemwap" name="4">
        <div slot="title" class="clearfix time hoteltype"><span class="fl title">酒店类型</span>  <span class="fr con"> {{hoteltypename}} </span> </div>
        <div class="hoteltypecon">
            <Tagbtn @click.native="handerclick(x,{type:'telotype',index:index})"  :color="index == hoteltypeactive ? '#008489' : '#252525'" v-for="(x,index) in hoteltype" :key="index" class="btns" bgcolor="#EEEEEE" :value="x.value" border="1px solid #EEEEEE" lineheight=".72rem" width="2.02rem" height=".72rem" />
        </div>
      </van-collapse-item>
      
      <van-collapse-item class="itemwap" name="5">
        <div slot="title" class="clearfix time resale"><span class="fl title">是否可转售</span>  <span class="fr con"> {{sellname}} </span> </div>
        <div class="resalecon">
            <Tagbtn @click.native="handerclick(x,{type:'issell',index:index})"  :color="index == sellactive ? '#008489' : '#252525'" v-for="(x,index) in sellarr" :key="index" class="btns" marginright=".4rem" bgcolor="#EEEEEE" :value="x.value" border="1px solid #EEEEEE" lineheight=".72rem" width="2.02rem" height=".72rem" />
        </div>
      </van-collapse-item>

      <van-collapse-item class="itemwap" name="6">
        <div slot="title" class="clearfix time staynum"><span class="fl title">入住人数</span> <span class="fr con"> {{manvalue1}} </span> </div>
        <div class="staynumcon">
          <ul>
            <li class="clearfix"> <span class="fl">人数</span> <van-stepper class="fr" min="1" v-model="manvalue1" integer /></li>
          </ul>
        </div>
      </van-collapse-item>
    </van-collapse>


    <Buttons @click.native="handleClick('submit')" class="btomBut" value="确定" />

  </div>
</template>

<script>
import '@/../public/cdn/common.js'
import Headers from '@/components/header/index'
import Tagbtn from '@/components/tagbtn/index'
import Datetime from '@/components/datetime/index'
import Buttons from '@/components/button/index'
import Cslider from '@/components/slider/index'
import Ipround from '@/components/ipround/index'
import request from '@/api/request'//axios请求
import {getTimeLength,getweek,getArrIndex} from '@/api/date/init'//共用函数方法文件  getTimeLength(sd+' '+st+':00',ed+' '+et+':00')

export default {
  name: 'hotelfilter',
  data(){
    return{
       dateshow:false,//日期是否弹出
       activeNames: [],
       ipareaActiveNames:[],
       manvalue1:1,//步进器
       manvalue2:1,
       ipval:'1',//区域选中 索引
       startStepVal:'',
       endStepVal:'',
       rmb:{strvalue:'',endvalue:''},//价格
       ipcon:'',//位置区域显示
       lat:'',//经纬度
       lng:'',//经纬度
       area:'',//地区
       cityid:'',
        startDate:'',//开始日期
        endDate:'',//结束日期
        startTime:'',//开始时间
        endTime:'',//结束时间
        filterDate:{},

       hoteltypename:'',//酒店类型
       hoteltypeval:'-1',//酒店类型编码
       hoteltypeactive:-1,
       hoteltype:[
        { value: '一星级',type:1 },
        { value: '二星级',type:2 },
        { value: '三星级',type:3 },
        { value: '四星级',type:4 },
        { value: '五星级',type:5 },
        { value: '快捷酒店',type:11 },
       ],

       sellactive:-1,
       sellval:'-1',
       sellname:'',//是否可转售
       sellarr:[
         {value:'可转售',type:1},
         {value:'不可转售',type:0},
       ]

    }
  },
  methods:{
    setlng(obj){
      this.lng = obj.lng
      this.area = obj.area
    },
    setlat(obj){
      this.lat = obj.lat
      this.area = obj.area
    },
    setcityid(obj){
      this.cityid = obj.cityid
      this.area = obj.area
    },
    strdatetime(obj){//时间修改 开始时间
      var t = this
      this.startDate = obj.strData
      this.startTime = obj.strTime
      this.filterDate.startDate = obj.strData
      this.filterDate.startTime = obj.strTime
      sessionStorage.setItem('filterDate',JSON.stringify(this.filterDate))
      //console.log(this.filterDate)
    },
    enddatetime(obj){//时间修改 结束时间
      console.log(obj)
      this.endDate = obj.endDate
      this.endTime = obj.endTime
      this.filterDate.endDate = obj.endDate
      this.filterDate.endTime = obj.endTime
      sessionStorage.setItem('filterDate',JSON.stringify(this.filterDate))
    },
    handleClick(type,val){ //点击确认
      if(type == 'submit'){
        this.filterDate.maxPeople = this.manvalue1 
        this.filterDate.start.value = this.hoteltypeval
        this.filterDate.start.name = this.hoteltypename
        this.filterDate.earlyDeparture = this.sellval
        this.filterDate.ipcon.cityid = this.cityid
        this.filterDate.ipcon.lat = this.lat
        this.filterDate.ipcon.lng = this.lng
        this.filterDate.ipcon.area = this.area
        console.log(this.filterDate)
        
        sessionStorage.setItem('filterDate',JSON.stringify(this.filterDate))
        this.$router.push({path:'/listhotel/index',query:{pageType:'filterHotel'}})
      }
    },
    handerclick(data,obj){
      if(obj.type == 'telotype'){//酒店类型
        if(this.hoteltypeactive == obj.index){
          this.hoteltypeactive = -1
          this.hoteltypename = ''
          this.hoteltypeval = '-1'
        }else{
          this.hoteltypeactive = obj.index
          this.hoteltypename = data.value
          this.hoteltypeval = data.type
        }
        
      }else if(obj.type == 'issell'){//是否可出售

        if(this.sellactive == obj.index){
          this.sellactive = -1
          this.sellname = ''
          this.sellval = '-1'
        }else{
          this.sellactive = obj.index
          this.sellname = data.value
          this.sellval = data.type
        }
        
      }

    },
      setgetweek(data){
      return getweek(data)
    },
    rmbstatus(rmb){
      var data = rmb
      if(data.strvalue != '-1' && data.endvalue != '-1'){
        return data.strvalue + '-' + data.endvalue
      }else if(data.strvalue != '-1' && data.endvalue == '-1'){
        return data.strvalue+'以上'
      }else if(data.strvalue == '-1' && data.endvalue != '-1'){
        return data.endvalue+'以下'
      }else{
        return ''
      }
    },
    startStep(data){
      var strrmb = this.rmb//原始数据
      var date = {strvalue:data.value,endvalue:strrmb.endvalue,index:this.rmbactive}
      
      this.rmb = date
    },
    endStep(data){
      var strrmb = this.rmb//原始数据
      var date = {strvalue:strrmb.strvalue,endvalue:data.value,index:this.rmbactive}
      
      this.rmb = date
    },
    getsrcurl(icon){
      return require("@/img/"+icon+"");
    },
    setdateinfo(data){
      console.log(data)
      this.startDate = data.startDate
      this.endDate = data.endDate
      this.startTime = data.startTime
      this.endTime = data.endTime

      this.rmb.strvalue = data.rmb.startrmb
      this.rmb.endvalue = data.rmb.endrmb

      this.ipcon = data.ipcon.name
      this.cityid = data.ipcon.cityid
      this.lat = data.ipcon.lat
      this.lng = data.ipcon.lng
      this.manvalue1 = data.maxPeople

      this.hoteltypename = data.start.name
      this.hoteltypeval = data.start.value

      if(data.start.value != -1){
        if(this.hoteltype.length > 0 ){
          var idx = this.hoteltype.filter(function(x){
            return x.type == data.start.value
          })
          if(idx.length > 0){
            this.hoteltypeactive = getArrIndex(this.hoteltype,idx[0]) 
          }
        }
      }else{
        this.hoteltypeactive = -1
      }

      if(data.earlyDeparture == 1){
        this.sellname = '可转售'
      }else if(data.earlyDeparture == 0){
        this.sellname = '不可转售'
      }else{
        this.sellname = ''
      }
      if(data.earlyDeparture != -1){
        if(this.sellarr.length > 0 ){
          var idxx = this.sellarr.filter(function(x){
            return x.type == data.earlyDeparture
          })
          if(idxx.length > 0){
            this.sellactive = getArrIndex(this.sellarr,idxx[0]) 
          }
        }
      }else{
        this.sellactive = -1
      }
      
    }
  },
  mounted(){

    var filterDate = sessionStorage.getItem('filterDate')
    if(filterDate != null){
      this.filterDate = JSON.parse( sessionStorage.getItem('filterDate') ) 
      this.setdateinfo(this.filterDate)
    }
  },
  watch:{
    activeNames(val){
      console.log(val)
    }
  },
  components: {
    Ipround,
    Headers,
    Buttons,
    Tagbtn,
    Datetime,
    Cslider,
    
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
  .hotelfilter{
    text-align: left;
    height:calc( 100vh);

    box-sizing: content-box;
    .itemwap{
      background: #fff;
    }
    /deep/ .van-cell{
      padding-top: .48rem;
            padding-bottom: .48rem;
    }
    /deep/ .van-cell:not(:last-child)::after{
      border-bottom: none;
    }
    /deep/ .van-collapse-item__content{
      padding-top: 0px;
        padding-bottom: 0px;

    }
    .hotelfiltercon{
      margin-bottom: 50px;
    }
    .timecon{
      padding-bottom: .4rem;
      padding-left: .35rem;
      padding-right: .35rem;
      /deep/ .datetimecon{
        .center{
          .con{
            border-bottom:.02rem solid #FF9623;
            width:2.43rem;
            padding-bottom: .08rem
          }
        }
      }
    }
    .conwapwap{
      padding-bottom: .2rem;
    }
    .hoteltypecon{
      padding-bottom: .4rem;
      .btns{
        margin-left: .3rem;
        margin-bottom: .2rem
      }
    }
    .resalecon{
      padding-bottom: .4rem;

    }
    .staynumcon{
      %wh {
        width: .5rem;
        height: .5rem;
        background: none
      }
      li{
        line-height: .5rem;
        font-size: .36rem;
        color: #1F2020;
        padding: .2rem 0;
      }
      li:nth-child(1){
        border-bottom: 1px solid #eee
      }
      /deep/ .van-stepper__input{
        @extend %wh;
        width: 1.22rem;
      }
      /deep/ .van-stepper__minus, /deep/ .van-stepper__plus{
        @extend %wh;
        color: #008489;
        border: 1px solid #008489;
        border-radius: 50%;
      }
      /deep/ .van-stepper__minus::after,/deep/ .van-stepper__minus::before,/deep/ .van-stepper__plus::after,/deep/ .van-stepper__plus::before{
        background-color:#008489;
      }
    }
    .itemwap{
      margin-bottom: .22rem;
    }
    .title{font-weight: bold;}

    .time{
      .title{
        font-size: .42rem;
      }
      .con{
        color: #FF9623;
        font-size: .36rem;
      }
    }

    .ipcon{
      padding-bottom: .2rem;
      height: 10.6rem;
      .btns{
        margin-left: .3rem;
        margin-bottom: .24rem;
        color: #252525;
      }
      .iparea{
        .title{
          font-size: .39rem;
          color: #008489;
        }
        li{
          margin-bottom: .4rem;
        }
        p{
          padding-bottom: .2rem;
          margin-bottom: .2rem;
          border-bottom:1px solid #EEEEEE
        }
        .text{
          font-size: .36rem;
          color: #252525;
        }
        .icon{
          font-size: .36rem;
          color: #797979;
        }
        .van-cell:not(:last-child)::after{
          border: none;
        }
        .van-collapse-item__content{
          padding-top: .1rem
        }
      }
    }
    .btomBut{
      position: fixed;
      bottom: 0px;
    }
  }
  .van-collapse-item__title--expanded .title{
    color: #FF9623
  }
</style>
