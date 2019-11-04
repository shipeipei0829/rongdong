<template>
      <div>
            <Leftheader title='选择商家优惠' />
            <div class='coupon'>
                  <div class='coupon_list'>
                        <van-checkbox v-model="checked" checked-color="hotelcard_check" />
                        <div class='coupon_top'>
                              <div>
                                    <p>8</p>
                                    <p>小时币</p>
                              </div>
                              <div>
                                    <p>充值优惠-通用</p>
                                    <p>有效期至2020-06-01</p>
                                    <p @click='onCoupon_top()'>使用规则 <span>
                                                <van-icon name="arrow" />
                                          </span> </p>
                              </div>
                        </div>
                        <!-- </van-checkbox> -->
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
                  onCoupon_top() {
                        console.log(this)
                  },
                  onHotel_card() {
                        this.$router.go(-1);
                  }
            }
      }
</script>
<style scoped>
      .coupon {
            width: 100%;
            height: 100%;
            padding: 0.25rem;
            background: #fff;
      }

      .coupon_list {
            width: 100%;
            border: 0.03rem solid #000;
            border-radius: 0.3rem;
            padding-left: 0.35rem;
            display: flex;
      }

      /* 返回按钮 */
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

      .coupon_top {
            display: flex;
      }

      .coupon_top>div:first-child {
            padding: 1rem 0.35rem;

      }

      .coupon_top>div:first-child>p:first-child {
            font-size: 0.7rem;
            color: #000;
            font-weight: 500;
      }

      .coupon_top>div:last-child {
            padding-top: 0.8rem;
            text-align: left;
            padding-left: 0.4rem;
      }

      .coupon_top>div:last-child>p:first-child {
            font-size: 0.4rem;
            font-weight: 600;
      }

      .coupon_top>div:last-child>p:nth-child(2) {
            font-size: 0.36rem;
            font-weight: 300;
            padding: 0.2rem 0rem;
      }

      .coupon_top>div:last-child>p:last-child {
            color: blue;
            font-size: 0.3rem;
      }
</style>