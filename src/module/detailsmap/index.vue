<template>

  <div class="map">
    <div class="mapcon">
      <Maps :dragEnable="false" :doubleClickZoom="false" />
    </div>
    <div class="maptitle celarfix">
      <div class="fl icon">
        <van-icon name="location-o" />
      </div>
      <div class="title fl">
        <span>{{objdate.address}}</span>
        <span class="info">距您直线{{objdate.distance}} 米 {{objdate.tradingArea}}</span>
      </div>

    </div>
  </div>

</template>

<script>
  import Maps from '@/components/maps/index'
  export default {
    name: "Detailsmap",
    data() {
      return {

      };
    },
    props: {
      objdate:{
        type: Object,
        default:()=>({

        })
      },
      value: {
        type: String,
        default: '标题'
      },
      width: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: ''
      },
      borderadius: {
        type: String,
        default: ''
      },
      bgcolor: {
        type: String,
        default: '#FFD925'
      },
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
    },
    mounted() {
    },
    components: {
      Maps
    }
  };
</script>
<style scoped>
  /*地图*/
  .map {
    padding: .32rem 0rem .32rem .48rem;
    text-align: left;
  }

  .map>div {
    display: inline-block;
  }

  .mapcon {
    height: 2.4rem;
    width: 3.5rem;
    vertical-align: top;
    margin-right: .15rem;
  }

  .maptitle {
    width: 6.4rem;
  }

  .maptitle .icon {
    font-size: .34rem;
  }


  .maptitle .title {
    font-size: .34rem;
    line-height: .46rem;
    color: #202020;
    width: 5.8rem;
  }

  .maptitle .info {
    font-size: .3rem;
    color: #A2A2A2;
  }
</style>