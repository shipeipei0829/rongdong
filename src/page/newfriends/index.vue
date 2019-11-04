<template>
      <div class='newfried'>
            <Leftheader title='新的朋友'></Leftheader>
            <div class='newfried_menu'>
                  <ul class='newfried_list'>
                        <!-- 一楼 -->
                        <li v-model='newfried'>
                              <div class='newfried_left'>
                                    <div>
                                          <img src="./../../img/headimg.jpg" alt="">
                                    </div>
                                    <div>
                                          <p>
                                                TY
                                          </p>
                                          <p>
                                                我是TY请求添加......
                                          </p>
                                    </div>
                              </div>
                              <div class='newfried_right' @click='onNewfried_right()'>
                                    <p>同意</p>
                              </div>
                        </li>
                        <!--二楼 -->
                        <li>
                              <div class='newfried_left'>
                                    <div>
                                          <img src="./../../img/headimg.jpg" alt="">
                                    </div>
                                    <div>
                                          <p>
                                                TY
                                          </p>
                                          <p>
                                                我是TY请求添加......
                                          </p>
                                    </div>
                              </div>
                              <div class='newfried_right newfried_right_right'>
                                    <p>已拒绝</p>
                              </div>
                        </li>
                        <!--三楼  -->
                        <li>
                              <div class='newfried_left'>
                                    <div>
                                          <img src="./../../img/headimg.jpg" alt="">
                                    </div>
                                    <div>
                                          <p>
                                                TY
                                          </p>
                                          <p>
                                                我是TY请求添加......
                                          </p>
                                    </div>
                              </div>
                              <div class='newfried_right newfried_right_right'>
                                    <p>已过期</p>
                              </div>
                        </li>
                        <!-- 四楼 -->
                        <li>
                              <div class='newfried_left'>
                                    <div>
                                          <img src="./../../img/headimg.jpg" alt="">
                                    </div>
                                    <div>
                                          <p>
                                                TY
                                          </p>
                                          <p>
                                                我是TY请求添加......
                                          </p>
                                    </div>
                              </div>
                              <div class='newfried_right newfried_right_right'>
                                    <p>已添加</p>
                              </div>
                        </li>
                  </ul>
            </div>
      </div>
</template>
<script>
      import Leftheader from "@/components/header/index"
      export default {
            data() {
                  return {
                        newfried: []
                  }
            },
            components: {
                  Leftheader
            },
            methods: {
                  onNewfried_right() {
                        this.$router.push({ path: '/page/goodfriend/index' })
                  }
            }
      }
</script>

<style scoped>
      .newfried_menu {
            background: #fff;
            padding: 0rem 0.4rem;
      }

      .newfried_list>li {
            border-bottom: 0.03rem solid #D7D7D7;
            display: flex;
            justify-content: space-between;
      }

      .newfried_list>li>div {
            display: flex;
      }

      .newfried_left>div:first-child {
            width: 1.42rem;
            height: 1.42rem;
            margin: 0.34rem 0.55rem 0.24rem 0.14rem;
      }

      .newfried_left>div:first-child>img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
      }

      .newfried_left>div:nth-child(2) {
            text-align: left;
            padding-top: 0.52rem;
            color: #000;
      }

      .newfried_left>div:nth-child(2)>p:first-child {
            font-size: 0.42rem;
            font-weight: 500;
      }

      .newfried_left>div:nth-child(2)>p:last-child {
            font-size: 0.36rem;
            font-weight: 400;
      }

      .newfried_right {
            margin-top: 0.83rem;
            width: 1.3rem;
            height: 0.57rem;
            background: url('./../../img/green.png') no-repeat center center;
            background-size: 100% 100%;
            color: #fff;
            line-height: 0.57rem;
            font-size: 0.36rem;
            font-weight: 400;
            /* 解决文字不居中的问题 */
            display: flex;
            justify-content: center;
            align-items: center;
      }

      /* 不同样北京图片 */
      .newfried_right_right {
            background: url('./../../img/gray.png') no-repeat center center;
            background-size: 100% 100%;
      }

      .newfried_right_right {
            color: #000;
      }
</style>