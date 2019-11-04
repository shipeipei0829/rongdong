<template>
  
  <div class="hotelname" style="padding-top:.50rem;padding-left:.33rem;">
    <div class="title clearfix">
      <span class="fl">{{objdate.hotelName !='' ? objdate.hotelName : '酒店名称'}}</span>
      <span @click="handleRouter('detailstwo')" class="fr info"> <i>酒店详情/设施</i>  <van-icon name="arrow" /></span>
    </div>
    <div class="clearfix xingwap">
      <Xing class="fl"  :allvalue="objdate.starLevel" :value="objdate.starLevel" />
    </div>
    <div class="text">
      
    </div>
    <div class="btnwap">
      <Tagbtn v-for="(x,index) in tagArry" :key="index" :value="x" />
    </div>
    <div class="homestay"  v-if="type == 2">
      <span class="ico"><van-icon name="coupon" />整套出租</span>
      <span class="ico"><van-icon name="manager" />4位房客</span>

      <span class="ico"><van-icon name="award" />2间卧室</span>

      <div class="bed">
        <div class="bedcon">
              <span class="ico"><van-icon name="friends" />2张床</span>
              <span class="ico info">
                <u>卧室1</u>
                <van-icon name="manager" />
                <u>双人床</u>
                <u>1.5M*2.0M</u>
              </span>
              <span class="ico info">
                <u>卧室2</u>
                <van-icon name="manager" />
                <u>双人床</u>
                <u>1.5M*2.0M</u>
              </span>
              <span class="ico info">
                <u>卧室3</u>
                <van-icon name="manager" />
                <u>双人床</u>
                <u>1.5M*2.0M</u>
              </span>
        </div>


      </div>
    </div>
  </div>


</template>

<script>
import Xing from  '@/components/xing/index'
import Tagbtn from '@/components/tagbtn/index'
export default {
  name: "Detailstitle",
  data() {
    return {
      tagArry:[],
      id:''
    };
  },
  props:{
    type:{},
    objdate:{
      type: Object,
      default:()=>({

      })
    },
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
    },
    handleRouter(type){
      var t = this
      if(type == 'detailstwo'){
        this.$router.push({path:'/detailstwo/index',query:{hotelId:t.id}})
      }
    },
    init(data){
      console.log(data)
      var tag = data.dictName
      this.id = data.hotelId
      
      if(tag){
        var tagar = tag.split(',')
        if(tagar.length > 5){
          this.tagArry.push(tagar[0])
          this.tagArry.push(tagar[1])
          this.tagArry.push(tagar[2])
          this.tagArry.push(tagar[3])
          this.tagArry.push(tagar[4])
        }else{
          this.tagArry = tagar
        }
      }
    }
  },
  mounted() {

    this.init(this.objdate)
  },
  created() {

  },
  components:{
    Xing,
    Tagbtn,
  }
};
</script>
<style scoped>
.hotelname{
  padding-bottom: .24rem;
}
.hotelname .homestay{
  margin-top: .5rem;
}
.hotelname .homestay .ico{
  width: 33%;
  text-align: left;
  font-size: .3rem;
  vertical-align: middle;
margin-bottom: .2rem;
}
.hotelname .homestay .bed{

  overflow-x: auto
}
.hotelname .homestay .bedcon{
      white-space: nowrap;
}
.hotelname .bedcon .ico{
  width: 29%
}
.hotelname .homestay .bed .info i{
  margin: .1rem 0;
}
.hotelname .homestay .bed .info{
  width: 2.17rem;
  height: 2.64rem;
  display: inline-block;
  text-align: center;
  border:1px solid #F4F4F4;
  border-radius: .2rem;
  margin-top: .26rem;
  margin-right: 1rem;
  padding-top: .1rem
}
.hotelname .homestay .bed .info u{
  display: block;
}
.hotelname .homestay .bed span{
  vertical-align: top;
}
.hotelname .homestay .ico i{
  font-size: .7rem;
  vertical-align: middle;
  margin-right: .15rem;
}





.hotelname{
  background: #fff;
  text-align: left;
}

.hotelname .title{
  font-size: .5rem;
  line-height: .5rem;
  color: #1B1B1B;
  font-weight: bold
}
.hotelname .xingwap{
  margin: .07rem 0 .15rem 0;
}
.hotelname .title .info{
  font-size:.3rem;
  color: #444444;
  font-weight: normal;
  padding-right: .5rem;
}
.hotelname .title .info i{
  vertical-align: middle;
}
.hotelname .text{
  font-size: .36rem;
  line-height: .36rem;
  margin-bottom: .2rem;
  color: #717171
}
</style>