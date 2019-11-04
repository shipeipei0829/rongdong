<template>

      <div class="hotcon"  @click="handleRouter()">
        <span class="imgwap" style="width:4.80rem;height:3.12rem;">
          <img :src="getsrcurl('hot1.jpg')" style="width:4.80rem;height:3.12rem;" alt="">
          <span class="imgbg">
            <span class="titlebg">{{dateobj.hotelName}}</span>
          </span>
          <span class="xingwap">
            <Xing :value="dateobj.starLevel"/>
          </span>
        </span>
        <span class="hotip">{{dateobj.tradingArea}}</span>
        <span class="reason"><i>推荐理由:</i><u>{{dateobj.recommendText}}</u></span>
        <span class="scheme"><i>开通入驻方案:</i><u>{{dateobj.accType}}</u></span>
        <span class="rmb"><i>低至:</i>￥{{dateobj.price}} <i>起</i> </span>
      </div>
</template>

<script>
import Xing from '@/components/xing/index'
import {arryMinNum} from '@/api/date/init'//共用函数方法文件
export default {
  name: "Listhot",
  data() {
    return {
      rmb:''
    };
  },
  props:{

    
    dateobj: {
        type: Object,
        default:()=>({})
      },
  },
  methods: {
    getsrcurl(icon){
      return require("@/img/"+icon);
    },
    init(date){
      //数组 拿出最小值
        this.rmb = arryMinNum(date.arraynewroom)
      },
     handleRouter(){
        var  data = this.dateobj
        this.$router.push({ path:'/details/index',query:{hotelId:data.hotelId,lat:data.lat,lng:data.lng}})//,
      }
  },
  mounted() {
  },
  created() {

  },
  components:{
    Xing,
  }
};
</script>
<style scoped>
.hotcon{
  display: inline-block;
  width: 4.98rem;
  height: 6.2rem;
  background: #fff;
  padding: .17rem .09rem 0 .09rem;
  box-shadow:0px 4px 23px 1px rgba(97,199,203,0.14);
  border-radius: .1rem;
}
.xingwap{
  font-size: .19rem;
  position: absolute;
  left: .19rem;
  bottom: .15rem;
}

.imgbg{
  position: absolute;
  width: 4.2rem;
  padding-top: .15rem;
  padding-bottom: .15rem;
  left: 1px;
  bottom: .63rem;
  font-size: .36rem;
  padding: .15rem 0 .15rem .19rem;
  color: #fff;
  box-sizing: border-box;
  background:rgba(0, 0, 0, 0.5);
  border-radius: 0px .1rem .1rem 0;
}






.hotcon>span{
  display: block;
  text-align: left;
  color: #3E3E3E
}
.hotcon .imgwap{
  position: relative;
  
}
.hotcon .imgwap img{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: .2rem;
}
.hotcon .hotip{
  font-size: .30rem;
  margin: .28rem 0 .15rem 0;
  line-height: .38rem;
  overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
    display:box;
-webkit-line-clamp: 1;
line-clamp: 1;
-webkit-box-orient: vertical;
}
.hotcon span.reason{
  text-overflow: -o-ellipsis-lastline;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
    display:box;
-webkit-line-clamp: 2;
line-clamp: 2;
-webkit-box-orient: vertical;
color: #585858;
line-height: .43rem
}
.hotcon span.reason i{
  color: #008489;
  font-weight: bold
}
.hotcon span.scheme{
  color: #008489;
  font-size: .34rem;
  line-height: .40rem;
  margin-top: .19rem;
  margin-bottom: .19rem;
  font-weight: bold;

    text-overflow: -o-ellipsis-lastline;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
    display:box;
-webkit-line-clamp: 1;
line-clamp: 1;
-webkit-box-orient: vertical;
}
.hotcon span.scheme i{
  color: #252525;
  font-size: .30rem;
}
.hotcon span.rmb{
  font-size: .41rem;
  color: #E72D2D;
  font-weight: bold;
  line-height: .36rem;
  
}
.hotcon span.rmb i{
  font-size: .3rem;
  color: #585858;
}
</style>
