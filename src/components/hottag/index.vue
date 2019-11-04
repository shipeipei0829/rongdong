<template>
  <div class="tagcon"
    :style="{
      'width':width,
      'height':height,
      'background':bgcolor,
      'border-adius':borderadius,
    }"
  >
    {{value}}
  </div>
</template>

<script>
export default {
  name: "Tag",
  data() {
    return {

    };
  },
  props:{
    value: {
      type: String,
      default: '标题'
    },
    width:{
      type:String,
      default:''
    },
    height:{
      type:String,
      default:''
    },
    borderadius:{
      type:String,
      default:''
    },
    bgcolor:{
      type:String,
      default:'#FFD925'
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
.tagcon{
  position: absolute;
  text-align: center;
  border-radius: 0 .24rem .24rem 0 ;
  z-index: 2;
  padding-right: .05rem;
}
</style>
