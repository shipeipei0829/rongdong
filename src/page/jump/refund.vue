<template>
      <div class='refund'>
            <Leftheader title='申请退款' />
            <div>
                  <ul class='refund_list'>
                        <li>
                              <p>
                                    <span>*</span> <span>退款原因</span>
                              </p>
                              <p @click='refund_list()'>请选择</p>
                        </li>
                        <li>
                              <p>
                                    <span>*</span> <span>退款金额</span>
                              </p>
                              <p>
                                    <span>¥</span>
                                    <span style='color:#E72D2D; margin-left:0.1rem;'>11.97</span>
                              </p>
                        </li>
                        <li>
                              <p>
                                    <span>*</span> <span>退款方式</span>
                              </p>
                              <p>
                                    原支付方式返回
                              </p>
                        </li>
                  </ul>
                  <div class='refund_text'>
                        <div>
                              <p>问题描述</p>
                              <p>(200字,可不填)</p>
                        </div>
                        <div>
                              <p>请描述具体退款的原因，以便我们更好的为您服务，谢谢！</p>
                        </div>
                  </div>
            </div>
            <div class='refund_bottom'>
                  <p> 提交申请</p>
            </div>

            <div class='refund_show' v-if='refund_show'>
                  <p @click='refund_onShow()'> 确定 </p>
                  <ul class='refund_showlist'>
                        <li>商品缺货</li>
                  </ul>
            </div>
      </div>

</template>
<script>
      // 返回上一页
      import Leftheader from "@/components/header/index"
      export default {
            data() {
                  return {
                        refund_show: false
                  }
            },
            components: {
                  Leftheader
            },
            methods: {
                  refund_list() {
                        this.refund_show = true
                  },
                  refund_onShow() {
                        this.refund_show = false
                  },

            }
      }
</script>
<style>
      .refund_show {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 3.17rem;
            background: #fff;
      }

      .refund_show p {
            color: #008489;
            font-size: 0.22rem;
            font-weight: 400;
            text-align: right;
            padding: 0.14rem 0.25rem;
            border-bottom: solid 0.01rem #F0F0F0;
      }

      .refund_showlist li {
            width: 100%;
            color: #000000;
            font-weight: 500;
            font-size: 0.25rem;
      }

      .refund_bottom {
            width: 100%;
            height: 0.73rem;
            position: fixed;
            bottom: 0;
            left: 0;
            font-size: 0.25rem;
            font-weight: 400;
            color: rgba(0, 132, 137, 1);
            line-height: 0.73rem;
            background: #EEEEEE;
            border: 1px solid rgba(238, 238, 238, 1);
            box-shadow: 0px -1px 0px 0px rgba(108, 108, 108, 0.2);
      }

      .refund_bottom p {
            text-align: center;
      }

      .refund_list li {
            background: #fff;
            display: flex;
            justify-content: space-between;
            padding: 0.2rem 0.24rem;
      }

      .refund_list li:nth-child(2) {
            border-top: 0.02rem solid #F0F0F0;
            border-bottom: 0.02rem solid #F0F0F0;
      }

      .refund_list li>p:first-child {
            display: flex;
      }

      .refund_list li>p:first-child>span:first-child {
            color: #E72D2D;
            font-weight: 400;
            font-size: 0.2rem;
            display: block;
            margin-top: 0.05rem;
            margin-right: 0.05rem;
      }

      .refund_list li>p:first-child>span:last-child {
            font-size: 0.2rem;
            font-weight: 400;
            color: #000;
      }

      .refund_list li:first-child>p:last-child,
      .refund_list li:last-child>p:last-child {
            font-size: 0.16rem;
            font-weight: 400;
            color: rgba(108, 108, 108, 1);
      }

      .refund_text {
            width: 100%;
            margin-top: 0.15rem;
            background: #fff;
            padding: 0.16rem 0.24rem;
      }

      .refund_text>div:first-child {
            display: flex;
      }

      .refund_text>div:first-child>p:first-child {
            font-size: 0.2rem;
            color: #010101;
            font-weight: 400;
            margin-right: 0.1rem;
      }

      .refund_text>div:first-child>p:last-child,
      .refund_text>div:last-child>p {
            font-size: 0.18rem;
            font-weight: 400;
            color: #6C6C6C;
            text-align: left;
      }
</style>