<template>
  <div class="pwdsetting" style="height:100vh;width:100%;background:#fff;">
    <Headertop :title="title" />

    <div class="inputwrp">
      <InputButtons class="inputbut" :textinfo="iptbtn1.textinfo" :imgsrc="iptbtn1.imgsrc" :type="iptbtn1.type" />
      <InputButtons class="inputbut" :textinfo="iptbtn2.textinfo" :imgsrc="iptbtn2.imgsrc" :type="iptbtn2.type"/>
      <InputButtons class="inputbut" :textinfo="iptbtn3.textinfo" :imgsrc="iptbtn3.imgsrc" :type="iptbtn3.type"/>
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
  name: "Pwdsetting",
  data() {
    return {
      title: "修改登录密码",
      value: "确认",
      iptbtn1: {
        imgsrc: "password",
        textinfo: "请输入原密码",
        type: "password"
      },
      iptbtn2: {
        imgsrc: "password",
        textinfo: "请输入新密码",
        type: "password"
      },
      iptbtn3: {
        imgsrc: "password",
        textinfo: "请再次确认密码",
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
.pwdsetting >>> .van-field__body input {
  border: none;
  outline: none;
  color:#999999;
  font-size: .4rem;
  padding-top: .3rem;
}
.pwdsetting >>> .inputbutton{
  height: 1.4rem;
  line-height: 1.4rem;
  /* border: 1px solid #000; */
  }
.pwdsetting >>> img{
    margin-top: .3rem;
}
.pwdsetting >>>  .van-cell{
  padding:0;
}
.pwdsetting >>>  .van-field__body{
  height: 100%!important;
}
.pwdsetting>>>.van-field__control{
  height: 100%!important;
}

</style>