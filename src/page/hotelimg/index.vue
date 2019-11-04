<template>
  <div class="hotelimg">
    <Headers title="酒店图片"/>

    <van-tabs v-model="active" v-on:change="handleTabs" > 
      <van-tab v-for="index in imgArry" :title="''+index" :key="index">
        <!--内容 {{ index }}-->
      </van-tab>
    </van-tabs>
    <div class="hotelimgcon" >
      <div class="imgconwap">
        <Headertitle  class="headtit" value="外观(9)" padtop=".4rem" padleft="0" />
        <div class="conimg">
          <span class="imgconn" @click="handlePreview(0)">
            <img src="./../../img/hot1.jpg" alt="">
          </span>

          <span class="imgconn" @click="handlePreview(1)">
            <img src="./../../img/hot2.jpg" alt="">
          </span>

          <span class="imgconn" @click="handlePreview(2)">
            <img src="./../../img/hot3.jpg" alt="">
          </span>


          <span class="imgconn" @click="handlePreview(1)">
            <img src="./../../img/hot2.jpg" alt="">
          </span>

        </div>
      </div>



      <div class="imgconwap">
        <Headertitle  class="headtit" value="大堂(9)" padtop=".4rem" padleft="0" />
        <div class="conimg">
          <span class="imgconn" @click="handlePreview(0)">
            <img src="./../../img/hot1.jpg" alt="">
          </span>

          <span class="imgconn" @click="handlePreview(1)">
            <img src="./../../img/hot2.jpg" alt="">
          </span>

          <span class="imgconn" @click="handlePreview(2)">
            <img src="./../../img/hot3.jpg" alt="">
          </span>

          <span class="imgconn" @click="handlePreview(1)">
            <img src="./../../img/hot2.jpg" alt="">
          </span>

        </div>
      </div>

      <div class="imgconwap">
        <Headertitle class="headtit" value="房间(9)" padtop=".4rem" padleft="0" />
        <div class="conimg">
          <span class="imgconn" @click="handlePreview(0)">
            <img src="./../../img/hot1.jpg" alt="">
          </span>

          <span class="imgconn" @click="handlePreview(1)">
            <img src="./../../img/hot2.jpg" alt="">
          </span>

          <span class="imgconn" @click="handlePreview(2)">
            <img src="./../../img/hot3.jpg" alt="">
          </span>

          <span class="imgconn" @click="handlePreview(1)">
            <img src="./../../img/hot2.jpg" alt="">
          </span>

        </div>
      </div>
      <div class="imgconwap">
        <Headertitle class="headtit" value="公共区域(9)" padtop=".4rem" padleft="0" />
        <div class="conimg">
          <span class="imgconn" @click="handlePreview(0)">
            <img src="./../../img/hot1.jpg" alt="">
          </span>

          <span class="imgconn" @click="handlePreview(1)">
            <img src="./../../img/hot2.jpg" alt="">
          </span>

          <span class="imgconn" @click="handlePreview(2)">
            <img src="./../../img/hot3.jpg" alt="">
          </span>

          <span class="imgconn" @click="handlePreview(1)">
            <img src="./../../img/hot2.jpg" alt="">
          </span>

        </div>
      </div>


    </div>
  </div>
</template>

<script>
import Headers from '@/components/header/index'
import Headertitle from '@/components/headertitle/index'

import { ImagePreview } from 'vant';
Vue.use(ImagePreview);
// options 为可选参数，无则不传
import '@/../public/cdn/common.js'
export default {
  name: 'Hotelimg',
  data(){
    return{
      active:0,
      show:false,
      imgArry:['外观','大堂','房间','公共区域','细节']
    }
  },
  props: {
    msg:{

    }
  },
  beforeRouteLeave (to, from, next) {    // 导航离开该组件的对应路由时调用
    var _this = this
    if(_this.show == false){
      next()
    }else{
      next(false)
      _this.show = false
      _this.eventinImagePreview.close() 
    }
  },
  methods:{
    handleTabs(name,title){
      console.log(name)
      console.log(title)
    },
    handlePreview(index){

      var indexs = index
      var imgsrc = []
      var _this = this
      _this.show = true
      
      imgsrc.push( _this.getsrcurl('hot1.jpg') )
      imgsrc.push( _this.getsrcurl('hot2.jpg') )
      imgsrc.push( _this.getsrcurl('hot3.jpg') )
      imgsrc.push( _this.getsrcurl('hot2.jpg') )

      _this.eventinImagePreview = ImagePreview({
        images: imgsrc,
        startPosition: indexs,
        onClose() {
          _this.show = false
        }
      });
    },
    getsrcurl(icon){
      return require("@/img/"+icon+"");
    },

  },
  mounted(){
    
  },
  components: {
    Headers,
    Headertitle
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hotelimg {
  background: #fff;
}
.hotelimgcon{
  padding: 0 0 0 .5rem;
  text-align: left;
}
.imgconwap .imgconn{
  display: inline-block;
  width: 2.88rem;
  height: 1.8rem;
  position: relative;
  border-radius: .2rem;
  overflow: hidden;
  margin-right: .55rem;
  margin-top: .32rem;
}
.imgconwap .imgconn img{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

}
</style>
