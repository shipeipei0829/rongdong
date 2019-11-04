<template>
  <div class="mine" style="overflow-y:auto;position:relative;padding-bottom:2rem;background :#fff;">
    <Headertop :title="title" :fixed="true" :style="bgc" bgcolor="rgba(17, 133, 137, 0)"/>
    <!-- 设置按钮 -->
    <img src="../../img/setting.png" alt class="setting" @click="setting()" />

    <div
      style="-webkit-overflow-scrolling: touch;overflow-y:auto;height:100vh;padding-bottom:2rem;"
    >
      <!-- 用户信息 -->
      <div class="usermsg">
        <!-- 用户头像 -->
        <div class="userimg_wrapbg" :style="note">
          <div class="userimg_wrap" @click="updatepersonaldata()">
            <img :src="me.photo" alt class="userimg" />
          </div>
        </div>

        <!-- 用户信息详情 -->
        <div class="usermsg_details">
          <h2 class="user_name">{{user.nickname}}</h2>
          <h3 class="user_id">账号：{{user.mobile}}</h3>
          <p class="user_title">{{user.userDesc}}</p>
          <div class="user_data">
            <span style="color:#EA78AA">{{user.age}}岁</span>
            <span style="color:#008489">{{user.area}}</span>
            <span style="color:#008489">{{user.tag}}</span>
          </div>
        
          <!-- 卡片 -->

          <div style="background-color: #f0f0f0;">
            <div class="card">
              <div class="card_top">
                <span class="card_top_left">时间储存罐</span>
                <span class="card_top_right" @click="details()">
                  充值明细&nbsp;&nbsp;
                  <van-icon name="arrow" />
                </span>
              </div>
              <div class="card_middle">
                <span class="card_middle_num">{{modelAppuser.userHourCash}}</span>
                <span class="card_middle_bz">个小时未使用</span>
              </div>
              <div class="card_bottom" @click="prestore()">立即充值</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 会员信息 -->
      <ul class="user_vipmsg">
        <li class="vipmsg_item" @click="vipcard">
          <div class="vipmsg_item_left">商家会员卡</div>
          <div class="vipmsg_item_right">
            {{modelAppuser.cardCount}}张&nbsp;&nbsp;
            <van-icon name="arrow" />
          </div>
        </li>
        <li class="vipmsg_item" @click="specbus(1)">
          <div class="vipmsg_item_left">制定商家预存</div>
          <div class="vipmsg_item_right">
            共计{{modelAppuser.userSaveHourNum}}小时&nbsp;&nbsp;
            <van-icon name="arrow" />
          </div>
        </li>
        <li class="vipmsg_item">
          <div class="vipmsg_item_left">我的积分</div>
          <div class="vipmsg_item_right">
            {{modelAppuser.integral}}&nbsp;&nbsp;
            <van-icon name="arrow" />
          </div>
        </li>
        <li class="vipmsg_item" @click="specbus(2)">
          <div class="vipmsg_item_left">优惠券</div>
          <div class="vipmsg_item_right">
            {{modelAppuser.couponCount}}张&nbsp;&nbsp;
            <van-icon name="arrow" />
          </div>
        </li>
        <li class="vipmsg_item" @click="invoice()">
          <div class="vipmsg_item_left">票据</div>
          <div class="vipmsg_item_right">
            开发票&nbsp;&nbsp;
            <van-icon name="arrow" />
          </div>
        </li>
      </ul>

      <!-- 更多功能 -->
      <div class="more_wrap">
        <h2 class="more_hb">更多功能</h2>
        <div class="container">
          <div class="item" @click="collect">
            <img src="../../img/slice1.png" alt class="item_img" />
            <div class="item_tit">我的收藏</div>
            <div class="item_bz">({{modelAppuser.collectNum}}间房)</div>
          </div>
          <div class="item" @click="contacts">
            <img src="../../img/slice2.png" alt class="item_img" />
            <div class="item_tit">常用联系人</div>
            <div class="item_bz">({{modelAppuser.linkmanNum}}名联系人)</div>
          </div>
          <div class="item">
            <img src="../../img/slice3.png" alt class="item_img" />
            <div class="item_tit">邀请好友</div>
            <div class="item_bz">(分享的优惠券)</div>
          </div>
          <div class="item" @click="service()">
            <img src="../../img/slice4.png" alt class="item_img" />
            <div class="item_tit">联系客服</div>
            <div class="item_bz">(在线解决疑问)</div>
          </div>
          <div class="item" @click="free">
            <img src="../../img/slice5.png" alt class="item_img" />
            <div class="item_tit">免押金入驻</div>
            <div class="item_bz">(芝麻信用700以上)</div>
          </div>
        </div>
      </div>
    </div>
    <Footerr />
  </div>
