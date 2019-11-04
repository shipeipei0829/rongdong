<template>
  <div class="mapdetails">
    <div class="headwap">
      <Headers title="位置"/>
    </div>
    <div  class="mapcon">
          <iframe ref="mapcon" style="width:100%;height:100%;" :src="'https://m.amap.com/navi/?start='+start+'&dest='+dest+'&destName='+destName+'&naviBy='+naviBy+'&key='+keys+''" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>



// options 为可选参数，无则不传
import '@/../public/cdn/common.js'
import Headers from '@/components/header/index.vue'
export default {
  name: 'Mapdetails',
  data(){
    return{
      active:0,
      show:false
     
    }
  },
  props: {
    srcUrl:{
      type:String,
      default:'c936d34e6bf01501380b475bb9a3caee'
    },
    start:{
      type:String,
      default:'116.403124,39.940693'
    },
    dest:{
      type:String,
      default:'116.481488,39.990464'  
    },
    destName:{
      type:String,
      default:'阜通西'   
    },
    naviBy:{
      type:String,
      default:'car'  //取值为car/bus/walk，分别对应“驾车/公交/步行”三种方式
    },
    keys:{
      type:String,
      default:'c936d34e6bf01501380b475bb9a3caee'
    }
  },
  methods:{
    getsrcurl(icon){
      return require("@/img/"+icon+"");
    },
    setmap(){
      
    }
  },
  mounted(){
    this.setmap()
  },
  components: {
    Headers,
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
.mapdetails{
  height: 100vh;

}
.mapdetails{
  .mapcon{
    height: calc(100vh - 50px) ;
  }
}

</style>
