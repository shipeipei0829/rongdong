<template>
      <div class='apply'>
            <Leftheader title="好友申请"></Leftheader>
            <div class='apply_img'>
                  <div>
                        <img src="./../../img/headimg.jpg" alt="">
                  </div>
                  <div>
                        <p>
                              TY
                        </p>
                        <div>
                              <div>
                                    <van-checkbox v-model="checkeda" @click='onCheckeda()'>
                                          <img slot="icon" slot-scope="props" :src=" icon.active ">
                                    </van-checkbox>
                              </div>
                              <div>
                                    <van-checkbox v-model="checkedb" @click='onCheckedb()'>
                                          <img slot="icon" slot-scope="props" :src=" icon.inactive">
                                    </van-checkbox>
                              </div>
                        </div>
                  </div>
                  <div>
                        <p>
                              <span>
                                    地区:
                              </span> <span>湖北 武汉</span>
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

            <div class='apply_content' @click='onApply()'>
                  发送消息
            </div>
      </div>
</template>

<script>
      import Leftheader from "@/components/header/index"
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
                  Leftheader
            },
            methods: {
                  // 两个头像的点击事件
                  onCheckeda() {
                        if (checkeda == true) {
                              console.log('00000')
                        }
                  },
                  onCheckedb() {
                        console.log('onCheckedb()')
                  },
                  onApply() {
                        this.$router.push({ path: '/page/newfriends/index' })
                  }
            }
      }
</script>
<style scoped>
      .apply {
            background: #fff;
      }

      .apply_img {
            background: #fff;
            text-align: center;
      }

      .apply_img>div:first-child {
            width: 1.98rem;
            height: 1.98rem;
            margin: 0.61rem 4.41rem 0.34rem 4.41rem;
      }

      .apply_img>div:first-child>img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
      }

      .apply_img>div:nth-child(2) {
            display: flex;
            padding-left: 5rem;
      }

      .apply_img>div:nth-child(2)>div {
            display: flex;
      }

      .apply_img>div:nth-child(2)>p {
            font-size: 0.5rem;
            color: #000000;
            font-weight: 400;
      }

      .apply_img>div:nth-child(2)>div img {
            width: 0.24rem;
            height: 0.26rem;
            margin-left: 0.2rem;
      }

      .apply_img>div:last-child {
            font-size: 0.36rem;
            font-weight: 400;
            color: #9E9999;
      }

      .apply_content {
            margin-top: 0.24rem;
            font-size: 0.42rem;
            color: #008489;
            padding: 0.52rem 0rem;
      }
</style>