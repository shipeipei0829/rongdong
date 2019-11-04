<template>
  <div class="window" style>
    <!-- header -->
    <Headertop :title="title" :fixed="fixed" class="header" />
    <!-- body -->
    <div class="main">
      <div class="container" style="overflow-y:scroll;padding-bottom:1.46rem;">
        <Msgrow :isleft="msg0.isleft" :con="msg0.con" />
        <Msgrow :isleft="msg1.isleft" :con="msg1.con" />
        <Msgrow :isleft="msg2.isleft" :con="msg2.con" />
        <Msgdet />
        <Msgrow :isleft="msg3.isleft" :con="msg3.con" />
        <Msgrow :isleft="msg4.isleft" :con="msg4.con" />

        <Msgrow :isleft="msg.isleft" :con="msg.con" v-if="show" />
      </div>
    </div>

    <!-- 固定定位footer -->
    <div class="bottom">
      <!-- 语音图标 -->
      <img src="../../img/yuyin.png" alt class="icon" @click="istoggle=false" v-if="istoggle" />
      <img src="../../img/jianpan.png" alt class="icon" @click="istoggle=true" v-if="!istoggle" />
      <textarea
        name
        id
        cols
        rows
        class="text wenzi"
        v-if="istoggle"
        @click="inputbox"
        v-model="text"
        v-on:keyup.13="submit"
      ></textarea>
      <div class="text yuyin" v-if="!istoggle">按住 说话</div>
      <img src="../../img/xiao.png" alt class="icon" />
      <img src="../../img/jia.png" alt class="icon" />
    </div>
  </div>
</template>
<script>
import Headertop from "@/components/header/index";
import Msgrow from "@/components/msgrow/index";
import Msgdet from "@/components/msgrow/msgdet";
//轻提示
import { Toast } from "vant";
Vue.use(Toast);
export default {
  name: "Window",
  data() {
    return {
      title: "在线客服",
      fixed: true,
      istoggle: false,
      show: false,
      msg: {
        isleft: false,
        con: ""
      },
      msg0: {
        isleft: false,
        con: "您好在吗？"
      },
      msg1: {
        isleft: true,
        con: "你好，在的！"
      },
      msg2: {
        isleft: false,
        con: "这个还租吗？"
      },
      msg3: {
        isleft: true,
        con: "1234"
      },
      msg4: {
        isleft: false,
        con: "2234"
      },
      text: "" //发送的文字
    };
  },
  components: {
    Headertop,
    Msgrow,
    Msgdet
  },
  methods: {
    inputbox() {},
    //发送
    submit() {
      console.log(this.text);
      if (this.text != "") {
        this.msg.con = this.text;
        this.text = "";
        this.show = true;
      } else {
        //弹一个提示
        ruturn;
        Toast("发送的内容不能为空");
      }
    }
  }
};
</script>
<style scoped>
.window {
  position: relative;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background: #f0f0f0;
}
.header,
.container,
.bottom {
  display: block;
}
.container {
  /* main绝对定位，进行内部滚动 */
  position: absolute;
  top: 1.3rem;
  bottom: 1.46rem;
  /* 使之可以滚动 */
  overflow-y: scroll;
  /* 增加该属性，可以增加弹性，是滑动更加顺畅 */
  -webkit-overflow-scrolling: touch;
  background-color: #ececec;
  overflow-y: auto;
  width: 100%;
}

.bottom {
  height: 1.46rem;
  background: #f1f1f1;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  padding: 0 0.58rem;
}
.icon {
  width: 0.58rem;
  height: 0.58rem;
}
.text {
  width: 7rem;
  height: 1rem;
  border-radius: 0.5rem;
  outline: none;
  resize: none;
  font-size: 0.4rem;
  padding: 0 0.3rem;
  outline: none;
  -webkit-appearance: none;
  -webkit-user-select: auto;
}
.yuyin {
  line-height: 1rem;
  background: #ccc;
}
.wenzi {
  line-height: 1rem;
}
</style>