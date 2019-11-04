<template>
  <div>
    <div>
      <!--头部导航-->
      <van-tabs v-model="active" :color="'#008489'" @click="onDome(active)">
        <van-tab v-for="(item,index) in dome" :title="item.test" :key="index">
          <!-- 状态不同饿选项和内容 -->
          <div class="wrap">
            <div>
<<<<<<< HEAD
              <div class="wrap_top text-top">
                <div class="test-img">
                  <p>
                    <img src="./../../img/jiu.png" alt />
                  </p>
                  <p>北京东直门雅辰悦居酒店</p>
                </div>
                <p class="last-top" ref="lasttop" @click="application()">待商家接单</p>
              </div>
              <dl class="wrap_top" @click="JumpDetails()">
                <dt>
                  <img src="./../../img/ding.png" alt />
                </dt>
                <dd class="content_content">
                  <p class="context">悦居60平方双人床</p>
                  <div class="context-content">
                    <p>10月18日10:00-10月18日21:00</p>z
                    <p>共9小时</p>
                  </div>
                  <div class="fangjia">
                    <p>房价：1690.00</p>
                    <p>￥1780</p>
                  </div>
                </dd>
              </dl>
              <div class="last_div">
                <div class="last_div_first">
                  <div>
                    <img src="./../../img/time.png" alt />
                  </div>
                  <p ref="tent">3小时24分后入住</p>
                </div>
                <div class="last_div_last">
                  <p style="background:#E72D2D;" v-if="tenta">转售</p>
                  <p style="background:#FFD925;" v-if="tentb" @click="onContinue()">续住</p>
                  <p style="background:#008489;" v-if="tentc">退房</p>
                  <p style="background:#FF9623;" v-if="tentd">取消订单</p>
                  <p style="background:#E72D2D;" v-if="tente">转存商家</p>
                  <p style="background:#FF9623;" v-if="tenth">取消转售</p>
                  <p style="background:#E72D2D;" v-if="tentm" @click="onError()">删除订单</p>
                  <p style="background:#3981F0;" v-if="tentf" @click="onCheckout()">评价</p>
                  <p style="background:#6C6C6C;" v-if="tentg">评价</p>
                </div>
              </div>
=======
                  <!--头部导航-->
                  <van-tabs v-model="active" :color="'#008489'" @click='onDome(active)'>
                        <van-tab v-for="(item,index) in dome" :title="item.test" :key="index">
                              <!-- 状态不同饿选项和内容 -->
                              <div class='wrap'>
                                    <div>
                                          <div class='wrap_top text-top'>
                                                <div class='test-img'>
                                                      <p><img src="./../../img/jiu.png" alt=""></p>
                                                      <p>北京东直门雅辰悦居酒店</p>
                                                </div>
                                                <p class='last-top' ref='lasttop'>待商家接单</p>
                                          </div>
                                          <dl class='wrap_top' @click='JumpDetails()'>
                                                <dt><img src="./../../img/ding.png" alt=""></dt>
                                                <dd class='content_content'>
                                                      <p class='context'>悦居60平方双人床</p>
                                                      <div class='context-content'>
                                                            <p>10月18日10:00-10月18日21:00</p>
                                                            <p>共9小时</p>
                                                      </div>
                                                      <div class='fangjia'>
                                                            <p>房价：1690.00</p>
                                                            <p>￥1780</p>
                                                      </div>
                                                </dd>
                                          </dl>
                                          <div class='last_div'>
                                                <div class='last_div_first'>
                                                      <div>
                                                            <img src="./../../img/time.png" alt="">
                                                      </div>
                                                      <p ref='tent'>3小时24分后入住</p>
                                                      <!-- <p>2019.1.1 12:00-2019.1.3 12:00房间转售中</p>
                                                                        <p>入住时间已到请尽快入住</p>
                                                                        <p><span>3小时24</span>分后离店</p>
                                                                        <p>剩余 <span> 1小时45分</span> </p> -->
                                                      <!-- <p>入住时间已到请尽快入住</p>
                                                                        <p>退房时间已到</p>
                                                                        <p>剩余1小时45分</p> -->
                                                      <!-- <p>09.7.1-13:00至09.7.2-19:00房间转售中</p> -->
                                                </div>
                                                <div class='last_div_last'>
                                                      <p style='background:#E72D2D;' v-if='tenta'>转售</p>
                                                      <p style='background:#FFD925;' v-if='tentb' @click='onContinue()'>
                                                            续住</p>
                                                      <p style='background:#008489;' v-if='tentc'>退房</p>
                                                      <p style='background:#FF9623;' v-if='tentd'
                                                            @click="application($event)">取消订单</p>
                                                      <p style='background:#E72D2D;' v-if='tente' @click='onBusiness()'>
                                                            转存商家</p>
                                                      <p style='background:#FF9623;' v-if='tenth'>取消转售</p>
                                                      <p style='background:#E72D2D;' v-if='tentm' @click='onError()'>
                                                            删除订单</p>
                                                      <p style='background:#3981F0;' v-if='tentf' @click="onCheckout()">
                                                            评价</p>
                                                      <p style='background:#6C6C6C;' v-if='tentg'>评价</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <!-- 选项内容结束 -->
                        </van-tab>
                  </van-tabs>
