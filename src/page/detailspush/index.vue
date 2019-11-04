<template>
  <div class="details">
    <div class="">
      <Headers bgcolor="rgb(17, 133, 137, 0)" class="tophead" />

      <div style="display:none;">
                <van-icon class="shoucang no" name="like-o" />
                <van-icon class="shoucang yes" name="like" />
      </div>
    </div>
    <div class="swip">
        <!--l轮播-->
        <Swipes  @click.native="hadnleRouterHotelimg()" />
    </div>
    


    <div class="roomiconwap">
      <!--房间信息 图标-->
      <p class="roomicontitle" style="font-size:.50rem;padding:.32rem 0 .32rem .47rem;background:#F0F0F0;text-align:left;" >{{detainfo.roomName}}</p>
      <Headertitle style="background:#fff;" value="房间信息" padtop=".28rem" padbtm=".28rem"/>
      <Detailsroomicon  v-if="flag" :objdate="detailsDate" />
    </div>

    <div class="facilitywap">
      <!--配套设施-->
      <Headertitle style="background:#fff;" value="配套设施" padtop=".28rem" padbtm=".28rem"/>
      <Detailsmating v-if="flag" :objdate="detailsDate.roomAttributeDictList" />
    </div>

    <div class="paywap">
    <!--支付方式-->
      <Detailspaytype v-if="flag" :objdate="detailsDate" :text="text"  />
    </div>

        <div class="gradewap">
      <!--评分-->
      <Detailsgrade v-if="flag" :objdate="detailsDate" />

    </div>
    
    <div class="bbtns">
            <!-- 底部 按钮 -->
      <Detailspaybtn v-if="flag" :rmb="text" :objdate="detailsDate" @click.native="handlesubmit()" :type="btntype" />
    </div>

    <!-- 系统 组件 -->





  </div>
</template>

<script>
import Headertitle from '@/components/headertitle/index'
import Headers from '@/components/header/index'
import Swipes from '@/module/swipes/index'
import Detailsgrade from '@/module/detailsgrade/index'
import Detailspaytype from '@/module/detailspaytype/index'
import Detailspaybtn from '@/module/detailspaybtn/index'
import Detailsmating from '@/module/detailsmating/index'
import Detailsroomicon from '@/module/detailsroomicon/index'
import {loadRoomDetail} from '@/api/home/details'
// options 为可选参数，无则不传
export default {
  name: 'Details',
  data(){
    return{
      active:0,
      show:false,
      type:'',//当前id
      obj:'',
      flag:false,
      detainfo:[],
      hotelId:'',
      roomType:'',
      text:'',
      btntype:3,//3为预订酒店
      detailsDate:{},
    }
  },
  props: {
    msg:{

    }
  },
  methods:{

    showPopup() {
      this.show = true;
    },
    handleClose(){
      this.show = false;
    },
    hadnleRouterHotelimg(){
      this.$router.push({path:'/hotelimg/index'})
    },
    handleshowall(){
      this.$router.push({path:'/shoporder/index'})
    },
    handlesubmit(){
      var t= this
      if(this.btntype == 3){
        var roomType = this.roomType
        var hotelId = this.hotelId
        this.$router.push({path:'/page/jump/application',query:{roomType:roomType,hotelId:hotelId,ordertype:'999',rmb:t.text}})
      }

    },
    getsrcurl(icon){
      return require("@/img/"+icon+"");
      
    },
    getroomdetail(){
      var roomType = this.roomType 
      var hotelId = this.hotelId
      var t = this
      loadRoomDetail({hotelId,roomType}).then((res)=>{
        console.log(res.data)
        if(res.code == 0){
          t.detailsDate = res.data
          t.flag = true
        }
        
      }).finally((res) => {
        this.loading = false
      }).catch((res)=>{
        
      })
    }
  },
  mounted(){
    this.roomType = this.$route.query.roomType
    this.hotelId = this.$route.query.hotelId
    this.text = this.$route.query.text

    this.getroomdetail()

  },
  components: {
    Swipes,
    Headers,
    Headertitle,
    Detailsgrade,
    Detailspaytype,
    Detailspaybtn, 
    Detailsmating,
    Detailsroomicon,
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
