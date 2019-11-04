<template>
  <div class="home">
    <div class="bananawap">
      <div style="width:100%;overflow:hidden">
        <img class="banana" style="width:100%;height:6.2rem;" src="@/img/banana.jpg" alt="">
      </div>

      <div class="con">
        <div class="bgwhite timewap" @click="handleRouter('filter')">
          <div class="title">
            <a href="javascript:;">入住时间</a>
            <a href="javascript:;">离店时间</a>
          </div>
          <div class="clearfix time">
            <div class="fl">
              <span class="text">{{getWeek(startDate)}} {{startTime == '' ? '12:00':startTime}}</span>
              <span class="text2">{{startDate.split('-')[1]}} 月 {{startDate.split('-')[2]}}日</span>
            </div>
            <div class="fl">
              <span class="text">{{getWeek(endDate)}}  {{endTime == '' ? '12:00':endTime}}</span>
              <span class="text2">{{endDate.split('-')[1]}} 月 {{endDate.split('-')[2]}}日</span>
            </div>
          </div>

          <div class="timenum">
            <span class="num">{{hourall({startDate,startTime,endDate,endTime})}}</span>
            <span class="text">小时</span>
          </div>
        </div>

        <div class="bgwhite ip" @click="handleRouter('ipregion')">
          <span class="ipcon fl">{{ipcon}}</span>
          <span class="target">
            <van-icon name="aim" /></span>
        </div>
        <div class="bgwhite level" @click="handleRouter('rmbstar')">
          <span class="target">
            <van-icon name="wap-home" /></span>
          <span class="txt">{{star.value == '-1' ? '请选择星级' : star.name}}/{{(rmb.strvalue == '-1') && (rmb.endvalue == '-1') ? '价格' : rmbstatus(rmb)}}</span>
        </div>
        <div class="btn" @click="handleRouter('hotelfilter')">
          <Btton width="9.84rem" height="1.18rem" value="智能选房" bgcolor="#008489" fontcolor="#fff" fontsize=".48rem"
            radius=".1rem" />
        </div>
      </div>
    </div>
    <div class="bgwhite timewapchek">
      <Headertitle value="定制时段选房" padtop=".36rem" padbtm=".34rem" />
      <div class="timewapimg">

        <span @click="handleRouter('hoteltypeHour')">
          <span class="imgwap">
            <img src="./../../img/1-5.png" style="width:1.67rem;height:1.77rem" alt="">
          </span>

          <i>小时房</i>
        </span>
        <span class="cent" @click="handleRouter('hoteltypeTimeframe')">
          <span class="imgwap">
            <img src="./../../img/6-20.png" style="width:1.65rem;height:1.79rem" alt="">
          </span>
          <i>时段房</i>
        </span>
        <span @click="handleRouter('hoteltypeAllday')">
          <span class="imgwap">
            <img src="./../../img/day.png" style="width:1.74rem;height:1.81rem" alt="">
          </span>
          <i>全天房</i>
        </span>
      </div>
    </div>

    <div class="bgwhite preference">
      <Headertitle value="超值特惠" padtop=".35rem" padbtm=".35rem" />
      <div class="pfncecon clearfix">
        <div class="leftcon fl">
          <span class="imgwap" @click="handleRouter('price')">
            <img src="./../../img/jiudian1.jpg" style="width:6.72rem;height:4.57rem" alt="">
            <Tag class="tagele" value="今日底价住" width="1.92rem" height=".48rem" borderadius="0 .24rem .24rem 0" />
          </span>
        </div>
        <div class="rightcon fr">
          <span class="imgwap" @click="handleRouter('sell')">
            <img src="./../../img/jiudian2.jpg" style="width:2.88rem;height:2.17rem" alt="">
            <Tag class="tagele" value="个人转售" width="1.44rem" height=".49rem" borderadius="0 .24rem .24rem 0" />
          </span>

          <span class="imgwap" style="margin-top:.24rem;" @click="handleRouter('hour')">
            <img src="./../../img/jiudian3.jpg" style="width:2.88rem;height:2.17rem" alt="">
            <Tag class="tagele" value="小时房" width="1.44rem" height=".49rem" borderadius="0 .24rem .24rem 0" />
          </span>
        </div>
      </div>
    </div>
    <div class="huodonwap">
      <img src="./../../img/huodon2.jpg" width="100%;" alt="">
    </div>
    <div class="hotwap">
      <div class="morewap">
        <Headertitle style="background:#fff;" value="热门酒店" padtop=".28rem" padbtm=".28rem" />
        <span  @click="handleRouter('hot')" class="more"> <i>更多</i> <van-icon name="arrow" /></span>
      </div>

      <div class="hot clearfix">
        <Listhot v-if="countroomhotshow"  v-for="(s,index) in countroomhot" :key="index" :dateobj="s" class="hotCompon"  />
      </div>
    </div>
    <div class="carousel">
      <img src="./../../img/huodon1.png" style="width:10.14rem;height:2.22rem" alt="">
    </div>
    <div class="guesslovewap">
      <div class="morewap">
        <Headertitle style="background:#fff;" value="猜你喜欢" padtop=".28rem" padbtm=".28rem" />
        <span style="display:none;" @click="handleRouter('like')" class="more"> <i>更多</i> <van-icon name="arrow" /></span>
      </div>
      <div class="guesslove clearfix">
        <Listlike v-if="countroomshow" v-for="(x,index) in countroom" :key="index" :dateobj="x" class="hotCompon" />
      </div>
    </div>


    <Footers />
  </div>
