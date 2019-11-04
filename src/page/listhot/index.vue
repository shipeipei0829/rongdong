<template>
  <div class="listhotel">
      <div class="hotimgtop">
          <Headers class="headtop" title="酒店HOT榜" bgcolor="rgba(17, 133, 137, 0)"/>
          <img src="./../../img/hothotel.jpg" alt="">
      </div>
      

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

      <van-popup
          v-model="dateshow"
          position="bottom"
          :style="{ height: '70%' }">

          <Datepicker @cancel="handleCancel" @confirm="handleConfirm" />
          
      </van-popup>




      <van-popup
          v-model="sortshow"
          position="bottom"
          :style="{ height: '30%' }">
          <div class="clearfix sortbtn">
            <span @click.stop="handersort('remove')" class="fl">取消</span>
            <span @click.stop="handersort('submit')" class="fr">确定</span>
          </div>
          <van-picker :columns="sortarry" :default-index="2" @change="onChange" />
          
      </van-popup>


      <van-popup
          v-model="rmbshow"
          position="bottom"
          :style="{ height: '30%' }">
          <div class="clearfix sortbtn">
            <span @click.stop="handersort('rmbremove')" class="fl">取消</span>
            <span @click.stop="handersort('rmbsubmit')" class="fr">确定</span>
          </div>
          <van-picker :columns="arryrmb" :default-index="0" @change="onChange" />
          
      </van-popup>





  </div>
</template>

<script>
import Headers from '@/components/header/index'

