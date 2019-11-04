<template>
  
    <div class="roominfo">
          <div class="roominfocont">
              {{objdate.bookingInformation}}
            <div class="clearfix" style="display:none;">
              <div class="textt fl"><i class="titlet">入离时间&nbsp </i> 入店时间 14:00至23:59 &nbsp 离店时间 12:00以后 </div>
            </div>


          </div>
      </div>
</template>

<script>
import Tagbtn from '@/components/tagbtn/index'
export default {
  name: "Detailsgrade",
  data() {
    return {
      values:4.9
    };
  },
  props:{
    objdate:{
        type: Object,
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
         onChange(event) {
      this.setData({
        value: event.detail
      });
    },
  },
  mounted() {
    
  },
  created() {

  },
  components:{
    Tagbtn,
  }
};
</script>

<style scoped>

/*订房须知*/
.roominfocont {
  padding-bottom: .3rem;
  text-align: left;
}

.roominfocont .titlet{
  font-weight: bold;
  margin-bottom: .3rem
}

.roominfocont .textt{
  text-align: left;
  font-size: .32rem
}
.roominfo{
  padding: 0 .6rem 0 .6rem;
  
}

</style>
