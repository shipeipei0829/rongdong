<template>
  <div class="loginwap">
      <Headers title="短信验证" />
      <div class="paswdwap">
        <InputButtons class="inputbut" :textinfo="iptbtn1.textinfo"  :imgsrc="iptbtn1.imgsrc" />
        <div class="yzmwap">
                  <InputButtons class="inputbut" :textinfo="iptbtn2.textinfo"  :imgsrc="iptbtn2.imgsrc" />
                  <a class="getyzmtext" href="javascript:;">获取验证码</a>
        </div>
        <div class="btnswap">
          <Buttons class="login1" @click.native="handleup()" :value="value" />
        </div>
      </div>

  </div>
</template>

<script>
import Headers from '@/components/header/index.vue'
import Buttons from './components/buttons/index.vue'
import InputButtons from './components/inputbuttons/index.vue'
export default {
  name: 'Forgetpswd',
  data(){
    return{
      value:'提 交',
      iptbtn1:{
        imgsrc:'lognphone',
        textinfo:'请输入手机号',
      },
      iptbtn2:{
        imgsrc:'lognyzm',
        textinfo:'请输入验证码',
      },

    }
  },
  props: {
    msg: String
  },
  components: {
    Buttons,
    InputButtons,
    Headers
  },
  methods:{
    handleclik(status){
      
    },
    handleup(){
      this.$router.push({path:'/login/changepswd'})
    },
    onClickLeft(){
      
    },
    onClickRight(){

    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .loginwap{
    /deep/ .van-cell{
      background: none;
    }
  }
</style>
