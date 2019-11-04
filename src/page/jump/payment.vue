<template>
  <div>
    <Leftheader title="请选择支付方式"></Leftheader>
    <div class="add_zhifu">
      <p>
        <span>订 单 号:</span>
        <span>{{num}}</span>
      </p>
      <p>
        <span>交易金额：</span>
        <span>¥ {{price}}</span>
      </p>
    </div>
    <!-- 下面的样式 -->
    <div class="add_bottom">
      <p>请选择支付通道</p>
      <div class="add_bottom_list">
        <div>
          <div>
            <p>
              <img src="./../../img/addweixin.png" alt />
            </p>
            <p>微信支付</p>
          </div>
          <div>
            <van-radio-group v-model="radio">
              <van-radio name="2">
                <img
                  slot="icon"
                  slot-scope="props"
                  class="add_img"
                  :src="props.checked ? icon.active : icon.inactive"
                />
              </van-radio>
            </van-radio-group>
          </div>
        </div>
        <div>
          <div>
            <p>
              <img src="./../../img/addafb.png" alt />
            </p>
            <p>支付宝支付</p>
          </div>
          <div>
            <van-radio-group v-model="radio">
              <van-radio name="1">
                <img
                  slot="icon"
                  slot-scope="props"
                  class="add_img"
                  :src="props.checked ? icon.active : icon.inactive"
                />
              </van-radio>
            </van-radio-group>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="add_button" @click="onAdd_button()">
      <BottomButton value="确定支付"></BottomButton>
    </div>
  </div>
</template>
<script>
import { payServer } from "../../api/order";
// 返回上一页
import Leftheader from "@/components/header/index.vue";
//按钮
import BottomButton from "@/components/button/index";
export default {
  data() {
    return {
      icon: {
        active: require("./../../img/zhifuadd.png"),
        inactive: require("./../../img/weixinadd.png")
      },
      radio: "1", //单选按钮
      num: "",
      price: ""
    };
  },
  components: {
    Leftheader,
    BottomButton
  },
  created() {
    console.log(this.$route);
    if (this.$route.query.status == "onPay") {
      this.num = this.$route.query.orderId;
      this.price = this.$route.query.price;
    } else {
      this.num = JSON.parse(window.localStorage.getItem("orderFnMsg")).orderId;
      this.price = JSON.parse(
        window.localStorage.getItem("orderFnMsg")
      ).actualPay;
    }
  },
  mounted() {},
  methods: {
    // 确认支付
    onAdd_button() {
      // this.$router.push({ path: "/orderresult/result" ,query:{
      //   orderId:this.num,
      // }});
      // 支付接口
      console.log(this.radio);
      payServer({ orderId: this.num, payType: this.radio })
        .then(res => {
          console.log(res);
          this.$router.push({
            path: "/orderresult/result",
            query: {
              orderId: this.num
            }
          });
        })
        .catch(err => {
          //错误处理
        });
    }
  }
};
</script>
<style scoped>
.add_zhifu {
  margin: 0.24rem 0rem;
  padding: 0.28rem 0rem 0.28rem 0.49rem;
  background: #fff;
  text-align: left;
}

.add_zhifu > p {
  display: flex;
  font-size: 0.42rem;
  font-weight: 400;
}

/* 字体与字体之间的宽度 */
.add_zhifu > p:first-child > span:first-child {
  letter-spacing: 0.05rem;
}

.add_zhifu > p:first-child > span:last-child {
  margin-left: 0.15rem;
}

.add_zhifu > p:last-child > span:last-child {
  color: #e72d2d;
}

.add_zhifu > p > span {
  display: block;
}

.add_bottom > p {
  padding-bottom: 0.24rem;
  padding-left: 0.49rem;
  text-align: left;
  color: #bebebe;
  font-size: 0.34rem;
  font-weight: 500;
}

.add_bottom_list > div {
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 0.33rem 0rem 0.33rem 0.56rem;
}

.add_bottom_list > div:first-child {
  border-bottom: 0.03rem solid #f0f0f0;
}

.add_bottom_list > div > div {
  display: flex;
}

.add_bottom_list > div > div > p:first-child {
  width: 0.73rem;
  height: 0.73rem;
  margin-right: 0.25rem;
}

.add_bottom_list > div > div > p:first-child > img {
  width: 100%;
  height: 100%;
}

.add_bottom_list > div > div > p:last-child {
  font-size: 0.42rem;
  color: #000;
  font-weight: 500;
  padding-top: 0.1rem;
}

.add_bottom_list > div > div:last-child {
  width: 0.5rem;
  height: 0.44rem;
  margin-right: 0.44rem;
}

.add_img {
  width: 0.5rem;
  height: 0.44rem;
}

/* 底部按钮设置 */
.add_button {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>