<template>
  <div class="failparent">
    <Fail src="ruzhu" value="入住人信息"></Fail>
    <ul class="ruzhu_list">
      <!-- <li>
        <div>
          <p>
            姓名（房间
            <span>1</span> ）
          </p>
        </div>
        <p>张无忌</p>
      </li>-->
      <!-- <li class="ruzhu_top">
        <div>
          <p>
            姓名（房间
            <span>1</span> ）
          </p>
        </div>
        <p>赵敏</p>
      </li>-->
      <li class="ruzhu_top">
        <div>
          <p>
            姓名（房间
            <span>1</span> ）
          </p>
        </div>
        <p>
          <span v-for="item in personlist" :key="item.userid" class="user">{{item.residentsName}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import Fail from "@/components/fail/index.vue";
export default {
  data() {
    return {};
  },
  components: {
    Fail
  },
  props: {
    personlist: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  mounted() {}
};
</script>
<style>
.failparent {
  margin: 0.3rem 0.5rem;
  background: #fff;
  padding-right: 0.16rem;
  padding-left: 0.27rem;
}
.ruzhu_list {
  padding: 0.3rem 0rem 0.34rem 0.17rem;
}

.ruzhu_list > li {
  display: flex;
  text-align: left;
}

.ruzhu_list > li > div {
  width: 2.5rem;
  font-weight: 400;
  color: rgba(115, 115, 115, 1);
}

.ruzhu_list > li > p {
  font-size: 0.3rem;
}

.ruzhu_top {
  margin-top: 0.35rem;
}

.bottom_button {
  outline: none;
  border: none;
}
.user {
  margin-right: 0.3rem;
}
</style>