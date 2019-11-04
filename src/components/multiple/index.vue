<template>
  <div>
    <div class="mltiple">
      <!-- 一楼 -->
      <div @click="showPopup()">
        <p>支付方式</p>
        <p>
          <span>{{payMethods}}</span>
          <van-icon name="arrow" />
        </p>
      </div>
      <!-- 二楼 -->
      <div @click="onHotel()">
        <p>会员卡</p>
        <p>
          <span>暂无可用会员卡</span>
          <van-icon name="arrow" />
        </p>
      </div>
      <!-- 三楼 -->
      <div @click="onCoupon()">
        <p>优惠券</p>
        <p>
          <span>三张可用</span>
          <van-icon name="arrow" />
        </p>
      </div>
      <!-- 四楼 -->
      <div @click="onBusiness()">
        <p>商家优惠</p>
        <p>
          <span>2张可用</span>
          <van-icon name="arrow" />
        </p>
      </div>
      <!-- 五楼 -->
      <div>
        <p>
          押金
          <span class="mltiple_money">￥{{info.depositAmounts}}.00</span>
          <!-- <span class="mltiple_money">￥0.00</span> -->
        </p>
        <p>
          <span>{{depositType}}</span>
          <van-icon name="arrow" />
        </p>
      </div>
      <!--弹出框 -->
    </div>
    <div class="mask">
      <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
        <div class="mask_title">
          <p>支付方式</p>
        </div>

        <div class="mask_content">
          <div class="mask_content_radio">
            <p :class="[ischecked==1?'checked':'radio']" @click="change(1)">在线支付</p>
            <p :class="[ischecked==2?'checked':'radio','radio2']" @click="change(2)">
              账户支付
              <span>优惠</span>
            </p>
          </div>
          <p v-if="ischecked==1">在线支付：可以选择使用支付宝或微信进行支付</p>
          <div v-if="ischecked==2">
            <div class="h">请选择支付账户</div>
            <div style="overflow:hidden;">
              <div class="payWrap">
                <i :class="[ischeckedPay==1?'checkeds':'noCheck','span']" @click="changePay(1)">时间账户</i>
                <p>(优惠￥40元)</p>
              </div>
              <div class="payWrap">
                <i
                  :class="[ischeckedPay==2?'checkeds':'noCheck','span'] "
                  @click="changePay(2)"
                >商家储值</i>
                <p>(优惠￥50元)</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mask_button" @click="onMask_button()">
          <p>确定</p>
        </div>
      </van-popup>
    </div>
  </div>
</template>
<script>
import { loadRoomDetail } from "../../api/home/details";
export default {
  data() {
    return {
      show: false,
      ischecked: "1",
      ischeckedPay: 1,
      payMethod: "1",
      payMethods: "在线支付",
      info: "", //房间内信息
      depoist: [
        {
          type: 1,
          value: "线上支付"
        },
        {
          type: 2,
          value: "线下支付"
        },
        {
          type: 3,
          value: "免押金"
        }
      ],
      depositType:'',//押金支付方式
    };
  },
  created() {
    window.localStorage.setItem("payMethod", JSON.stringify(this.payMethod));
  },
  mounted() {
    var roomType = this.$route.query.roomType;
    var hotelId = this.$route.query.hotelId;
    loadRoomDetail({ roomType, hotelId })
      .then(res => {
        if (res.code == 0) {
          this.info = res.data;
          var depositType=res.data.depositType
          for(var i = 0;i<this.depoist.length;i++){
            if(this.depoist[i].type==depositType){
              this.depositType=this.depoist[i].value
            }
          }
        }
      })
      .catch(err => {});
  },
  methods: {
    change(name) {
      console.log(name);
      this.ischecked = name;
      if (this.ischecked == 1) {
        this.payMethod = "1"; //在线
        this.payMethods = "在线支付";
      } else {
        this.payMethod = "2"; //账户
        this.payMethods = "账户支付";
      }
      window.localStorage.setItem("payMethod", JSON.stringify(this.payMethod));
    },
    changePay(n) {
      console.log(n);
      this.ischeckedPay = n;
    },
    showPopup() {
      this.show = true;
    },
    onMask_button() {
      this.show = false;
    },
    onHotel() {
      this.$router.push({ path: "/page/hotelcard/index" });
    },
    onCoupon() {
      this.$router.push({ path: "/page/coupon/index" });
    },
    onBusiness() {
      this.$router.push({ path: "/page/business/index" });
    }
  }
};
</script>

<style scoped>
.payWrap {
  float: left;
}
.mltiple {
  padding: 0rem 0.5rem 0rem 0.46rem;
}

.mltiple > div span {
  display: block;
}

.mltiple > div {
  margin-top: 0.3rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0.31rem 0.35rem 0.31rem 0.33rem;
}

.mltiple > div > p {
  display: flex;
}

.mltiple > div > p:first-child {
  color: #000;
  font-size: 0.36rem;
  font-weight: 500;
}

.mltiple > div > p:last-child {
  font-size: 0.3rem;
  color: #737373;
  font-weight: 400;
  padding-top: 0.05rem;
}

.van-icon {
  color: #000;
  margin-top: 0.08rem;
  font-size: 0.36rem;
}

.mltiple_money {
  color: #fd9525;
  font-size: 0.28rem;
  margin-top: 0.12rem;
}

/* 底部按钮 */
.mask {
  position: relative;
}

/* 遮罩标题 */
.mask_title {
  border-bottom: 0.03rem solid #e6e5e5;
}

.mask_title > p {
  padding: 0.25rem 0rem;
  color: #000;
  font-weight: 400;
  font-size: 0.4rem;
}

.mask_button {
  width: 100%;
  padding: 0.15rem 0.35rem;
  position: absolute;
  left: 0;
  bottom: 0;
}

.mask_content {
  padding: 0.25rem 0.25rem 0rem 0.25rem;
}

.mask_content > p {
  text-align: left;
  padding-top: 0.12rem;
  color: #000;
  font-weight: 400;
  font-size: 0.36rem;
}

.h {
  text-align: left;
  padding-top: 0.12rem;
  color: #000;
  font-weight: 400;
  font-size: 0.36rem;
}
.mask_content_radio {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.mask_content_radio > p {
  width: 45%;
  padding: 0.15rem 0rem;
  text-align: center;
  border-radius: 0.2rem;
  font-size: 0.3rem;
  font-weight: 400;
}

.mask_content_radio .radio {
  background: #e6e5e5;
}

.mask_content_radio .radio2 {
  /* background: #e6e5e5; */
  position: relative;
}

.mask_content_radio .radio2 span {
  width: 0.7rem;
  position: absolute;
  color: #fff;
  background: #fd9525;
  right: 0.3rem;
  top: -0.1rem;
  font-style: italic;
}

.mask_button > p {
  height: 1rem;
  line-height: 1rem;
  color: #fff;
  font-size: 0.35rem;
  font-weight: 400;
  background: #ff0023;
  border-radius: 0.15rem;
  text-align: center;
}

.checked {
  color: #fff;
  background: #ff0023;
}
.span {
  padding: 0.15rem 0.8rem !important;
  text-align: center;
  border-radius: 0.2rem;
  font-size: 0.3rem;
  font-weight: 400;
  display: inline-block;
  margin-right: 0.5rem;
}
.checkeds {
  color: #fff;
  background: #ff0023;
}
.noCheck {
  background: #e6e5e5;
}
</style>