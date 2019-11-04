<template>
  <div class="roomiconwap">
    <div class="roomicon">

        <div class="item">
          <img src="./../../img/facility/35m.png" alt="">
          <i>{{objdate.roomAreaEnd}}m²</i> 
        </div>
        <div class="item">
          <img src="./../../img/facility/louceng.png" alt="">
          <i>{{objdate.floorNum}}层</i> 
        </div>
        <div class="item">
          <img src="./../../img/facility/youchuang.png" alt="">
          <i>{{objdate.isWindow == 1 ? '有窗' : '无窗'}}</i> 
          
        </div>

        <div class="item" style="display:none">
          <img src="./../../img/facility/youxiangwangluokuandai.png" alt="">
          <i>有线宽带</i> 
          
        </div>
        <div class="item" style="display:none">
          <img src="./../../img/facility/jinyan.png" alt="">
          <i>禁烟</i> 
          
        </div>
        <div class="item">
          <img src="./../../img/facility/2ren.png" alt="">
          <i>{{objdate.maxPeople}}人</i> 
          
        </div>
        <div class="item">
          <img src="./../../img/facility/yizhangtedachuang.png" alt="">
          <i>{{setbedNumber(objdate.bedNumber,objdate.bedModel)   }}</i> 
          
        </div>
        <div class="item" style="display:none;">
          <img src="./../../img/facility/wucanshi.png" alt="">
          <i>无餐食</i> 
          
        </div>


        
        
    </div>
  </div>
</template>

<script>
  export default {
    name: "Detailsroomicon",
    data() {
      return {

      };
    },
    props: {
      objdate:{
        type:Object,
        default:()=>{

        }
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
      },
      setbedNumber(num,type){
        let nums = num 
        let typet = ''
        if(type == 1){
          typet = '大床'
        }else if(type == 2){
          typet = '双人床'
        }else if(type == 3){
          typet = '单人床'
        }
        return nums + '张' + typet
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
.roomicon{
  text-align: left;

  .item{
    text-align: left;
    margin-top:.35rem;
    margin-bottom:.35rem;
    font-size: .3rem;
    padding-left: .8rem;
    width: 33%;
    display: inline-block;
    img{
      width: .55rem;
      vertical-align: text-top;
    }
    i{
     vertical-align: text-top;
    }
  }
}
</style>