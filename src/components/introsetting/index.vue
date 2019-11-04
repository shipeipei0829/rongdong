<template>
  <textarea class="textupdata" name id cols rows :placeholder="textinfo" v-model="text"></textarea>
</template>

<script>
import { updateAppuser } from "../../api/mine";
export default {
  name: "Textupdata",
  data() {
    return {
      text: "",
      path: this.$route.path,
      me: JSON.parse(localStorage.getItem("me"))
    };
  },
  props: {
    textinfo: {
      type: String,
      default: ""
    } //placeholder内容
  },
  methods: {},
  mounted() {
    console.log(this.path);
  },
  created() {},
  watch: {
    text: {
      handler(newName, oldName) {
        console.log(newName, this.path, "表单发生改变");
        if (this.path == "/setting/nicknamesetting") {
           localStorage.setItem("nickname", newName);
            updateAppuser({ nickName: newName }).then(res => {
            console.log(res);
          });
        }
        if (this.path == "/setting/introsetting") {
          //修改本地存储里的简介
          // for (let key in this.me) {
          //   if (key == "intro") {
          //     this.me["intro"] = newName;
          //   }
          // }
          // localStorage.setItem("me", JSON.stringify(this.me));
          localStorage.setItem("userDesc", newName);
          updateAppuser({ userDesc: newName }).then(res => {
            console.log(res);
          });
        }
      },
      deep: true
    }
  },
  components: {}
};
</script>
<style scoped>
.textupdata {
  margin-top: 0.2rem;
  width: 9.84rem;
  height: 2.16rem;
  background: #f0f0f0;
  font-size: 0.36rem;
  color: #2f2f2f;
  padding: 0.28rem;
  box-sizing: border-box;
  resize: none;
  -webkit-appearance: none;
  outline: none;
  border-radius: 0.1rem;
}
</style>
