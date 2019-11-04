<template>
  
    <div>
      <Headertitle style="background:#fff;" value="支付方式" padtop=".28rem" padbtm=".28rem"/>
      <div class="paycon">
        <p>在线支付</p>
        <div class="item">
          <img src="./../../img/wx.png" style="width:.76rem;height:.76rem" alt="">
          <span>微信</span>
        </div>
        <div class="item">
          <img src="./../../img/zfb.png" style="width:.74rem;height:.74rem" alt="">
          <span>支付宝</span>
        </div>
        <div class="item">
          <img src="./../../img/zh.png"  style="width:.73rem;height:.71rem" alt="">
          <span>余额</span>
        </div>
        
      </div>
      <Headertitle style="background:#fff;" value="押金" padtop=".28rem" padbtm=".28rem"/>
      <div v-if="fangshi == 1" class="paycon">
        <p>在线支付</p>
        <div class="item">
          <img src="./../../img/wx.png" style="width:.76rem;height:.76rem" alt="">
          <span>微信</span>
        </div>
        <div class="item">
          <img src="./../../img/zfb.png" style="width:.74rem;height:.74rem" alt="">
          <span>支付宝</span>
        </div>
      </div>

      <div v-if="fangshi == 2" class="paycon two">
        <p>线下支付</p>

      </div>

      <div  v-if="fangshi == 3" class="paycon two">
        <p>免押金</p>

      </div>
      <Headertitle style="background:#fff;" value="房费" padtop=".28rem" padbtm=".28rem"/>
      <div class="paycon">
        <div class="cashinfo">{{text}}</div>
      </div>
    </div>

</template>

<script>
import Headertitle from '@/components/headertitle/index'
export default {
  name: "Detailspaytype",
  data() {
    return {
      fangshi:'',
      
    };
  },
  props:{
    objdate:{
      type:Object,
      default:()=>({})
    },
    text:{
      type:String,
      default:''
    },
    value: {
      type: String,
      default: '标题'
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
    }
  },
  mounted() {
    console.log(this.objdate)
    this.fangshi = this.objdate.depositType
  },
  components:{

    Headertitle
  }
};
</script>
<style scoped>

/*支付方式 */
.paycon{
  text-align: left;
}
.paycon.two{
  margin-top: 12px;
}
.paycon .cashinfo{
  font-size: .42rem;
  padding-left: .95rem;
  padding-bottom: .15rem;
  color: #343434;
}
.paycon .cashinfo i{
  color: #E72D2D;
}
.paycon p{
  font-size: .36rem;
  line-height: .36rem;
  color: #343434;
  padding-left: .48rem;
  margin-bottom: .4rem;
}
.paycon img{


}
.paycon .item{
  display: inline-block;
  margin-left: 1.21rem;
  text-align: center;
}
.paycon .item span{
  display: block;
  text-align: center;
}
</style>
