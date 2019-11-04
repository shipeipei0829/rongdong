<template>
  <i :style="{'background':bgcolor,
  'color':color,
  'border':border,
  'height':height,
  'width':width,
  'padding':padding,
  'border-radius':borderadius,
  'font-size':fontsize,
  'margin-right':marginright,
  'line-height':lineheight}" class="iconbtn">{{value}}</i>
</template>

<script>
  export default {
    name: "Tagbtn",
    data() {
      return {

      };
    },
    props: {
      padding: {
        type: String,
        default: '0 .12rem'
      },
      value:'',
      width: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: '.46rem'
      },
      fontsize: {
        type: String,
        default: '.3rem'
      },
      lineheight: {
        type: String,
        default: '.46rem'
      },
      borderadius: {
        type: String,
        default: '.1rem'
      },
      border: {
        type: String,
        default: '1px solid #008489'
      },
      bgcolor: {
        type: String,
        default: '#008489'
      },
      color: {
        type: String,
        default: '#fff'
      },
      borderradius: {
        type: String,
        default: '.1rem'
      },

      marginright: {
        type: String,
        default: '.08rem'
      },

    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
    },
    mounted() {

    },
    created() {

    },
  };
</script>
<style scoped>
  .iconbtn {
    text-align: center;
    display: inline-block;
  }
</style>