<template>
      <div class='detail'>
            <!-- 返回上一页 -->
            <div class='detail_header'>
                  <Leftheader title='我的订单' />
            </div>
            <!-- 中间部分 -->
            <div class='detail_content'>
                  <div class='detail_listtop'>
                        <!-- 上面部分 -->
                        <div class="listtop_first">
                              <div>
                                    <div class='detail_img'>
                                          <img src="./../../img/order1.png" alt="">
                                    </div>
                                    <div class='listtop_left'>
                                          <p>北冰洋330ml橙汁汽水</p>
                                          <p>x3</p>
                                    </div>
                              </div>
                              <div class="listtop_right">
                                    <p>¥3.99</p>
                                    <p>¥4.50</p>
                              </div>
                        </div>
                        <div class="detail_listbottom">
                              <p>共3件商品 合计：<span>￥3.99</span></p>
                              <p>退款中</p>
                        </div>
                  </div>
                  <!-- 一楼结束 -->
                  <div class='detail_listtop'>
                        <!-- 上面部分 -->
                        <div class="listtop_first">
                              <div>
                                    <div class='detail_img'>
                                          <img src="./../../img/order1.png" alt="">
                                    </div>
                                    <div class='listtop_left'>
                                          <p>北冰洋330ml橙汁汽水</p>
                                          <p>x3</p>
                                    </div>
                              </div>
                              <div class="listtop_right">
                                    <p>¥3.99</p>
                                    <p>¥4.50</p>
                              </div>
                        </div>
                        <div class="detail_listbottom">
                              <p>共3件商品 合计：<span>￥3.99</span></p>
                              <p>退款中</p>
                        </div>
                  </div>
                  <div class='detail_listtop'>
                        <!-- 上面部分 -->
                        <div class="listtop_first">
                              <div>
                                    <div class='detail_img'>
                                          <img src="./../../img/order1.png" alt="">
                                    </div>
                                    <div class='listtop_left'>
                                          <p>北冰洋330ml橙汁汽水</p>
                                          <p>x3</p>
                                    </div>
                              </div>
                              <div class="listtop_right">
                                    <p>¥3.99</p>
                                    <p>¥4.50</p>
                              </div>
                        </div>
                        <div class="detail_listbottom">
                              <p>共3件商品 合计：<span>￥3.99</span></p>
                              <p>退款中</p>
                        </div>
                  </div>

            </div>
            <!-- 底部 -->
            <div class='detail_foot'>
                  <p><span>合计：</span><span>¥31.92</span></p>
            </div>
      </div>
</template>
<script>
      import Leftheader from "@/components/header/index"
      export default {
            data() {
                  return {

                  }
            },
            components: {
                  Leftheader
            }
      }
</script>
<style>
      html,
      body {
            width: 100%;
            height: 100%;
      }

      .detail_foot {
            width: 100%;
            height: 1.45rem;
            text-align: right;
            line-height: 1.45rem;
            position: fixed;
            bottom: 0;
            left: 0;
            border: 0;
      }

      .detail_foot p {
            padding-right: 0.5rem;
            color: #008489;
            font-weight: 400;
      }

      .detail_foot p>span:first-child {
            font-size: 0.34rem;
      }

      .detail_foot p>span:last-child {
            font-size: 0.5rem;
      }

      /* 中间内容的布局 */
      .detail_listtop {
            width: 100%;
            background: #fff;
            margin-top: 0.3rem;
            padding: 0.2rem 0.46rem 0.16rem 0.48rem;
      }

      .detail_listtop>div:first-child {
            border-bottom: 0.02rem solid #F0F0F0;
      }

      .detail_listtop>div:first-child,
      .detail_listtop>div:first-child>div:first-child {
            display: flex;
      }

      .detail_listtop>div:first-child>div:first-child {

            padding-bottom: 0.2rem;
      }

      .detail_img {
            width: 1.9rem;
            height: 1.9rem;
            margin-right: 0.3rem;
      }

      .detail_img img {
            width: 100%;
            height: 100%;
      }

      .listtop_first {
            justify-content: space-between;
      }

      .listtop_left {
            text-align: left;
      }

      .listtop_left>p:first-child,
      .detail_listbottom>p:first-child,
      .listtop_right>p:first-child {
            font-size: 0.36rem;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
      }

      .listtop_left>p:last-child,
      .listtop_right>p:last-child {
            font-size: 0.3rem;
            font-weight: 400;
            color: rgba(108, 108, 108, 1);
      }

      .listtop_right>p:last-child {
            padding-left: 0.1rem;
            text-decoration: line-through;
      }

      .detail_listbottom {
            position: relative;
      }

      .detail_listbottom>p:first-child {
            padding-bottom: 0.12rem;
            padding-top: 0.13rem;
      }

      .detail_listbottom>p:first-child span {
            color: #ff0023;
      }

      .detail_listbottom>p:last-child {
            position: absolute;
            right: 0;
            bottom: 0.08rem;
            width: 2rem;
            height: 0.56rem;
            border: 0.015rem solid #6C6C6C;
            border-radius: 0.1rem;
            line-height: 0.56rem;
            text-align: center;
            font-size: 0.3rem;
            font-weight: 400;
            color: rgba(0, 132, 137, 1);
      }
</style>