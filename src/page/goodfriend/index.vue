<template>
      <div class='goods_friend'>
            <Leftheader title="好友申请"></Leftheader>
            <div class='goods'>
                  <div class='goods_left'>
                        <div>
                              <img src="./../../img/headimg.jpg" alt="">
                        </div>
                        <div>
                              <div>
                                    <p>LY</p>
                                    <van-checkbox v-model="checkeda" @click='onCheckeda()'>
                                          <img slot="icon" slot-scope="props" :src=" icon.active ">
                                    </van-checkbox>
                              </div>
                              <p>
                                    <span>
                                          地区:
                                    </span>
                                    <span>
                                          湖北 武汉
                                    </span>
                              </p>
                              <p>
                                    <span>
                                          个性签名：
                                    </span>
                                    <span>
                                          一切皆有可能
                                    </span>
                              </p>
                        </div>
                  </div>
                  <div class='goods_text'>
                        <Textareae textinfo='张无忌：你好请问你有套房在转售现在还在吗？'></Textareae>
                  </div>
            </div>
            <!-- 通过验证 -->
            <div class='apply_content' @click='onApply()'>
                  发送消息
            </div>
      </div>
</template>
<script>
      import Leftheader from "@/components/header/index"
      // textarea 输出框
      import Textareae from "@/components/introsetting/index"
      export default {
            data() {
                  return {
                        checkeda: false,
                        checkedb: true,
                        icon: {
                              active: require('@/img/female.png'),
                              inactive: require('@/img/male.png')
                        }
                  }
            },
            components: {
                  Leftheader, Textareae
            },
            methods: {
                  onApply() {
                        this.$router.push({ path: '/page/quitelot/index' })
                  }
            }
      }
</script>
<style scoped>
      .goods {
            padding: 0.6rem 0.49rem 0.48rem 0.46rem;
            background: #fff;
      }

      .goods_left,
      .goods_left>div:nth-child(2)>div:first-child {
            display: flex;

      }

      .goods_left>div:first-child {
            margin-left: 0.1rem;
            width: 1.98rem;
            height: 1.98rem;
      }

      .goods_left>div:first-child>img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
      }

      .goods_left>div:nth-child(2) {
            text-align: left;
            padding-left: 0.6rem;
      }

      .goods_left>div:nth-child(2)>div:first-child {
            padding-top: 0.1rem;
      }

      .goods_left>div:nth-child(2)>div:first-child>p:first-child {
            color: #000;
            font-size: 0.5rem;
            font-weight: 500;
            margin-right: 0.3rem;
      }

      .goods_left>div:nth-child(2)>div:first-child img {
            width: 0.24rem;
            height: 0.26rem;
            margin-bottom: 0.1rem;
      }

      .goods_left>div:nth-child(2)>p {
            font-size: 0.36rem;
            color: #9E9999;
            font-weight: 400;
      }

      .apply_content {
            margin-top: 0.24rem;
            font-size: 0.42rem;
            color: #008489;
            padding: 0.52rem 0rem;
            background: #fff;
      }
</style>