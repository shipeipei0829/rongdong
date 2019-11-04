<template>
  <div class="msgrow">
    <div class="msgleft" v-if="isleft">
      <img src="../../img/fangdong.png" alt />
      <p class="conleft" style="margin-left:.4rem">{{con}}</p>
    </div>
    <div class="msgright" v-if="!isleft">
      <p class="conright" style="margin-right:.4rem">{{con}}</p>
      <img src="../../img/renwu.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: "msgrow",
  data() {
    return {};
  },
  props: {
    con: {
      type: String,
      default: "您好在吗？"
    },
    isleft: {
      type: Boolean,
      default: true
    }
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.msgrow {
  margin: 0.4rem 0.47rem;
}
.msgleft,
.msgright {
  display: flex;
}
.msgleft {
}
.msgright {
  justify-content: flex-end;
}
img {
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
}

p {
  font-size: 0.38rem;
  line-height: 0.6rem;
  background: #fff;
  max-width: 6rem;
  text-align: left;
  border-radius: 0.2rem;
  position: relative;
  padding: 0.2rem 0.3rem;
}
.conleft::before {
  position: absolute;
  left: -0.5rem;
  top: 0.2rem;
  content: "";
  width: 0;
  height: 0;
  border: 0.3rem solid;
  border-color: transparent #fff transparent transparent;
}
.conright::after {
  position: absolute;
  right: -0.5rem;
  top: 0.2rem;
  content: "";
  width: 0;
  height: 0;
  border: 0.3rem solid;
  border-color: transparent transparent transparent #008489;
}
.conright {
  background-color: #008489;
  color: #fff;
}
</style>