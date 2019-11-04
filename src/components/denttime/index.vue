<template>
  <div class="resale_resale">
    <div class="resale">
      <div style="margin-top:0.3rem;">
        <p>转售多余时间</p>
        <p>（点单成功后自动上线出售）</p>
      </div>
      <div>
        <p>
          <van-checkbox v-model="checked" />
        </p>
        <div class="resale_content">
          <p @click="onAant_icon()">
            <span>开始时间：</span>
            <span style="color:#737373;" v-if="show">请选择转售开始时间</span>
            <span style="color:#737373;" v-if="!show">{{startTime|changeTime}}</span>
          </p>
          <p>
            <span>离店时间：</span>
            <!-- <span>5月31日 周五 17：00</span> -->
            <span>{{leaveTime|changeTime}}</span>
          </p>
        </div>
        <van-icon name="arrow" class="vant_icon" />
      </div>
    </div>
    <!-- 时间的选择 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      endDate: "",
      endTime: "",
      leaveTime: "", //离开时间
      startTime: "", //开始时间
      show: false //
    };
  },
  methods: {
    onAant_icon() {
      this.$router.push({
        path: "/page/surpluss/index",
        query: this.$route.query
      });
    }
  },
  filters: {
    changeTime(d) {
      var mon = d.getMonth() + 1;
      mon = mon > "10" ? mon : "0" + mon;
      var day = d.getDate() > "10" ? d.getDate() : "0" + d.getDate();
      var hour = d.getHours() > "10" ? d.getHours() : "0" + d.getHours();
      var min = d.getMinutes() > "10" ? d.getMinutes() : "0" + d.getMinutes();
      var week = d.getDay();
      var arr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ];
      var weeks = arr[week];
      return mon + "月" + day + "日 " + weeks + " " + hour + ":" + min;
    }
  },
  created() {
    if (window.sessionStorage.getItem("filterDate"))
      var endDate = JSON.parse(window.sessionStorage.getItem("filterDate"))
        .endDate;
    var endTime = JSON.parse(window.sessionStorage.getItem("filterDate"))
      .endTime;
    var time = endDate + " " + endTime;
    var d = new Date(time);
    this.leaveTime = d;

    if (window.localStorage.getItem("resaleMsg")) {
      var t = JSON.parse(window.localStorage.getItem("resaleMsg")).startTime;
      if (t == "请选择") {
        this.startTime = this.leaveTime;
        this.show = true;
      } else {
        t = new Date(t);
        this.startTime = t;
        this.checked = true;
      }
    } else {
      this.startTime = this.leaveTime;
      this.show = true;
    }
  },
  watch: {
    checked(val) {
      console.log(val);
      if (val == true) {
        window.localStorage.setItem("isResale", "1");
      } else {
        window.localStorage.setItem("isResale", "0");
      }
    }
  }
};
</script>
<style scoped>
.resale_resale {
  background: #f8f8f8;
  padding: 0rem 0.5rem 0rem 0.46rem;
}
.resale {
  width: 100%;
  font-size: 0.36rem;
}

.resale > div {
  display: flex;
}

.resale > div:first-child {
  border-bottom: #e6e5e5 solid 0.03rem;
  padding: 0.33rem 0.3rem 0.31rem 0.36rem;
  background: #fff;
}

.resale > div:first-child > p:first-child {
  color: #000;
}

.resale > div:first-child > p:last-child {
  color: #73c8ff;
  font-size: 0.3rem;
  padding-top: 0.03rem;
}

.resale > div:last-child {
  width: 100%;
  border-radius: 0.1rem;
  background: #fff;
}

.resale > div:last-child > p:first-child {
  margin: 0.72rem 0.24rem 0.72rem 0.26rem;
}

.vant_icon {
  margin-top: 1rem;
}

.resale_content {
  padding-top: 0.47rem;
  width: 80%;
}
.resale_content p {
  text-align: left;
}
</style>