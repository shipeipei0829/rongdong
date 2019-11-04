<template>
      <div>
            <Fail src='gouwu' value='购物清单'></Fail>
            <ul class="gouwu_content" ref='gouwu_content'>
                  <!-- 北冰洋列表 -->
                  <!-- <li>
                        <div>
                              <p><img src="./../../img/bei.png" alt=""></p>
                              <div>
                                    <p>北冰洋330ml橙汁汽水/1瓶</p>
                                    <p>X1</p>
                              </div>
                        </div>
                        <p>￥7.89</p>
                  </li> -->
                  <!-- 北冰洋一层结束 -->
                  <!-- <li>
                        <div>
                              <p><img src="./../../img/bei.png" alt=""></p>
                              <div>
                                    <p>北冰洋330ml橙汁汽水/1瓶</p>
                                    <p>X1</p>
                              </div>
                        </div>
                        <p>￥7.89</p>
                  </li> -->
                  <!-- 北冰洋二层结束 -->
                  <!-- <li>
                        <div>
                              <p><img src="./../../img/bei.png" alt=""></p>
                              <div>
                                    <p>北冰洋330ml橙汁汽水/1瓶</p>
                                    <p>X1</p>
                              </div>
                        </div>
                        <p>￥7.89</p>
                  </li> -->
                  <!-- 北冰洋三层结束 -->
                  <!-- <div class="gouwu_show">
                        <p @click='onOpen()'>展开更多
                              <van-icon name="arrow-down" />
                        </p>
                        <p>（<span>共4件</span>）</p>
                  </div> -->



                  
                  <!-- demo暂时不考虑购物车 -->
                   <div style="height:1rem;line-height:1rem;">
                        <p>购物车是空的哦~</p>
                  </div>
            </ul>
            <!-- 文字以及总价 -->
            <div class="gouwu_bottom">
                  <p @click='onDetails()'>
                        说明：您所购物商品将在入住前，配送至您预定的房间内，
                        如有疑问请咨询商家
                  </p>
                  <p>
                        <span>合计</span>
                        <span style='font-size:0.3rem; color:#ff0023;'>￥0.00</span>
                  </p>
            </div>
      </div>
</template>
<script>
      import Fail from "@/components/fail/index.vue"
      export default {
            data() {
                  return {
                        Length: 3
                  }
            },
            methods: {
                  onDetails() {  //跳转到我的订单
                        this.$router.push({ path: '/page/jump/details' })
                  },
                  onOpen() { //展开更多
                        console.log(this.$refs.gouwu_content.children.length)
                  }
            },
            components: {
                  Fail
            }
      }

</script>
<style>
      .gouwu_content {
            border-bottom: 0.02rem solid #E6E5E5;
      }

      .gouwu_content li {
            display: flex;
            justify-content: space-between;
            padding: 0.15rem 0.16rem 0rem 0.22rem;
      }

      .gouwu_content li>div {
            display: flex;
      }

      .gouwu_content li>div>p {
            width: 0.8rem;
            height: 0.8rem;
      }

      .gouwu_content li>div>p img {
            width: 100%;
            height: 100%;
      }

      .gouwu_content li>div>div {
            padding-left: 0.27rem;
      }

      .gouwu_content li>div>div P:first-child,
      .gouwu_content>li>p {
            font-size: 0.3rem;
            font-weight: 400;
            color: #000;
      }

      .gouwu_content li>div>div P:last-child {
            font-size: 0.24rem;
            font-weight: 400;
            color: rgba(191, 191, 191, 1);
            margin-left: -3rem;
      }

      .gouwu_show {
            position: relative;
            padding-bottom: 0.23rem;
      }

      .gouwu_show p:first-child {
            font-size: 0.25rem;
            font-weight: 400;
            color: rgba(33, 33, 33, 1);
      }

      .gouwu_show p:last-child {
            font-size: 0.24rem;
            font-weight: 300;
            color: rgba(108, 108, 108, 1);
            position: absolute;
            right: 0;
            bottom: 0.23rem;
      }

      /* 总价样式 */
      .gouwu_bottom {
            display: flex;
            justify-content: space-between;
      }

      .gouwu_bottom>p:first-child {
            width: 6.7rem;
            padding: 0.3rem 0rem;
            text-align: left;
            padding-left: 0.1rem;
            color: #6C6C6C;
            font-weight: 400;
            font-size: 0.24rem;
      }


      .gouwu_bottom>p:last-child {
            width: 2rem;
            display: flex;
            padding: 0.4rem 0.2rem 0rem 0rem;
            font-size: 0.24rem;
      }

      .gouwu_bottom>p:last-child span {
            display: inline-block;
      }

      .gouwu_bottom>p:last-child span:first-child {
            padding-top: 0.03rem;
      }
</style>