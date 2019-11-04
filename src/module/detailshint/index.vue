<template>
  
      <div class="hintcon">
        <Headertitle style="background:#fff;" value="特别提示" padtop=".28rem" padbtm=".28rem"/>
        <p class="con">住宿提供房要求该价格仅适用持大陆身份证的客人</p>
        <Headertitle style="background:#fff;" value="取消订单说明" padtop=".28rem" padbtm=".28rem"/>
        <p class="con">该订单确认后不可取消，若为入住将收取您首日房费RMB1288</p>
        <Headertitle style="background:#fff;" value="提前退房说明" padtop=".28rem" padbtm=".28rem"/>
        <p class="con">该订单确认后不可取消，若为入住将收取您首日房费RMB1288</p>
        <Headertitle style="background:#fff;" value="房间支持入住方案" padtop=".28rem" padbtm=".28rem"/>
        <p class="con scheme"> 
          <span>
              <img src="./../../img/time2.png" alt="">
              小时房
          </span>
          
          <span >
            <img src="./../../img/time.png" alt="">
            时段房
          </span>
          
          <span>
            <img src="./../../img/alldey.png" alt="">
            全天房
          </span>
        </p>
      </div>

</template>

<script>
import Headertitle from '@/components/headertitle/index'
export default {
  name: "Detailshint",
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
  components:{
Headertitle,
  }
};
</script>
<style scoped>


/* 特别提示 */
.hintcon{
  padding-bottom: .4rem;
}
.hintcon .con{
  text-align: left;
  padding-left: .73rem;
  font-size: .36rem;
  line-height: .36rem;
}
.hintcon p{
  color:#343434;
}
.hintcon .scheme img{
  width: .5rem;
  margin-right: .13rem;
}
.hintcon .scheme span{
  margin-right: 1.25rem
}
.hintcon .scheme{
  color: #FF9623;
  font-size: .3rem;
  vertical-align: middle
}

</style>
