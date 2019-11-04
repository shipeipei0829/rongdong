<template>
  
      <div class="grade"  @click="handleRouterComment()">
        <div class="infos ">
            <span class="num">{{objdate.firmScore}}</span>
            <span class="xingwap">
              <Tagbtn class="gradenum"  :value="objdate.comments+'人评论'" />

                        <van-rate
                          :value="Number(objdate.firmScore)"
                          size=".3rem"
                          allow-half
                          color="#FFD925"
                          void-color="#eee"
                          void-icon="star"
                          bind:change="onChange"
                        />
            </span>
        </div>
        <div class="type">
          <span>服务 <i>{{objdate.serviceScore}}</i> </span>
          <span>位置 <i>{{objdate.locationScore}}</i> </span>
          <span>设施 <i>{{objdate.facilitieSscore}}</i> </span>
          <span>卫生 <i>{{objdate.healthScore}}</i> </span>
        </div>


      </div>

</template>

<script>
import Tagbtn from '@/components/tagbtn/index'
export default {
  name: "Detailsgrade",
  data() {
    return {
      values:4.9,
      hotelId:'',
      roomId:'',
    };
  },
  props:{
    objdate:{
      type: Object,
      default:()=>({

      })
    },
    value:'',
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
    onChange(event) {
      this.setData({
        value: event.detail
      });
    },
    handleRouterComment(){
      var t = this
        this.$router.push({path:'/comment/index',query:{hotelId:t.hotelId,roomId:t.roomId}})
    },  
  },
  mounted() {
      this.hotelId = this.objdate.hotelId == undefined ? '' : this.objdate.hotelId
      this.roomId = this.objdate.roomId == undefined ? '' : this.objdate.roomId
  },
  components:{
    Tagbtn,
  }
};
</script>

<style scoped>

.grade{
  padding: .4rem 0;
  text-align: left;
}
.grade .infos span{
  display: inline-block;
  vertical-align: middle
}
.grade .infos  {
  margin-bottom: .45rem;
  padding: 0 .9rem
}
.grade .infos  .num{
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.22rem;
  margin-right: .24rem;
}
.grade .infos .gradenum{
  margin-bottom: .19rem;
}
.grade .type {
  padding: 0 .15rem
}
.grade .type span{
  display: inline-block;
  width: 25%;
  text-align: center;
  font-size: .3rem
}
.grade .type span i{
  background: #F0F0F0;
}


</style>
