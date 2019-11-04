<template>
  <div class="collectitem">
    <div class="hotelpic_wrap">
      <div class="hotelpicwap" @click="handleRouter('detail',dateobj)">
        
              <img src="../../img/pageda.png" alt class="hotelpic" />
              <span class="collecticon" @click.stop="collectionStatus(dateobj)">
                <van-icon v-if="collectStatus == false" class="icon" name="like-o" />
                <van-icon v-if="collectStatus == true" class="icon" name="like" />
              </span>
        <img src="../../img/hours1.png" alt class="hours hours1" />
        <img src="../../img/hours6.png" alt class="hours hours6" />
        <img src="../../img/hours24.png" alt class="hours hours24" />
        <Tag style="display:none;" class="tagbtn" value="超值体验3小时" />
          <!-- 民宿提示 -->
          <div class="homestay" v-if="!itemtype">
            <div class="homestayimgwrap">
              <img src="../../img/user.png" alt />
            </div>
            <div class="homestayinfo">
              <span>整套出租 1室1厅</span>
              <span>1张床</span>
              <span>宜住2人</span>
            </div>
          </div>
      </div>




      <!--图片遮罩-->
      <div class="hotelimgmark" v-if="ismark">
        <div class="hotelimgmark_info">已下架</div>
      </div>
    </div>

    <div class="hoteldes clearfix">
      <div class="titlewaps fl">
        <div class="hoteldes_name">{{dateobj.hotelName}}</div>
        <div class="hoteldes_bz">

          <Tagbtn v-for="(x,index) in tagarry" :key="index" :value="x" />

        </div>
        <div class="hoteldes_localtion">
          <van-icon name="location-o" style="top:10%" />距您{{dateobj.distance}}米{{dateobj.tradingArea}}
        </div>
        <div class="hoteldes_scheme">
          <span class="title">开通入住方案:</span>
          <span class="text">{{dateobj.roomType}}</span>
        </div>
        <div class="hoteldes_price">
          <i style="font-weight:normal;font-size:.4rem;">￥</i>{{dateobj.minPrice}}
          <i style="color: #A2A2A2;font-size: .3rem;">起 </i>
          <i style="color: #A2A2A2;font-size: .3rem;"> 共入住{{dateobj.hours}}小时</i>
          <i style="color: #A2A2A2;font-size: .3rem;"> 共{{dateobj.programme}}种入住方案</i>
          
        </div>
      </div>

      <div class="hotelrt fr">
        <div class="itemtype">
            <Xing v-if="itemtype" :allvalue="dateobj.starLevel" :value="dateobj.starLevel"  />
            <span class="tagbtn" v-if="!itemtype">优选民宿</span>
        </div>
         <div class="comment">{{dateobj.comments}}条点评</div>
        <div class="score">
          {{dateobj.firmScore}}
          <i style="font-weight:normal;font-size:.4rem;">分</i>
        </div>
       
      </div>

    </div>
    
  </div>
</template>

