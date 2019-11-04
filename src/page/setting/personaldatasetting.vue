<template>
  <div class="personaldata" style="height:100vh;width:100%;background:#F0F0F0;">
    <Headertop :title="title" />
    <!-- 头像 -->
    <div class="imgwrap" style="background:#fff">
      <!-- 头像上传 -->
      <van-uploader :after-read="onRead" multiple>
        <img class="head-img" :src="me.photo" ref="goodsImg" />
      </van-uploader>

      <div class="changeimg">点击更换头像</div>
    </div>

    <!-- 资料详情 -->
    <ul class="datadetails">
      <li class="details_item" @click="updatenickname">
        <div class="details_left">昵称</div>
        <div class="details_right">
          {{user.nickname}}&nbsp;&nbsp;
          <van-icon name="arrow" />
        </div>
      </li>
      <hr />
      <li class="details_item" @click="updataintro">
        <div class="details_left">简介</div>
        <div class="details_right">
          {{user.userDesc|filterFun}}&nbsp;&nbsp;
          <van-icon name="arrow" />
        </div>
      </li>
      <hr />
      <li class="details_item" @click="showdate = true">
        <div class="details_left">生日</div>
        <div class="details_right">
          {{user.birthday|filterBir}}&nbsp;&nbsp;
          <van-icon name="arrow" />
        </div>
      </li>
      <hr />
      <li class="details_item" @click="showPicker = true">
        <div class="details_left">性别</div>
        <div class="details_right">
          {{user.sex}}&nbsp;&nbsp;
          <van-icon name="arrow" />
        </div>
      </li>
      <hr />
      <li class="details_item" @click="showarea = true">
        <div class="details_left">地区</div>
        <div class="details_right">
          {{user.area}}&nbsp;&nbsp;
          <van-icon name="arrow" />
        </div>
      </li>
      <hr />
      <li class="details_item" @click="updatalabel">
        <div class="details_left">个性签名</div>
        <div class="details_right">
          {{user.tag}}&nbsp;&nbsp;
          <van-icon name="arrow" />
        </div>
      </li>
    </ul>
    <!-- 性别 -->
    <van-popup v-model="showPicker" position="bottom" :overlay="true" style="height:8rem;">
      <van-picker
        show-toolbar
        title="请选择性别"
        :columns="columns"
        value-key="value"
        @cancel="showPicker = false"
        @confirm="changesex"
        style="position:fixed;left:0;bottom:0;width:100%;"
      />
    </van-popup>
    <!-- 出生日期 -->
    <van-popup v-model="showdate" position="bottom">
      <van-datetime-picker
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="showdate = false"
        @confirm="handleConfirm"
      />
    </van-popup>

    <!-- 省市区选择 -->
    <van-popup v-model="showarea" position="bottom">
      <van-area
        :area-list="AreaList"
        :columns-num="3"
        value="110101"
        @cancel="showarea = false"
        @confirm="changearea"
      />
    </van-popup>
  </div>
</template>

<script>
// 引入
import { infoAppuser, listArea, updateAppuser } from "../../api/mine";
import { Image, Tab } from "vant";
import { Icon } from "vant";
import { Area } from "vant";

Vue.use(Area);
Vue.use(Icon);
Vue.use(Image);

