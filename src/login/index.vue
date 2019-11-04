<template>
  <div class="loginwap">
    <div class="loginbg">
      <img src="./img/loginbg.png" width="100%" alt="">
      <div class="loadicon">启动图标</div>
    </div>
    <div class="btnwap">
        
        <Buttons @click.native="handlelogin(value1)" class="login1" :value="value1" />
        <Buttons @click.native="handlelogin(value2)" class="login2" :value="value2" />

    </div>
  </div>
</template>

<script>
import Buttons from './components/buttons/index.vue'
import './public.css'
export default {
  name: 'Login',
  data(){
    return{
      value1:'登录',
      value2:'注册',
    }
  },
  props: {
    msg: String
  },
  methods:{
    handlelogin(val){
      if(val == this.value1)
       this.$router.push({path:'/login/ringup'})
      if(val == this.value2)
       this.$router.push({path:'/login/signin'})
    },
  },  
  mounted() {
    
  },
  components: {
    Buttons,
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
