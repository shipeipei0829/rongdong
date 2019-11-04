<template>
  <div class="timefilter">
    <div class="tophead">
      <Headers title="选择时间"  class="tophead" />
    </div>

    <div class="datetimewap">
      <span class="start"> <i class="startdate">{{this.startdate}}</i><i class="starttime">{{this.starttime}}</i> </span> - <span class="end"><i class="enddate">{{this.enddate}}</i><i class="endtime">{{this.endtime}}</i> </span>
    </div>

    <van-popup :close-on-click-overlay="false" v-model="showtime" position="bottom">

      <van-datetime-picker
        v-model="currentTime"
        v-on:confirm="handleEvent('timeyes')"
        v-on:cancel="handleEvent('timeno')"
        type="time"
        :filter="filter"
        :min-hour="0"
        :max-hour="23"
        :min-minute="0"
        :max-minute="59"

      />
    </van-popup>



    <div id="demo-2" class="demo">

      
      <calendar
        :show.sync="showdate"
        :mode="mode"
        :defaultDate="defaultDate"
        :disabledDate="disabledDate"
        :minDate="starttime"
        @change="onChange"
      />

    </div>
    <div class="botom">
        <span class="left" @click="handleEvent('removetime')">
          返回
        </span>
        <span class="right"  @click="handleEvent('uptime')">
          确认
        </span>
    </div>
  </div>
</template>




<script>
import Calendar from 'vue-mobile-calendar'
import { Dialog } from 'vant';
Vue.use(Calendar);

import Headers from '@/components/header/index'
// options 为可选参数，无则不传
import dayjs from 'dayjs';
const DEFAULT_DATE = {
  single: dayjs().add(2, 'day'),
  multiple: [dayjs(), dayjs().add(2, 'day'), dayjs().add(3, 'day')],
  during: [dayjs(), dayjs().add(1, 'day')],//时间段默认
};


import '@/../public/cdn/common.js'
export default {
  name: 'Timefilter',
  data(){
    return{
      showdate: true,
      mode: 'during',
      defaultDate:'during',//DEFAULT_DATE为默认时间 during
      disabledDate: [dayjs().subtract(2, 'day'), dayjs().add(1, 'day')],//[dayjs().subtract(2, 'day'), dayjs().add(1, 'day')]
      starttime:'1996-08-08',
      currentTime: '12:00',
      showtime:false,
      filtertime:'1',
      date:'2019-08-09',
      initDate:'',
      startdate:'请选择',
      starttime:'开始时间',
      enddate:'请选择',
      endtime:'结束时间',
      filterDate:{}
    }
  },
  methods:{
    filter(type, options) {
      if (type === 'minute') {
        return options.filter(option => option % this.filtertime === 0)
      }
      return options;

    },
    handleEvent(type){
      if(type == 'timeyes'){
        this.timeyes()
      }else if(type == 'timeno'){
        this.timeno()
      }else if(type == 'removetime'){
        this.$router.go(-1)
        //this.removetime()
      }else if(type == 'uptime'){
        this.uptime()
      }
    },
    removetime(){
        this.startdate = '请选择' 
        this.starttime = '开始时间'  
        this.enddate = '请选择'  
        this.endtime = '结束时间'  

    },
    uptime(){
      
      if(this.enddate == '请选择'){
        Dialog({ message: '请选择开始时间/结束时间' });
      }else{
        
        var datas = JSON.parse(this.date)

        this.$store.commit('setstartdate',{value:datas[0]})
        this.$store.commit('setenddate',{value:datas[1]})
        this.$store.commit('setstarttime',{value:this.starttime})
        this.$store.commit('setendtime',{value:this.endtime})
        this.filterDate.startDate = datas[0]
        this.filterDate.startTime = this.starttime
        this.filterDate.endDate = datas[1]
        this.filterDate.endTime = this.endtime

        
        sessionStorage.setItem('filterDate',JSON.stringify(this.filterDate))
          
        this.$router.go(-1)
      }

    },
    timeyes(){
      console.log(this.currentTime)
      this.showtime = false
      var datas = JSON.parse(this.date)
      if(datas.length == 1){
        this.starttime = this.currentTime
      }
      if(datas.length == 2){
        this.endtime = this.currentTime
      }
    },
    timeno(){
      this.showtime = false
    },

    onChange(date) {
      if (this.mode === 'single') {
        this.date = date.format('YYYY-MM-DD');
      } else {
        this.date = JSON.stringify(date.map((item) => item.format('YYYY-MM-DD')));
      }
      this.showtime = true
    },
    getsrcurl(icon){
      return require("@/img/"+icon+"");
    },
    setdate(data){
      var datas = JSON.parse(data)
      this.initDate = JSON.parse(data)
      if(datas.length == 1){
        this.startdate = datas[0].split("-")[1] + '月' + datas[0].split("-")[2] + '日'
        this.starttime = '开始时间'  
        this.enddate = '请选择'  
        this.endtime = '结束时间'     
      }
      if(datas.length == 2){
        this.enddate = datas[1].split("-")[1] + '月' + datas[1].split("-")[2] + '日'
      }
    }
  },
  mounted(){
    this.filtertime = this.$route.query.filter //过滤 时间(分) 数据

    var filterDate = sessionStorage.getItem('filterDate')
    if(filterDate != null){
      this.filterDate = JSON.parse( sessionStorage.getItem('filterDate') ) 
    }
  },
  watch:{
    date:function(value){
      this.setdate(value)

    }
  },
  components: {
    Headers,
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
  #app .m-popover{
    z-index: 9;
    top: auto;
    bottom: auto;
    background: rgba(0,0,0,0);
    position: initial;
    .m-popover-container{
          position: initial;
    }
  }
  .timefilter{
    height: 100vh;

    .datetimewap{
      height: 1.35rem;
      line-height: 1.35rem;
      font-size: .42rem;
      span{
        font-weight: bold;
      }
      .starttime,.endtime{
        color: #FBB239;
      }
      
    }


    .botom{
      border-top: 1px solid #008489;
      display: grid;
      font-size: .5rem;
      grid-template-columns: 1fr 1fr;
      height: 1.46rem;
      position: fixed;
      bottom: 0px;
      left: 0px;
      width: 100%;
      line-height: 1.46rem;
      .left{
      color: #008489;
      background: #ffffff
      }
      .right{
        background: #008489;;
        color: #fff;
      }
    }
  }
</style>
