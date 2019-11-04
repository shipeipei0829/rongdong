<template>
  <div class="searchip">
    <div class="searchwap">
      <!--<van-search
        v-model="checkValue"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
        >
      <div slot="action" @click="onSearch">搜索</div>
      </van-search>-->
    </div>
    <div class="searchipcon">
      <ul>
        <li v-for="(x,index) in filetercity"  @click="handleoption(x)"  :key="index"> <van-icon name="location" class="icon" /> <i class="text">{{x.name}}</i> <span> {{righttext(x)}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
// options 为可选参数，无则不传
import '@/../public/cdn/common.js'
import { Dialog } from 'vant';
export default {
  name: 'Searchip',
  data(){
    return{
      checkValue:'',
      filterDate:{}
    }
  },
  props: {
    filetercity:{
      type:Array,
      default:[]
    },
    routerpath:{
      type:String,
      default:''
    }
  },
  //beforeRouteLeave (to, from, next) {    // 导航离开该组件的对应路由时调用
    
  //},
  methods:{
    righttext(data){
      if(data.level == 4){
        return '商圈'
      }else if(data.level == 3){
        return '行政区'
      }else if(data.level == 2){
        return '市'
      }else if(data.level == 1){
        return '省'
      }
    },
    getsrcurl(icon){
      return require("@/img/"+icon+"");
    },
    handleoption(data){
      console.log(data)
      var vm = this


      if(data.level == 4){
        var id = data.city_id
        
      }else if(data.level == 3){
        var id = data.pid
        
      }else if(data.level == 2){
        var id = data.id
       
      }else if(data.level == 1){
        //省
        Dialog({ message: '请最低选择至市' });
        return false
      }
      var filterDate = sessionStorage.getItem('filterDate')

      if(filterDate != null){
        this.filterDate = JSON.parse( filterDate )
        this.filterDate.ipcon.name = data.name
        this.filterDate.ipcon.lat = data.lat
        this.filterDate.ipcon.lng = data.lng
        this.filterDate.ipcon.cityid = id
        
        sessionStorage.setItem('filterDate',JSON.stringify(vm.filterDate))
        this.$router.push({path:vm.routerpath})
      }else{
        this.$router.push({path:vm.routerpath})
      } 
    },
  },
  mounted(){
    console.log( this.filetercity )
  },
  watch:{
    checkValue(newVal){
      console.log(newVal)
    },
    
  },
  components: {

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .searchip{
    background: #fff;
    .searchwap{
      border-bottom: 1px solid #EEEEEE;
    }
    .searchipcon{
      li{
        text-align: left;
        padding-left: .49rem;
        border-bottom: 1px solid #EEEEEE;
        padding-top: .7rem;
        padding-bottom: .7rem;
        position: relative;
        span{
          vertical-align: middle;
          position: absolute;
          right: .25rem;
        }
        i{
          vertical-align: middle;
        }
        .icon{
          font-size: .3rem;
          color: #fff;
          background: #FE7066;
          width: .47rem;
          height: .47rem;
          text-align: center;
          line-height: .47rem;
          border-radius: 50%;
          overflow: hidden;
          margin-right: .2rem;
        }
        .text{
          font-size: .42rem;
          max-width: 8.2rem;
          display: inline-block;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
</style>
