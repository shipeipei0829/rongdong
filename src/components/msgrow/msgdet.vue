<template>
  <div class="msgdet">
    <div class="msgright">
      <img :src="require(`../../img/${pic}`)" alt />
      <div style="padding:0.2rem 0.3rem;text-align:left;">
        <div class="price">￥120</div>
        <hr />
        <p>入住：2019年3月12日 12:00</p>
        <p>离店：2019年3月12日 16:00</p>
      </div>
    </div>
    <img src="../../img/renwu.png" alt class="user" />
  </div>
</template>
<script>
export default {
  name: "Msgdet",
  data() {
    return {};
  },
  props: {
    con: {
      type: String,
      default: "您好在吗？"
    },
    pic: {
      type: String,
      default: "msgitem.png"
    }
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.msgdet {
  margin: 0.4rem 0.47rem;
  display: flex;
  justify-content: flex-end;
  border-radius: 0.2rem;
}
.msgright:after {
  position: absolute;
  right: -0.5rem;
  top: 0.2rem;
  content: "";
  width: 0;
  height: 0;
  border: 0.3rem solid;
  border-color: transparent transparent transparent #fff;
}
.msgright {
  width: 6rem;
  position:relative;
  margin-right: .4rem;
  background: #fff;
  border-radius: 0.2rem;
}
.user {
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
}
img {
  width: 100%;
  height: 2rem;
  border-radius: .2rem;
}
hr {
  height: 0;
  margin: 0;
}
.price{
  color: #E72D2D;
  font-size: .38rem;
}
p{
  color: #505050;
  font-size: .3rem;
}
</style>