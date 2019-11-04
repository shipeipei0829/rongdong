<template>
  <div class="loginwap">
    <Headers bgcolor="none"  />

    <div class="loginbg">
      <img src="./img/loginbg.png" width="100%" alt="">
      <div class="loadicon">启动图标</div>
    </div>
    <div class="conwap">
       <img style="width:1.96rem;height:.7rem" class="ringuplogo" src="./img/lognrein.png" alt="">
        <InputButtons @inputVal="handlePhoneVal" class="inputbut" :textinfo="iptbtn1.textinfo"  :imgsrc="iptbtn1.imgsrc" />
        <div class="yzmwap">
          <InputButtons @inputVal="handleYzmVal" class="inputbut" :textinfo="iptbtn2.textinfo"  :imgsrc="iptbtn2.imgsrc" />
          <a class="getyzmtext clearfix" href="javascript:;">
            <span  @click="handleEvent('yzm',{})" class="fl">获取验证码 </span>
            <span  class="fl">
              <van-count-down v-if="timeshow"  @finish="handleStop()" :time="time">
                <template v-slot="timeData">
                  <span class="item">( {{ timeData.seconds }} )</span>
                </template>
              </van-count-down>
            </span>

          </a>
        </div>

        <div class="btnswap">
            <Buttons @click.native="handleEvent('submit',{})" :loding="loding" class="login1" :value="value" />
            
        </div>
        
    </div>
  </div>
</template>

<script>
import Headers from '@/components/header/index.vue'
import Buttons from './components/buttons/index.vue'
import InputButtons from './components/inputbuttons/index.vue'
import { Toast } from 'vant';
import{ getYzmCode,subzhuce } from'@/api/login/index'
import{ filterPhone } from'@/api/date/init'
export default {
  name: 'signin',
  data(){
    return{
      value:'下一步',
      time: 60 * 1000,
      timeshow:false,
      phone:'',
      yzm:'',
      loding:false,
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
  methods:{
    getyzmsubmit(obj){
      var phone = obj.phone
      getYzmCode({phoneNumber:phone}).then(res => {
        if (res.code === 0) {
          console.log(res)
        }
      }).finally(() => {
        
      })
    },
    setsubmit(obj){
      subzhuce({phone:obj.phoneNumber,yzm:obj.verificationCode}).then(res => {  
        if (res.code === 0) {
          var phoneVal = res.data.phoneNumber
          if(phoneVal){
            this.$router.push({path:'/login/setpswd',query:{phone:phoneVal}})
          }
          this.loding = false
        }
      }).finally(() => {
        this.loding = false
      })
    },
    handleEvent(type,obj){
      var phoneVal = this.phone
      var yzmVal = this.yzm
      if(type == 'submit'){
          if(this.loding == false){
            if( (phoneVal != '' && filterPhone(phoneVal)) && this.yzmVal !=''){
              this.loding = true
              this.setsubmit({phoneNumber:this.phone,verificationCode:this.yzm})
            }else{
              Toast.fail('请检查所填内容是否正确');
              this.loding = false
            }
          }
      }else if(type == 'yzm'){
        if( this.timeshow == false ){
          
          if(phoneVal != '' && filterPhone(phoneVal)){
            this.timeshow = true
            this.getyzmsubmit({phone:phoneVal})
          }else if(filterPhone(phoneVal) == false){
            Toast.fail('手机号格式不正确');
          }
        }
      }
      return false
    },
    handleStop(){
      console.log(this.timeshow)
      this.timeshow = false
      return false
    },

    handlePhoneVal(obj){
      this.phone = obj.value
    },
    handleYzmVal(obj){
      this.yzm = obj.value
    },

  },
  components: {
    Buttons,
    InputButtons,
    Headers
  },
  watch:{
    time:{
      handler(newval,oldval){
        console.log(newval)
      },
      deep:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loginwap{
  /deep/ .van-count-down, .van-divider{
    color: #0DA786;
  }
}
.header{
  position: fixed
}
.btnswap{
  margin-top: .55rem;
}
</style>
