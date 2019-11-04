<template>
      <div>
            <Leftheader title='支付打扫费'></Leftheader>
            <div class="detemine_top">
                  <div>
                        <p>*</p>
                        <p>转售房间可入住开始时间</p>
                  </div>
                  <p>
                        <span>¥</span>
                        <span>20.00</span>
                  </p>
            </div>

            <div class="detemine_button" @click='onTrack()'>
                  支付
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
            },
            methods: {
                  onTrack() {
                        this.$router.push({ path: '/page/jump/track' })
                  }
            }
      }
</script>

<style>
      .detemine_top {
            background: #fff;
      }

      .detemine_top,
      .detemine_top>div,
      .detemine_top>p {
            display: flex;
            justify-content: space-between;
            line-height: 1.34rem;
      }

      .detemine_top>div>p:first-child {
            color: #E41B2E;
            font-size: 0.4rem;
            font-weight: 400;
            padding-top: 0.1rem;
            margin: 0rem 0.1rem 0rem 0.47rem;
      }

      .detemine_top>div>p:last-child {
            font-size: 0.4rem;
            color: #000;
            font-weight: 400;
      }

      .detemine_top>p {
            padding-right: 0.49rem;
            font-size: 0.32rem;
            font-weight: 400;
      }

      .detemine_top>p>span:first-child {
            margin-right: 0.15rem;
            color: #000;
      }

      .detemine_top>p>span:last-child {
            color: #E72D2D;
      }

      /* 底部按钮设置 */
      .detemine_button {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            height: 1.44rem;
            background: #118589;
            font-size: 0.5rem;
            color: #fff;
            font-weight: 400;
            line-height: 1.44rem;
      }
</style>