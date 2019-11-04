<template>
  
    <div class="intaketime"  style="padding-top:.20rem;padding-left:.50rem;">
        <div class="intaketimecon" style="padding-bottom:.01rem;">
          <div class="clearfix timewap">
            <span class="fl title"> <van-icon class="icon" name="clock-o" /> <i>入住/退房时间</i> </span>
            <span class="fl time" v-if="flag">
              <div>{{getdatetime({date:localinfo.startDate,time:localinfo.startTime})}}</div>
              <div>{{getdatetime({date:localinfo.endDate,time:localinfo.endTime})}}</div>
            </span>
            <span class="fl timesolt" style="display:none;">
              <div>共27小时</div>
              <div>( 2晚 )</div>
            </span>
            
          </div>
          <div class="btnwap clearfix" style="display:none;">
            <Tagbtn class="fl btn" bgcolor="#F0F0F0" color="#008489" value="大床" border="1px solid #F0F0F0" />
            <Tagbtn class="fl btn" bgcolor="#F0F0F0" color="#008489" value="双床" border="1px solid #F0F0F0" />
            <Tagbtn class="fl btn" bgcolor="#F0F0F0" color="#008489" value="可取消" border="1px solid #F0F0F0" />
            <div class="text fr">
              <i>筛选</i><van-icon name="arrow" />
            </div>

          </div>
        </div>
      </div>
</template>

<script>
import Tagbtn from '@/components/tagbtn/index'
import {getweek} from '@/api/date/init'//共用函数方法文件
export default {
  name: "Detailstime",
  data() {
    return {
      localinfo:{},
      flag:false
    };
  },
  props:{
    
    value: {
      type: String,
      default: '标题'
    },
    objdate:{
        type: Object,
        default:()=>({

        })
      },
    width:{
      type:String,
      default:''
    },
    height:{
      type:String,
      default:''
    },
    borderadius:{
      type:String,
      default:''
    },
    bgcolor:{
      type:String,
      default:'#FFD925'
    },
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1);
    },
    getdatetime(date){
      var week = getweek(date.date)
      return date.date + ' ' + week + ' ' + date.time
    }
  },
  mounted() {
    this.localinfo = JSON.parse(sessionStorage.getItem('filterDate'))
    this.flag = true
  },
  components:{
    Tagbtn,
  }
};
</script>
<style scoped>
.intaketime .title{
  padding-top: .23rem;
  margin-right: .4rem;
}
.intaketime .title i{
  vertical-align: middle;
  color: #232323;
  font-size: .36rem;
  font-weight: bold;
  
}
.intaketime .title .icon{
  color: #FFB636;
  font-size: .5rem;
  margin-right: .11rem;
  font-weight: normal;
}
.intaketime .btnwap{
  padding-bottom: .25rem;
  text-align: left;

}
.intaketime .btnwap .btn{
  margin-right: .2rem;
}
.intaketime .btnwap .text{
  margin-right: .55rem;
}
.intaketime .btnwap .text i{
  vertical-align: middle;
  color: #515151;
  font-size: .3rem;
}
.intaketimecon .timewap{
  margin-bottom: .24rem;
}
.intaketimecon .time{
  font-size: .3rem;
  margin-right: 2rem;
  color: #232323;
}
.intaketimecon .timesolt{
  font-size: .3rem;
  color: #8D8D8D;
}
</style>
