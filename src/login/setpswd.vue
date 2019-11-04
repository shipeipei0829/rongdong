<template>
  <div class="loginwap">
      <Headers title="设置密码" />
      
      <div class="paswdwap">
        <InputButtons  @inputVal="onepassword" type="password" class="inputbut" :textinfo="iptbtn1.textinfo"  :imgsrc="iptbtn1.imgsrc" />
        <div class="yzmwap">
            <InputButtons  @inputVal="twopassword" type="password" class="inputbut" :textinfo="iptbtn2.textinfo"  :imgsrc="iptbtn2.imgsrc" />
        </div>
        <div class="btnswap">
          <Buttons @click.native="submitup()" class="login1" :value="value" />
        </div>
      </div>

  </div>
</template>

<script>
import Headers from '@/components/header/index.vue'
import Buttons from './components/buttons/index.vue'
import InputButtons from './components/inputbuttons/index.vue'
import { Dialog } from 'vant';
import{ setpassword } from'@/api/login/index'
export default {
  name: 'Setpswd',
  data(){
    return{
      value:'确 认',
      password1:'',
      password2:'',
      phone:'',
      iptbtn1:{
        imgsrc:'password',
        textinfo:'请输入密码',
      },
      iptbtn2:{
        imgsrc:'password',
        textinfo:'请再次输入密码',
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
    submitup(){
      if(this.password1 != '' && (this.password1 == this.password2) ){
        setpassword({phone:this.phone,password:this.password1,type:'2',nickName:'Hello'}).then(res => {  
          console.log(res)
          if (res.code === 0) {
            this.loding = false
            Dialog.confirm({
              title: '提示',
              message: '注册成功,点击确认即可登录'
            }).then(() => {//注册成功点击确认操作
              this.$router.push({path:'/login/ringup'})
            }).catch(() => {
            });
          }
        }).finally(() => {
          this.loding = false
        })
      }else{
        Dialog.alert({
          message: '密码不得为空且两次输入密码须一致'
        }).then(() => {
          // on close
        });
      // Toast.fail('密码不得为空且两次输入密码须一致');
      }
      
    },
    onepassword(obj){
      this.password1 = obj.value
    },
    twopassword(obj){
      this.password2 = obj.value
    }
  },
  mounted(){
    this.phone = this.$route.query.phone
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loginwap{
  /deep/ .van-cell{
    background: none;
  }
  /deep/ .van-icon-success:before{
    font-size: 3rem;
  }
}

</style>
