<template>
  <div class="detailstwo">
    <div class="">
      <Headers title="酒店详情" class="" /><!--rgb(17, 133, 137, 0)-->

      <div style="display:none;">
                <van-icon class="shoucang no" name="like-o" />
                <van-icon class="shoucang yes" name="like" />
      </div>
    </div>
   <div>

   </div>
    <div class="roominfowap bgwhite">
      <!--酒店介绍-->
      <Headertitle style="background:#fff;" value="酒店介绍" padtop=".28rem" padbtm=".28rem"/>
      <div class="hotel_introduce">
        <div class="con">
          {{detailtwoinfo.introduce}}
        </div>
        
        <div><i>开业时间</i><span>{{startTime}}</span></div>
        <div><i>装修时间</i><span>{{decorationTime}}</span></div>
        <div><i>楼层高度</i><span>{{detailtwoinfo.floorHeight}}</span></div>
        <div><i>房间数量</i><span>{{detailtwoinfo.roomNum}}</span></div>
      </div>

    </div>

    <div class="facilitywap">
      <!--配套设施-->
      <Headertitle style="background:#fff;" value="配套设施" padtop=".28rem" padbtm=".28rem"/>
      <Detailsmating v-if="flag" :objdate="detailtwoinfo.attrList" />
    </div>




    <!-- 系统 组件 -->




  </div>
</template>

<script>
import Headertitle from '@/components/headertitle/index'
import Detailsroominfo from '@/module/detailsroominfo/index'
import Detailsmating from '@/module/detailsmating/index'
import Headers from '@/components/header/index'


// options 为可选参数，无则不传
import {getTimeLength,timefilter} from '@/api/date/init'//共用函数方法文件
import {getIpCon} from '@/api/home/details'// 加载详情

import '@/../public/cdn/common.js'
export default {
  name: 'detailstwo',
  data(){
    return{
      hotelId:'',
      detailtwoinfo:{},
      startTime:'',
      decorationTime:'',
      roomAttributeDictList:[],
      flag:false
    }
  },
  props: {
    msg:{

    }
  },
  methods:{

 
    getsrcurl(icon){
      return require("@/img/"+icon+"");
      
    },
    loadgetIpCon(){
      var t = this
      getIpCon({
        hotelId:t.hotelId,
      }).then(res => {
        console.log(res)
        if(res.code == 0){
          this.detailtwoinfo = res.data

          this.startTime = this.detailtwoinfo.startTime.split(' ')[0]
          this.decorationTime = this.detailtwoinfo.decorationTime.split(' ')[0]
          this.flag = true
        }
      }).finally((res) => {
        t.loading = false
      }).catch((res)=>{
        t.finished = true;
        t.loading = false
      })
    },

  },
  mounted(){
   
    this.hotelId = this.$route.query.hotelId
    this.loadgetIpCon()
  },

  components: {
    Headertitle,
    Headers,
    Detailsroominfo,
    Detailsmating,


  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hotel_introduce{
  text-align: left;
  padding-left: .5rem;
  padding-right: .5rem;
  .con{
    margin-bottom: .3rem;
  }
  i{
    font-size: .36rem;
    color: #343434;
    margin-right: .15rem;
  }
  span{
    font-size: .33rem;
  }
}
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
.swip{
    height: 7.68rem;
    background: #fff;
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
/*优惠券信息*/
.ticketcnn{
  position: relative;
}
.ticketcnn .btnclose{
  position: absolute;
  right: .43rem;
  top: 0rem;
  font-size: .55rem;
}
.ticketcnn h1{
  font-size: .4rem;
  font-weight: bold;
  margin: .4rem 0 .55rem 0;
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
