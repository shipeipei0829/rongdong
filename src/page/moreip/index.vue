<template>
  <div class="moreip">
    <Headers title="地区" />
    <Ipround @setcityid="setcityid" />
  </div>
</template>

<script>
import Ipround from '@/components/ipround/index'
import Headers from '@/components/header/index'
export default {
  name: 'Moreip',
  data(){
    return{
      filterDate:{}
    }
  },
  methods:{
    setcityid(data){
      console.log(data)
      this.filterDate.ipcon.lat = data.lat
      this.filterDate.ipcon.lng = data.lng
      this.filterDate.ipcon.area = data.area
      sessionStorage.setItem('filterDate',JSON.stringify(this.filterDate))
      return false
      this.$router.go(-1)
    },
   
    handleRouter(type,obj){

    },
    onSearch(){

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
      console.log(val)
      var datetime = val
      this.dateshow = false
      console.log(this.thistimetypeele)
      //startDate:this.$store.state.home.startdate,//开始日期
      //endDate:this.$store.state.home.enddate,//结束日期
      //startTime:this.$store.state.home.starttime,//开始时间
      //endTime:this.$store.state.home.endtime,//结束时间  
      var n = datetime.getFullYear();
      var y = datetime.getMonth() + 1
      var r = datetime.getDate()
      var s = datetime.getHours()
      var nn = n+'-'+y+'-'+r
      var ss = s+':00'
      console.log(nn,ss)
      if(this.thistimetypeele == 'left'){
        //this.$store.commit('setstartdate',{value:nn})
        this.startDate = nn 
        //this.$store.commit('setstarttime',{value:ss})
        this.startTime = ss
        this.$emit('strdatetime',{strData:nn,strTime:ss})
      }else if(this.thistimetypeele == 'right'){
        //this.$store.commit('setenddate',{value:nn})
        this.endDate = nn 
        //this.$store.commit('setendtime',{value:ss})
        this.endTime = ss
        this.$emit('enddatetime',{endData:nn,endTime:ss})
      }
    },
  },
  mounted(){
    var filterDate = sessionStorage.getItem('filterDate')
    if(filterDate != null){
      this.filterDate = JSON.parse( sessionStorage.getItem('filterDate') ) 
     
    }
  },
  watch:{
    
  },
  components: {
    Ipround,
    Headers,
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.moreip{
  height: 100%;
}
</style>
