<template>
      <div class='xiangqing_content'>
            <Leftheader title='订单详情'></Leftheader>
            <!--返回上一页 -->
            <Stayaimg src='ffftime' value='商家剩余接单时间51分23秒'></Stayaimg>   包含图片的提示 
            <Firsthead valuea='1小时51分23秒后转售结束' valueb='（转售时间结束后剩余时间将作废，建议提前续存商家）'></Firsthead>   文字的提示 
            <div class='staylist'>
                  <div class='shancun' v-if='shancun'>
                        <Hotel></Hotel> <!-- 酒店大致介绍 -->
                  </div>
                  <div>
                        <Refund></Refund> 转售成功的支付
                  </div>
                  <div>
                        <!-- 转售成功 -->
                        <Addlist></Addlist>
                  </div>
                  <div>
                        <!-- 转售失败 -->
                        <Addtwo></Addtwo>
                  </div>
                  <div>
                        <!-- 剩余时间的额存储 -->
                        <Addthree></Addthree>
                  </div>
                  <div class='gouwu'>
                        <Duwuqing></Duwuqing> <!-- 购物清单 -->
                  </div>
                  <!-- 入住人信息 -->
                  <div class='ruzhu'>
                        <Failparent></Failparent>
                  </div>
                  <!-- 退款信息 -->
                  <div class='tuikuan'>
                        <Steps></Steps>
                  </div>
                  <!-- 转售个人信息 -->
                  <div class='ruzhu'>
                        <Zhuanshou></Zhuanshou>
                  </div>

                  <!-- 订单金额 -->
                  <div class='ruzhu'>
                        <Dingjin></Dingjin>
                  </div>
                  <!-- 个人信息 -->
                  <div class='ruzhu'>
                        <Personal></Personal>
                  </div>
                  <!-- 订单信息 -->
                  <div class='ruzhu'>
                        <Dingdan></Dingdan>
                  </div>
                  <!-- 底部规则协议 -->
                  <div style="padding-left:.5rem;">
                        <Footertext></Footertext>
                  </div>
            </div>
            <!-- 底部按钮的样式设置 -->
            <div @click='onCancel()'>
                  <BottomButton value="取消订单" width="100%" height="1.43rem" bgcolor="#E72D2D" fontcolor="#fff"
                        class='bottom_button' fontsize="0.5rem"></BottomButton>
            </div>
            <div class='zhuan_button'>
                  <p @click='stay_first()'>
                        <BottomButton value="转售/续存" width="100%" height="1.43rem" bgcolor="#FF9623" fontcolor="#fff"
                              class='bottom_button' fontsize="0.5rem"></BottomButton>
                  </p>
                  <p>
                        <BottomButton value="取消订单" width="100%" height="1.43rem" bgcolor="#E72D2D" fontcolor="#fff"
                              class='bottom_button' fontsize="0.5rem"></BottomButton>
                  </p>
            </div>
            <!-- 提交订单 -->
            <div style='display:flex;' class='zhuan_button'>
                  <p>
                        <BottomButton value="￥1295.89" width="100%" height="1.43rem" bgcolor="#fff" fontcolor="#D93E3E"
                              class='bottom_button' fontsize="0.5rem"></BottomButton>
                  </p>
                  <p @click="showPopup()">
                        <BottomButton value="提交订单" width="100%" height="1.43rem" bgcolor="#D93E3E" fontcolor="#fff"
                              class='bottom_button' fontsize="0.5rem"></BottomButton>
                  </p>
            </div>

            <!-- 遮罩 -->
            <div>
                  <van-popup v-model="show">
                        <div ref='show'>
                              <img src="./../../img/zhezhao.png" alt="">
                              <div @click='onShowFirst()' class='show_add'></div>
                        </div>
                  </van-popup>
            </div>

            <!-- 取消订单遮罩-->
            <div class='cancel' v-if='!cancela'>
                  <div>
                        <div class='cancel_img'>
                              <img src="./../../img/renwu.png" alt="">
                        </div>
                        <div class='cancel_two' @click='cancel_two()'>
                              <img src="./../../img/guanbi.png" alt="">
                        </div>
                        <div class='cancel_three'>
                              <img src="./../../img/quxiao.png" alt="">
                        </div>
                  </div>
            </div>


            <!-- 提交订单弹出框 -->
            <div>
                  <van-popup v-model="tijiaoshow" position="bottom" :style="{ height: '80%' }">
                        <div class='popup_list'>
                              <p>选择支付方案</p>
                              <!-- 第一层 -->
                              <van-collapse v-model="activeNames">
                                    <van-collapse-item name="1" class='title_bottom'>
                                          <div slot="title">
                                                <p>房租支付方式</p>
                                          </div>
                                          <div class='popup_buttom'>
                                                <div class='popup_buttom_top'>
                                                      <div>
                                                            <p>账户抵扣</p>
                                                            <p>（优惠 30）</p>
                                                      </div>
                                                      <div style='width:0.35rem; height:0.35rem; border-radius:50%;'>
                                                            <van-radio-group v-model="radio">
                                                                  <van-radio name="1">
                                                                        <img slot="icon" slot-scope="props"
                                                                              class='selection_img'
                                                                              :src="props.checked ? icon.active : icon.inactive" />
                                                                  </van-radio>
                                                            </van-radio-group>
                                                      </div>
                                                </div>
                                                <div class='popup_buttom_top'>
                                                      <div>
                                                            <p>线上支付</p>
                                                            <p></p>
                                                      </div>
                                                      <div style='width:0.35rem; height:0.35rem; border-radius:50%;'>
                                                            <van-radio-group v-model="radio">
                                                                  <van-radio name="2">
                                                                        <img slot="icon" slot-scope="props"
                                                                              class='selection_img'
                                                                              :src="props.checked ? icon.active : icon.inactive" />
                                                                  </van-radio>
                                                            </van-radio-group>
                                                      </div>
                                                </div>
                                          </div>
                                    </van-collapse-item>
                              </van-collapse>
                              <!-- 第一层结束 -->



                              <!-- 第一层 -->
                              <van-collapse v-model="activeNames">
                                    <van-collapse-item name="2" class='title_bottom'>
                                          <div slot="title">
                                                <p>抵扣账户</p>
                                          </div>
                                          <div class='popup_buttom'>
                                                <div class='popup_buttom_top'>
                                                      <div>
                                                            <p>时间账户</p>
                                                            <p></p>
                                                      </div>
                                                      <div style='width:0.35rem; height:0.35rem; border-radius:50%;'>
                                                            <van-radio-group v-model="radio">
                                                                  <van-radio name="3">
                                                                        <img slot="icon" slot-scope="props"
                                                                              class='selection_img'
                                                                              :src="props.checked ? icon.active : icon.inactive" />
                                                                  </van-radio>
                                                            </van-radio-group>
                                                      </div>
                                                </div>
                                                <div class='popup_buttom_top'>
                                                      <div>
                                                            <p>商家会员储蓄卡</p>
                                                            <p style='color:#F1CA11;'>（推荐）</p>
                                                      </div>
                                                      <div style='width:0.35rem; height:0.35rem; border-radius:50%;'>
                                                            <van-radio-group v-model="radio">
                                                                  <van-radio name="4">
                                                                        <img slot="icon" slot-scope="props"
                                                                              class='selection_img'
                                                                              :src="props.checked ? icon.active : icon.inactive" />
                                                                  </van-radio>
                                                            </van-radio-group>
                                                      </div>
                                                </div>
                                          </div>
                                          <!-- ============================================================================================================================================ -->
                                          <div class='youhui'>
                                                <div>
                                                      <p>商家优惠</p>
                                                      <div>
                                                            <p>暂无可用优惠卷</p>
                                                            <p>
                                                                  <van-icon name="arrow" />
                                                            </p>
                                                      </div>
                                                </div>

                                                <div>
                                                      <p>商家优惠</p>
                                                      <div>
                                                            <p>暂无可用优惠卷</p>
                                                            <p>
                                                                  <van-icon name="arrow" />
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                          <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                                    </van-collapse-item>
                              </van-collapse>
                              <!-- 第一层结束 -->

                              <!-- 第一层 -->
                              <van-collapse v-model="activeNames">
                                    <van-collapse-item name="3" class='title_bottom'>
                                          <div slot="title">
                                                <p>押金支付方式</p>
                                          </div>
                                          <div class='popup_buttom'>
                                                <div class='popup_buttom_top'>
                                                      <div>
                                                            <p>押金支付方式</p>
                                                            <p></p>
                                                      </div>
                                                      <div style='width:0.35rem; height:0.35rem; border-radius:50%;'>
                                                            <van-radio-group v-model="radio">
                                                                  <van-radio name="5">
                                                                        <img slot="icon" slot-scope="props"
                                                                              class='selection_img'
                                                                              :src="props.checked ? icon.active : icon.inactive" />
                                                                  </van-radio>
                                                            </van-radio-group>
                                                      </div>
                                                </div>
                                                <div class='popup_buttom_top'>
                                                      <div>
                                                            <p>入住支付</p>
                                                            <p></p>
                                                      </div>
                                                      <div style='width:0.35rem; height:0.35rem; border-radius:50%;'>
                                                            <van-radio-group v-model="radio">
                                                                  <van-radio name="6">
                                                                        <img slot="icon" slot-scope="props"
                                                                              class='selection_img'
                                                                              :src="props.checked ? icon.active : icon.inactive" />
                                                                  </van-radio>
                                                            </van-radio-group>
                                                      </div>
                                                </div>
                                          </div>
                                    </van-collapse-item>
                              </van-collapse>
                              <!-- 第一层结束 -->
                        </div>

                        <!-- 底部按钮 -->
                        <div class='popup_button' @click="onPayment()">
                              <BottomButton value="￥7.89" width="100%" height="1.43rem" bgcolor="#008489"
                                    fontcolor="#fff" class='bottom_button' fontsize="0.5rem"></BottomButton>
                        </div>
                  </van-popup>
            </div>

      </div>
