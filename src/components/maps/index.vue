<template>
  <div class="amap-page-container" style="height:100%;width:100%">
    <div :style="{width:'100%',height:'100%'}">
      <el-amap vid="amap" :dragEnable="dragEnable" :doubleClickZoom="doubleClickZoom" :plugin="plugin" class="amap-demo" :center="center">
      </el-amap>
    </div>

  <div style="display:none">
        <div class="toolbar" >
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
      <span v-else>正在定位</span>
    </div>
    <div
      v-on:click="req_post()">
      查询周边
    </div>
  </div>

  </div>
</template>

<script>

export default {
  name: "Maps",
  data(){
    const self = this;
    return {
      center: [116.20, 39.56],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [{
        enableHighAccuracy: false,//是否使用高精度定位，默认:true
        timeout: 100,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: false,        //显示定位按钮，默认：true
        buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy:true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
        extensions:'all',
        pName: 'Geolocation',
        events: {
          init(o) {
            // o 是高德地图定位插件实例

            return false
            o.getCurrentPosition((status, result) => {
              console.log(result)
              if (result && result.position) {
                self.lng = result.position.lng;
                self.lat = result.position.lat;
                self.center = [self.lng, self.lat];
                self.loaded = true;
                self.$nextTick();
              }
            });
          }
        }
      }]
    }
  },
  props:{

    dragEnable: {
      type: Boolean,
      default: true
    },
    doubleClickZoom: {
      type: Boolean,
      default: true
    },
  },
  methods: {

  },
  mounted() {
    
  },
  created() {

  },
};
</script>
<style scoped>

</style>
