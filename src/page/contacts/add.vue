<template>
  <div class="add" style="background:#F0F0F0;height:100vh" :fixed="fixed">
    <!-- header -->
    <Headertop :title="title" />

    <!-- 入住人 -->
    <p class="info">请输入身份信息</p>

    <!-- 非大陆入口 -->
    <van-cell-group>
      <van-field
        v-model="users.name"
        v-if="isshow"
        :clearable="true"
        placeholder="真实姓名（请确保信息真实）"
        @click-right-icon="$toast('question')"
      />

      <van-field
        v-model="users.name"
        v-if="!isshow"
        :clearable="true"
        placeholder="JACK"
        @click-right-icon="$toast('question')"
      />
      <!-- 国籍 -->
      <div class="inputwrap" @click="show = true" v-if="!isshow">
        <div class="input_label">国籍</div>
        <div class="input_tab">
          <span>{{users.country}}</span>
          <van-icon name="arrow" size=".4rem" />
        </div>
      </div>
      <div class="inputwrap" v-if="isshow">
        <div class="input_label">国籍</div>
        <div class="input_tab">
          <span>中国</span>
          <van-icon name="arrow" size=".4rem" color="#888" />
        </div>
      </div>
      <!-- 性别 -->
      <div class="inputwrap" @click="showPicker = true">
        <div class="input_label">性别</div>
        <div class="input_tab">
          <span>{{users.sex}}</span>
          <van-icon name="arrow" size=".4rem" />
        </div>
      </div>
      <!-- 生日 -->
      <div class="inputwrap" @click="showdate = true">
        <div class="input_label">生日</div>
        <div class="input_tab">
          <span>{{users.time}}</span>
          <van-icon name="arrow" size=".4rem" />
        </div>
      </div>
      <!-- 证件类型 -->
      <div class="inputwrap" @click="showcardType = true" v-if="!isshow">
        <div class="input_label">证件类型</div>
        <div class="input_tab">
          <span>{{users.cardType}}</span>
          <van-icon name="arrow" size=".4rem" />
        </div>
      </div>
      <div class="inputwrap" v-if="isshow">
        <div class="input_label">证件类型</div>
        <div class="input_tab">
          <span>大陆身份证</span>
          <van-icon name="arrow" size=".4rem" color="#888" />
        </div>
      </div>
      <!-- 护照 -->
      <van-field
        v-model="users.idx"
        :clearable="true"
        type="text"
        v-if="!isshow"
        placeholder="护照号（请确保信息真实）"
      />
      <van-field
        v-model="users.idx"
        :clearable="true"
        type="number"
        v-if="isshow"
        placeholder="身份证号（请确保信息真实）"
      />
      <!-- 手机号 -->
      <van-field v-model="users.phone" :clearable="true" type="number" placeholder="联系方式（请确保信息真实）" />
    </van-cell-group>

    <!-- 弹框 -->
    <!-- 性别 -->
    <van-popup v-model="showPicker" position="bottom" :overlay="true" style="height:8rem;">
      <van-picker
        show-toolbar
        title="请选择性别"
        value-key="value"
        :columns="columns"
        @change="onChange"
        @cancel="showPicker = false"
        @confirm="onConfirm"
        style="position:fixed;left:0;bottom:0;width:100%;"
      />
    </van-popup>
    <!-- 国籍 -->
    <van-popup v-model="show" position="bottom" :overlay="true" style="height:8rem;">
      <van-picker
        show-toolbar
        title="请选择国籍"
        :columns="columnss"
        value-key="nameZh"
        @change="onChange1"
        @cancel="show = false"
        @confirm="onConfirm1"
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
    <!-- 证件类型 -->
    <van-popup v-model="showcardType" position="bottom" :overlay="true" style="height:8rem;">
      <van-picker
        show-toolbar
        title="请选择证件类型"
        :columns="columnsct"
        value-key="value"
        @cancel="showcardType = false"
        @confirm="onConfirm2"
        style="position:fixed;left:0;bottom:0;width:100%;"
      />
    </van-popup>

    <!-- 确认添加 -->
    <div
      class="btn"
      @click="add(users)"
      v-if="this.$route.params.i==1||this.$route.params.i==2"
    >确认添加</div>
    <div class="btn" @click="add(users)" v-if="this.$route.params.i==3">确认修改</div>
  </div>
</template>

<script>
import {
  saveResidents,
  baseCountryList,
  listResidents,
  updateResidents
} from "../../api/order";

