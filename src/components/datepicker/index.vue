<template>
  <div>
          <van-datetime-picker
            v-model="currentDate"
            type="datetime"
            
            :min-date="min"
            :max-date="max"
            :filter="filter"
            :formatter="formatter"
            @change="changeval"
            @confirm="handleConfirm"
            @cancel="handleCancel"
          />
  </div>
</template>

<script>
import {getTimeLength} from '@/api/date/init'//共用函数方法文件  getTimeLength(sd+' '+st+':00',ed+' '+et+':00')

export default {
  name: "Datepicker",
  data() {
    return {
      filterDate:'',
      minDate:'',
      maxDate:'',
      currentDate: '',
      thisN:'',
      thisY:'',
      thisR:'',
      thisS:'',
    };
  },
  props: {
    hotel: {
      type: String,
      default: ""
    },
    max:{ //最大时间
      type: Date,
      default: new Date(2099, 12, 31),
    },
    min:{//最小时间
      type: Date,
      default: new Date(),
    },
    leftright:{
      type: String,
      default: '',
    },
    timetype:{ //页面类型 小时  时段 全日 小时只可5小时内   时段6的倍数  全日随便
      type: String,
      default: '',
    }
    
  },
  methods: {
    handleConfirm(val){
      this.$emit('confirm',val)
    },
    handleCancel(){
      this.$emit('cancel',{})
    },
    changeval(picker){
    if(this.timetype == 'Timeframe'){//时段房
        if(this.leftright == 'right'){
          var startime = this.filterDate.startDate+' '+this.filterDate.startTime
          var Dateinit = new Date(startime)
          var nn= Dateinit.getFullYear();//年
          var yy= Dateinit.getMonth() + 1;//月
          var rr= Dateinit.getDate(); //日
          var n = parseInt(picker.getColumnValue(0))
          var y = parseInt(picker.getColumnValue(1))
          var r = parseInt(picker.getColumnValue(2))
          var s = parseInt(picker.getColumnValue(3))

          var thisDateinit = new Date(n,y,r)
          var nnn= thisDateinit.getFullYear();//年
          var yyy= thisDateinit.getMonth() ;//月
          var rrr= thisDateinit.getDate(); //日
          var timelent = getTimeLength(this.filterDate.startDate+' '+this.filterDate.startTime+':00',nnn+'-'+yyy+'-'+rrr+' '+'00:00:00')
          var lgt = Math.ceil(timelent/6)//Math.ceil(timelent/6) floor
          var lgttime = new Date( ( Dateinit.getTime() + ((6*lgt)*60*60*1000)) )
          var hours = lgttime.getHours()*1//小时
          var leng = 24 - hours
          var lengt = Math.floor(leng/6)
          var arr = []
          console.log(n,y,r,s)
          for(var i = 0;i<=lengt;i++){
           if(i==0){
             arr.push(hours)
           }else{
             arr.push( hours+(6*i) )
           }
          }

          picker.setColumnValues(3, arr)
          picker.setColumnValue(3, arr[0])

          //picker.setColumnValue(index, value)

        }
      }

    },
    formatter(type, value) {
      //console.log(type)
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      } else if (type === 'day') {
        return `${value}日`
      } 
      return value;
    },
    filter(type, options) {
      console.log(type,options)
      if(this.timetype == 'Timeframe'){//时段房
        if(this.leftright == 'right'){
          if (type === 'hour') {
            var str = this.filterDate.startDate+' '+this.filterDate.startTime
            var Dateinit = new Date(str)
            var datet = new Date(Dateinit.getTime() + 6*60*60*1000)
            var hours = datet.getHours()//小时
            var leng = 24-hours
            var arry = []
            arry.push(hours)
            for(var i=1;i<=Math.ceil(leng/6);i++){
              var s = (hours*1)+(6*i)
              if(s<24){
                arry.push(s)
              }
            }
            return arry
          }
        }
        
        if (type === 'minute') {
          return ["00"]//options.filter(option => option % 5 == 0)
        }
        return options;
      }else{
        if (type === 'minute') {
          return ["00"]//options.filter(option => option % 5 == 0)
        }
        return options;
      }
      
    }
  },
  created() {

    var filterDate = sessionStorage.getItem('filterDate')
    if(filterDate != null){
      this.filterDate = JSON.parse( sessionStorage.getItem('filterDate') ) 
    }
  },

};
</script>
<style scoped>

</style>