<template>
  <div class="loginwap">
    <div class="loginbg">
      <img src="./img/loginbg.png" width="100%" alt />
      <div class="loadicon">启动图标</div>
    </div>
    <div class="conwap">
      <img style="width:1.26rem;height:.6rem" class="ringuplogo" src="./img/hi.png" alt />
      <InputButtons
        @inputVal="setusername"
        class="inputbut"
        :textinfo="iptbtn1.textinfo"
        :imgsrc="iptbtn1.imgsrc"
      />
      <InputButtons
        @inputVal="setpassword"
        class="inputbut"
        type="password"
        :textinfo="iptbtn2.textinfo"
        :imgsrc="iptbtn2.imgsrc"
      />
      <div class="clearfix">
        <a @click="handleclik('signin')" class="fl btnlog">注册</a>
        <a @click="handleclik('forgetpswd')" class="fr btnlog">忘记密码</a>
      </div>
      <div class="btnswap">
        <Buttons @click.native="handleclik('submit')" class="login1" :value="value" />
      </div>
      <div class="border">
        <span>OR</span>
        <div class="lognlogo">
          <b>
            <img src="./img/qq.png" alt="qq" />
          </b>
          <b>
            <img src="./img/watch.png" alt="微信" />
          </b>
          <b>
            <img src="./img/sina.png" alt="新浪" />
          </b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Buttons from "./components/buttons/index.vue";
import InputButtons from "./components/inputbuttons/index.vue";
import { subregister } from "@/api/login/index";
import { setToken } from "@/api/util";
import { Notify } from 'vant';
export default {
  name: "ringup",
  data() {
    return {
      value: "登录",
      username: "",
      password: "",
      iptbtn1: {
        imgsrc: "user",
        textinfo: "请输入用户名"
      },
      iptbtn2: {
        imgsrc: "password",
        textinfo: "请输入密码"
      }
    };
  },
  props: {
    msg: String
  },
  methods: {
    handleclik(status) {
      if (status == "signin") {
        this.$router.push({ path: "/login/signin" });
      } else if (status == "forgetpswd") {
        this.$router.push({ path: "/login/forgetpswd" });
      } else if (status == "submit") {
        var username = this.username;
        var password = this.password;
        subregister({ username, password })
          .then(res => {
            if(res.code == 0){
              setToken(res.data.access_token, { token: true });
              this.$router.push({ path: "/home/index" });
            }else{
               Notify({ type: 'danger', message: res.message });
            }
          })
          .finally(() => {
            
          });
      }
    },
    setusername(obj) {
      this.username = obj.value;
    },
    setpassword(obj) {
      this.password = obj.value;
    }
  },
  components: {
    Buttons,
    InputButtons
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
