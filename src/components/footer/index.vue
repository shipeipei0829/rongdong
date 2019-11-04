<template>
  <div class="footer">

    <van-tabbar route v-model="active">
      <!--首页-->
      <van-tabbar-item replace to="/home/index" :icon="text1.icon">{{text1.name}}</van-tabbar-item>
      <van-tabbar-item replace to="/listmsg/index" :icon="text2.icon">{{text2.name}}</van-tabbar-item>
      <van-tabbar-item replace to="/order/index" :icon="text3.icon">{{text3.name}}</van-tabbar-item>
      <!--我的-->
      <van-tabbar-item replace to="/mine/index" :icon="text4.icon">{{text4.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "Footers",
    data() {
      return {
        active: 0,
      };
    },
    props: {
      text1: {
        type: Object,
        default: function () {
          return {
            'name': '首页',
            'icon': 'wap-home'
          }
        },
      },
      text2: {
        type: Object,
        default: function () {
          return {
            'name': '消息',
            'icon': 'chat-o'
          }
        },
      },
      text3: {
        type: Object,
        default: function () {
          return {
            'name': '订单',
            'icon': 'balance-list-o'
          }
        },
      },
      text4: {
        type: Object,
        default: function () {
          return {
            'name': '我的',
            'icon': 'contact'
          }
        },
      },
    },
    methods: {
      onClickLeft() {
        //this.$router.go(-1);
      }
    },
    mounted() {

    },
  };
</script>
<style scoped>

</style>