</template>

<script>
import { listResidents } from "../../api/order";
import { infoAppuser ,modelAppuser} from "../../api/mine";
import Headertop from "@/components/header/index";
import Footerr from "@/components/footer/index";
import { Icon } from "vant";
Vue.use(Icon);
import { Uploader } from "vant";
Vue.use(Uploader);
export default {
  name: "Mine",
  data() {
    return {
      title: "我的",
      righttext: "",
      active: 0,
      note: {
        backgroundImage: "url(" + require("../../img/bgimg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        marginTop: "0px"
      },
      bgc: {
        backgroundImage: "url(" + require("../../img/bgimg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginTop: "0px"
      },  
      // user: this.$store.state.me.user,//个人中心信息(vuex)
      user: "",
      me: JSON.parse(localStorage.getItem("me")),//个人信息(本地存)
      total: "",
      modelAppuser:''//app其他用户信息
    };
  },
  props: {
    msg: {}
  },
  methods: {
    setting() {
      this.$router.push({ path: "/setting/index" });
    },
    // 点击我的 头像 跳转路由 修改 我的资料
    updatepersonaldata() {
      this.$router.push({ path: "/setting/personaldata",query:{ time: new Date().getTime() } });
    },
    //商家会员卡
    vipcard() {
      this.$router.push({ path: "/vipcard/index" });
    },
    //预存
    prestore() {
      this.$router.push({ path: "/vipcard/time" });
    },
    //指定商家预存
    specbus(i) {
      this.$router.push({ path: "/merchant/index/" + i });
      console.log(i, 11111);
    },
    //收藏
    collect() {
      this.$router.push({ path: "/collect/index" });
    },
    //常用联系人
    contacts() {
      this.$router.push({ path: "/contacts/index" });
    },
    //免押入住
    free() {
      this.$router.push({ path: "/free/index" });
    },
    //开具发票
    invoice() {
      this.$router.push({ path: "/invoice/index" });
    },
    //充值信息
    details() {
      this.$router.push({ path: "/vipcard/record" });
    },
    //在线客服
    service() {
      this.$router.push({ path: "/service/window" });
    },
    //存本地
    setlocalStorage() {
      window.localStorage.setItem("me", JSON.stringify(this.me));
    }
  },
  mounted() {
    console.log(this.user);
  },
  created() {
    //联系人
    listResidents({ deleteState: 1, limit: -1, currentPage: -1 })
      .then(res => {
        this.total = res.data.records.length;
      })
      .catch(err => {});
    //app用户基本信息
    infoAppuser()
      .then(res => {
        if (res.code == 0) {
          // console.log(res.data);
          this.user = res.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
      //app用户其他信息
      modelAppuser().then(res=>{if(res.code==0){
        this.modelAppuser = res.data
      }}).catch(err=>{})
  },
  watch: {
    //监听本地me
    me: {
      handler(newName, oldName) {
        console.log(JSON.parse(newName), "个人me的本地信息发生改变");
        // var newName = JSON.stringify(newName);
        localStorage.setItem("me", newName);
      },
      deep: true
    }
  },
  components: {
    Headertop,
    Footerr
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userimg_wrapbg {
  height: 7.3rem;
}
.setting {
  position: fixed;
  right: 0.5rem;
  top: 0.4rem;
  z-index: 3;
  width: 0.57rem;
  height: 0.52rem;
}
/* 背景图片 */
.bgimg {
  width: 100%;
  height: 6.5rem;
  position: absolute;
  left: 0;
  top: 0;
}
/* 用户信息 */
.usermsg {
  position: relative;
  width: 100%;
  height: 12rem;
}
/* 头像图片 */
.userimg_wrap {
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translatex(-50%);
  width: 2.22rem;
  height: 2.22rem;
  background-color: #afe5d1;
  border: 0.09rem solid #6ed0ac;
  border-radius: 50%;
  overflow: hidden;
}
.userimg {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
/* 用户信息详情 */
.usermsg_details {
  position: relative;
  top: -2rem;
  background-color: #f0f0f0;
  border-radius: 50% 50% 0 0;
  width: 100%;
  height: 2rem;
}
.user_name {
  padding-top: 0.18rem;
  font-size: 0.42rem;
  height: 0.78rem;
  line-height: 0.78rem;
  font-weight: bold;
}
.user_id {
  font-size: 0.36rem;
  height: 0.36rem;
  line-height: 0.36rem;
  margin-top: 0.15rem;
}
.user_title {
  color: #656565;
  font-size: 0.3rem;
  line-height: 0.3rem;
  height: 0.3rem;
  margin-top: 0.29rem;
}
.user_data {
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  padding: 0 1.8rem;
  font-size: 0.36rem;
  height: 1.6rem;
  line-height: 1.6rem;
}
/* 卡片信息 */
.card {
  padding-top: 0.39rem;
  box-sizing: border-box;
  margin: 0 auto;
  width: 9.8rem;
  height: 3rem;
  background: linear-gradient(left, #ffd924, #ffed9a);
  border-radius: 0.2rem 0.1rem 0 0;
  box-shadow: 0 0 0.2rem #c3dfd9;
}
.card_top {
  height: 0.42rem;
  line-height: 0.42rem;
  display: flex;
  justify-content: space-between;
}
.card_top_left {
  font-size: 0.42rem;
  font-weight: bold;
  margin-left: 0.39rem;
}
.card_top_right {
  font-size: 0.3rem;
  margin-right: 0.12rem;
}
.card_middle {
  height: 1.28rem;
  line-height: 1.28rem;
}
.card_middle_num {
  font-size: 0.6rem;
  font-weight: bold;
}
.card_middle_bz {
  font-size: 0.3rem;
}
.card_bottom {
  width: 2.3rem;
  height: 0.6rem;
  line-height: 0.6rem;
  color: #fff;
  background-color: #1bb085;
  margin: 0 auto;
  border-radius: 0.1rem;
  font-size: 0.3rem;
}
/* 会员信息 */
.user_vipmsg {
  position: relative;
  padding: 0 0.54rem;
}
.vipmsg_item {
  display: flex;
  height: 1.36rem;
  line-height: 1.36rem;
  justify-content: space-between;
}
.vipmsg_item_left {
  font-size: 0.36rem;
  font-weight: bold;
}
.vipmsg_item_right {
  font-size: 0.32rem;
  color: #6e6e6e;
}
/* 更多功能 */
.more_hb {
  height: 1.15rem;
  text-align: left;
  padding-left: 0.53rem;
  background: #f0f0f0;
  line-height: 1.15rem;
  font-size: 0.51rem;
  color: #313131;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
}

.item {
  text-align: center;
  float: left;
  width: 100%;
  margin: 0 auto;
}
.item_img {
  margin-top: 0.65rem;
  width: 0.6rem;
  height: 0.6rem;
}
.item_tit {
  font-size: 0.36rem;
  height: 0.64rem;
  line-height: 0.64rem;
}
.item_bz {
  font-size: 0.3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #6e6e6e;
}
.van-icon {
  top: 5%;
}
</style>