<template>
  <div id="c-slider">
    <div id="test1">
      <div class="slider">
        <div class="ruler" id="ruler" ref="ruler">
          <div ref="bar" class="bar startbar" @touchstart="startTouchstart" @touchmove="startTouchmove"></div>
          <div ref="endbar" class="bar endbar" @touchstart="endTouchstart" @touchmove="endTouchmove"></div>
        </div>
        <div class="date clearfix">
          <div class="fl">{{startStep | hoursFilter}}</div>
          <div class="fr">{{endStep | hoursFilter}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-Cslicer',
  data () {
    return {
      $ruler: '', // 滑竿
      $bar: '', // 左侧滑块
      $endbar: '', // 右侧滑块
      startX: '', // 左侧滑块位置
      endX: '', // 右侧滑块位置
      step: '', // 滑竿在限定范围内可以分多少步
      intervalStart: 0, 
      intervalEnd: 30000,
      startStep: 0,
      endStep: 30000,
      amountW: '' //  滑竿多长距离
    }
  },
  filters: {
    hoursFilter(date) {
      if (date < 10) {
        return '￥' + date ;
      } else {
        return '￥' + date;
      }
    },
  },
  created() {
    const vm = this;
    vm.$nextTick(() => {
      vm.initSlider();
    })
  },
  computed:{

  },
  methods: {
    initSlider(){
      const vm = this;
      vm.$ruler = this.$refs.ruler;
      vm.$bar = this.$refs.bar;
      vm.$endbar = this.$refs.endbar;
      vm.amountW = vm.$ruler.clientWidth - vm.$bar.clientWidth; // 滑竿多长距离
      vm.step = vm.amountW / (vm.intervalEnd - vm.intervalStart); // 总共多少步
    },
    startTouchstart(e) {
      const vm = this;
      vm.startX = e.touches[0].pageX; // 开始滑动时滑块的位置
    },
    startTouchmove(e) {
      const vm = this;
      let slidedis = e.touches[0].pageX - vm.$ruler.offsetLeft; // 滑动距离=当前滑块x距离-最开始滑块距离
      if (slidedis < 0 || slidedis > vm.amountW) {
        //return; //滑动左侧侧超出进度条时
      }
      let ste = Math.round(slidedis / vm.step);
      if ((ste + vm.intervalStart) >= vm.endStep) {
        return;
      }
      vm.startStep = ste + vm.intervalStart;
      if(vm.startStep<=0){ //当拉动的最小 低于0时
        vm.$bar.style.left = 0 + 'px'
        vm.startStep = 0
      }else if(vm.startStep >= vm.endStep ||(vm.endStep - vm.startStep) <= 200 ){
        vm.startStep = vm.endStep - 200
      }else if(vm.endStep == '不限' && (vm.intervalEnd - vm.startStep) <= 200){
        vm.startStep = vm.intervalEnd - 200
      }else{
        vm.$bar.style.left = (ste * vm.step) + 'px'
      }
      
    },
    endTouchstart(e) {
      
      const vm = this;
      vm.endX = e.touches[0].pageX; //开始滑动时滑块的位置
    },
    endTouchmove(e) {
      
      const vm = this;
      let slidedis = e.touches[0].pageX - vm.$ruler.offsetLeft; //滑动距离=当前滑块x距离-最开始滑块距离
      if (slidedis < 0 || slidedis > vm.amountW) {
        //return; //滑动右侧超出进度条时
      }
      let ste = Math.round(slidedis / vm.step);
      if (vm.startStep >= (ste + vm.intervalStart)) {
        return;//当碰到第一个的时候停止滑动
      }
      vm.endStep = ste + vm.intervalStart;
      if(vm.endStep>30000 && vm.endStep<30100){
        vm.$endbar.style.left = ''
        vm.$endbar.style.right = '0px'
        vm.endStep = 30000//超过三万 低于 3万零100时
      }else if(vm.endStep>30100){
        vm.endStep = '不限'
        vm.$endbar.style.left = ''
        vm.$endbar.style.right = '0px'
      }else if((vm.endStep - vm.startStep)  <= 200 ){
        vm.endStep = vm.startStep + 200
      }else{
        vm.$endbar.style.left = (ste * vm.step) + 'px'
      }
    }
  },
  watch:{
    endStep(){
      //console.log(this.endStep)
      this.$emit('rmbendStep',{value:this.endStep})
    },
    startStep(){
      //console.log(this.startStep)
      this.$emit('rmbstartStep',{value:this.startStep})
    },
  }
}
</script>

<style lang="scss">
#c-slider{
  .clearfix{
    &:after{
      content: '';
      display: block;
      clear: both;
    }
  }
  .slider{
    margin: auto;
    width: 90%;
    .date{
      color: #333;
      font-size: .36rem;
      margin-top: .58rem;
      line-height: .36rem;
      .fl{
        float: left;
      }
      .fr{
        float: right;
      }
    }
    .ruler{
      background: #879BAE ;
      height: .1rem;
      position:  relative;
      margin-top: .72rem;
      .bar{
        position: absolute;
        top: -.25rem;
        height: .5rem;
        width: .5rem;
        border-radius: 100%;
        background: #D8D8D8;
        font-size:  0.3rem;
        line-height:  0.65rem;
        text-align:  center;
      }
      .startbar{
        left: 0;
      }
      .endbar{
        right: 0;
        background: #879BAE;
      }
    }
  }
}
</style>