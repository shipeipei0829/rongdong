<template>
  
      <div @click="handleRouter()" class="recommend notRecommend" :class="{'notRecommend':objdate.reverseOrder == 'yes',}">
        <div class="clearfix conn">
          <div class="fl imgwap">
            <img :src="getsrcurl('teltype.jpg')" alt="">
            <Tag   v-if="showele" class="tagele" value="推荐" width=".96rem" height=".48rem" borderadius="0 .25rem .25rem 0" />
            
            <div class="iconimgwap clearfix">
              <img v-if="hoursShow"  class="fl" src="./../../img/1h.png" alt="">
              <img v-if="timeFrameShow" class="fl" src="./../../img/6h.png" alt="">
              <img v-if="dayShow" class="fl" src="./../../img/24h.png" alt="">
            </div>

          </div>
          <div class="fl con">
            <div class="title">
              {{objdate.roomName}}
            </div>
            <div class="info">
              <p> <span>含早</span> <span>大床</span> <span>有窗</span> </p>
              <p>  {{objdate.roomAreaEnd}} m²,{{objdate.floorNum}}层</p>
            </div>
            <div class="chkrmb clearfix">
                ￥{{rmb}}
                <Tagbtn  v-if="removermbshow == true" bgcolor="#E72D2D" border="1px solid #E72D2D" class="num fr" :value="removermb" />
            </div>
            <div class="icon" style="display:none;">
              <van-icon color="#FFC525" class="iconcon" name="underway" />
              <van-icon color="#E43E84" class="iconcon" name="underway" />
              <van-icon color="#259BFF" class="iconcon" name="underway" />
            </div>
          </div>
        </div>
        <van-divider> 入住方案 </van-divider>
        <div class="flod">
          <div :class="['scheme','tradition',{'colorfont':(objdate.originalPrice*1 < objdate.presentPrice*1) || (objdate.presentPrice == undefined)}]">
            
                <van-icon class="icon" name="column" />
            <div>
              <span>{{objdate.traditionDescribe}}</span>
            </div>
            <div class="time">
              {{filterData.startDate}} {{filterData.startTime}}-{{filterData.endDate}} {{filterData.endTime}}
            </div>
          </div>

          <div :class="['scheme','duoshi',{'colorfont':objdate.presentPrice*1 <= objdate.originalPrice*1 }]">
            
                <van-icon  class="icon" name="column" />
            <div>
              <span>多时入住</span>
              <span v-if="objdate.inDay > 0">{{objdate.inDay}}(晚)*{{objdate.dayPrice}}+</span>
              <span v-if="objdate.timeSlot > 0">{{objdate.timeSlot}}(时段)*{{objdate.slotPrice}}+</span>
              <span v-if="objdate.inHours > 0">{{objdate.inHours}}(小时)*{{objdate.hoursPrice}}</span>
              <span> = {{objdate.presentPrice}}</span>
            </div>
            <div class="time">
              {{filterData.startDate}} {{filterData.startTime}}-{{filterData.endDate}} {{filterData.endTime}}
            </div>
            
          </div>

        </div>


      </div>


</template>