import Headertop from "@/components/header/index";
// 引入输入框
import { Field, Icon } from "vant";
Vue.use(Field);
// Icon
Vue.use(Icon);
// 弹框
import { Picker } from "vant";
import { Popup } from "vant";
Vue.use(Popup);
Vue.use(Picker);
// 加载提醒
import { Toast } from "vant";
Vue.use(Toast);
// 消息提示
import { Notify } from "vant";
Vue.use(Notify);
export default {
  name: "Add",
  data() {
    return {
      title: "",
      fixed: true,
      users: {
        name: "",
        idx: "",
        sex: "",
        country: "",
        time: "",
        phone: "",
        cardType: ""
      },
      // users: {
      //   name: "李一",
      //   idx: "421124198512120123",
      //   sex: "男",
      //   country: "中国",
      //   time: "1900-01-01 00:00:00",
      //   phone: "13133333333",
      //   cardType: "大陆身份证"
      // },
      isshow: "", //大陆显示
      columns: [
        { type: "0", value: "保密" },
        { type: "1", value: "男" },
        { type: "2", value: "女" }
      ], //性别
      columnsct: [
        { type: "1", value: "大陆身份证" },
        { type: "2", value: "港澳身份证" },
        { type: "3", value: "护照" }
      ], //性别
      showPicker: false,
      show: false, //国籍
      columnss: [], //国籍
      showdate: false, //出生日期
      showcardType: false, //证件类型
      minDate: new Date(1900, 0, 1),
      maxDate: new Date()
    };
  },
  props: {},
  methods: {
    //性别
    onChange(picker, value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
    }, //选项改变时触发
    onConfirm(picker, value, index) {
      this.showPicker = false;
      console.log(picker);
      this.users.sex = picker.value;
    }, //点击完成按钮时触发
    //国籍
    onChange1(picker, value, index) {
      var keyId = value.id;
      var text = value.nameZh;
      console.log(text);
    }, //选项改变时触发
    onConfirm1(picker, value, index) {
      this.users.country = picker.nameZh;
      this.show = false;
    }, //点击完成按钮时触发
    onConfirm2(picker, value, index) {
      this.users.cardType = picker.value;
      this.showcardType = false;
    },
    //出生日期
    handleConfirm(value) {
      // console.log(`当前值：${value}`);
      // this.currentDate = new Date(value);
      var date = value;
      var m = date.getMonth() + 1;
      var d = date.getDate();
      if (m >= 1 && m <= 9) {
        m = "0" + m;
      }
      if (d >= 0 && d <= 9) {
        d = "0" + d;
      }
      this.users.time = date.getFullYear() + "-" + m + "-" + d;
      // console.log(this.time)

      this.showdate = false;
    },
    onCancel() {
      this.showPicker = false;
      this.show = false;
      this.showdate = false;
    }, //点击取消按钮时触发
    // 添加入住人
    add(users) {
      console.log(users);
      //验证信息
      for (var i in users) {
        if (users[i] == "") {
          Notify("入住人信息都是必填项，不可为空哦~");
          return false;
        }
      }

      var res = {
        name: /^[\u4e00-\u9fa5]{2,5}$/, //大陆名字
        names: /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/, //名字其他
        id: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, //大陆
        gaid: /^([A-Z]\d{6,10}(\(\w{1}\))?)$/, //港澳
        taid: /^\d{8}|^[a-zA-Z0-9]{10}|^\d{18}$/, //台
        passport: /^([a-zA-z]|[0-9]){5,17}$/, //护照
        phone: /^1[34578]\d{9}$/
      };

      if (this.$route.params.i == "1") {
        if (!res["name"].test(users.name)) {
          Notify("请输入正确的姓名~");
          return;
        }
      } else {
        if (!res["names"].test(users.name)) {
          Notify("请输入正确的姓名~");
          return;
        }
      }

      if (users.cardType == "大陆身份证") {
        if (!res["id"].test(users.idx)) {
          Notify("请输入正确的证件号码~");
          return;
        }
      } else if (users.cardType == "港澳身份证") {
        if (!res["gaid"].test(users.idx)) {
          alert("港澳身份证");
          Notify("请输入正确的证件号码~");
          return;
        }
      } else if (users.cardType == "护照") {
        if (!res["passport"].test(users.idx)) {
          alert("护照");
          Notify("请输入正确的证件号码~");
          return;
        }
      }

      if (!res["phone"].test(users.phone)) {
        Notify("请输入正确的手机号码~");
        return;
      }

      //nationality国籍
      for (var i in this.columnss) {
        if (this.columnss[i].nameZh == users.country) {
          var nationality = this.columnss[i].id;
        }
      }
      //性别
      for (var i in this.columns) {
        if (this.columns[i].value == users.sex) {
          var sex = this.columns[i].type;
        }
      }
      const date = {
        residentsName: users.name, //姓名
        cardType: 1, //身份证类型
        idCardNo: users.idx, //证件号码
        phone: users.phone, //联系方式
        sex: users.sex ? sex : -1, //性别
        nationality: users.country ? nationality : -1, //国籍
        deleteState: 1, //是否有效
        birthday: users.time + " 00:00:00"
      };
      console.log(date);
      if (!this.$route.query.residentsId) {
        saveResidents(date)
          .then(res => {
            this.$router.go(-1);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        date['residentsId']=this.$route.query.residentsId
        updateResidents(date)
          .then(res => {
            console.log(res,'update')
            this.$router.replace({ path: "/contacts/index" });
          })
          .catch(err => {
            console.log(err);
          });
      }

      // this.$router.push({ path: "/contacts/index" });
    } //确认添加
  },
  created() {
    if (this.$route.params.i == 1 || this.$route.params.i == 2) {
      this.title = "添加入住人";
    } else if (this.$route.params.i == 3) {
      this.title = "修改入住人";
      //获取用户列表saveResidents
      listResidents({
        deleteState: 1,
        limit: -1,
        currentPage: -1,
        residentsId: this.$route.query.residentsId
      })
        .then(res => {
          if (res.code == 0) {
            console.log(res)
            var msg = res.data.records[0];
            console.log(msg.birthday);
            for (var i in this.columns) {
              if (this.columns[i].type == msg.sex) {
                var sex = this.columns[i].value;
              }
            }
            for (var i in this.columnsct) {
              if (this.columnsct[i].type == msg.cardType) {
                var cardType = this.columnsct[i].value;
              }
            }
            for (var i in this.columnss) {
              if (this.columnss[i].type == msg.country) {
                var country = this.columnss[i].nameZh;
              }
            }
            this.users = {
              name: msg.residentsName,
              idx: msg.idCardNo,
              sex: sex,
              country: "中国",
              time: msg.birthday.slice(0, 10),
              phone: msg.phone,
              cardType: cardType
            };
          }
        })
        .catch(err => {});
    }
    // 国籍
    baseCountryList({})
      .then(res => {
        if (res.code == 0) {
          console.log(res.data);
          this.columnss = res.data;
        }
      })
      .finally(e => {
      });
  },
  mounted() {
    if (this.$route.params.i == "1") {
      this.isshow = true;
      this.users = {
        name: "",
        idx: "",
        sex: "",
        country: "中国",
        time: "",
        phone: "",
        cardType: "大陆身份证"
      };
    } else if (this.$route.params.i == "2") {
      this.users = {
        name: "",
        idx: "",
        sex: "男",
        country: "美国",
        time: "1990-01-01",
        phone: "",
        cardType: ""
      };
      this.isshow = false;
    }
  },
  filters: {},
  components: {
    Headertop
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add {
  text-align: left;
}
.info {
  padding-left: 0.5rem;
  font-size: 0.34rem;
  color: #bebebe;
  height: 0.62rem;
  line-height: 0.62rem;
}
/* 大陆输入框 */
.add >>> input[type="text"],
.add >>> input[type="password"] {
  border: none !important;
  outline: none !important;
  color: #838383;
}
.van-cell,
.inputwrap {
  width: 100%;
  height: 1.42rem !important;
  line-height: 1.42rem !important;
  border-bottom: 1px solid #eeeeee;
}
.van-cell {
  padding: 0 !important;
}
.van-cell-group {
  padding-left: 0.42rem !important;
  padding-right: 0.42rem !important;
}
.input_label {
  font-size: 0.42rem;
  color: #838383;
  color: #969799;
}
.add >>> .van-cell:not(:last-child)::after {
  border: none !important;
}

.inputwrap {
  display: flex;
  justify-content: space-between;
}

.input_tab span {
  font-size: 0.38rem;
  color: #000;
  padding-right: 0.1rem;
}
.van-icon {
  top: 7%;
  font-weight: bold;
}
/* 确认按钮 */
.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1.42rem;
  line-height: 1.42rem;
  width: 100%;
  background-color: #008489;
  font-size: 0.5rem;
  color: #fff;
  text-align: center;
}
</style>
