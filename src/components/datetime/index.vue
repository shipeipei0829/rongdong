<template>
  <div class="hoteldatetime">
    <div class="datetimecon clearfix">
      <div class="left fl">
        <div class="con" @click="handledate('left')">
          <p class="title">入住</p>
          <p class="date">{{startDate.split('-')[1]}}月{{startDate.split('-')[2]}}日</p>
          <p class="time">{{setgetweek(startDate)}}{{ startTime }}</p>
        </div>
      </div>
      <div class="center timematter">        
        <div class="con">
          {{gettimemore()}}小时
        </div>
      </div>
      <div class="right fr">
        <div class="con" @click="handledate('right')">
          <p class="title">离店</p>
          <p class="date">{{endDate.split('-')[1]}}月{{endDate.split('-')[2]}}日</p>
          <p class="time">{{setgetweek(endDate)}}{{ endTime }}</p>
        </div>
      </div>
    </div>
        <van-popup
          @closed="handleCancel"
          v-model="dateshow"
          position="bottom"
          :style="{ height: '70%' }">

          <Datepicker v-if="timeshow" :leftright="thistimetypeele" :timetype="timetype" :max="timemax" :min="timemin" @cancel="handleCancel"  @confirm="handleConfirm" />
          
        </van-popup>
  </div>
</template>

