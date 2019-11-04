<template>
  <div class="collect" style="background:#F0F0F0;height:100vh;">
    <!-- header -->
    <Headertop :title="title" :fixed="fixed" style="z-index:10" />
    <!-- 收藏列表 -->
      <div class="list-content" id="list-content">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                @load="onLoad"
                :offset="20"
            >
                <div class="list-item">
                    <Collectitem   v-for="(x,index) in listDateMore" :dateobj="x" :key="index" class="itemwaps"  />
                </div>
                <div v-if="notdata" class="notdata">
                  暂无数据
                </div>
            </van-list>
        </van-pull-refresh>
      </div>
    
  </div>
</template>

<script>
import Headertop from "@/components/header/index";
import Collectitem from "@/components/collectitem/index";
import {loadcollectlist} from '@/api/home/listhotel'//交互

export default {
  name: "Collect",
  data() {
    return {
      title: "我的收藏",
      fixed: false,
      currentPage:1,
      listDateMore:[],
      currentPage:1,
       notdata:false,//是否显示暂无数据
      thispage:true,//是否首次加载  true 为第一次加载 false 为翻页
      loading: false,   //是否处于加载状态    下拉加载 是否显示   
      finished: false,  //是否已加载完所有数据 为true 时无法下拉架子啊
      isLoading: false,   //是否处于下拉刷新状态
      filterDate:[],
      lat:"",
      lng:"",
      col1: {
        ismark: false,
        isstar: true
      },
      col2: {
        ismark: false,
        isstar: false
      },
      col3: {
        ismark: true,
        isstar: false
      },
      col4: {
        ismark: true,
        isstar: true
      }
    };
  },
  props: {},
  methods: {
     onRefresh() {       //下拉刷新
        console.log('下拉刷新')
        //setTimeout(() => {
            this.finished = true;
            this.isLoading = false;
            this.listdate = []
            this.thispage == false
            this.filterInfo.currentPage = 1
            this.thispage = true
            this.onLoad()
            
        //}, 500);
    },
    onLoad() {      //上拉加载
      var t = this
      console.log('加载')
      this.finished = false;
      var thiscurrentPage = 1
      if(this.thispage == true){
        thiscurrentPage = this.currentPage
      }else{
        thiscurrentPage = this.currentPage + 1
      }
      this.currentPage = thiscurrentPage
      var data = this.filterInfo
      console.log(data)
      this.setcollectlist()
    },
    setcollectlist(){
      var t = this
      this.lat = this.filterDate.ipcon.lat
      this.lng = this.filterDate.ipcon.lng
      loadcollectlist({deleteState:1,limit:-1,currentPage:-1,lat:t.lat,lng:t.lng}).then((res) =>{
        console.log(res)
        
        if(res.code == 0){
       
            this.listDateMore = res.data.records
          
        }
        
      }).catch((res) =>{

      })
    }
  },
  mounted() {
    var filterDate = sessionStorage.getItem('filterDate')
    if(filterDate != null){
      this.filterDate = JSON.parse( sessionStorage.getItem('filterDate') ) 
    }
  },
  components: {
    Headertop,
    Collectitem
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .notdata{
    padding-top: .15rem;
    font-size: .4rem;
  }
.collect {
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
  height: 100vh;
  /* padding-bottom: 2rem; */
}
.collectitem_wrap {
  background: #fff;
  padding-top: 0.55rem;
  margin-bottom: 0.3rem;
}
</style>
