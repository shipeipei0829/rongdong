<template>
      <div class='hotelcard'>
            <Leftheader title='选择会员卡'></Leftheader>
            <!-- 优惠卡的而样子 -->
            <div class='hotelcard_check'>
                  <div class='hotelcard_card'>
                        <van-checkbox v-model="checked" checked-color="hotelcard_check">
                              <div class='hotelcard_cardcontent'>
                                    <p>如家连锁酒店</p>
                                    <p>1234 5678 0000 5678</p>
                                    <p>8折卡</p>
                                    <p>有效期：<span>2099.12.12</span></p>
                                    <p>用卡规则</p>
                              </div>
                        </van-checkbox>
                  </div>
            </div>
            <div class='hotel_card' @click='onHotel_card()'>
                  <p>确定</p>
            </div>
      </div>
</template>
<script>
      import Leftheader from "@/components/header/index"
      export default {
            data() {
                  return {
                        checked: false
                  }
            },
            components: {
                  Leftheader
            },
            methods: {
                  onHotel_card() {
                        this.$router.go(-1);
                  }
            }

      }
</script>
<style scoped>
      .hotel_card {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 0rem 0.15rem;
      }

      .hotel_card>p {
            background: #ff0023;
            color: #fff;
            padding: 0.25rem 0rem;
            border-radius: 0.2rem;
            font-size: 0.5rem;
      }

      .hotelcard_check {
            background: #fff;
            height: 100%;
            padding: 0.35rem 0.35rem 0rem 0.35rem;
      }

      .hotelcard_cardcontent {
            height: 4rem;
            width: 9.2rem;
            border-radius: 0.2rem;
            background: linear-gradient(140deg, rgba(136, 92, 249, 1), rgba(76, 118, 255, 1));
      }

      .hotelcard_cardcontent>p {
            text-align: left;
            color: #fff;
      }

      .hotelcard_cardcontent>p:first-child {
            font-size: 0.5rem;
            font-weight: 500;
            padding-left: 0.5rem;
            padding-top: 0.3rem;
      }

      .hotelcard_cardcontent>p:nth-child(2) {
            padding-left: 0.5rem;
            padding-top: 0.2rem;
            font-size: 0.3rem;
      }

      .hotelcard_cardcontent>p:nth-child(3) {
            font-size: 0.5rem;
            padding-right: 0.3rem;
            padding-top: 0.3rem;
      }

      .hotelcard_cardcontent>p:nth-child(4) {
            padding-left: 0.5rem;
            padding-top: 0.2rem;
            font-size: 0.3rem;
      }

      .hotelcard_cardcontent>p:last-child {
            font-size: 0.3rem;
            padding-right: 0.3rem;
      }

      .hotelcard_cardcontent>p:nth-child(3),
      .hotelcard_cardcontent>p:last-child {
            text-align: right;
      }
</style>