>>>>>>> 5f9f8df4164e7923c01aa8bd76c04c226245f030
            </div>
          </div>
          <!-- 选项内容结束 -->
        </van-tab>
      </van-tabs>
    </div>
    <!-- 下面的内容 -->
  </div>
</template>
<!-- js设置样式 -->
<script>
<<<<<<< HEAD
=======
      import Leftheader from "@/components/header/index";
      export default {
            data() {
                  return {
                        shancun: "",
                        active: 0,
                        tenta: false, //按钮的隐藏显示
                        tentb: false,
                        tentc: false,
                        tentd: false,
                        tente: true,
                        tentf: false,
                        tentg: false,
                        tenth: false,
                        tentm: false,
                        dome: [  //  头部导航栏
                              {
                                    id: 1,
                                    test: "待入住",
                              },
                              {
                                    id: 2,
                                    test: "进行中",
                              },
                              {
                                    id: 3,
                                    test: "转售中",
                              },
                              {
                                    id: 4,
                                    test: "已完成",
                              },
                        ]
                  };
            },
            components: {
                  Leftheader
            },
            methods: {
                  // 续住
                  onContinue() {
                        this.$router.push({ path: '/page/jump/continue' })
                  },
                  JumpDetails() {   //跳转到订单详情
                        this.$router.push({ path: '/page/jump/Stay' })
                  },
                  application(event) {
                        console.log(this.dome)
                        // this.$router.push({ path: "/page/jump/application" })
                        // this.$router.push({ path: '/page/jump/Stay' })
                        // console.log(window.eventBus);

                  },
                  // 转存商家
                  onBusiness() {

                  },
                  onCheckout() {
                        this.$router.push({ path: '/page/jump/checkout' })
                  },
                  onError() {
                        this.$router.push({ path: '/page/jump/Stay' })
                  },
                  onDome(num) {
                        switch (num) {
                              case 0:
                                    break;
                              case 1:

                                    break;
                              case 2:

                                    break;
                              case 3:

                                    break;
                              default: break;
                        }
                  }

            },
            watch: {
                  active(num) {
                        if (num == 0) {
                              this.$refs.lasttop.innerHTML = '待入住'
                        }
                        if (num == 1) {
                              // this.tentc = false;
                              // this.tentf = false;
                              // this.tentm = false;
                              // this.tenta = false;
                              // this.$refs.lasttop.innerHTML = '入驻中';
                              // this.$refs.tent.innerHTML = '剩余1小时45分';
                              // // 退房按钮显示
                              // this.tentc = true;
                              // this.tentb = true;
                        }
                        if (num == 2) {
                              // this.tentc = false;
                              // this.tentb = false;
                              // this.tentf = false;
                              // this.tentm = false;
                              // this.$refs.tent.innerHTML = '入住时间已到请尽快入住';
                              // this.$refs.lasttop.innerHTML = '转入中';
                              // this.tente = true;
                              // this.tenth = true;
                        }
                        if (num == 3) {
                              // this.tentc = false;
                              // this.tente = false;
                              // this.tenth = false;
                              // this.$refs.tent.innerHTML = '退房时间已到';
                              // this.$refs.lasttop.innerHTML = '入住完成';
                              // this.tentf = true;
                              // this.tentm = true;
                        }
                  },
                  deep: true
            }
      }
