<template>
  <span class="lovecon fl" @click="handleRouter()">
    <span class="imgcon" style="width:4.80rem;height:3.12rem;">
      <img :src="getsrcurl('hot2.jpg')" style="width:4.80rem;height:3.12rem;" alt="">
      <span class="xingwap">
        <Xing :value="dateobj.starLevel" :allvalue="dateobj.starLevel" />
      </span>
    </span>
    <span class="btnicon">
      <Tagbtn value="免费早饭" />
      <Tagbtn value="接送机" />
    </span>
    <span class="title">{{dateobj.hotelName}}</span>
    <span class="rmb">
      低至<i class="red">￥{{dateobj.price}}</i>起
      <u class="fr">
        <van-icon name="comment-o" style="vertical-align: sub;font-size:.35rem" /> {{dateobj.commentNum ? dateobj.commentNum : 0}}</u>
    </span>
  </span>
</template>

<script>
  import Xing from '@/components/xing/index'
  import Tagbtn from '@/components/tagbtn/index'
  import {arryMinNum} from '@/api/date/init'//共用函数方法文件

  export default {
    name: "Listlike",
    data() {
      return {
        rmb:'',
      };
    },
    props: {
      dateobj: {
        type: Object,
        default:()=>({})
      },
      
    },
    methods: {
      getsrcurl(icon) {
        return require("@/img/" + icon);
      },
      init(date){
      //数组 拿出最小值
        this.rmb = arryMinNum(date.arraynewroom)
      },
      handleRouter(){
        var  data = this.dateobj
        this.$router.push({ path:'/details/index',query:{hotelId:data.hotelId,lat:data.lat,lng:data.lng}})//,
      }
    },
    mounted() {
      console.log(this.dateobj)
    },
    created() {

    },
    components: {
      Xing,
      Tagbtn
    }
  };
</script>
<style scoped>
  .imgcon img[data-v-545010d2] {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .xingwap {
    font-size: .19rem;
    position: absolute;
    left: .19rem;
    bottom: .15rem;
  }

  .lovecon {
    width: 4.98rem;
    height: 5.47rem;
    padding: .1rem .09rem 0 .09rem;
    background: #fff;
    box-shadow: 0px 4px 23px 1px rgba(97, 199, 203, 0.14);
    margin-bottom: .2rem;
    border-radius: .2rem;
  }

  .lovecon>span {
    display: block;
    text-align: left;
    overflow: hidden;
  }

  .lovecon .imgcon {
    margin-bottom: .15rem;
    border-radius: .2rem;
    overflow: hidden;
    position: relative;
  }

  .lovecon .title {
    color: #242424;
    font-size: .4rem;
    font-weight: bold;
    line-height: .6rem;
    margin-top: .2rem;
    margin-bottom: .19rem;
    display: -webkit-box;
    display:box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  .lovecon .rmb {
    font-size: .3rem;
    line-height: .48rem;
  }

  .lovecon .rmb .red {
    font-size: .48rem;
    color: #E72D2D;
    font-weight: bold;
  }
</style>