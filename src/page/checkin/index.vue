<template>
  <div style="background:#F0F0F0;height:100vh;padding-top:1.46rem" class="checkin">
    <div class="complete">
      <Leftheader title="选择入住人"></Leftheader>
      <p class="complete_right" @click="onComplete_right()">完成</p>
    </div>
    <div class="complete_check">
      <p>请选择入住人</p>
      <!-- 一楼 -->
      <div>
        <van-checkbox-group v-model="result">
          <van-checkbox v-for="(item,index) in personlist" :key="index" :name="item">
            <p class="nameinfo">{{item.residentsName}}</p>
            <p class="idinfo">
              证件号码：
              <span>{{item.idCardNo}}</span>
            </p>
            <img
              slot="icon"
              slot-scope="props"
              class="complete_img"
              :src="props.checked ? icon.active : icon.inactive"
            />
          </van-checkbox>
        </van-checkbox-group>
      </div>
    </div>
    <div class="complete_add" @click="()=>{this.$router.push({path:'/contacts/add/1'})}">
      <img src="@/img/goub.png" alt />
    </div>
    <div class="adduser_bz" @click="()=>{this.$router.push({path:'/contacts/add/2'})}">
      添加中国大陆地区以外的入住人
      <van-icon name="arrow" style="top:17%" />
    </div>
  </div>
</template>
<script>
import { listResidents } from "../../api/order";
import { Checkbox, CheckboxGroup } from "vant";
Vue.use(Checkbox).use(CheckboxGroup);
import Leftheader from "@/components/header/index";
export default {
  data() {
    return {
      radio: "1",
      icon: {
        active: require("@/img/gou.png"),
        inactive: require("@/img/goua.png")
      },
      personlist: [
        // {
        //   username: "张无忌",
        //   userid: "420000111111110000"
        // },
        // {
        //   username: "张三丰",
        //   userid: "420000111111110001"
        // }
      ],
      result: []
    };
  },
  components: {
    Leftheader
  },
  created() {
    //获取用户列表saveResidents
    listResidents({ deleteState: 1, limit: -1, currentPage: -1 })
      .then(res => {
        if (res.code == 0) {
          this.personlist = res.data.records;
        }
      })
      .catch(err => {});
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    // 选入住人返回
    onComplete_right() {
      console.log(this.result);
      localStorage.setItem("person", JSON.stringify(this.result));
      if (this.$route.query.ordertype == "999") {
        this.$router.go(-1);
        // 选择入住人
      }
    }
  },
  filters: {
    idFilter(obj) {
      return obj.replace(/(\d{6})\d{8}(\d{4})/, "$1 XXXXXXXX $2");
    }
  },
  watch: {
    result(val, newval) {
      console.log(val);
    }
  }
};
</script>
<style scoped>
.adduser_bz {
  font-size: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #212121;
  margin: 0.64rem 0 1.31rem;
}
.van-checkbox {
  margin-bottom: 0.3rem;
  padding-bottom: 0.3rem;
  padding: 0.43rem 0rem 0.53rem 0.42rem;
  background: #ffffff !important;
}
.complete {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}

.complete_right {
  position: absolute;
  width: 1.2rem;
  height: 1.3rem;
  line-height: 1.3rem;
  z-index: 8;
  color: #ffffff;
  top: 0rem;
  right: 0.43rem;
  font-size: 0.5rem;
  font-weight: 500;
}

.complete_check {
  text-align: left;
}

.complete_check > p {
  font-size: 0.34rem;
  color: #bebebe;
  padding: 0.15rem 0rem 0.15rem 0.5rem;
}

.nameinfo {
  color: #323232;
  font-size: 0.42rem;
  font-weight: 800;
}

.idinfo {
  color: #323232;
  font-size: 0.38rem;
  font-weight: 500;
  height: 0.92rem;
  line-height: 0.92rem;
}

.complete_img {
  width: 0.4rem;
  height: 0.4rem;
}

.complete_add {
  width: 100%;
  padding: 0.8rem 0.42rem 0rem 0.42rem;
}

.complete_add > img {
  width: 100%;
}
</style>