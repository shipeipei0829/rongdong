<template>
  <div class="facilityconwap">
    <div class="facility">

        <div class="item" v-for="(x,index) in objdate" :key="index">
          
          <img :src="x.imageUrl" alt="">
          {{x.dictName}}
        </div>
        
        
    </div>
  </div>
</template>

<script>
  export default {
    name: "Detailsmating",
    data() {
      return {

      };
    },
    props: {
      objdate:{
        type:Array,
        default:()=>[]
      },
      value: {
        type: String,
        default: '标题'
      },
      width: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: ''
      },
      borderadius: {
        type: String,
        default: ''
      },
      bgcolor: {
        type: String,
        default: '#FFD925'
      },
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
    },
    mounted() {
      console.log(this.objdate)
    },
    components: {
    }
  };
</script>
<style lang="scss" scoped>
/*配套设施*/
.facility{
  text-align: left;

  .item{
    text-align: center;
    margin-top:.35rem;
    margin-bottom:.35rem;
    font-size: .3rem;
    display: inline-block;
    width: 25%;
    img{
      width: .8rem;
      display: block;
      margin: auto;
    }
  }
}
</style>