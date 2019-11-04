<template>
  <div class="collect" style="background:#fff;" :fixed="fixed">
    <!-- header -->
    <Headertop :title="title" />

    <!-- 入住人 -->
    <div class="adduser" @click="adduser(1)">添加入住人</div>
    <div class="adduser_bz" @click="adduser(2)">
      添加中国大陆地区以外的入住人
      <van-icon name="arrow" style="top:17%" />
    </div>

    <!-- 已有信息 -->
    <div style="overflow:hidden;">
      <div
        v-for="item in personlist"
        :class="{move:candelete.residentsId==item.residentsId}"
        @touchstart="touchStart(item)"
        @touchend="touchEnd(item)"
        class="usermsgWrap"
        :key="item.residentsId"
      >
        <div class="usermsg" @click="adduser(3,item.residentsId)">
          <div class="username">{{item.residentsName}}</div>
          <div class="userid">身份证号：{{item.userId}}</div>
          <van-icon
            name="arrow"
            style="right:.61rem;position:absolute;top:.9rem;font-weight:bold;"
            size=".4rem"
            color="#DADADA"
          />
        </div>
        <div class="btnDel" @click="del(item.residentsId)">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
import { listResidents, updateResidents } from "../../api/order";
import { Icon } from "vant";
Vue.use(Icon);
import Headertop from "@/components/header/index";
export default {
  name: "Collect",
  data() {
    return {
      title: "常用联系人",
      fixed: true,
      personlist: [],
      clientNum: {}, // 记录开始滑动（x1）,结束滑动（x2）的鼠标指针的位置
      candelete: {} // 滑动的item
    };
  },
  props: {},
  methods: {
    touchStart(item) {
      let touchs = event.changedTouches[0];
      // 记录开始滑动的鼠标位置
      this.clientNum.x1 = touchs.pageX;
      this.candelete = {};
    },
    touchEnd(item) {
      let touchs = event.changedTouches[0];
      // 记录结束滑动的鼠标位置
      this.clientNum.x2 = touchs.pageX;
      this.candelete = {};
      // 判断滑动距离大于50，判定为滑动成功，否则失败
      if (
        this.clientNum.x2 < this.clientNum.x1 &&
        Math.abs(this.clientNum.x1) - Math.abs(this.clientNum.x2) > 50
      ) {
        event.preventDefault();
        this.candelete = item;
      } else if (
        this.clientNum.x2 > this.clientNum.x1 &&
        Math.abs(this.clientNum.x2) - Math.abs(this.clientNum.x1) > 10
      ) {
        event.preventDefault();
        this.candelete = {};
      }
    },
    //添加入住人 1大陆 2 除大陆
    adduser(i, residentsId) {
      this.$router.push({
        path: "/contacts/add/" + i,
        query: {
          residentsId: residentsId
        }
      });
    },
    // 删除入住人
    del(residentsId) {
      // console.log(residentsId);
      // alert("删除");
      updateResidents({ deleteState: 0, residentsId: residentsId })
        .then(res => {
          console.log(res);
          this.init();
        })
        .catch(err => {});
    },
    init() {
      //获取用户列表saveResidents
      listResidents({ deleteState: 1, limit: -1, currentPage: -1 })
        .then(res => {
          if (res.code == 0) {
            this.personlist = res.data.records;
          }
        })
        .catch(err => {});
    }
  },
  created() {
    this.init();
  },
  mounted() {},
  components: {
    Headertop
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.usermsgWrap {
  position: relative;
  transform: translateX(0);
  transition: all 0.3s; /*滑动效果更生动*/
  display: flex;
  padding-left: 10px;
}
.usermsgWrap.move {
  transform: translateX(-60px); /*滑动后x轴位移-60px,使其可见*/
}
.btnDel {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  width: 60px;
  height: 2.16rem;
  text-align: center;
  color: #fff;
  background-color: #ff5b45;
  transform: translateX(60px); /*默认x轴位移60px，使其隐藏*/
  font-size: 0.5rem;
  align-items: center;
  display: -webkit-flex;
  justify-content: center;
}
.adduser {
  margin-top: 1.32rem;
  font-size: 0.42rem;
  color: #fff;
  width: 10.2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  background: #fbb75e;
  margin: 1.32rem auto 0;
  border-radius: 0.1rem;
}
.adduser_bz {
  font-size: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #212121;
  margin: 0.64rem 0 1.31rem;
}
.usermsg {
  position: relative;
  padding-left: 0.28rem;
  padding-top: 0.44rem;
  padding-bottom: 0.49rem;
  width: 10.2rem;
  height: 2.16rem;
  background-color: #f0f0f0;
  margin: 0 auto 1.31rem;
  border-radius: 0.1rem;
  text-align: left;
  box-sizing: border-box;
}
.username {
  font-size: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #212121;
}
.userid {
  color: #a8a8a8;
  font-size: 0.34rem;
  height: 0.34rem;
  line-height: 0.34rem;
  padding-top: 0.53rem;
}
</style>
