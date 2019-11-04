<template>
  <!-- 星星评价 -->
  <span class="xing">
    <van-icon class="icon" v-if="allvalue>=1" :class="{'active':value>=1}" name="star" />
    <van-icon class="icon" v-if="allvalue>=2" :class="{'active':value>=2}" name="star" />
    <van-icon class="icon" v-if="allvalue>=3" :class="{'active':value>=3}" name="star" />
    <van-icon class="icon" v-if="allvalue>=4" :class="{'active':value>=4}" name="star" />
    <van-icon class="icon" v-if="allvalue>=5" :class="{'active':value>=5}" name="star" />
    <van-icon class="icon" v-if="allvalue>=6" :class="{'active':value>=6}" name="star" />
    <van-icon class="icon" v-if="allvalue>=7" :class="{'active':value>=7}" name="star" />
    <i class="text">{{text[value]}}</i>
  </span>
</template>

<script>
  export default {
    name: "Xing",
    data() {
      return {
          text:['','一星','二星','三星','四星','五星','六星','七星']
      };
    },
    props: ['value','allvalue'],
    
     /* {
      value: {
        type: String,
        default: ''
      },
      allvalue: {
        type: String,
        default: '5'
      },
      
    },*/
    methods: {
      getsrcurl(icon) {
        return require("@/img/" + icon + ".jpg");
      },
      showxing(val) {
        
      }
    },
    mounted: function () {
      this.showxing(this.value)
    },
    created() {

    },
  };
</script>
<style scoped>
  .xing .active {
    color: #FFD925;
  }

  .xing {
    color: #DDDDDD;

  }

  .xing .text {
    color: #FFD925;
    font-size: .3rem;
    vertical-align: middle;
    margin-left: .1rem;
    line-height: .3rem;
  }

  .xing i {
    vertical-align: middle
  }
</style>