<script>
import Datepicker from '@/components/datepicker/index'
import {getTimeLength,timefilter,getweek} from '@/api/date/init'//共用函数方法文件  getTimeLength(sd+' '+st+':00',ed+' '+et+':00')
export default {
  name: "Datetime",
  data() {
    return {
      dateshow:false,
      minHour: 10,
      maxHour: 20,
      ayy:['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      filterDate:'',
      thistimetypeele:'',
      startDate:'',//开始日期
      endDate:'',//结束日期
      startTime:'',//开始时间
      endTime:'',//结束时间      
      timemax:'',
      timemin:'',
      timeshow:false
    };
  },
  props: {
    valueLeft: {
      type: Object,
      default: () =>{

      }
    },
    valueRight: {
      type: Object,
      default: () =>{
        
      }
    },
    valueCenter: {
      type: Object,
      default: () =>{
        
      }
    },
    timeval:{
      type:String,
      default:'0',
    }
  },
  methods: {
    handledate(type){
      
      this.thistimetypeele = type
      if(type == 'right'){
        if(this.timeval == 'Timeframe'){
          var date = this.startDate+' '+this.startTime
          var datet = new Date(date)

          this.timemin = new Date(datet.getTime() + 5*60*60*1000)
          this.timemax = new Date(2099, 12, 31)
        }
      }else if(type == 'left'){
        if(this.timeval == 'Timeframe'){
          var date = this.startDate+' '+this.startTime
          var datet = new Date(date)

          this.timemin = new Date(datet.getTime())
          this.timemax = new Date(2099, 12, 31)
        }
      }
      this.dateshow = true
      this.timeshow = true
      
    },
    handleCancel(){
      this.dateshow = false
      this.timeshow = false

      this.thistimetypeele = ''
    },
    handleConfirm(val){
      console.log(val)
      var datetime = val
      this.dateshow = false
      this.timeshow = false
      var n = datetime.getFullYear();
      var y = datetime.getMonth() + 1
      var r = datetime.getDate()
      var s = datetime.getHours()
      var nn = n+'-'+y+'-'+r
      var ss = s+':00'
      console.log(nn,ss)
      if(this.thistimetypeele == 'left'){
        //this.$store.commit('setstartdate',{value:nn})
        this.filterDate.startDate = nn
        this.startDate = nn 
        //this.$store.commit('setstarttime',{value:ss})
        this.filterDate.startTime = ss
        this.startTime = ss
        
        if(this.timeval == 'Hour'){
          this.timemax = new Date(datetime.getTime() + 5*60*60*1000)
        }else if(this.timeval == 'Timeframe'){
          this.timemax = new Date(2099, 12, 31)
        }else if(this.timeval == 'Allday'){
          this.timemax = new Date(2099, 12, 31)
        }


        this.$emit('strdatetime',{strData:nn,strTime:ss})
      }else if(this.thistimetypeele == 'right'){
        //this.$store.commit('setenddate',{value:nn})
        this.filterDate.endDate = nn
        this.endDate = nn 
        //this.$store.commit('setendtime',{value:ss})
        this.filterDate.endTime = ss
        this.endTime = ss

        this.$emit('enddatetime',{endDate:nn,endTime:ss})
      }
      sessionStorage.setItem('filterDate',JSON.stringify(this.filterDate))
      console.log(this.filterDate)

    },
    gettimemore(){
        var vm = this
        var sd = this.startDate
        var st = this.startTime
        var ed = this.endDate
        var et = this.endTime
        return getTimeLength(sd+' '+st+':00',ed+' '+et+':00')
    },
    setgetweek(data){
      return getweek(data)
    },
    setdateinfo(data){

      console.log(data)
      if(this.timeval == 'Hour' || this.timeval == 'Timeframe' || this.timeval == 'Allday' ){

          var Dateinit= new Date();//当前时间
          var beforDateinit = new Date(Dateinit.getTime() + 24*60*60*1000)

          if(this.timeval == 'Hour'){
            this.timemin  = new Date()
            this.timemax = new Date(Dateinit.getTime() + 5*60*60*1000)//默认最大时间
            beforDateinit = new Date(Dateinit.getTime() + 5*60*60*1000)//默认结束时间
            this.timetype = 'Hour'
          }else if(this.timeval == 'Timeframe'){
            this.timemin  = new Date()
            this.timemax = new Date(2099,12,31)
            beforDateinit = new Date(Dateinit.getTime() + 6*60*60*1000)//默认结束时间
            this.timetype = 'Timeframe'
          }

          var n= Dateinit.getFullYear();//年
          var beforn= beforDateinit.getFullYear();//年
          var month= Dateinit.getMonth() + 1;//月
          var beformonth= beforDateinit.getMonth() + 1;//月
          var dates= Dateinit.getDate(); //日
          var befordates = beforDateinit.getDate(); //日
          var hours = Dateinit.getHours()//小时
          var beforhours = beforDateinit.getHours()//小时
          //周几
          var startweekidx = Dateinit.getDay()
          var endweekidx = Dateinit.getDay() + 1
          this.startWeek = this.ayy[startweekidx]
          this.endWeek = this.ayy[endweekidx]
          //当前日期
          this.startDate = n + '-' + month + '-' + dates 
          this.endDate = beforn + '-' + beformonth + '-' + ( befordates ) 
          this.startTime = hours+':00'
          this.endTime = beforhours+':00'
          


      }else{
        this.startDate = data.startDate
        this.endDate = data.endDate
        this.startTime = data.startTime
        this.endTime = data.endTime
      }
      this.filterDate.startDate = this.startDate
      this.filterDate.endDate = this.endDate
      this.filterDate.startTime = this.startTime
      this.filterDate.endTime = this.endTime
      sessionStorage.setItem('filterDate',JSON.stringify(this.filterDate))
    }

  },
  computed:{
 
  },
  mounted() { 
    var filterDate = sessionStorage.getItem('filterDate')
    if(filterDate != null){
      this.filterDate = JSON.parse( sessionStorage.getItem('filterDate') ) 
      this.setdateinfo(this.filterDate)
    }

  },
  components:{
    Datepicker,
  }
};
</script>
<style lang="scss" scoped>
.hoteldatetime{
  
  .datetimecon{
    text-align: center;
    position: relative;
    .left{
      text-align: left;
    }
    .center{
      position: absolute;
      top: 50%;
      left:50%;
      transform: translate(-50%,-50%);
      text-align: center;
      color: #FF9623;
      font-size: .3rem;
      display: inline-block;
    }
    .right{
      text-align: left;
      
    }
    .left,.right{
      width: 2.1rem;
    }
    .con{
      .title{
        font-size: .36rem;
        color: #878787;
        line-height: .36rem;
      }
      .date{
        font-size: .48rem;
        line-height: .48rem;
        color: #2F2E2E;
        margin: .2rem 0 .23rem 0;
      }
      .time{
        font-size: .36rem;
        color: #565656;
        line-height: .36rem;
      }
    }
  }
}
</style>
