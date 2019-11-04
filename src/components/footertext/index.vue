<template>
  <div>
    <div class="footer_text">
      <p>
        我同意
        <span style="color:#73C8FF;">
          <i @click="handlerStatus({status:'protocolCheckIn'})">《入住协议》</i>
          <i @click="handlerStatus({status:'protocolServe'})">《酒店服务协议》</i>
          <i @click="handlerStatus({status:'ruleRoom'})">《客房规则》</i>
        </span>
        及酒店规定的退订转售以及入驻规则
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handlerStatus(obj) {
      console.log(obj);
      if (obj.status == "protocolCheckIn") {
        this.$router.push({ path: "/page/homeRule/protocolCheckIn" });
      }
      if (obj.status == "protocolServe") {
        this.$router.push({ path: "/page/homeRule/protocolServe" });
      }
      if (obj.status == "ruleRoom") {
        this.$router.push({ path: "/page/homeRule/ruleRoom" });
      }
    }
  },
  components: {}
};
</script>
<style>
.footer_text {
  width: 100%;
  padding: 0.39rem 0rem 0.39rem 0.2rem;
  font-size: 0.3rem;
  text-align: left;
}

.footer_text > p {
  width: 7.5rem;
}
</style>