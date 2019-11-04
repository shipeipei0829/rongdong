<template>
    <div class="ipround">
      
      
      <van-sidebar class="coninfo one" v-model="activeKey">
        <van-sidebar-item title="附近" />
        <van-sidebar-item title="行政区域" />
        <van-sidebar-item title="商圈" />
        <van-sidebar-item title="医院" />
        <van-sidebar-item title="地铁" />
        <van-sidebar-item title="景点" />
        <van-sidebar-item title="大学" />
        <van-sidebar-item title="车站机场" />
      </van-sidebar>
      <div class="coninfo two" v-if="two.length>0">
          <ul >
            <li :class="{'active':index == twoactive}" @click="handleclick(x,{'type':'two','index':index})" v-for="(x,index) in two" :key="index">{{setname(x)}}</li>
          </ul>
      </div>
      <div class="coninfo three" v-if="three.length>0">
          <ul >
            <li :class="{'active':index == threeactive}" @click="handleclick(x,{'type':'three','index':index})" v-for="(x,index) in three" :key="index">{{x.name}}</li>
          </ul>
      </div>
    </div>
</template>

<script>
import {getdistrict} from './indexapi'
import { Notify } from 'vant';

export default {
  name: "Ipround",
  data() {
    return {
      activeKey: 1,
      two:[],
      twoactive:-1,
      three:[],
      threeactive:-1,
      city_id:'',//记录的Id
      id:'',//选择的当前id
      lat:'',
      lng:'',
      area:'',//地区
      type:'',//行政区  医院 学校  地铁  商圈
    };
  },
  props: {

  },
  methods: {
    handleclick(data,obj){
      
      var t = this
      if(obj.type == 'two'){
        if(this.activeKey == 4){//地铁
          this.three = data.stationList
        }

        if(this.activeKey == 1){
          this.id = data.pid
          this.lat = data.lat
          this.lng = data.lng
          this.area = data.name
        }else if(this.activeKey == 4){//地铁 获取当前地区 名称 其他为name
          this.id = data.cityId
          this.lng = data.lng
          this.lat = data.lat
          this.area = data.num
        }else{
          this.id = data.cityId
          this.lng = data.lng
          this.lat = data.lat
          this.area = data.name
        }
        
        this.twoactive = obj.index
      }else if(obj.type == 'three'){
        if(this.activeKey == 1){
          this.id = data.pid
          this.lng = data.lng
          this.lat = data.lat
          this.area = data.name
        }else{
          this.id = data.cityId
          this.lng = data.lng
          this.lat = data.lat
          this.area = data.name
        }
        
        this.threeactive = obj.index
      }
        this.$emit('setcityid',{cityid:t.id,lng:t.lng,lat:t.lat,area:t.area})
        this.$emit('setlng',{lng:t.lng,lat:t.lat,cityid:t.id,area:t.area})
        this.$emit('setlat',{lat:t.lat,lng:t.lng,cityid:t.id,area:t.area})
    },
    setname(data){
     
      if(this.activeKey == 1 || this.activeKey == 3){
        return data.name
      }else if(this.activeKey == 4){
        return data.num
      }else if(this.activeKey == 6){
        return data.title
      }else if(this.activeKey == 2){
        return data.name
      }
    },
    getipcon(status){
      
      var vm = this
      var type = ''
      this.two = []
      this.twoactive = -1
      this.three = []
      this.threeactive = -1
      if(status == 1){
        vm.type = 1//行政区
      }else if(status == 3){
        vm.type = 2//医院
      }else if(status == 6){
        vm.type = 3//学校
      }else if(status == 4){
        vm.type = 4//地铁
      }else if(status == 2){
        vm.type = 5//商圈
      }else{
        Notify({ type: 'primary', message: '此分类暂无数据', duration: 900,background: '#1989fa' });
        return false
      }
      
      getdistrict({
        cityId:vm.city_id,type:vm.type
      }).then(res => {
        
        if(res.code == 0){
          vm.two = res.data
        }
        
      }).finally(() => {
        //vm.loading = false
      })  

    }
  },
  mounted() {
    var filterDate = sessionStorage.getItem('filterDate')
    if(filterDate){
      var Date = JSON.parse(filterDate)
      var id =  Date.ipcon.cityid
      
    }
    var vm = this
    this.city_id =id//城市ID
    this.getipcon(vm.activeKey)
  },
  watch:{
    activeKey(val){
      this.getipcon(val)
    }
  },
  
};
</script>
<style lang="scss" scoped>
  .ipround{
    height:100%;
    display: flex;
    overflow: auto;
    background: #fff;
    /deep/ .van-sidebar-item--select{
      border-color:#118589;
    }
    /deep/ .van-sidebar-item,li{
      font-size: .38rem;
      padding:0;
      height: 1.3rem;
      line-height: 1.3rem;
      padding-left: .15rem;
      background: #fff;
      display: block;
    }
    /deep/ .van-sidebar-item--select,.coninfo ul li.active{
      background: #f9f9f9;
      font-weight: 500;
      color: #323233;
    }
    .coninfo{
      height:100%;
      overflow: auto;
      display: inline-block;
      vertical-align: top;
      ul{
        height: 100%;
        li{
          background: #fff;
         
        }
      }
    }
    .one{
      flex:0 0 3rem;
    }
    .two{
      flex: 2.5;
      ul{
        li{
          border-left: 1px solid #f8f8f8;
        }
      }
    }
    .three{
      flex: 2.5;
      ul{
        li{
          border-left: 1px solid #f8f8f8;
        }
      }
    }
  }
</style>