<script>
//图标
import Tag from '@/components/tag/index'
import Tagbtn from '@/components/tagbtn/index'
import Xing from '@/components/xing/index'
import {arryMinNum} from '@/api/date/init'//共用函数方法文件
import {collectStatus} from '@/api/home/listhotel'
export default {
  name: "Collectitem",
  data() {
    return {
      value: 5, //星级酒店评分
      collectStatus:false, //收藏状态
      rmb:'',//ismark: false, //是否显示已下架
      tagarry:[]
      //isstar: true //星级or民宿
    };
  },
  props: {
    dateobj:{
      type:Object,
      default:{}
    },
    ismark: {
      type: Boolean,
      default: false
    }, //显示已下架遮罩
    itemtype: {
      type: Boolean,
      default: true//酒店或者民宿 true 酒店  falsle 民宿
    } //酒店类型
  },
  methods: {
    init(){
      this.setrmb(this.dateobj.arraynewroom)
      this.tag(this.dateobj.hotelAttribute)

      if(this.dateobj.collection == 1){
        this.collectStatus = true
      }else if(this.dateobj.collection == 0){
        this.collectStatus = false
      }
    },
    handleRouter(type,data){
      if(type == 'detail'){
        this.$router.push({ path:'/details/index',query:{hotelId:data.hotelId,lat:data.lats,lng:data.lngs}})//,
      }
    },
    setrmb(data){
      var i = []
      var val = ''
      for(let x in data){
        if(data[x].oldPlanRmb < data[x].duoshiPlanRmb){
          val = data[x].oldPlanRmb
        }else if(data[x].duoshiPlanRmb <= data[x].oldPlanRmb){
          val = data[x].duoshiPlanRmb
        }
        if(data[x].duoshiPlanRmb == undefined){
          val = data[x].oldPlanRmb
        }
        i.push(val)

      }
      this.rmb = Math.min.apply(null, i)
    },
    tag(data){
      if(data!=''){
        var arr = data.split(',')
        if(arr.length > 3){
          this.tagarry.push(data.split(',')[0])
          this.tagarry.push(data.split(',')[1])
          this.tagarry.push(data.split(',')[2])
        }else{
          this.tagarry = data.split(',')
        }
        
      }else{
        this.tagarry = []
      }
    },
    collectionStatus(data){
      var status = ''
      if(data.collection == 1){
        status = 0 
      }else if(data.collection == 0){
        status = 1
      }
      collectStatus({
        hotelId:data.hotelId,
        deleteState:status
      }).then((res)=>{
        if(res.code== 0 && res.message == 'success'){
          if(data.collection == 0){
            this.collectStatus = true
            this.dateobj.collection = 1
          }else if(data.collection == 1){
            this.collectStatus = false
            this.dateobj.collection = 0
          }
        }
      }).finally(()=>{

      })
      return false

    }
  },
  mounted() {
    console.log(this.dateobj)
    this.init()
  },
  components:{
    Tag,
    Xing,
    Tagbtn
  }
};
</script>
<style lang="scss" scoped>
.collectitem {
  width: 10.8rem;
  background-color: #fff;
  position: relative;
  padding-bottom: 0.2rem;
}
.hotelpicwap{
  position: relative;
  display :flex;
  display:-webkit-flex;
  align-items:center;
  -webkit-align-items:center;
  justify-content:center ;
  height: 4.08rem;
  .tagbtn{
    position: absolute;
    left: 0px;
    top: .35rem;
  }
  .collecticon{
    font-size: .5rem;
    color: #F1CA11;
    position: absolute;
    top: .2rem;
    right: .48rem;
    background: rgba(0, 0, 0, 0.3);
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    /deep/ i{
          line-height: .76rem;
    }

  }
}
.hoteldes_scheme{
  .title{
    font-size: .3rem;
    color: #252525;
  }
  .text{
    font-size: .34rem;
    color: #008489;
    font-weight: bold
  }
}
.hotelpic {
  width: 100%;
}
.hoteldes {
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  text-align: left;
}
.hoteldes_name {
  font-size: 0.42rem;
  font-weight: bold;
  color: #3e3e3e;
  height: 0.42rem;
  line-height: 0.42rem;
  margin-top: 0.28rem;
  margin-bottom: 0.2rem;
}
.hoteldes_bz {
  margin: 0rem 0 0rem 0;
}
.hoteldes_bz span {
  font-size: 0.3rem;
  color: #fff;
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.2rem;
  background-color: #008489;
  margin-right: 0.1rem;
  border-radius: 0.1rem;
}
.hoteldes_localtion {
  color: #a2a2a2;
  font-size: 0.3rem;
  line-height: 0.3rem;
  margin-bottom: 0.15rem;
  
  i,div{
    display: inline-block;
  }
}
.hoteldes_price {
  font-size: 0.48rem;
  height: 0.48rem;
  line-height: 0.48rem;
  color: #e72d2d;
  font-weight: bold;
}


.hours {
  width: 0.58rem;
  height: 0.58rem;
  position: absolute;
  bottom: -0.3rem;
}
.hours1 {
  right: 2rem;
}
.hours6 {
  right: 1.2rem;
}
.hours24 {
  right: 0.4rem;
}
.score {
  font-size: 0.48rem;
  color: #ffc334;
  font-weight: bold;
}
.comment {
  font-size: 0.3rem;
}
.titlewaps{

  width: 66%;
  div{
    width: 150%;
    overflow: hidden;text-overflow:ellipsis;white-space: nowrap;
  }
}
.hotelrt {
  width: 34%;
  padding-top: .3rem;
  text-align: right;
  
  overflow: hidden;text-overflow:ellipsis;white-space: nowrap;
  
  .tagbtn{
    color: #FFD925;
    border:1px solid #FFD925;
    border-radius: .1rem;
    width: 1.42rem;
    height: .46rem;
    line-height: .46rem;
    text-align: center;
    font-size: .3rem;
    
  }
}

.info {
  position: absolute;
  top: 0;
  right: 0.2rem;
  font-size: 0.3rem;
}

/* 民宿提示 */
.homestay {
  position: absolute;
  bottom: 0.3rem;
}
.homestayimgwrap {
  position: absolute;
  left: 0.33rem;
  bottom: 0;
  width: 0.89rem;
  height: 0.89rem;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
}
.homestayimgwrap img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.homestayinfo {
  position: absolute;
  left: 1rem;
  bottom: 0;
  width: 100%;
  height: 0.48rem;
  line-height: 0.48rem;
  width: 5.67rem;
  background-color: rgba(0, 0, 0, 0.5);
}
.homestayinfo span {
  font-size: 0.3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #fff;
  margin-left: 0.1rem;
  margin: 0.1rem;
}
.hotelimgmark {
  width: 100%;
  height: 3.55rem;
  position: absolute;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
}
.hotelimgmark_info {
  color: #fff;
  font-size: 0.48rem;
  width: 2.24rem;
  height: 2.24rem;
  line-height: 2.24rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style> 