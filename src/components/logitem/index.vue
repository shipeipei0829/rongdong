<template>
  <div class="logitem">
    <div class="logitem_lf">
      <img :src="require(`../../img/${img}`)" alt />
    </div>

    <div class="logitem_rt">
      <div class="item_title">北京东直门雅辰悦居酒店-悦居60平双床房</div>
      <div class="time_st">
        <span class="icon" style="background-color:#FFC334">住</span>2019-04-15 12:00
      </div>
      <div class="time_ed">
        <span class="icon">离</span>2019-04-18 9:00
      </div>
      <div class="price">
        <i>￥</i> 168
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logitem",
  data() {
    return {
    };
  },
  props: {
    img:{
      type:String,
      default:''
    }
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
.logitem {
  height: 2.88rem;
  display: flex;
}
.logitem_lf {
  width: 2.4rem;
  height: 100%;
  position: relative;
  margin-right: 0.24rem;
}
img {
  width: 2.4rem;
  height: 1.82rem;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0 0 50% 0;
}
.logitem_rt {
  position: relative;
  flex: 1;
  text-align: left;
  border-bottom: 1px solid #e5e5e5;
}
.icon {
  width: 0.44rem;
  height: 0.44rem;
  line-height: 0.44rem;
  border-radius: 50%;
  display: inline-block;
  background: #008489;
  color: #ffffff;
  text-align: center;
  margin-right: 0.2rem;
}
.time_st,
.time_ed {
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: 0.3rem;
  color: #3e3e3e;
  margin: 0.2rem 0;
}
.item_title {
  font-weight: bold;
  color: #050505;
  font-size: 0.36rem;
  height: 0.36rem;
  line-height: 0.36rem;
  margin-top: 0.61rem;
  margin-bottom: 0.27rem;
}
.price {
  position: absolute;
  right: 0.48rem;
  bottom: 0.64rem;
  color: #dc2613;
  font-size: 0.3rem;
  font-weight: bold;
}
i {
  font-weight: normal;
  font-size: 0.24rem;
}
</style>