</template>

<script>
      // 酒店介绍
      import Hotel from "@/components/hotel/hotel.vue"
      // 返回上一页
      import Leftheader from "@/components/header/index.vue"
      // 按钮
      import BottomButton from "@/components/button/index"
      // 购物清单
      import Duwuqing from "@/components/duwuqing/index.vue"
      // 头部提示
      import Firsthead from "@/components/firsthead/index.vue"
      // 图片组件
      import Stayaimg from "@/components/staya/index.vue"
      // 转入支付
      import Refund from "@/components/refund/index.vue"
      // 小的标题
      import Failparent from "@/components/failparent/index.vue"
      // 进度条
      import Steps from "@/components/steps/index.vue"
      // 转售
      import Zhuanshou from "@/components/zhuanshou/index.vue"
      // 定金额度
      import Dingjin from "@/components/dingjin/index.vue"
      // 入住个人信息
      import Personal from "@/components/personal/index.vue"
      // 订单
      import Dingdan from "@/components/dingdan/index.vue"
      // 底部文字
      import Footertext from "@/components/footertext/index.vue"
      // 转售成功
      import Addlist from "@/components/addlist/index.vue"
      // 转售失败
      import Addtwo from "@/components/addtwo/index.vue"
      // 时间留存
      import Addthree from "@/components/addthree/index.vue"
      // 文字字体自适应
      import '@/../public/cdn/common.js'
      export default {
            data() {
                  return {
                        shancun: true,
                        // uid: this.$route.params.id, //传过来的id
                        radio: '1', //单选按钮
                        show: false,
                        cancela: false,
                        active: 1,
                        tijiaoshow: false,
                        activeNames: [],//下拉列表
                        icon: {
                              active: require('./../../img/selection.png'),
                              inactive: require('./../../img/circular.png'),
                        }
                  };
            },

            components: {
                  Leftheader, BottomButton, Hotel, Steps, Dingjin,
                  Personal, Dingdan, Footertext, Addlist, Addtwo, Addthree,
                  Duwuqing, Firsthead, Stayaimg, Refund, Failparent, Zhuanshou
            },
            methods: {
                  onShowFirst() {
                        this.show = false;
                  },
                  onDetails() {  //跳转到我的订单
                        this.$router.push({ path: '/page/jump/details' })
                  },
                  onCancel() {
                        // this.cancela = true;
                        console.log(this)
                  },
                  cancel_two() {
                        this.cancela = false;
                  },
                  // 转存续售的位置
                  stay_first() {
                        this.$router.push({ path: '/page/jump/residtwo' })
                  },
                  showPopup() {
                        this.tijiaoshow = true;
                  },
                  add() {
                        console.log(this)
                  },
                  onPayment() {
                        this.$router.push({ path: '/page/jump/payment' })
                  }
            },
            watch: {

            }
      }
