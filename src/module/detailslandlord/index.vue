<template>
  
<div class="landlord">
        <div class="clearfix">
              <div class="fl head">
                  <div class="headimg"><img src="./../../img/headimg.jpg" alt=""></div>
                  <div class="name">
                    <div class="namecon">张三</div>
                    <div class="nameinfo">实名认证</div>
                  </div>
              </div>

              <div class="fl infotext">
                <h3>房主描述</h3>
                <span>民宿主是个上海85后新悦青年建筑设计师 上海日清建筑设计主创设计师</span>
                <p>1、主导设计过多个城市地标级建筑，多次获奖 （他很谦虚，所以这些都是我们偷偷加上来的 哦，嘻嘻！）。厦大建筑学五年的大学生涯让施聪恋上了厦门这座城</p>
              </div>

        </div>
      </div>
</template>

<script>
import Tagbtn from '@/components/tagbtn/index'
export default {
  name: "Detailslandlord",
  data() {
    return {
      values:4.9
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
    },
         onChange(event) {
      this.setData({
        value: event.detail
      });
    },
  },
  mounted() {
    
  },
  created() {

  },
  components:{
    Tagbtn,
  }
};
</script>

<style scoped>
/*房主描述*/
.landlord{
  padding: .48rem;
}
.landlord .infotext h3{
  font-size: .42rem;
  line-height: .42rem;
  margin-bottom: .3rem
}
.landlord .infotext span{
  font-size: .33rem;
  line-height: .48rem;
  margin-bottom: .3rem
}
.landlord .infotext p{
  font-size: .33rem;
  line-height: .48rem;
  margin-bottom: .3rem
}
.landlord .infotext{
  width: 7rem;
  text-align: left;
  color: #595858;
}
.landlord .head{
  margin-right: .43rem;
}
.landlord .headimg{
  width: 1.92rem;
  height: 1.92rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}
.landlord .headimg img{
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 0px;
  margin: auto;
  width: 100%;
}
.landlord .name{
  text-align: center;
}
.landlord .namecon{
  font-size: .36rem;
  color: #434242;
  margin-top: .42rem;
  line-height: .37rem;
}
.landlord .nameinfo{
  font-size: .33rem;
  color: #595858;
  margin-top: .2rem;
    line-height: .34rem;
}

























</style>
