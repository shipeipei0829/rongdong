<template>
  
    <div class="ticket"  style="padding-top:.30rem;">
        <div @click.stop="showPopup" class="ticketcon clearfix" style="padding-left:.50rem;" v-if="objdate.length > 0">
          <Tagbtn v-for="(x,index) in objdate" :key="index" border="1px solid #008489" color="#008489"  bgcolor="#fff" class="cnt fl" :value="texts(x)" />
          <span class="cnt fr">领取优惠券 <van-icon name="arrow" /></span>
        </div>
        
        <div class="memberwap">
          <div class="member">
            <div @click.stop="handleRouter('member')" class="membercon clearfix">
                <van-icon class="icon fl" name="vip-card" />
                <span class="fl">使用会员订房享8.5折优惠</span>
                <span class="fr"> <i>立即开通</i>  <van-icon name="arrow" /></span>
            </div>
          </div>
        </div>
        <!-- 系统 组件 -->

      <div class="ticketpopup">
          <van-popup 
          v-model="show"
          position="bottom"
          :style="{ height: '80%' }"><!-- 优惠券 -->
          <div class="ticketcnn">
          <van-icon @click="handleClose()" class="btnclose" name="close" />
            <h1>领取优惠券</h1>
            <div class="ticketrowwap">
                <Ticket class="tickwaps" v-for="(xx,index) in couponList" :key="index" :value="couponlistshow(xx)" :text="coupontext(xx)" :id="xx.id" :date="xx.endDate" />

            </div>
          </div>
          
          
          </van-popup>
      </div>


      </div>


</template>

<script>
import Tagbtn from '@/components/tagbtn/index'
import Ticket from '@/components/ticket/index'
import {loadcouponlist} from '@/api/home/details'// 加载详情
export default {
  name: "Detailsticket",
  data() {
    return {
      show:false,
      couponList:[],
    };
  },
  props:{
    hotelId:'',
    value: {
      type: String,
      default: '标题'
    },
    text: {
      type: String,
      default: '满减'
    },
    bgcolor:{
      type:String,
      default:'#FFD925'
    },
    objdate:{
      type: Array,
      default:() => []
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1);
    },
    handleClose(){
      this.show = false;
    },
    coupontext(data){
      return data.title.split('-')[0]
    },
    handleRouter(type){
      var t = this
      
      if(type == 'member'){
      
         this.$router.push({path:'/vipcard/addcard',query:{hotelId:t.hotelId}})
      }
    },
    couponlistshow(data){
      var typetext = '' 
      if(data.type == '1'){
        typetext = '折'
      }else if(data.type == '2'){
        typetext = '元'
      }else if(data.type == '3'){
        typetext = '元'
      }else if(data.type == '4'){
        typetext  = '元'
      }
      return {num:data.couponTypeValue,tit:typetext}
    },
    showPopup() {
      var t = this
      this.show = true;
      loadcouponlist({
        hotelId:t.hotelId,
        limit:30,
        page:1,
      }).then(res => {
        if(res.code == 0){
          if(res.data.records.length > 0){
            this.couponList = res.data.records
          }else{
            this.couponList = []
          }
        }else{
          this.couponList = []
        }
      }).finally((res) => {
        t.loading = false
      }).catch((res)=>{
        t.finished = true;
        t.loading = false
      })
      return false
    },
    texts(data){
      var i = ''
      if(data.useRange == 1 ){//1.城市酒店通用 2.城市酒店民通用 11.城市酒店民宿通用 21.指定酒店
        i = '酒店通用'
      }else if(data.useRange == 2 ){
        i = '民宿通用'
      }else if(data.useRange == 11 ){
        i = '通用'
      }else if(data.useRange == 21 ){
        i = '酒店专用'
      }

      if(data.type == '1'){
        return i + data.couponTypeValue + '抵用'
      }else if(data.type == '2'){
        return i + data.couponTypeValue + '折扣'
      }else if(data.type == '3'){
        return i + '满'+data.fullValue+'减'+data.couponTypeValue
      }else if(data.type == '4'){
        return i + data.couponTypeValue + '优惠'
      }
      
      return '1212'
    }
  },
  mounted() {
    
  },
  created() {

  },
  components:{
    Tagbtn,
    Ticket,
  }
};
</script>
<style scoped lang="scss">
.ticketrowwap{
  /deep/ .ticketrow{
    margin-bottom: .3rem;
  }
}
.ticketcon{
  text-align: left;
  padding-left: .49rem;
}
.ticketcon .cnt{
  margin-right: .49rem;
  margin-bottom: .24rem;
  height: .46rem;
}
.ticket{
  padding-bottom: .3rem;
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



.membercon{
  background: #F4F4F4;
  height: .78rem;
  line-height: .78rem;
  font-size: .3rem;
  text-align: left;
  padding-left: .49rem;
  padding-right: .5rem;
}
.member .membercon .icon{
  font-size: .62rem;
  line-height: .78rem;
  color: #008489;
  margin-right: .2rem;
}
.member .membercon i{
  vertical-align: middle;
}

</style>
