<template>
  <div class="loginwap">
    <Header title="修改密码"></Header>
    <div class="paswdwap">
      <InputButtons class="inputbut" :textinfo="iptbtn1.textinfo" :imgsrc="iptbtn1.imgsrc" />
      <div class="yzmwap">
        <InputButtons class="inputbut" :textinfo="iptbtn2.textinfo" :imgsrc="iptbtn2.imgsrc" />
        <a class="getyzmtext" href="javascript:;">获取验证码</a>
      </div>
      <div class="btnswap">
        <Buttons class="login1" :value="value" />
      </div>
    </div>

  </div>
</template>

<script>
  import Header from '@/components/header/index.vue'
  import Buttons from './components/buttons/index.vue'
  import InputButtons from './components/inputbuttons/index.vue'
  export default {
    name: 'Changepswd',
    data() {
      return {
        value: '确 认',
        iptbtn1: {
          imgsrc: 'password',
          textinfo: '请输入新密码',
        },
        iptbtn2: {
          imgsrc: 'password',
          textinfo: '请再次确认输入密码',
        },

      }
    },
    props: {
      msg: String
    },
    components: {
      Buttons,
      InputButtons,
      Header
    },
    methods: {
      handleclik(status) {


      },
      onClickLeft() {

      },
      onClickRight() {

      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>