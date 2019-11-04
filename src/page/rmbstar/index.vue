<template>
  <div class="rmbstar">
    <div class="tophead">
      <Headers title="星级/价格"  class="tophead" />
    </div>
    <div class="hotelrmb">
      <div class="title">
        酒店价格
        <div class="contitle">

          <Cslider v-on:rmbstartStep="startStep"  v-on:rmbendStep="endStep" />

        </div>
        
      </div>
      <div class="">
        <p class="rmbcon">自定义价格<span>￥{{startSteprmb}}</span> <span>-</span><span>￥{{endSteprmb}}</span></p>
        <div>
          <Tagbtn @click.native="handlermb(x,index)" v-for="(x,index) in arryrmb" :key="index" :value="'￥'+x.value" marginright=".22rem"  class="btntag" lineheight=".73rem" width="2.3rem" height=".73rem" fontsize=".36rem" border="1px solid #EEEEEE" :color="rmbactive == index ? '#008489':'#202020'" bgcolor="#EEEEEE" />
        </div>
      </div>

    </div>
    <div class="hoteltype">
      <p class="title">酒店类型</p>
        <div>
          <Tagbtn @click.native="handlehotel(x,index)" v-for="(x,index) in arryhotel" :key="index" :value="x.value" marginright=".22rem"  class="btntag" lineheight=".73rem" width="2.28rem" height=".73rem" fontsize=".36rem" border="1px solid #EEEEEE" :color="hotelactive == index ? '#008489':'#202020'" bgcolor="#EEEEEE" />
        </div>
    </div>
    <Btton @click.native="handlesubmit" class="btnncon" width="100%" height="1.48rem" value="确定" bgcolor="#008489" fontcolor="#fff" fontsize=".5rem"
            radius=".1rem" />
  </div>
</template>

<script>
import Btton from '@/components/button/index'
import Headers from '@/components/header/index'
import Tagbtn from '@/components/tagbtn/index'
import Cslider from '@/components/slider/index'
import {getArrIndex} from '@/api/date/init'//共用函数方法文件  getTimeLength(sd+' '+st+':00',ed+' '+et+':00')

