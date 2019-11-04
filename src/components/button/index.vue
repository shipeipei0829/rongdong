<template>
  <van-button :style="{
          'background-color':bgcolor,
          'width':width,
          'height':height,
          'line-height':height,
          'font-size':fontsize,
          'color':fontcolor,
          'border-radius':radius,
          }" type="primary" size="large">{{value}}</van-button>
</template>

<script>
  export default {
    name: "Btton",
    data() {
      return {
      };
    },
    props: {
      width: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },//button内容显示
      bgcolor: {
        type: String,
        default: '#008489'
      },
      fontcolor: {
        type: String,
        default: '#fff'
      },
      fontsize: {
        type: String,
        default: ''
      },
      radius: {
        type: String,
        default: ''
      }
    },
    methods: {

    },
    mounted() {

    },
    created() {

    },
  };
</script>
<style scoped>

</style>