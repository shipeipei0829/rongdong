<template>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      
</template>

<script>
export default {
  name: "Swipes",
  data() {
    return {
      images: [
        this.getsrcurl('conjiudian.jpg'),
        this.getsrcurl('hot3.jpg')
      ]
    };
  },
  props:{
    objdate:{},
  },
  methods: {
    getsrcurl(icon){
      return require("@/img/"+icon);
    },
    imgarrylist(data){
      console.log(data)
      return false
      var arry = []
      for(let x in data.imgarry){
        //console.log(data.imgarry[x])
        console.log( this.getsrcurl(data.imgarry[x]) )
        arry.push( this.getsrcurl(data.imgarry[x]) )
      }
      console.log(arry)
      this.images = arry
    }
  },
  mounted() {
    //this.imgarrylist(this.objdate)
    var itemid = localStorage.getItem('hotelId')
    var list = JSON.parse( localStorage.getItem('roomrecom') ) 
    var item = list.filter((x)=>{return x.hotelId == itemid})
    this.detailsDate = item[0]
    console.log( this.detailsDate )
    
    this.imgarrylist(this.detailsDate)
    
  },
  created() {

  },
};
</script>
<style scoped>
.van-swipe{
  height: 100%;
}

.van-swipe-item{
  position: relative;

}
.van-swipe-item img{
  position: absolute;
  transform: translate(-50%,-50%);
  left: 50%;
  top: 50%;
  width: 100%;

}
</style>