export default {
  name: 'rmbstar',
  data(){
    return{
      startSteprmb:'0',//自定义价格 开始时间
      endSteprmb:'30000',//自定义价格 结束时间
      rmbactive:-1,//选择当前价格
      rmbactiveval:'',
      arryrmb:this.$store.state.home.arryrmb,
      hotelactive:-1,//选择当前类型
      hotelactiveval:'',
      arryhotel:this.$store.state.home.arryhotel,
      topRouterPath:'',//上一页路由路径
      rmb:'',
      filterDate:{}

    }
  },
  methods:{
    //dateSection('2017-8-23 12:05:05', '2017-8-25 12:05:05')
    dateSection(s1, s2) {
        s1 = new Date(s1.replace(/-/g, '/'));
        s2 = new Date(s2.replace(/-/g, '/'));
        var ms = Math.abs(s1.getTime() - s2.getTime());
        return ms / 1000 / 60 / 60;
    },
    startStep(data){
      this.startSteprmb = data.value
    },
    endStep(data){
      this.endSteprmb = data.value
    },
    dateinfo(){
      if(this.rmbactive == -1){

      }
    },
    handlermb(x,index){
      if(this.rmbactive == index){
        this.rmbactive = -1
        this.rmbactiveval = -1
      }else{
        this.rmbactiveval = x.type
        this.rmbactive = index
      }
    },
    handlehotel(x,index){
      if(this.hotelactive == index){
        this.hotelactive = -1
        this.hotelactiveval = '-1'
      }else{
        this.hotelactive = index
        this.hotelactiveval = x.type
      }
    },
    handlesubmit(){
      var obj = {}
      //酒店价格
      if(this.rmbactive == -1){
        obj.rmb = this.startSteprmb+'-'+this.endSteprmb
      }else{
        obj.rmb = this.arryrmb[this.rmbactive].value
      }
      //酒店类型

      if(this.hotelactive == -1){
        obj.hoteltype = '-1'
      }else{
        obj.hoteltype = {hoteltype:this.arryhotel[this.hotelactive].value,value:this.arryhotel[this.hotelactive].type}
        
      }

      console.log(obj)
      let rmbs = obj.rmb
      let strendrmb = rmbs.split('-')
      let strrmbs = strendrmb[0] //开始
      let endrmbs = strendrmb[1] //结束
      console.log(strendrmb)
      if(strrmbs == '0' && endrmbs == '30000'){
          this.filterDate.rmb.startrmb = '-1'
          this.filterDate.rmb.endrmb = '-1'
          this.filterDate.rmb.value = '-1'
      }else{
        if(endrmbs == '以下'){
          this.filterDate.rmb.startrmb = '-1'
          this.filterDate.rmb.endrmb = strrmbs
          this.filterDate.rmb.value = this.rmbactiveval
        }else if(endrmbs == '无限' || endrmbs == '以上'){
          this.filterDate.rmb.startrmb = strrmbs
          this.filterDate.rmb.endrmb = '-1'
          this.filterDate.rmb.value = this.rmbactiveval
        }else{
          this.filterDate.rmb.startrmb = strrmbs
          this.filterDate.rmb.endrmb = endrmbs
          this.filterDate.rmb.value = this.rmbactiveval
        }
      }
      
      if(obj.hoteltype == '-1'){
        this.filterDate.start.name = ''
        this.filterDate.start.value = '-1'
      }else{
        this.filterDate.start.name = obj.hoteltype.hoteltype
        this.filterDate.start.value = obj.hoteltype.value
      }
      console.log(this.filterDate)

      sessionStorage.setItem('filterDate',JSON.stringify(this.filterDate))
      if(this.topRouterPath != ''){
        this.$router.push({path:this.topRouterPath})
      }else{
        this.$router.go(-1)
      }
      
    },
    getsrcurl(icon){
      return require("@/img/"+icon+"");
    },
    setdateinfo(data){
      console.log(data)
      //酒店类型默然加载
      if(data.start.value != -1){
        if(this.arryhotel.length > 0 ){
          var idx = this.arryhotel.filter(function(x){
            return x.type == data.start.value
          })
          if(idx.length > 0){
            this.hotelactive = getArrIndex(this.arryhotel,idx[0]) 
          }
        }
      }else{
        this.hotelactive = -1
      }



      if(data.rmb.value != -1){
        if(this.arryrmb.length > 0 ){
          var idxx = this.arryrmb.filter(function(x){
            return x.type == data.rmb.value
          })
          if(idxx.length > 0){
            this.rmbactive = getArrIndex(this.arryrmb,idxx[0]) 
          }
        }
      }else{
        this.rmbactive = -1
      }
      this.rmbactiveval = data.rmb.value

    }
  },
  mounted(){
    //console.log( this.dateSection('2017-8-23 12:05:05', '2017-8-25 12:05:05') )
    this.rmb = this.$store.state.home.rmb
    var filterDate = sessionStorage.getItem('filterDate')
    if(filterDate != null){
      this.filterDate = JSON.parse(filterDate)
      this.setdateinfo(this.filterDate)
    }
  },
  created(){

  },
  beforeRouteEnter (to, from, next) {
    next(vm => {// 通过 `vm` 访问组件实例
      vm.topRouterPath = from.path
    })
  },
  watch:{
    
  },
  components: {
    Headers,
    Tagbtn,
    Cslider,
    Btton
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
  .rmbstar{
    .btnncon{
      position: fixed;
      bottom: 0px;
      left: 0px;
    }
    height: 100vh;
    .hotelrmb,.hoteltype{
      background: #fff;
      padding: .48rem 0 .48rem .48rem;
      text-align: left;
      .btntag{
        margin-top: .2rem;
      }
      .title{
        font-size: .42rem;
        color: #252525;
        font-weight: bold;
        .contitle{
          padding-right: .48rem;
        }
      }
      .rmbcon{
        font-size: .36rem;
        color: #202020;
        font-weight: bold;
        margin-bottom: .3rem;
        margin-top: .2rem;
        span{
          color:#FFD925;
        }
      }
    }
    
    .hoteltype{
      margin-top: .55rem;
    }
  }
</style>