import Headertop from "@/components/header/index";
export default {
  name: "Personaldata",
  data() {
    return {
      title: "我的资料",
      //个人中心信息
      // user: this.$store.state.me.user,
      //个人信息(本地存)
      me: "",
      user: "",
      columns: [
        { type: "0", value: "保密" },
        { type: "1", value: "男" },
        { type: "2", value: "女" }
      ], //性别
      showPicker: false,
      showdate: false, //出生日期
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(),
      showarea: false, //地区选择
      AreaList: {
        // province_list: {
        //   110000: "北京市",
        //   120000: "天津市"
        // },
        // city_list: {
        //   110100: "北京市",
        //   120100: "天津市"
        // },
        // county_list: {
        //   110101: "东城区",
        //   110102: "西城区",
        //   110105: "朝阳区",
        //   110106: "丰台区",
        //   120101: "和平区",
        //   120102: "河东区",
        //   120103: "河西区",
        //   120104: "南开区",
        //   120105: "河北区"
        //   // ....
        // }
      }
    };
  },
  props: {
    msg: {},
    areaList: ""
  },
  methods: {
    onRead(file) {
      console.log(this.me);
      //将原图片显示为选择的图片
      this.$refs.goodsImg.src = file.content;
      console.log(file.content);
      this.me["photo"] = file.content;
      this.setlocalStorage();
      console.log(this.me);
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file);
    },
    updatenickname() {
      this.$router.push("/setting/nicknamesetting");
    }, //修改昵称
    updataintro() {
      this.$router.push("/setting/introsetting");
    }, //修改简介
    updatalabel() {
      this.$router.push("/setting/labelsetting");
    }, //修改个性签名
    onChange(picker, value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
      this.sex = value;
    }, //选项改变时触发
    onConfirm(picker, value, index) {
      this.sex = this.sex;
      this.showPicker = false;
      this.showdate = false;
    }, //点击完成按钮时触发
    onCancel() {
      this.showPicker = false;
      this.showdate = false;
      this.showarea = false;
    }, //点击取消按钮时触发
    changesex(picker) {
      console.log(picker);
      // 修改性别
      updateAppuser({ sex: picker.type }).then(res => {
        console.log("修改性别成功");
      });
      this.user.sex = picker.value;
      this.showPicker = false;
    }, //修改性别
    handleConfirm(value) {
      var date = value;
      var m = date.getMonth() + 1;
      var d = date.getDate();
      if (m >= 1 && m <= 9) {
        m = "0" + m;
      }
      if (d >= 0 && d <= 9) {
        d = "0" + d;
      }
      this.user.birthday = date.getFullYear() + "-" + m + "-" + d + " 00:00:00";
      var birthday = date.getFullYear() + "-" + m + "-" + d + " 00:00:00";
      this.showdate = false;
      // 修改生日
      updateAppuser({ birthday: birthday }).then(res => {
        console.log("修改生日成功");
      });
    }, //出生日期选择器
    changearea(value) {
      this.showarea = false;
      console.log(value);
      this.user.area =
        value[0].name + " " + value[1].name + " " + value[2].name;
      // 修改地区
      updateAppuser({ cityName: value[2].name, vueCode: value[2].code }).then(
        res => {
          console.log("修改城市成功");
        }
      );
    }, //修改省市区
    getInfo() {
      infoAppuser()
        .then(res => {
          if (res.code == 0) {
            console.log(res.data);
            this.user = res.data;
            if (this.user["sex"] == 1) {
              this.user["sex"] = "男";
            } else if (this.user["sex"] == 2) {
              this.user["sex"] = "女";
            } else {
              this.user["sex"] = "保密";
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  // updated(){this.getInfo();},
  created() {
    console.log(Math.random())
    this.me = JSON.parse(window.localStorage.getItem("me"));
    console.log(this.$route.meta.isBack)
  },
  mounted() {
    //app用户基本信息
    this.getInfo();
    //获取城市列表
    listArea().then(res => {
      if (res.code == 0) {
        this.AreaList = res.data;
      }
    });
  },
  watch: {
    $route(to, from) {
      if (to == "/setting/introsetting") {
        // this.getInfo();
        this.reload()
      }
    }
  },
  // watch: {
  //监听本地me
  // me: {
  //   handler(newName, oldName) {
  //     console.log(JSON.parse(newName), "设置me的本地信息发生改变");
  //     // var newName = JSON.stringify(newName);
  //     window.localStorage.setItem("me", newName);
  //   },
  //   deep: true
  // }
  // },
  components: {
    Headertop,
    // "app-brands": Brand
  },
  filters: {
    //简介超出部分省略号
    filterFun: function(value) {
      if (value && value.length > 12) {
        value = value.substring(0, 12) + "...";
      }
      return value;
    },
    filterBir: function(value) {
      if (value && value != "") {
        return (
          value.slice(0, 4) +
          "年" +
          value.slice(5, 7) +
          "月" +
          value.slice(8, 10) +
          "日"
        );
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-icon {
  top: 4%;
}
hr {
  margin: 0;
  height: 1px;
  background-color: #d8d8d8;
  border: none;
  width: 95%;
}
.head-img {
  width: 2rem;
  height: 2rem;
  margin-top: 0.6rem;
  border-radius: 50%;
}
.imgwrap {
  padding-bottom: 0.5rem;
}
.clkchange {
  font-size: 0.36rem;
  color: #9e9999;
}
.changeimg {
  font-size: 0.36rem;
  color: #9e9999;
  margin-top: 0.2rem;
}
.datadetails {
  margin-top: 0.24rem;
  padding: 0 0.78rem;
  background: #fff;
}
.details_item {
  height: 1.1rem;
  line-height: 1.1rem;
  /* border-bottom: 1px solid #d8d8d8; */
  display: flex;
  justify-content: space-between;
}
.details_left {
  font-size: 0.36rem;
  color: #262626;
}
.details_right {
  font-size: 0.3rem;
  color: #6e6e6e;
}
</style>