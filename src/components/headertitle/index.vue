<template>
      <div class="hedtitle" :style="{
        'padding-top':padtop,
        'padding-bottom':padbtm
      }">

        <span class="icon"
          :style="{
            'margin-left':padleft,
            'padding-right':padright,
            'border-color':bodrcolor
            }"
        ></span>
        <span class="con" 
          :style="{
            'font-size':fontsize,
            'color':color
            }">{{value}}</span>

      </div>
</template>

<script>
export default {
  name: "Headertitle",
  data() {
    return {

    };
  },
  props:{
    value: {
      type: String,
      default: '标题'
    },
    padtop: {
      type: String,
      default: ''
    },
    padbtm: {
      type: String,
      default: ''
    },
    color:{
      type:String,
      default:'#2B2B2B'
    },
    bodrcolor: {
      type: String,
      default: '#008489'
    },
    padleft: {
      type: String,
      default: '.34rem'
    },
    padright: {
      type: String,
      default: '.13rem'
    },
    fontsize: {
      type: String,
      default: '.42rem'
    },
  },
  methods: {
    onClickLeft(){
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
.hedtitle{
  text-align: left;
}
.hedtitle span{
  vertical-align: middle;
}
.hedtitle .icon{
  border-left: .07rem solid;
  display: inline-block;
  width: .07rem;
  height:.33rem;
}
.hedtitle .con{
  font-weight: bold;
}
</style>