</template>

<script>

  import Footers from '@/components/footer/index'
  import Btton from '@/components/button/index'
  import Headertitle from '@/components/headertitle/index'
  import Tag from '@/components/tag/index'
  import Listhot from '@/components/listhot/index'
  import Listlike from '@/components/listlike/index'
  import listdate from '@/api/date/listhotel'//虚拟数据
  import {getTimeLength,timefilter,locaipcon} from '@/api/date/init'//共用函数方法文件
  import request from '@/api/request'//axios请求
  import {setToken} from '@/api/util'
  import City from '@/api/date/city'
  import {hotlist,linklist} from '@/api/home/index'
  import Circle from '@/api/date/circle'
  import { Dialog } from 'vant';
  import '@/../public/cdn/common.js'
import { filter } from 'minimatch';
  export default {
    name: 'Home',
    data() {
      return {
        ayy:['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        active: 0,
        startDate:'',//开始日期
        endDate:'',//结束日期
        startTime:'',//开始时间
        endTime:'',//结束时间
        ipcon:'地区',//地区
        iplatlng:{lat:'39.916527',lng:'116.397128'},//地区经纬度
        star:{value:'-1',name:''},//星级
        rmb:{strvalue:-1,endvalue:-1},//价格
        countroomshow:false,
        countroom:[],
        countroomhotshow:false,
        countroomhot:[],
        filterDate:{}
      }
    },
    props: {
      msg: {

      }
    },
    methods: {
      init(){
        
        this.getdate()//初始化首页信息
      },
      rmbstatus(data){
        console.log(data)
        if(data.strvalue != '-1' && data.endvalue != '-1'){
          return data.strvalue + '-' + data.endvalue
        }else if(data.strvalue != '' && data.endvalue == '-1'){
          return data.strvalue+'以上'
        }else if(data.strvalue == '-1' && data.endvalue != ''){
          return data.endvalue+'以下'
        }
      },
      handleRouter(type,obj) {
        if(type == 'list'){
          this.$router.push({ path: '/listhotel/index',query:{pageType:'home'}})
        }
        if(type == 'price'){//超值特惠--低价房
          this.$router.push({ path: '/listhotel/index',query:{pageType:'price'}})
        }
        if(type == 'sell'){//超值特惠--个人转售
          this.$router.push({ path: '/listhotel/index',query:{pageType:'sell'}})
        }
        if(type == 'hour'){//超值特惠--小时房
          this.$router.push({ path: '/listhotel/index',query:{pageType:'hour'}})
        }
        if(type == 'like'){//猜你喜欢
          this.$router.push({ path: '/listhotel/index',query:{pageType:'like'}})
        }
        if(type == 'hot'){//热门
          this.$router.push({ path: '/listhot/index',query:{pageType:'hot'}})
        }
        if(type == 'detail'){
          localStorage.setItem('hotelId',obj.hotelId)
          this.$router.push({ path:'/details/index',query:{objdate:obj}})//,this.$router.push({ path: '/details/index',query:{id:typeval} })
        }
        if(type == 'filter'){
          this.$router.push({ path: '/timefilter/index',query:{filter:60} })
        }
        if(type == 'rmbstar'){
          this.$router.push({ path: '/rmbstar/index'})
        }
        if(type == 'hotelfilter'){
          
          this.$router.push({ path: '/hotelfilter/index'})
        }
        if(type == 'ipregion'){
          this.$router.push({ path: '/ipregion/index'})
        }
        if(type == 'hoteltypeHour'){
          this.$router.push({ path: '/hoteltype/index',query:{type:'Hour'}})//小时房
        }
        if(type == 'hoteltypeTimeframe'){
          this.$router.push({ path: '/hoteltype/index',query:{type:'Timeframe'}})//时段房
        }
        if(type == 'hoteltypeAllday'){
          this.$router.push({ path: '/hoteltype/index',query:{type:'Allday'}})//全天
        }
      },
      dateSection(s1, s2) {
        s1 = new Date(s1.replace(/-/g, '/'));
        s2 = new Date(s2.replace(/-/g, '/'));
        var ms = Math.abs(s1.getTime() - s2.getTime());
        return ms / 1000 / 60 / 60;
      },
      getWeek(val){ //获取周几
        var Dateinit= new Date(val);//当前时间
        var num = Dateinit.getDay()//周几
        return this.ayy[num]
      },
      hourall(obj){
        console.log(obj)
        var startdate = obj.startDate
        var starttime = obj.startTime == '' ? '12:00:00' : obj.startTime + ':00'
        var enddate = obj.endDate
        var endtime = obj.endTime == '' ? '12:00:00' : obj.endTime + ':00'
        return this.dateSection(startdate+' '+starttime,enddate+' '+endtime)
      },
      getdate(){
        var thistype = true
        var obj = {
          startdate:this.filterDate.startDate,
          starttime:this.filterDate.startTime,
          enddate:this.filterDate.endDate,
          endtime:this.filterDate.endTime,                
        }
       
        var filterDatess = sessionStorage.getItem('filterDate')
        if(filterDatess == null){
          
          var Dateinit= new Date();//当前时间
          var beforDateinit = new Date(Dateinit.getTime() + 24*60*60*1000)
          var n= Dateinit.getFullYear();//年
          var beforn= beforDateinit.getFullYear();//年

          var month= Dateinit.getMonth() + 1;//月
          var beformonth= beforDateinit.getMonth() + 1;//月
          
          var dates= Dateinit.getDate(); //日
          var befordates = beforDateinit.getDate(); //日
          //当前日期
          this.startDate = n + '-' + month + '-' + dates 
          this.endDate = beforn + '-' + beformonth + '-' + ( befordates ) 
          //周几
          var startweekidx = Dateinit.getDay()
          var endweekidx = Dateinit.getDay() + 1

          this.startWeek = this.ayy[startweekidx]
          this.endWeek = this.ayy[endweekidx]

          var t = this
          var filterDate = sessionStorage.getItem('filterDate')
          if( filterDate == null){
            this.$set(t.filterDate,'startDate',t.startDate)
            this.$set(t.filterDate,'endDate',t.endDate)
            this.$set(t.filterDate,'startTime','12:00')
            this.$set(t.filterDate,'endTime','12:00')
            this.$set(t.filterDate,'ipcon',{name:'北京',lat:'39.916527',lng:'116.397128',cityid:'2'})//lat维度  lng经度
            this.$set(t.filterDate,'distance','30000')//3万米以内距离
            this.$set(t.filterDate,'rmb',{name:'',startrmb:'-1',endrmb:'-1',index:'-1',value:'-1'})//开始价格  结束价格
            this.$set(t.filterDate,'start',{name:'',value:'-1',index:'-1'})//酒店类型
            this.$set(t.filterDate,'maxPeople',1)//最大人数
            this.$set(t.filterDate,'earlyDeparture',-1)//是否支持转售
            this.$set(t.filterDate,'orders',1)//（1.从小到大[asc正序]，2.从大到小[desc倒序] 默认正序"
            this.$set(t.filterDate,'orderBy',1)//1.距离 2.价格）默认距离", required = true
          }else{
            var filterDate = sessionStorage.getItem('filterDate')
            if(filterDate != null){
              this.filterDate = JSON.parse( sessionStorage.getItem('filterDate') ) 
              this.setdateinfo(this.filterDate)
            }
          }
          
        }else{
          
          var filterDate = sessionStorage.getItem('filterDate')
            if(filterDate != null){
              this.filterDate = JSON.parse( sessionStorage.getItem('filterDate') ) 
              this.setdateinfo(this.filterDate)
            }
        }
        this.gethotlist()
        this.getlinklist()
      },
      setdateinfo(date){
              this.ipcon = date.ipcon.name
              this.rmb.strvalue = date.rmb.startrmb
              this.rmb.endvalue = date.rmb.endrmb
              this.star.value =  date.start.value
              this.star.name =  date.start.name
              this.startDate = date.startDate
              this.startTime = date.startTime
              this.endDate = date.endDate
              this.endTime = date.endTime
              
      },
      gethotel(){

      },
      gethotlist(){
        var t=this
        hotlist({limit:8,currentPage:1,cityId:t.filterDate.ipcon.cityid}).then((res)=>{
          if(res.code==0){
            t.countroomhot = res.data.records
            t.countroomhotshow = true
          }
        }).catch(() => {
          // on cancel
        });
      },
      getlinklist(){
        var t=this
        linklist({limit:8,currentPage:1,lng:t.ipcon.lng,lat:t.ipcon.lat}).then((res)=>{
          if(res.code==0){
            console.log(res)
            t.countroom = res.data.records
            t.countroomshow = true
          }
        }).catch(() => {
          // on cancel
        });
      }
      
    },
    mounted() {
      this.init()

      var localIpcon =  sessionStorage.getItem('localIp')
      if(localIpcon == null && localIpcon != ''){
        Dialog.confirm({
          title: '定位',
          message: '是否定位到当前所在城市'
        }).then(() => {
          locaipcon(function(data){
            sessionStorage.setItem('localIp',JSON.stringify(data))
          })
          // on confirm
        }).catch(() => {
          sessionStorage.setItem('localIp','')
          // on cancel
        });
      }
    },
    created(){
      
    },
    watch:{
      filterDate:{
        handler(newData,oldData){
          this.setdateinfo(newData)
          var string = JSON.stringify(newData)
          sessionStorage.setItem('filterDate',string)
        },
        deep:true
      }
    },
    
    components: {
      Footers,
      Btton,
      Headertitle,
      Tag,
      Listhot,
      Listlike
    },

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .home {
    padding-bottom: 1.47rem;
    .morewap{
      position: relative;
      .more{
        position: absolute;
        right: .3rem;
        top: .28rem;
        font-size: .36rem;
        i{
          vertical-align: middle;
        }
      }
    }
  }

  .bananawap {
    position: relative;
    margin-bottom: .6rem;
  }

  .bananawap .banana {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 0%)
  }

  .huodonwap img {
    height: 2.64rem;
  }

  .con {
    position: relative;
    width: 9.84rem;
    margin: 0 auto;
    padding-top: 4.76rem;
  }

  .con .timewap {
    margin-bottom: .24rem;
    position: relative;
  }

  .con .time {
    height: 2.66rem;
  }

  .con .time .text {
    margin-top: .52rem;
    font-size: .48rem;
    line-height: .48rem;
    font-weight: bold;
  }

  .con .time .text2 {
    margin-top: .57rem;
    font-size: .36rem;
    line-height: .36rem;
    font-weight: bold;
  }

  .con .time>div {
    width: 50%;
  }

  .con .title a {
    font-size: .36rem;
    color: #9E9E9E;
  }

  .con .time span {
    color: #008489;
    display: block;
    width: 100%;
    text-align: center;
  }

  .con .timenum {
    width: 1.19rem;
    height: 1.19rem;
    color: #fff;
    background: #008489;
    border-radius: 50%;
    box-shadow: 0px 6px 15px 1px rgba(30, 185, 136, 0.34);
    position: absolute;
    left: 50%;
    top: .72rem;
    transform: translate(-50%, 0)
  }

  .con .timenum span {
    display: block;
    line-height: .52rem;
  }

  .con .timenum .num {
    font-size: .5rem;
    line-height: .5rem;
    font-weight: bold;
    margin-top: .2rem;
  }

  .con .timenum .text {
    font-size: .28rem;
    line-height: .28rem;
  }

  .con .title {
    width: 9.82rem;
    height: 1.42rem;
    line-height: 1.42rem;
    box-shadow: 0px .04rem .23rem .01rem rgba(97, 199, 203, 0.14);
  }

  .con .title a {
    display: inline-block;
    width: 50%;
  }

  .ip {
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: right;
    padding-left: .94rem;
    position: relative;
    margin-bottom: .28rem;
  }

  .ip .ipcon {
    font-size: .44rem;
    color: #3A3A3A;
    line-height: 1.2rem;
    max-width: 85%;
    text-align: left;
    display: inline-block;
              overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
  }

  .ip .target {
    font-size: .38rem;
    vertical-align: middle;
    vertical-align: -webkit-baseline-middle;
    margin-right: .41rem;
    color: #FFDE15;
    font-weight: bold
  }

  .level {
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: left;
    font-size: .44rem;
  }

  .level .target {
    font-size: .49rem;
    vertical-align: middle;
    vertical-align: -webkit-baseline-middle;
    margin-left: .25rem;

    font-weight: bold;
    color: #B6B6B6;
  }

  .level .txt {
    font-size: .44rem;
    color: #B6B6B6;
    vertical-align: middle;
    margin-left: .18rem;
  }

  .home .btn {
    margin-top: .44rem;
  }

  /*时段选房*/
  .timewapchek {
    box-shadow: 0px 4px 23px 1px rgba(97, 199, 203, 0.14);
    margin-bottom: .51rem;
  }

  .timewapimg .cent {
    margin-left: 1.46rem;
    margin-right: 1.38rem;
  }

  .timewapimg i {
    display: block;
    font-size: .3rem;
    color: #313131;
    margin-top: .25rem;
    margin-bottom: .65rem;
  }

  .timewapimg span {
    display: inline-block;
  }

  /*超值特惠*/
  .pfncecon {
    box-sizing: border-box;
    text-align: left;
    padding-left: .4rem;
    padding-right: .4rem;
  }

  .preference {
    margin-bottom: .54rem;
    padding-bottom: .17rem;
  }

  .pfncecon .leftcon,
  .pfncecon .rightcon {
    display: inline-block
  }

  .pfncecon .imgwap {
    display: block;
  }

  .preference .imgwap {
    position: relative;
    border-radius: .1rem;
    overflow: hidden;
  }

  .tagele {
    top: .25rem;
    left: 0px;
  }

  /*热门酒店*/
  .hotwap {
    margin-top: .55rem;
  }

  .hot {
    padding: .22rem .32rem 0 .32rem;
  }

  .hotCompon {
    margin-bottom: .2rem;
    float: left;
    display: inline-block
  }

  .hotCompon:nth-child(2n) {
    float: right;
    display: inline-block
  }

  .carousel {
    margin-top: .25rem;
    margin-bottom: .5rem;
  }

  .guesslove {
    margin-top: .25rem;
    margin-bottom: .25rem;
    padding: 0 .33rem;
  }
</style>