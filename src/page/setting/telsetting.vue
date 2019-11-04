<template>
  <div class="telsetting" style="height:100vh;width:100%;background:#fff;">
    <Headertop :title="title" />

    <div class="inputwrp">
      <InputButtons class="inputbut" :textinfo="iptbtn1.textinfo" :imgsrc="iptbtn1.imgsrc" />

      <div class="yzmwap">
        <InputButtons
          class="inputbut"
          :textinfo="iptbtn2.textinfo"
          :imgsrc="iptbtn2.imgsrc"
          :type="iptbtn2.type"
        />
        <a class="getyzmtext" href="javascript:;">获取验证码</a>
      </div>
    </div>

    <div class="btnswap">
      <Buttons @click.native="handleup" class="login1" :value="value" />
    </div>
  </div>
</template>

<script>
import Headertop from "@/components/header/index";
import InputButtons from "../../login/components/inputbuttons/index";
import Buttons from "../../login/components/buttons/index";
export default {
  name: "Telsetting",
  data() {
    return {
      title: "修改手机号码",
      value: "确认",
      iptbtn1: {
        imgsrc: "lognphone",
        textinfo: "请输入手机号（大陆）"
      },
      iptbtn2: {
        imgsrc: "lognyzm",
        textinfo: "请输入验证码",
        type: "password"
      }
    };
  },
  props: {
    msg: {}
  },
  methods: {},
  mounted() {},
  components: {
    Headertop,
    InputButtons,
    Buttons
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btnswap {
  margin-top: 0.55rem;
}
.inputwrp {
  padding: 0 1.23rem;
}
.telsetting >>> .van-field__body input {
  border: none;
  outline: none;
  color: #999999;
  font-size: 0.4rem;
  padding-top: .2rem;
}
.telsetting >>> .inputbutton {
  height: 1.4rem;
  line-height: 1.4rem;
}
img {
  vertical-align: middle;
}
.telsetting >>> .van-cell__value--alone {
  height: 100%;
}
.telsetting >>> img {
  margin-top: 0.3rem;
}
.telsetting >>> .van-cell {
  padding: 0;
}
.telsetting >>> .van-field__body {
  height: 100% !important;
}
.telsetting >>> .van-field__control {
  height: 100% !important;
}
</style>