<template>
  <div class="introsetting" style="height:100vh;width:100%;background:#fff;">
    <Headertop :title="title" :righttext="righttext" />
    <!-- 组件 -->
    <Textinfo :placeholder="textinfo"  />
  </div>
</template>

<script>
import Headertop from "@/components/header/index";
import Textinfo from "@/components/introsetting/index";
export default {
  name: "Introsetting",
  data() {
    return {
      title: "修改昵称",
      textinfo: "请输入昵称",
      righttext: "完成",
    };
  },
  props: {},
  methods: {
    
  },
  mounted() {},
  components: {
    Headertop,
    Textinfo
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>