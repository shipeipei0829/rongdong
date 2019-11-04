<template>
  
      <div class="themap">

        <div class="mapround">

          <van-tabs  v-model="active" type="card" line-width="20px">

            <van-tab title="医院">
               <div class="roundshop" v-for="(x,index) in yiyuan" :key="index">
                  <div class="clearfix conrow">
                    <span class="fl licon"> <van-icon name="location-o" style="display:none;" /></span>
                    <span class="fl ctitl"> {{ settextcon(x) }} </span>
                    <span class="fr ricon"> <van-icon name="arrow" style="display:none;" />  </span>
                  </div>  
              </div>
            </van-tab>
            <van-tab title="学校">
              <div class="roundshop" v-for="(x,index) in xuexiao" :key="index">
                  <div class="clearfix conrow">
                    <span class="fl licon"> <van-icon name="location-o" style="display:none;" /></span>
                    <span class="fl ctitl"> {{ settextcon(x) }} </span>
                    <span class="fr ricon"> <van-icon name="arrow" style="display:none;" />  </span>
                  </div>  
              </div>
            </van-tab>
            <van-tab title="地铁">
              <div class="roundshop" v-for="(x,index) in ditie" :key="index">
                  <div class="clearfix conrow">
                    <span class="fl licon"> <van-icon name="location-o" style="display:none;" /></span>
                    <span class="fl ctitl"> {{ settextcon(x) }} </span>
                    <span class="fr ricon"> <van-icon name="arrow" style="display:none;" />  </span>
                  </div>  
              </div>
            </van-tab>
            <van-tab title="商圈">
              <div class="roundshop" v-for="(x,index) in shangquan" :key="index">
                  <div class="clearfix conrow">
                    <span class="fl licon"> <van-icon name="location-o" style="display:none;" /></span>
                    <span class="fl ctitl"> {{ settextcon(x) }} </span>
                    <span class="fr ricon"> <van-icon name="arrow" style="display:none;" />  </span>
                  </div>  
              </div>      
            </van-tab>
          </van-tabs>
        </div>
      </div>


</template>

<script>
import {getIpCon} from '@/api/home/details'// 加载详情
import { Notify } from 'vant';
export default {
  name: "Detailsthe",
  data() {
    return {
      active:2,
      yiyuan:'',
      xuexiao:'',
      ditie:'',
      shangquan:'',
    };
  },
  props:{
    objdate:{
      type:Object,
      default:()=>({

      })
    },
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
    settextcon(date){
      const typenum = this.active
      if(typenum == 0){
        return date.name
      }else if(typenum == 1){
        return date.title
      }else if(typenum == 2){
        return date.name
      }else if(typenum == 3){
        return date.name
      }
    },
    getinfonav(){
      const typenum = this.active
      let cityId = this.objdate.cityId
      let hotelId = this.objdate.hotelId
      let lat = this.objdate.lat
      let lng = this.objdate.lng
      let currentPage = 1
      let limit = 5
      let type = ''
      if(typenum == 0){
        type = 1
      }else if(typenum == 1){
        type = 2
      }else if(typenum == 2){
        type = 3
      }else if(typenum == 3){
        type = 4
      }
      var t = this
      getIpCon({hotelId,lat,lng,currentPage, limit,type,cityId}).then((res)=>{
        if(res.code == 0){
          if(typenum == 0){
            t.yiyuan = res.data.records
          }else if(typenum == 1){
            t.xuexiao = res.data.records
          }else if(typenum == 2){
            t.ditie = res.data.records
          }else if(typenum == 3){
            t.shangquan = res.data.records
          }
        }else{
          Notify({ type: 'danger', message: res.message });
        }
      }).finally((res) => {
        this.loading = false
      }).catch((res)=>{
        
      })
      return false
    },
    
  },
  mounted() {
    this.getinfonav()
  },
  watch:{
    active(){
      this.getinfonav()
    }
  },
  components:{

  }
};
</script>
<style scoped>


.themap .mapround{
  padding-bottom: .3rem;
}
.themap .roundshop{
  font-size: .36rem;
  vertical-align: middle;
  line-height: .36rem;
  padding: .2rem .4rem .2rem 1rem;
}
.themap .roundshop .conrow{
  margin-top:.2rem;
}
.themap .roundshop .conrow .licon{
  color: #FFBA41;
  margin-right: .15rem;
}
.themap .roundshop .conrow .ctitl{
  color: #2B2B2B;
  font-weight: bold;
}
.themap .roundshop .conrow .ricon{
  color: #B5B5B5;
}

.themap .roundshop .coninfo{
  font-size: .3rem;
  color: #666666;
  text-align: left;
  padding-left: .55rem;
  margin-top: .08rem;

}
.themap .roundshop .coninfo .name{
  color: #FF9623;
  margin-left: .25rem;
}
</style>
