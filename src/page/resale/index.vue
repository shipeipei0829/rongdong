<template>
      <div>
            <Leftheader title='房间剩余时间转售'></Leftheader>
            <div class='menu'>
                  <div class='menu_top'>
                        <div>
                              <div class='menu_topleft'>
                                    <p>转售房间可入住开始时间:</p>
                                    <p>2019-06-27 <span>13:00</span> </p>
                              </div>
                              <p class='menu_topright'>
                                    <img src="./../../img/xiangcha.png" alt="">
                              </p>
                        </div>
                        <div>
                              <div class='menu_topleft menu_text'>
                                    <p>转售房间可入住介绍时间:</p>
                                    <p>2019-06-27 20:00</p>
                              </div>
                        </div>
                  </div>
                  <div class='menu_bottom'>
                        <div>
                              <p>转售剩余 <span>7</span> 小时</p>
                              <p class='menu_bottomlist'>
                                    <span>平台预估：</span>
                                    <span>￥178.00</span>
                              </p>
                        </div>
                        <div>
                              <div>
                                    <p>
                                          <span> 打折出售：</span>
                                          <span>1折</span>
                                    </p>
                                    <p class='menu_bottomlist'>
                                          <span>
                                                出售价格：
                                          </span>
                                          <span>￥178.00</span>
                                    </p>
                                    <p class='menu_top_last'>打折出售，成交速度更快哟</p>
                              </div>
                              <p class='menu_topright'>
                                    <img src="./../../img/xiangcha.png" alt="">
                              </p>

                        </div>
                  </div>
            </div>
            <div class='resale_button'>
                  <BottomButton value='确定转售'></BottomButton>
            </div>
      </div>
</template>
<script>
      import Leftheader from "@/components/header/index"
      import BottomButton from "@/components/button/index"
      export default {
            data() {
                  return {

                  }
            },
            components: {
                  Leftheader, BottomButton
            },
            methods: {

            }
      }
</script>
<style>
      .menu_top {
            margin: 0.27rem 0rem 0.33rem 0rem;
      }

      .menu_top>div {
            display: flex;
            justify-content: space-between;
            background: #fff;
      }

      .menu_topleft {
            padding: 0.31rem 0rem 0.29rem 0.45rem;
            text-align: left;
      }

      .menu_topleft>p:first-child {
            font-size: 0.42rem;
            font-weight: 400;
            color: #000000;
      }

      .menu_topleft>p:last-child {
            color: #F1CA11;
            font-weight: 400;
            font-size: 0.36rem;
      }

      .menu_topright {
            width: 0.25rem;
            height: 0.55rem;
            margin: 0.52rem 0.59rem 0rem 0rem;
      }

      .menu_topright>img {
            width: 100%;
            height: 100%;
      }

      .menu_text>p:last-child {
            color: #A2A2A2;
      }

      .menu_bottom {
            background: #fff;
      }

      .menu_bottom>div {
            padding: 0.31rem 0rem 0.29rem 0.45rem;
            text-align: left;
      }

      .menu_bottom>div span {
            display: block;
      }

      .menu_bottom>div p,
      .menu_bottom>div:last-child {
            display: flex;
      }

      .menu_bottom>div:last-child,
      .menu_top>div:last-child {
            justify-content: space-between;
            border-top: 0.03rem solid rgba(240, 240, 240, 1);
      }

      .menu_bottom>div>p:first-child,
      .menu_bottom>div>div>p:first-child {
            font-size: 0.42rem;
            font-weight: 400;
            color: #000000;
      }

      .menu_bottomlist>span:first-child {
            font-size: 0.36rem;
            font-weight: 400;
            color: #A2A2A2;
      }

      .menu_bottomlist>span:last-child {
            font-size: 0.42rem;
            font-weight: 400;
            color: #F1CA11;
            margin-top: -0.05rem;
      }

      .menu_top_last {
            font-size: 0.3rem;
            color: #CECECE;
            font-weight: 400;
      }

      .resale_button {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
      }
</style>