<script>
import Tagbtn from '@/components/tagbtn/index'
import Tag from '@/components/tag/index'
export default {
  name: "Detailsscheme",
  data() {
    return {
      hoursShow:false,//是否开通小时
      timeFrameShow:false,//是否开通时段
      dayShow:false,//是否开通全天
      roomId:'',
      showele:false,
      removermbshow:false,
      removermb:'省去0元',
      filterData:{},
      rmb:'0',
      src:'',
    };
  },
  props:{
    
    haveornot:{
      type:String,
      default:'0'
    },
    objdate:{
      type:Object,
      default:{}
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1);
    },
    handleRouter(){
      var t = this
      var text = ''
      var day = t.objdate.inDay > 0 ? t.objdate.inDay + '晚*' +t.objdate.dayPrice:''
      var sort = t.objdate.timeSlot > 0 ? '+'+t.objdate.timeSlot + '时段*'+t.objdate.slotPrice : '' 
      var host = t.objdate.inHours > 0 ? '+'+t.objdate.inHours + '小时*'+t.objdate.hoursPrice : ''
      var rmb = t.objdate.presentPrice
      if(t.objdate.presentPrice<t.objdate.originalPrice){//多时价格低的时候
        text = day+sort+host+'='+rmb
      }else{
        text = objdate.traditionDescribe
      }

  
      
  
      this.$router.push({path:'/detailspush/index',query:{roomType:this.roomType,hotelId:this.hotelId,text:text}})
    },
    getsrcurl(icon) {
     
        return require("@/img/"+icon);
    },
    timescheme(data){//设置开通的时段
      var timescheme = data.accType
      var timeschemearry = timescheme.split(',')
      for( let x in timeschemearry){
          if(timeschemearry[x] == '小时'){
            this.hoursShow = true//是否开通小时
          }else if(timeschemearry[x] == '时段'){
            this.timeFrameShow = true//是否开通时段
          }else if(timeschemearry[x] == '全日'){
            this.dayShow = true//是否开通全天
          }
      }
    },
    init(date){
      console.log(date)
      if(date.presentPrice!='' && date.originalPrice!=''){
        if(date.presentPrice*1 > date.originalPrice*1 ){
          this.removermb = '传统入住' 
          this.removermbshow = false
          this.rmb = date.originalPrice*1
        }else if(date.presentPrice*1  < date.originalPrice*1 ){
          this.removermb = '省去'+ ((date.originalPrice*1 - date.presentPrice*1).toFixed(2))+'元'
          this.removermbshow = true
          this.rmb = date.presentPrice*1
        }else if(date.presentPrice*1  == date.originalPrice*1){
          this.removermbshow = false
          this.rmb = date.originalPrice*1
        }
      }else{
        this.rmb = date.originalPrice*1
      }
      
    }
  },
  mounted() {
    this.src = ''//this.objdate.imgUrl
    console.log(this.objdate)
    this.init(this.objdate)
    this.timescheme(this.objdate)
    this.roomId = this.objdate.roomId
    this.roomType = this.objdate.roomType
    this.hotelId = this.objdate.hotelId
    var filterData = JSON.parse(sessionStorage.getItem('filterDate'))
    this.filterData = filterData
  },
  created() {

  },
  components:{
    Tagbtn,
      Tag
  }
};
</script>
<style scoped lang="scss">
/*无方案样式
.recommend .conn{
  padding-bottom: .25rem;
}
.notRecommend.recommend .time .rmb{
  color: #FF9623;
}
.notRecommend.recommend .imgwap{
  width: 3.84rem;
  height: 2.97rem;
}
.notRecommend.recommend .notcon{
  border-top: 1px solid #D8D8D8;
  padding-top: .1rem;
  margin-right: .49rem;
  padding-bottom: .25rem;
}
.notRecommend.recommend .notcon i{
  vertical-align: middle;
  font-size: .3rem;

}
.notRecommend.recommend .notcon .info{
  color: #FFBC46;
  margin-right: .15rem;
}
.notRecommend.recommend .notcon .text{
  color: #4E4E4E;
  margin-left: .45rem;
  text-align: left;
  display: block;

}*/

/*有方案时 推荐样式*/
.recommend{
  padding-top: .24rem;
  padding-left: .49rem;
  padding-right: .49rem;
  padding-bottom: .1rem;
  background: #fff;
  .conn{
    .iconimgwap{
      position: absolute;
      bottom:.07rem;
      left: .05rem;
      img{
        width: .58rem;
        height: .58rem;
        left:auto;
        top:auto;
        position: initial;
        transform: none;
        margin-right: .1rem;
      }
    }
  }
  .con{
    text-align: left;
    width: 5.09rem;
    .chkrmb{
      color: red;
      font-weight: bold;
      font-size: .5rem;
      line-height: .5rem;
    }
  }
  /deep/ .van-divider{
      margin: 0;
      font-size: .36rem;
  }
  .flod{
    text-align: left;
    font-size: .38rem;
    color: #A2A2A2;
    .scheme{
      position: relative;
      padding-left: 1rem;
      padding-top: .2rem;
      padding-bottom: .2rem;
      .icon{
        font-size: .8rem;
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translate(0%, -50%);
      }
    }
    .colorfont{
      color: #FF9623;
      font-weight: bold;
    }
    .duoshi{
      border-top: 1px dashed #ececec;
    }
    .time{
      font-weight: normal;
    }
  }
}

.recommend .title{
  font-size: .5rem;
  color: #242424;
  font-weight: bold;
  line-height: .50rem;
  margin-bottom: .35rem;
  margin-top: .13rem;
}

.recommend .info{
  font-size: .3rem;
  color: #4E4E4E;
  line-height: .32rem;
}
.recommend .info p{
  margin-bottom: .28rem;
  font-size:.36rem;
}
.recommend .info span{
  margin-right: .25rem;
}


.recommend .imgwap{
  width: 3.84rem;
  height: 2.77rem;
  position: relative;
  overflow: hidden;
  border-radius: .1rem;
  margin-right: .4rem;
}
.recommend .imgwap img{
  position: absolute;
  transform: translate(-50%,-50%);
  left: 50%;
  top: 50%;
  width: 100%;
}
.recommend .imgwap .tagele{
  position: absolute;
  left: 0px;
  top: .25rem;
}


</style>