</script>

<style>
      .van-tab--active {
            color: #008489;
            font-weight: 400;
      }

      .van-tab {
            font-size: 0.36rem;
      }

      /* 需要渲染的样式设置 */

      .wrap {
            width: 100%;
            height: 100%;
            padding: 0rem 0.48rem;
            /* background: #fff; */
      }

      .wrap>div {
            background: #fff;
            border-radius: 0.1rem;
            margin-top: 0.3rem;
            padding: 0rem 0.3rem 0.3rem 0.3rem;
      }

      .wrap_top {
            display: flex;
            border-bottom: 0.05rem solid #F0F0F0;
            padding: 0.16rem 0rem 0.15rem 0rem;
      }

      .text-top {
            justify-content: space-between;
      }

      .test-img {
            display: flex;
      }

      .test-img p:first-child {
            width: 0.56rem;
            height: 0.56rem;
            margin-right: 0.13rem;
            margin-top: 0.05rem;
      }

      .test-img p:first-child img {
            width: 100%;
            height: 100%;
      }

      .test-img p:nth-child(2) {
            font-size: 0.45rem;
            color: #000000;
            font-weight: 700;
      }

      .last-top {
            padding-top: 0.1rem;
            color: #4F4F4F;
            font-size: 0.33rem;
            font-weight: 400;
      }

      .wrap_top dt {
            width: 1.88rem;
            height: 1.94rem;

      }

      .wrap_top dt img {
            width: 100%;
            height: 100%;
      }

      .wrap_top dd div {
            display: flex;
      }

      .context {
            font-size: 0.36rem;
            font-family: 600;
            color: #000;
            padding-top: 0.02rem;
            margin-left: -3.2rem;
      }

      .content_content {
            /* 改变交叉轴的方向 */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: 0.42rem;
      }

      .context-content {
            margin-left: -0.11rem;
            flex-wrap: nowrap;
            margin-top: -0.3rem;
            font-weight: 400;
            line-height: 44px;
      }

      .context-content p:first-child {
            color: #6C6C6C;
            font-size: 0.32rem;
            white-space: nowrap;
      }

      .context-content p:last-child {
            font-size: 0.32rem;
            color: #D93E3E;
            margin-left: 0.5rem;
            white-space: nowrap;
      }
>>>>>>> 5f9f8df4164e7923c01aa8bd76c04c226245f030

import Leftheader from "@/components/header/index";

export default {
  data() {
    return {
      active: 0,
      tenta: true, //按钮的隐藏显示
      tentb: true,
      tentc: false,
      tentd: false,
      tente: false,
      tentf: false,
      tentg: false,
      tenth: false,
      tentm: false,
      WrapList: "",
      dome: [
        //  头部导航栏
        {
          id: 1,
          test: "待入住"
        },
        {
          id: 2,
          test: "进行中"
        },
        {
          id: 3,
          test: "转售中"
        },
        {
          id: 4,
          test: "已完成"
        }
      ]
    };
  },
  components: {
    Leftheader
  },
  methods: {
    // 续住
    onContinue() {
      this.$router.push({ path: "/page/jump/continue" });
    },
    JumpDetails() {
      //跳转到订单详情
      this.$router.push({ path: "/page/jump/Stay" });
    },
    application() {
      this.$router.push({ path: "/page/jump/application" });
    },
    onCheckout() {
      this.$router.push({ path: "/page/jump/checkout" });
    },
    onError() {
      this.$router.push({ path: "/page/jump/Stay" });
    },
    onDome(num) {
      switch (num) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        default:
          break;
      }
    }
  },
  watch: {
    active(num) {
      if (num == 0) {
        this.$refs.lasttop.innerHTML = "待入住";
      }
      if (num == 1) {
        this.tentc = false;
        this.tentf = false;
        this.tentm = false;
        this.tenta = false;
        this.$refs.lasttop.innerHTML = "入驻中";
        this.$refs.tent.innerHTML = "剩余1小时45分";
        // 退房按钮显示
        this.tentc = true;
        this.tentb = true;
      }
      if (num == 2) {
        this.tentc = false;
        this.tentb = false;
        this.tentf = false;
        this.tentm = false;
        this.$refs.tent.innerHTML = "入住时间已到请尽快入住";
        this.$refs.lasttop.innerHTML = "转入中";
        this.tente = true;
        this.tenth = true;
      }
      if (num == 3) {
        this.tentc = false;
        this.tente = false;
        this.tenth = false;
        this.$refs.tent.innerHTML = "退房时间已到";
        this.$refs.lasttop.innerHTML = "入住完成";
        this.tentf = true;
        this.tentm = true;
      }
    },
    deep: true
  }
};
</script>

