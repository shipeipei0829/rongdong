<template>
  <div class="check">
    <!--外层盒子-->
    <div class="check_wrap">
      <!--内层盒子-->
      <div class="check_top bordeer" @click="onMenuList()">
        <p>
          <img src="./../../img/ruzhu.png" alt />
        </p>
        <p>入住信息</p>
      </div>
      <div class="check_content">
        <!-- demo暂时先默认显示一间房 -->

        <!-- <div class="lianxi" style="width:100%;">
          <p style="margin-right:.75rem">房间数</p>
          <p style="overflow:hidden;width:50%;height:1;"><i style="margin-right:0.2rem;">2</i>间</p>
        </div>-->

        <div class="lianxi" @click="addperson()">
          <p>入住人信息</p>
          <p v-if="show">请填写入住人信息</p>
          <p v-if="!show">
            <span
              v-for="(item,index) in this.person"
              :key="index"
              style="margin-right:0.2rem"
            >{{item.residentsName}}</span>
          </p>
          <p class="touxiang" @click="onTouxiang()" style>
            <!-- <img src="./../../img/rentou.png" alt /> -->
          </p>
        </div>

        <div class="lianxi">
          <p>联系人电话</p>
          <p>+83</p>
          <input
            style="border:none;outline:none;border-left: 0.03rem solid #e6e5e5;margin-right: .3rem;padding-left:0.3rem;margin-top: -.095rem;"
            placeholder="13547532431"
            v-model="tel"
          />
          <p>
            <img src="./../../img/lianxiren .png" alt />
          </p>
        </div>
        <div class="daodian" @click="showdate = true">
          <p>预计到店时间</p>
          <!-- <p><span>5月30日</span>&nbsp;&nbsp; <span>12：00</span> </p> -->
          <p>
            {{toShopTime.value}}
          </p>
        </div>
      </div>
    </div>
    <!-- 时间选择 -->
    <van-popup v-model="showdate" position="bottom">
      <van-datetime-picker
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="showdate = false"
        @confirm="handleConfirm"
      />
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      person: "",
      show: "",
      tel: "",
      showdate: false, //预计到店时间选择
      minDate: new Date(),
      maxDate: new Date(2030,0,1),
      toShopTime:{
        value:'',
        value1:''
      },//预计到店时间
    };
  },
  props: {
    startdate: {
      type: String,
      default: ""
    },
    starttime: {
      type: String,
      default: ""
    }
  },
  mounted() {
    
  },
  created() {
    if (localStorage.getItem("person") == null) {
      this.show = true;
    } else {
      this.person = JSON.parse(localStorage.getItem("person"));
      this.show = false;
    }
    if(localStorage.getItem("toShopTime") == null) {
      this.toShopTime.value = ''
      this.toShopTime.value1 = ''
    }
  },
  methods: {
    onTouxiang() {
      this.$router.push({ path: "/page/checkin/index" });
    },
    onMenuList() {
      // this.$router.push({ path: '/page/apply/index' })
    },
    // 添加入住人
    addperson() {
      this.$router.push({
        path: "/page/checkin/index",
        query: this.$route.query
      });
    },
    //选择预计时间
    handleConfirm(value) {
      var date = value;
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      var h = date.getHours();
      var mi = date.getMinutes();
      if (m >= 1 && m <= 9) {
        var mm = "0" + m;
      }
      if (d >= 0 && d <= 9) {
        d = "0" + d;
      }
      if (h >= 0 && h <= 9) {
        h = "0" + h;
      }
      if (mi >= 0 && mi <= 9) { 
        mi = "0" + mi;
      }
      this.toShopTime.value =  m + "月" + d + "日  " + h + ':' + mi;
      // 2018-01-03 00:00:00
      this.toShopTime.value1 = y + '-' +  mm + "-" + d + " " + h + ':' + mi;
      window.localStorage.setItem('toShopTime',JSON.stringify(this.toShopTime))
      this.showdate = false;
    }
  }
};
</script>
<style>
.lianxi {
  padding: 0.44rem 0rem 0.38rem;
}
.check_dl dt {
  margin-right: 0.36rem;
}

.check {
  margin-top: 0.5rem;
  padding: 0rem 0.5rem 0rem 0.46rem;
}

.check_wrap {
  background: #fff;
  padding: 0rem 0.16rem;
}

.check_top {
  padding: 0.33rem 0rem 0.31rem 0.16rem;
  display: flex;
}

.check_top p:first-child {
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.1rem;
}

.check_top p:first-child img {
  width: 100%;
  height: 100%;
}

.check_top p:last-child {
  font-size: 0.36rem;
  color: #000;
  font-weight: 500;
}

.check_content_top {
  display: flex;
  padding: 0.44rem 0rem 0.38rem;
  border-bottom: 0.03rem solid #e6e5e5;
}

.check_content_top p:first-child {
  margin-right: 1.3rem;
}

.check_content_top p,
.check_dl dt {
  color: #000000;
  font-size: 0.36rem;
  font-weight: 400;
}

/* 入住的个人信息 */
.check_dl {
  display: flex;
  padding: 0.41rem 0rem;
  position: relative;
}

.check_dl dd {
  flex: 1;
  border-bottom: 0.03rem solid #e6e5e5;
  text-align: left;
  font-size: 0.36rem;
  color: #737373;
}

.check_dl dd p {
  border-bottom: 0.03rem solid #e6e5e5;
  padding-bottom: 0.51rem;
  padding-left: 0.21rem;
  width: 6.52rem;
}

.check_dl dd div {
  padding: 0.48rem 0rem 0.58rem 0.21rem;
}

.bordeer {
  border-bottom: 0.03rem solid #e6e5e5;
}
</style>