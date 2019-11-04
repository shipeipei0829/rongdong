<template>
  <van-button class="loginbtn" type="primary" size="large"> <span v-if="loding"><van-loading color="#fff" type="spinner" /> </span> <span v-else> {{value}} </span>  </van-button>
</template>

<script>
export default {
  name: "Buttons",
  data() {
    return {
      
    };
  },
  props:{
    text: {
      type: String,
      default: ''
    },
    loding: {
      type: Boolean,
      default: false
    },
    value: '',//button内容显示
    width:{
      type: String,
      default: ''
    },
    height:{
      
    }
  },
  computed:{

  },
  methods: {
    
  },
  mounted() {
    
  },
  created() {

  },
};
</script>
<style lang="scss" scoped>
button.loginbtn{
  width:8.46rem;
  height:1.32rem;
  border-radius: .66rem;
  font-size: .54rem;
  line-height: 1.32rem;
  background: linear-gradient(to right,#0BA686 ,#4DD083);
  box-shadow:0px 5px 11px 3px rgba(0,162,127,0.3);
  
}
.loginbtn span{
  vertical-align:text-bottom;
}
</style>
