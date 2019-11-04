<template>
  <div class="ipregion">
    <Headers title="选择地址" />
    <div>
      <van-search
        v-model="checkValue"
        placeholder="请输入搜索关键词"
        @focus="showcheckcon()"
        show-action
        @search="onSearch"
        
        >
      <div slot="action" @click="onCancel">取消</div>
      </van-search>
    </div>
    <Ipregioncon :routerpath="topRouterPath"  v-show="!checkShow" />
    <Searchip :routerpath="topRouterPath" :filetercity="filetercity" v-show="checkShow" />
  </div>
</template>

<script>
import Headers from '@/components/header/index'
import Ipregioncon from '@/page/ipregioncon/index'
import Searchip from '@/page/searchip/index'
import City from '@/api/date/city'
import Circle from '@/api/date/circle'

export default {
  name: 'Ipregion',
  data(){
    return{
       checkShow:false,
       checkValue:'',
       hotcity:[],
       filetercity:[],
       topRouterPath:''
    }
  },
  methods:{
    init(){
      
    },
    handleIncident(type){
      var vm = this
      if(type == 'searchip'){
        this.checkShow = true
      }
    },

    onSearch(){

    },
    onCancel(){
      console.log(this.checkShow)
      this.checkValue = ''
      if(this.checkShow == false){
        this.$router.go(-1)
      }else{
        this.checkShow = false
      }
    },
    showcheckcon(){
      this.checkShow = true
      return false
    }
  },
  mounted(){
    this.init()
  },
  watch:{
    activeNames(val){
      console.log(val)
    },
    checkValue(val){
      if(val.length == 0){
        this.filetercity = []
      }else{
        var oneval = val.substr(0, 1)//输入的第一个内容
        var thisval = val
        var thisvalleng = val.length

        var pattern2 = new RegExp("[A-Za-z]+");//第一个内容是否英文
        var pattern = new RegExp("[\u4E00-\u9FA5]+");//第一个内容是否中文
        if(pattern2.test(oneval)){
            //console.log('该字符串是英文');
        }else if(pattern.test(oneval)){
          var checkcon = [...City,...Circle]

          var filetercity = checkcon.filter(x=>{
            return x.name.search(thisval) != -1
          })

          this.filetercity = filetercity
        }


      }


      console.log(filetercity)
    }
  },
  beforeRouteEnter(to,from,next){
    console.log(from)
    next(vm => {
      vm.topRouterPath = from.path
    })
  },
  components: {
    Headers,
    Ipregioncon,
    Searchip,
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