import Collectitem from '@/components/collectitem/index'
import {getTimeLength} from '@/api/date/init'//共用函数方法文件
import listdates from '@/api/date/listhotel'//虚拟数据
import Datepicker from '@/components/datepicker/index'
import {loadlist,loadlistprice} from '@/api/home/listhotel'//交互
import { Dialog } from 'vant';
export default {
  name: 'listhotel',
  data(){
    return{
      dateshow:false,//是否显示时间选择器
      sortshow:false,//是否显示排序
      rmbshow:false,//是否显示价格
      notdata:false,//是否显示暂无数据
      changeVal:'',
      startrmb:'',
      endrmb:'',
      sortarry: ['距离从小到大', '距离从大到小', '价格从小到大', '价格从大到小'],
      arryrmb:[],
      ipshow:true,
      thistimetypeele:'',//是开始时间 还是 结束时间  left是左侧  right是右侧
      startDate:'',//开始日期
      endDate:'',//结束日期
      startTime:'',//开始时间
      endTime:'',//结束时间
      listdate:[],
      routerlink:'',
      listDateMore:[],
      checkvalue:'',
      thispage:true,//是否首次加载  true 为第一次加载 false 为翻页
      loading: false,   //是否处于加载状态    下拉加载 是否显示   
      finished: false,  //是否已加载完所有数据 为true 时无法下拉架子啊
      isLoading: false,   //是否处于下拉刷新状态
      value1:0,
      value2:'a',
      option1: [
        { text: '朝阳', value: 0 },
        { text: '海淀', value: 1 },
        { text: '大兴', value: 2 }
      ],
      option2: [
        { text: '300-400', value: 'a' },
        { text: '500-600', value: 'b' },
        { text: '600-1000', value: 'c' },
      ],
      filterDate:{},
      filterInfo:{
        hotelName:'',//酒店名称
        cityName:'',//城市名称
        ipcon:{},
        rmb:{},
        lng:'',//经度
        lat:'',//维度
        cityid:'',
        beganTime:'',//开始时间+日期
        endTime:'',//结束时间+日期
        limit:'',//每页多少条
        currentPage:'',//当前页
        distance:'30000',//搜索距离多少米
        roomPrice:'',//结束房价价格
        sRoomPrice:'',//开始房间价格
        starLevel:'',//星级
        earlyDeparture:'',//是否支持转售
        maxPeople:'',//最大人数
        orders:'',//value = "排序 （1.从小到大[asc正序]，2.从大到小[desc倒序] 默认正序", required = true),
        orderBy:'',//value = "排序字段（1.距离 2.价格）默认距离", required = true)
      }
    }
  },
  methods:{
    init(){
      //this.filterInfo.cityName = this.filterDate.ipcon.name
      this.filterInfo.lng = this.filterDate.ipcon.lng
      this.filterInfo.lat = this.filterDate.ipcon.lat
      this.filterInfo.cityid = this.filterDate.ipcon.cityid
      this.filterInfo.beganTime = this.filterDate.startDate +' '+ this.filterDate.startTime+':00'
      this.filterInfo.endTime = this.filterDate.endDate +' '+ this.filterDate.endTime+':00'
      this.filterInfo.limit = 3
      this.filterInfo.currentPage = 1
      this.filterInfo.distance = this.filterDate.distance
      this.filterInfo.sRoomPrice = this.filterDate.rmb.startrmb
      this.filterInfo.roomPrice = this.filterDate.rmb.endrmb
      this.filterInfo.starLevel = this.filterDate.start.value
      this.filterInfo.earlyDeparture = this.filterDate.earlyDeparture
      this.filterInfo.maxPeople = this.filterDate.maxPeople
      this.filterInfo.orders = this.filterDate.orders
      this.filterInfo.orderBy = this.filterDate.orderBy
      this.filterInfo.ipcon.name = this.filterDate.ipcon.name


      var arryrmb = this.$store.state.home.arryrmb 
      var arry = []
      for(var x in arryrmb){
       this.arryrmb.push(arryrmb[x].value) 
      }
    },
    loadlistup(){
      
    },
    showrmb(data){
      if(data.startrmb == -1 && data.endrmb == -1){
        return '0-无限'
      }else if(data.startrmb != -1 && data.endrmb == -1){
        return data.startrmb + '以上'
      }else if(data.startrmb == -1 && data.endrmb == -1){
        return data.endrmb + '以下'
      }else{
        return data.startrmb +'-'+ data.endrmb
      }
    },
    onChange(picker, value, index) {
      //筛选价格
      var data = value
      if(this.rmbshow == true){
        this.changeVal = data
      }
      if(this.sortshow == true){
        this.changeVal = data
      }
      
      console.log(value,index)
      //Toast(`当前值：${value}, 当前索引：${index}`);
    },
    handersort(type){
      console.log(type)
      if(type=='remove'){
        this.sortshow = false
      }else if(type=='submit'){//排序筛选点击确定
        var sortitem = this.changeVal
        if(sortitem == '距离从小到大'){
          this.filterInfo.orders = 1 //1 小大   2 是大小
          this.filterInfo.orderBy = 1//1是距离  2是价格
        }else if(sortitem == '距离从大到小'){
           this.filterInfo.orders = 2 //1 小大   2 是大小
          this.filterInfo.orderBy = 1//1是距离  2是价格
        }else if(sortitem == '价格从小到大'){
          this.filterInfo.orders = 1 //1 小大   2 是大小
          this.filterInfo.orderBy = 2//1是距离  2是价格
        }else if(sortitem == '价格从大到小'){
          this.filterInfo.orders = 2 //1 小大   2 是大小
          this.filterInfo.orderBy = 2//1是距离  2是价格
        }
        this.filterInfo.currentPage = 1
        this.thispage = true
        this.onLoad()

        this.sortshow = false
      }
      if(type=='rmbremove'){

        this.rmbshow = false
      }else if(type=='rmbsubmit'){//价格筛选点击确定

        var rmbarry = this.changeVal.split('-')
        if(rmbarry[1] == '以上' ){
          this.filterInfo.sRoomPrice = rmbarry[0]
          this.filterInfo.roomPrice = -1
        }else if(rmbarry[1] == '以下'){
          this.filterInfo.sRoomPrice =  -1
          this.filterInfo.roomPrice = rmbarry[0]
        }else{
          this.filterInfo.sRoomPrice = rmbarry[0]
          this.filterInfo.roomPrice = rmbarry[1]
        }
        this.filterInfo.currentPage = 1
        this.thispage = true
        this.onLoad()

        this.rmbshow = false
       
      }
      return false
    },
    handleRouter(type,obj){
      if(type == 'left'){
        this.$router.go(-1)
      }else if(type == 'detail'){
        //@click.native="handleRouter('detail',x)" 详情
        localStorage.setItem('hotelId',obj.hotelId)

        this.$router.push({ path:'/details/index',query:{objdate:obj}})//,
      }else if(type == 'ipcon'){
        this.$router.push({ path:'/filter/moreip/index'})//,筛选地区
      }else if(type == 'morefilter'){
        this.$router.push({ path:'/hotelfilter/index'})//,智能筛选
      }else if(type == 'sort'){
        this.sortshow = true
      }else if(type == 'rmbfilter'){
        this.rmbshow = true
      }else{
        this.$router.push({path:'/searchipcon/index'})//点击搜索地区 跳转路由
      }
      
    },
    onSearch(){

    },
    
    onLoad() {      //上拉加载
    var t = this
      console.log('加载')
      this.finished = false;
      var thiscurrentPage = 1
      if(this.thispage == true){
        thiscurrentPage = this.filterInfo.currentPage
      }else{
        thiscurrentPage = this.filterInfo.currentPage + 1
      }
      this.filterInfo.currentPage = thiscurrentPage
      var data = this.filterInfo
      console.log(data)
      if(this.pageType == 'hot'){
         this.setloadlist(data)
      }
    },

    setloadlist(data){
      var t = this
      loadlist(
        data
      ).then(res => {
        if(res.code == 0){
          if(res.data.records.length > 0){
            this.notdata = false
            if(t.thispage == true){//第一次加载页面
              t.listDateMore = res.data.records
              t.thispage = false
             
            }else{
             
              t.listDateMore = [...t.listDateMore,...res.data.records]
              if(Math.ceil(res.data.total/res.data.size) ==  res.data.current){//如果最后一页,禁止下拉
                  t.finished = true;
              }else if(res.data.size>res.data.total){
                  t.finished = true;
              }
            }
          }else{
            t.finished = true;//是否取消 下拉上拉加载
            this.notdata = true
            t.listDateMore = []
          }
          t.loading = false
        }
      }).finally((res) => {
        t.loading = false
      }).catch((res)=>{
        t.finished = true;
        t.loading = false
      })
    },
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
    handledate(type){//点击时间是左边是右边
      this.dateshow = true
      this.thistimetypeele = type
    },

    handleCancel(){
      this.dateshow = false
      this.thistimetypeele = ''
    },
    handleConfirm(val){

      var datetime = val
      this.dateshow = false

      var n = datetime.getFullYear();
      var y = datetime.getMonth() + 1
      var r = datetime.getDate()
      var s = datetime.getHours()
      var nn = n+'-'+y+'-'+r
      var ss = s+':00'
      var timess = nn +' '+ ss
      var strDate = this.startDate +' '+ this.startTime
      var endDate = this.endDate +' '+ this.endTime

      if(this.thistimetypeele == 'left'){
        
        if( new Date(timess).getTime() < new Date(endDate).getTime() ){
          this.startDate = nn 
          this.startTime = ss
          this.filterInfo.startDate = nn
          this.filterInfo.startTime = ss
          this.filterDate.startDate = nn
          this.filterDate.startTime = ss

          this.filterInfo.beganTime = nn +' '+ss+':00'


          this.filterInfo.currentPage = 1
          this.thispage = true
          this.onLoad()
          sessionStorage.setItem('filterDate',JSON.stringify(this.filterDate) ) 
        }else{
          Dialog({ message: '起始时间不可大于结束时间' });
        }
        
      }else if(this.thistimetypeele == 'right'){
        if( new Date(timess).getTime() > new Date(strDate).getTime() ){
          this.endDate = nn 
          this.endTime = ss
          this.filterInfo.endDate = nn
          this.filterInfo.endTime = ss
          this.filterDate.endDate = nn
          this.filterDate.endTime = ss

          this.filterInfo.endTime = nn +' '+ss+':00'
         
         this.filterInfo.currentPage = 1
          this.thispage = true
          this.onLoad()
          sessionStorage.setItem('filterDate',JSON.stringify(this.filterDate) ) 
        }else{
          Dialog({ message: '结束时间不可小于起始时间' });
        }
      }
      
      return false
    },
    setdateinfo(data){
      this.startDate = data.startDate
      this.endDate = data.endDate
      this.startTime = data.startTime
      this.endTime = data.endTime
    }
  },
  mounted(){
    this.pageType = this.$route.query.pageType

    var filterDate = sessionStorage.getItem('filterDate')
    if(filterDate != null){
      this.filterDate = JSON.parse( sessionStorage.getItem('filterDate') ) 
      this.setdateinfo(this.filterDate)
    }
    this.init()
    let winHeight = document.documentElement.clientHeight                          //视口大小
    document.getElementById('list-content').style.height = (winHeight - 0) +'px'  //调整上拉加载框高度
    this.listdate = JSON.parse( localStorage.getItem('roomrecom') ) 
  },
  watch:{
    
  },
  components: {
    Headers,
    Collectitem,
    Datepicker,
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.listhotel{
  .hotimgtop{
    height: 4.7rem;
    position: relative;
    margin-bottom:.4rem;
    overflow: hidden;
    .headtop{
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
    }
    img{
      width: 100%;
      
     

    }
  }
  height: 100vh;
  .notdata{
    padding-top: .15rem;
    font-size: .4rem;
  }
  .sortbtn{
    font-size: .44rem;
    color: #1989fa;
    span{
      display: inline-block;
      width: 2rem;
      padding-top: .3rem;
      padding-bottom: .3rem;
      text-align: center;
      
    }
  }
  .filter{

    /deep/ .van-search .van-field__control{
      height: .83rem !important;
      line-height: .83rem !important;
      font-size: .34rem;
      
              width: 5.8rem;
              display: inline-block;
            
    }
    /deep/ .van-search__content{
      border-radius: .4rem;
    }
    /deep/ .van-field__left-icon .van-icon{
      padding-top: 10px;
      font-size: .34rem;
      display: none;
    }
    /deep/ .van-search{
      padding-left: 0px;
    }
    .inputwap{
          background: #fff;
          .inputleft{
            font-size: .54rem;
            display: flex;
            align-items: center;
            justify-content:center;
            
            width: 1.73rem;
            float: left;
            height: 1.51rem;
          }
          .inputright{
            float: left;
            height: 1.51rem;
            
          }
    }
    .filterconwap{
      background: #fff;
      border-top: 1px solid #F0F0F0;
      .filtercon{
          span{
            display: inline-block;
            width: 25%;
            height: 1rem;
            line-height: 1rem;
            font-size: .34rem;
          }

      }
    }
    .timewap{
      background: #fff;
      border-top: 1px solid #F0F0F0;
      .timecon{
        p{
          display: inline-block;
          width: 50%;
        }
        height: 1rem;
        line-height: 1rem;
        color: #008489;
        font-size: .36rem;
      }
    }
    .ipcon{
      font-size: .34rem;
      height: .83rem;
            display: flex;
      align-items: center;
     justify-content:center;
    }
    .banana{
      height: 2.64rem;
      display: flex;
      align-items: center;
     justify-content:center;
    }
  }


    
    .itemwaps{
    }

  /deep/ .van-loading{
    width: 100%
  }
  /deep/ .van-loading--circular{
    padding-top: 15px;
  }
}

  
</style>