</script>




<style>
      .shancun {
            background: #fff;
            border-radius: 0.1rem;
      }

      /* 提交订单弹出框 */
      .popup_list>p {
            width: 100%;
            border: 0.03rem solid #F0F0F0;
            padding: 0.23rem 0rem;
            color: #000000;
            font-weight: 400;
            font-size: 0.5rem;
      }


      .van-collapse-item__content {
            text-align: left;
      }


      .popup_button {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
      }

      .van-collapse-item__wrappe,
      .van-cell__title {
            text-align: left;
      }

      .popup_buttom_top {
            display: flex;
            justify-content: space-between;
      }

      .popup_buttom_top>div:first-child {
            display: flex;
      }

      .popup_buttom_top>div:first-child>p {
            font-size: 0.36rem;
            font-weight: 400;
      }

      .popup_buttom_top>div:first-child>p:first-child {
            color: #000000;

      }

      .popup_buttom_top>div:first-child>p:last-child {
            color: #F1CA11;
      }


      .selection_img {
            width: 0.35rem;
            height: 0.35rem;
            text-align: center;
      }

      /* ============================================================================ */
      .zhuan_button {
            width: 100%;
            display: flex;
      }

      .zhuan_button>p {
            width: 50%;
      }

      /* 中间列表不可删 */
      .staylist {
            width: 100%;
            padding: 0rem 0rem;
      }

      /* 购物清单 */
      .gouwu {
            margin-top: 0.5rem;
            width: 100%;
            background: #fff;
            padding: 0rem 0.15rem;
      }

      .ruzhu {
            width: 100%;
            background: #fff;
            border-radius: 0.1rem;
            margin-top: 0.28rem;
            padding: 0rem 0.16rem;
      }

      /* 优惠 */
      .youhui {
            width: 100%;
      }

      .youhui>div {
            padding: 0.26rem 0rem;
            display: flex;
            justify-content: space-between;
            font-size: 0.36rem;
            color: #000;
            font-weight: 400;
            border-top: 0.03rem solid #F0F0F0;
            border-bottom: 0.03rem solid #F0F0F0;
      }


      .youhui>div>div {
            display: flex;
      }

      /* 退款信息 */
      .tuikuan {
            background: #fff;
            padding: 0rem 0.16rem;
            margin-top: 0.35rem;
      }


      .steps {
            padding: 0rem 0.16rem 0.43rem 0.16rem;
      }

      .steps>p {
            padding: 0.27rem 0rem;
            font-size: 0.5rem;
            font-weight: bold;
      }

      .steps>p:first-child {
            color: #118589;
      }

      .steps>div:nth-child(2) {
            border-bottom: 0.03rem solid #E6E5E5;
      }

      .steps>p:nth-child(3) {
            color: #FF9623;
      }

      /* 取消订单遮罩 */
      .cancel {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 10;
            background: rgba(0, 0, 0, 0.3);
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;

      }

      .cancel>div {
            width: 8.9rem;
            height: 9rem;
            background: #fff;
            position: relative;
      }

      .cancel_img {
            width: 3.67rem;
            height: 3.79rem;
            position: absolute;
            left: 2.67rem;
            top: -1.89rem;
      }

      .cancel_img img {
            width: 100%;
            height: 100%;
      }

      .cancel_two {
            width: 0.4rem;
            height: 0.4rem;
            position: absolute;
            right: 0.64rem;
            top: 0.32rem;
      }

      .cancel_two img {
            width: 100%;
            height: 100%;
      }

      .cancel_three {
            width: 5.32rem;
            height: 1.72rem;
            position: absolute;
            left: 1.84rem;
            bottom: 0.58rem;
      }

      .cancel_three img {
            width: 100%;
            height: 100%;
      }

      /* 退房的时间 */
      .stay_two {
            background: #E72D2D;
      }

      /* 不能退房的时间提示 */
      .stay_three {
            background: #E72D2D;
            padding: 0.26rem 0rem;
            font-size: 0.3rem;
            font-weight: bold;
            color: #fff;
      }

      /* 底部按钮 */
      .bottom_button {
            outline: none;
            border: none;
            border-radius: 0rem;
      }

      /* 遮罩 */
      .van-popup {
            display: flex;
            justify-content: center;
            align-items: center;
            background: none;
      }

      .van-popup>div {
            width: 7.82rem;
            height: 12.3rem;
            position: relative;
      }

      .van-popup>div>img {
            width: 100%;
            height: 100%;
      }

      .show_add {
            position: absolute;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            top: 0;
            right: -0.1rem;
            top: 0.5rem;
      }
</style>