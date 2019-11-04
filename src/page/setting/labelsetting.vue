<template>
  <div class="introsetting" style="height:100vh;background:#fff;">
    <Headertop :title="title" :righttext="righttext" />
    <!-- 标签 -->
    <div class="labelwrap">
      <div class="label">
        <span
          :class="active == item.id ? 'select' : 'label_item'"
          v-for="item in label"
          :key="item.id"
          @click="select(item)"
        >{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { listTag ,saveTags} from "../../api/mine";
import Headertop from "@/components/header/index";
export default {
  name: "Introsetting",
  data() {
    return {
      title: "个性标签",
      righttext: "完成",
      active: "1",
      index: "0",
      me: JSON.parse(window.localStorage.getItem("me")),
      label: []
    };
  },
  props: {},
  methods: {
    // 选中
    select(item) {
      this.active = item.id;
      console.log(item.title);
      saveTags({tagId:item.id}).then(res=>{console.log(res)})
    }
  },  
  created() {
    //获取标签列表
    listTag()
      .then(res => {
        console.log(res)
        if (res.code == 0) {
          console.log(res)
          this.label = res.data;
        }
      })
      .catch(err => {});
  },
  mounted() {},
  watch: {},
  components: {
    Headertop
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.labelwrap {
  margin: 0 0.62rem;
  text-align: left;
  overflow-x: auto;
}
.label {
  width: 16rem;
}
.labelwrap::-webkit-scrollbar {
  display: none;
}
.label_item {
  /* width: 2.3rem; */
  padding: 0 0.4rem;
  height: 0.78rem;
  display: inline-block;
  border: 1px solid #008489;
  border-radius: 0.1rem;
  font-size: 0.4rem;
  line-height: 0.78rem;
  margin: 0.4rem 0.25rem 0 0;
  text-align: center;
  color: #008489;
}
.select {
  /* width: 2.3rem; */
  padding: 0 0.4rem;
  height: 0.78rem;
  display: inline-block;
  border: 1px solid #008489;
  border-radius: 0.1rem;
  font-size: 0.4rem;
  line-height: 0.78rem;
  margin: 0.4rem 0.25rem 0 0;
  text-align: center;
  color: #fff;
  background: #008489;
}
.van-nav-bar__right:active {
  background: #008489 !important;
}
.van-nav-bar__text:active {
  background: #008489 !important;
}
</style>