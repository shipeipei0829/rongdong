<template>
  
    <div>
              <div class="clearfix headbotmbt bgwhite" v-if="type==1" >
                <span class="headimg fl">
                  <img src="./../../img/headimg.jpg" style="width:100%" alt="">
                </span>
                <span class="cont fl">
                  <p class="name">兔八哥</p>
                  <p class="ip">湖北省武汉市</p>
                </span>
                <span class="btns fl">

                  <Tagbtn class="btncon" bgcolor="#FFB83D" border="1px solid #FFB83D" marginright=".5rem" fontsize=".38rem"  width="2.3rem" lineheight=".76rem" value="联系TA" height=".76rem" borderadius=".2rem"  />

                  <Tagbtn  marginright="0rem" fontsize=".38rem"  width="2.3rem" lineheight=".76rem" value="预订此房" height=".76rem" borderadius=".2rem"  />

                </span>
              </div>


              <div class="clearfix botmbtna" v-if="type==2" >
                <span class="awap fl">
                  <p><van-icon name="chat-o" /></p>
                  <p>联系房主</p>
                </span> 
                <span class="fl center">
                  <u class="rmb">￥589</u>
                  <u class="time">共27小时</u>
                </span>
                <Tagbtn fontsize=".4rem" class="fr"  width="3.08rem" lineheight="1.2rem" value="预订" height="1.16rem" borderadius="none"  />
              </div>

              <div class="clearfix botmbtn bgwhite" v-if="type == 3">
                <span class="text">共入住2晚 <u>( ￥1964 )</u> </span>        
                <Tagbtn marginright="0rem" fontsize=".4rem" class="fr"  width="4.08rem" lineheight="1.2rem" value="预订" height="1.2rem" borderadius="none"  />
              </div>
    </div>

</template>

<script>
import Tagbtn from '@/components/tagbtn/index'
export default {
  name: "Detailspaybtn",
  data() {
    return {

    };
  },
  props:{
    type:{},
    objdate:{
      type: Object,
      default: ()=>({

      })
    },
    rmb:{
      type: String,
      default: ''
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
    console.log( this.objdate )
  },
  created() {

  },
  components:{

    Tagbtn
  }
};
</script>
<style scoped>

/*底部按钮*/
.headbotmbt{
  height:1.33rem;
  position: relative;
  margin-top: .7rem;
}
.headbotmbt .btns{
  padding-top: .28rem;
}

.headbotmbt .headimg{
  width: 1.42rem;
  border-radius: 50%;
  overflow: hidden;
  border:.14rem solid #fff;
  position: absolute;
  top: -.5rem;
  left: .5rem;
}
.headbotmbt .cont{
  margin-left: 2.38rem;
  margin-right: .95rem;
  padding-top: .15rem;
}
.headbotmbt .cont .name{
  color: #2C2C2C;
  font-size: .38rem;
}
.headbotmbt .cont .ip{
  color: #666666;
  font-size:.3rem;
}

/*支付预订 按钮 */
.botmbtna span .rmb{
  font-size: .48rem;
    color: #fff;
    margin-right: .5rem;
}
.botmbtna span .time{
  font-size: .33rem;
  color: #fff;
}
.botmbtna .center{
  text-align: center;
  padding-left: 1.8rem;
  padding-top: .23rem;
}
.botmbtna{
  background: #008489;
  
  margin-top: 20px;
  height: 1.2rem;
}
.botmbtna .awap{
  height: 100%;
  display: inline-block;
  height: 1.2rem;
  background: #fff;
  color: #343434;
  width: 1.92rem;
}
.botmbtna .awap p{
  font-size: .3rem;
  line-height: .3rem;
}
.botmbtna .awap i{
  font-size: .44rem;
  margin-top: .18rem;
  margin-bottom: .12rem;
}
.botmbtna .text{
  background: #008489;
  color: #fff;
    line-height: 1.2rem;
      font-size: .48rem;
}
.botmbtna .text u{
  background: #008489;
  color: #fff;
    line-height: 1.2rem;
      font-size: .33rem;
      margin-left: .5rem;
}



.botmbtn .text{
  font-size: .39rem;
  color: #2A2A2A;
  line-height: 1.2rem;

}
.botmbtn .text u{

  color:#E72D2D;
  font-size: .33rem;
}




</style>