<style>
.van-tab--active {
  color: #008489;
  font-weight: 400;
}

.van-tab {
  font-size: 0.36rem;
}

/* 需要渲染的样式设置 */

.wrap {
  width: 100%;
  height: 100%;
  padding: 0rem 0.48rem;
  /* background: #fff; */
}

.wrap > div {
  background: #fff;
  border-radius: 0.1rem;
  margin-top: 0.3rem;
  padding: 0rem 0.3rem 0.3rem 0.3rem;
}

.wrap_top {
  display: flex;
  border-bottom: 0.05rem solid #f0f0f0;
  padding: 0.16rem 0rem 0.15rem 0rem;
}

.text-top {
  justify-content: space-between;
}

.test-img {
  display: flex;
}

.test-img p:first-child {
  width: 0.56rem;
  height: 0.56rem;
  margin-right: 0.13rem;
  margin-top: 0.05rem;
}

.test-img p:first-child img {
  width: 100%;
  height: 100%;
}

.test-img p:nth-child(2) {
  font-size: 0.45rem;
  color: #000000;
  font-weight: 700;
}

.last-top {
  padding-top: 0.1rem;
  color: #4f4f4f;
  font-size: 0.33rem;
  font-weight: 400;
}

.wrap_top dt {
  width: 1.88rem;
  height: 1.94rem;
}

.wrap_top dt img {
  width: 100%;
  height: 100%;
}

.wrap_top dd div {
  display: flex;
}

.context {
  font-size: 0.36rem;
  font-family: 600;
  color: #000;
  padding-top: 0.02rem;
  margin-left: -3.2rem;
}

.content_content {
  /* 改变交叉轴的方向 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0.42rem;
}

.context-content {
  margin-left: -0.11rem;
  flex-wrap: nowrap;
  margin-top: -0.3rem;
  font-weight: 400;
  line-height: 44px;
}

.context-content p:first-child {
  color: #6c6c6c;
  font-size: 0.32rem;
  white-space: nowrap;
}

.context-content p:last-child {
  font-size: 0.32rem;
  color: #d93e3e;
  margin-left: 0.5rem;
  white-space: nowrap;
}

.fangjia {
  color: #6c6c6c;
  margin-top: -0.1rem;
}

.fangjia p:first-child {
  font-size: 0.3rem;
  padding-right: 0.4rem;
}

.fangjia p:last-child {
  padding-top: 0.05rem;
  font-size: 0.2rem;
  text-decoration: line-through;
}

.last_div {
  display: flex;
  justify-content: space-between;
  padding-top: 0.27rem;
}

.last_div > div {
  display: flex;
}

.last_div_first div {
  width: 0.32rem;
  height: 0.32rem;
  margin-right: 0.1rem;
}

.last_div_first div img {
  width: 100%;
  height: 100%;
}

.last_div_first p {
  width: 4rem;
  text-align: left;
  font-size: 0.3rem;
  color: #e72d2d;
  font-weight: 400;
}

.last_div_last p:first-child {
  margin-right: 0.27rem;
}

.last_div_last p {
  width: 2rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  border-radius: 0.1rem;
  color: #ffffff;
  font-size: 0.25rem;
}
</style>