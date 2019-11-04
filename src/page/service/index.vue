<template>
  <div class="service" style="background:#f0f0f0;padding-top:1.3rem;padding-bottom:2rem;">
    <Headertop :title="title" :fixed="fixed"/>
    <Msgitem />
    <Msgitem :isshow="isshow"/>
    <Msgitemthr />
  </div>
</template>
<script>
import Headertop from "@/components/header/index";
import Msgitem from "@/components/msgitem/index";
import Msgitemthr from "@/components/msgitemthr/index";
export default {
  name: "Service",
  data() {
    return {
      title: "消息中心",
      fixed:true,
      isshow:false,
    };
  },
  components: {
    Headertop,
    Msgitem,
    Msgitemthr
  },
  methods: {}
};
</script>
<style scoped>

</style>