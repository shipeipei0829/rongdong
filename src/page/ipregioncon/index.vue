<template>
  <div class="ipregion">

    <div class="ipregionCon">
        <div class="thisip">
          <p class="icon"> <van-icon class="iconcon" name="aim" /> <i>当前定位城市</i> </p>
          <Tagbtn @click.native="handlelocal()" :value="localcon.address == undefined?'未定位':localcon.address" class="btns" marginright=".4rem" color="#252525" bgcolor="#EEEEEE" border="1px solid #EEEEEE" lineheight=".72rem" width="1.67rem" height=".72rem" />
        </div>
        <div class="hotip">
          <Headertitle style="background:#F0F0F0;" value="热门城市" padtop=".18rem" padbtm=".18rem"/>
          <div class="hotcon">
              <Tagbtn v-for="(x,index) in hotcity" :key="index" @click.native="handleoption(x)" :value="x.name" fontsize=".36rem" class="btns" marginright=".22rem" color="#252525" bgcolor="#EEEEEE" border="1px solid #EEEEEE" lineheight=".72rem" width="2.28rem" height=".72rem" />
             
          </div>
        </div>
        <div class="ipcon">
          <div class="cont">
            <van-index-bar>

              <van-index-anchor class="indextitle" index="B" />
              <van-cell v-for="(x,index) in hotcity" :key="index" @click="handleoption(x)" :title="x.name" />

              
              
            </van-index-bar>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Headertitle from '@/components/headertitle/index'
import Tagbtn from '@/components/tagbtn/index'
import {hotCityList} from '@/api/home/index'
import {locaipcon} from '@/api/date/init'//共用函数方法文件
export default {
  name: 'Ipregioncon',
  data(){
    return{
       checkValue:'',
       topRouterPath:'',
       localcon:{},
       hotcity:[],
       filterDate:{},
    }
  },
  props: {
    routerpath:{
      type:String,
      default:''
    },
    
  },
  methods:{
    init(){
      var t = this
      hotCityList().then(res => {
        console.log(res)
        this.hotcity = res.data
      }).catch(() => {

      });

      locaipcon(function(data){
        t.localcon = data
        console.log(data)
      })
    },
    handleIncident(type){
      var vm = this
      if(type == 'searchip'){
        
      }
    },
    handlelocal(){
      var t = this
        this.filterDate.ipcon.name = t.localcon.address
        this.filterDate.ipcon.lat = t.localcon.y
        this.filterDate.ipcon.lng = t.localcon.x
        this.filterDate.ipcon.cityid = '2'
        sessionStorage.setItem('filterDate',JSON.stringify(t.filterDate))
        this.$router.push({path:t.routerpath})
    },
    handleoption(type){
      var vm = this
      
      var data = type
      var filterDate = sessionStorage.getItem('filterDate')
      if(filterDate != null){
        this.filterDate = JSON.parse( filterDate )
        this.filterDate.ipcon.name = data.name
        this.filterDate.ipcon.lat = data.lat
        this.filterDate.ipcon.lng = data.lng
        this.filterDate.ipcon.cityid = data.cityId

        sessionStorage.setItem('filterDate',JSON.stringify(vm.filterDate))
        this.$router.push({path:vm.routerpath})
      }else{
        this.$router.push({path:vm.routerpath})
      } 

    },
    onSearch(){

    },
    onCancel(){

    }
  },
  mounted(){
    this.init()
    console.log(this.hotcity )
    this.filterDate = JSON.parse( sessionStorage.getItem('filterDate') ) 
  },
  created(){

  },
  watch:{
    activeNames(val){
      console.log(val)
    }
  },

  components: {
    Headertitle,
    Tagbtn,
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
  .ipregionCon{
    background: #fff;
    .ipcon{
      text-align: left;
      .indextitle{
        background: #eee;
        padding-top: .18rem;
        padding-bottom: .18rem;
        
        /deep/ .van-index-anchor{
          font-size: .42rem;
          padding-left: .34rem;
        }
      }
      /deep/ .van-cell{
        padding-left: .44rem;
        padding-top: .38rem;
        padding-bottom: .38rem;
        .van-cell__title{
          span{
            font-size: .36rem;
          }
        }
      }
      /deep/ .van-index-bar__index{
        font-size: .3rem;
        line-height: .4rem;
      }
    }
    .thisip{
      text-align: left;
      padding-left: .48rem;
      padding-bottom: .3rem;
      .icon{
        .iconcon{
          color: #008489;
          font-size: .37rem;
          margin-right: .02rem;
        }
        i{vertical-align: middle;}
      }
      .btns{
        padding-left: .5rem;
        margin-top: .25rem;
      }
    }
    .hotip{
      .hotcon{
        text-align: left;
        padding-left: .46rem;
        .btns{
          margin-top: .25rem;
          margin-bottom: .25rem;
        }
      }
    }

  }
</style>
