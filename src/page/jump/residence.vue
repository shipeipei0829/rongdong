<template>
      <div class='resid' style="height:100vh;background:#f0f0f0;">
            <Leftheader title='续住'></Leftheader>
            <!-- 续住失败的提示 -->
            <div class='resid_show' v-if='resid_show'>
                  <div>
                        <img src="./../../img/riesd.png" alt="">
                  </div>
                  <div>
                        <p>抱歉！续住失败</p>
                        <p>您选择的续住时间过长没有匹配到合适房间！</p>
                  </div>
                 
            </div>
            <!-- 时间的调整 -->

            <div class='resid_content'>
                  <ul>
                        <li>
                              <p class='resid_content_first' ref='resid_content_first'>续住匹配成功</p>
                        </li>
                        <li v-if='resid_show'>
                              <p class='resid_content_first' ref='resid_content_first'>推荐续住</p>
                        </li>
                        <li>
                              <p>续住房间</p>
                              <p>1023</p>
                        </li>
                        <li>
                              <p>离店时间</p>
                              <p>2019-05-23 14:00:00</p>
                        </li>
                        <li>
                              <p>续住时长</p>
                              <p>3小时</p>
                        </li>
                        <li>
                              <p>续住价格</p>
                              <p>¥ 120.00</p>
                        </li>
                        <li>
                              <p>打扫费用</p>
                              <p>¥25.00</p>
                        </li>
                        <li>
                              <p>合计</p>
                              <p>¥ 145.00</p>
                        </li>
                        <div v-if="resid_show">
                              <p @click='onFootbutton'>续住</p>
                        </div>
                  </ul>
            </div>
            <!-- 取消续住按钮 -->
            <div class='footbutton_last'>
                  <p style="border-right:1px solid #C7C7C7;">取消续住</p>
                  <p @click='footbutton_right()'  v-if="!resid_show">确认续住</p>
            </div>

            <!-- 续住成功的弹窗 -->
            <div class='popup_show' v-if='popup_showa'>
                  <div class='popup_tent'>
                        <p class='popup_tent_text'>房间续住成功</p>
                        <div class='popup_right' @click='popup_right()'></div>
                        <div class='popup_bottoma' @click="()=>{this.$router.push({path:'/order/index'})}"></div>
                  </div>

            </div>
      </div>
</template>
<script>
      import Leftheader from "@/components/header/index"
      // 引进底部按钮
      import Footbutton from "@/components/footbutton/index"
      export default {
            data() {
                  return {
                        resid_show:false,//true续住失败
                        popup_showa: false
                  }
            },
            components: {
                  Leftheader, Footbutton
            },
            methods: {
                  onFootbutton() {
                        this.resid_show = false;
                        this.$refs.resid_content_first.innerHTML = '续住匹配成功';
                        this.footbutton = false;
                        this.footbutton_last = true;
                  },
                  popup_right() {
                        this.popup_showa = false;
                  },
                  footbutton_right() {
                        this.popup_showa = true;
                  }
            }
      }
</script>
<style>
.resid_content ul {
      border-radius: 0.1rem;
}
      .resid_show {
            width: 100%;
            background: #FF9623;
            color: #FFFFFF;
            display: flex;
            padding: 0.52rem 0rem 0.48rem 0.91rem;
      }

      .resid_show>div:first-child {
            width: 1.74rem;
            height: 1.38rem;
            margin-right: 0.31rem;
      }

      .resid_show>div:first-child img {
            width: 100%;
            height: 100%;
      }

      .resid_show>div:last-child {
            padding-top: 0.25rem;
      }

      .resid_show>div:last-child p {
            text-align: left;
      }

      /* 时间调整列表 */
      .resid_content {
            padding: 0.31rem 0.48rem 0rem 0.48rem;
      }

      .resid_content ul {
            background: #fff;
      }

      .resid_content ul li {
            text-align: left;
            display: flex;
            justify-content: space-between;
            border-bottom: 0.03rem solid #F0F0F0;
            padding: 0.34rem 0.14rem 0.28rem 0.31rem;
      }

      .resid_content ul li>p:first-child {
            font-size: 0.4rem;
            font-weight: 400;

      }

      .resid_content_first {
            font-weight: 600;
      }

      .resid_content>ul>li:nth-child(2)>p:last-child,
      .resid_content>ul>li:nth-child(3)>p:last-child,
      .resid_content>ul>li:nth-child(4)>p:last-child {
            color: #000000;
            font-size: 0.32rem;
            font-weight: 0.32rem;
      }

      .resid_content>ul>li:nth-child(5)>p:last-child,
      .resid_content>ul>li:nth-child(6)>p:last-child,
      .resid_content>ul>li:nth-child(7)>p:last-child {
            color: #E41B2E;
            font-size: 0.32rem;
            font-weight: 0.32rem;
      }

      .resid_content>ul>div {
            padding: 0.28rem 0rem;
            display: flex;
            justify-content: center;
      }

      .resid_content>ul>div p {
            width: 3rem;
            height: 0.74rem;
            background: #FF9623;
            color: #fff;
            font-size: 0.32rem;
            font-weight: 400;
            line-height: 0.74rem;
            border-radius: 0.5rem;
      }

      /* 底部按钮字体颜色 */
      .footbutton {
            color: #E41B2E !important;
      }

      .footbutton_last {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            display: flex;
            height: 1.44rem;
            line-height: 1.44rem;
      }

      .footbutton_last p {
            flex: 1;
            font-size: 0.5rem;
            font-weight: 400;
            background: #fff;
      }

      .footbutton_last p:first-child {
            color: #E41B2E;
      }

      .footbutton_last p:last-child {
            color: #118589;
      }

      /* 弹出遮罩层 */
      .popup_show {
            position: absolute;
            left: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.3);
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
      }

      .popup_tent {
            width: 8.58rem;
            height: 9.47rem;
            background: url('./../../img/chenggong.png') center center no-repeat;
            background-size: 100% 100%;
            position: relative;
      }

      .popup_right {
            position: absolute;
            width: 0.45rem;
            height: 0.45rem;
            background: url('./../../img/guanbi.png') center center no-repeat;
            background-size: 100% 100%;
            right: 1.25rem;
            top: 0.6rem;
      }

      .popup_bottoma {
            width: 4.23rem;
            height: 1.23rem;
            background: url('./../../img/quedan.png') no-repeat center center;
            background-size: 100% 100%;
            position: absolute;
            left: 2.13rem;
            bottom: 0.92rem;
      }

      .popup_tent_text {
            position: absolute;
            left: 2.76rem;
            top: 5.2rem;
            color: #000000;
            font-size: 0.5rem;
            font-weight: 400;
      }
</style>