<template>
        <div class="inputbutton">
          <img style="width: 0.6rem;height: 0.6rem;" :src="getImgUrl(imgsrc)" alt="">
          <van-field style="" v-model="value" :placeholder="textinfo" :type="type"/>
        </div>
</template>

<script>

export default {
  name: "Inputbutton",
  data() {
    return {
      text:'1212',
      value:'',
    };
  },
  props:{
    textinfo: {
      type: String,
      default: ''
    },//placeholder内容
    imgsrc:{
      type: String,
      default: ''      
    },//图片名称
    type:{
      type:String,
      default:''
    }//type类型
  },
  computed:{
    
  },
  methods: {
    getImgUrl(icon){
      return require("@/login/img/"+icon+".png");
    },

  },
  mounted() {
    
  },
  watch:{
    value(val){
      this.$emit('inputVal',{value:val})
    }
  }
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
</style>
