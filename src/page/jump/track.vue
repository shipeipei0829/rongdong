<template>
      <div>
            <Leftheader title='订单跟踪'></Leftheader>
            <div class='liucheng'>
                  <!-- 订单步骤条 -->
                  <van-steps direction="vertical" :active="0">
                        <van-step>
                              <h3>提交订单</h3>
                              <p>2019-05-26 13:33:25</p>
                        </van-step>
                        <van-step>
                              <h3>商家接单</h3>
                              <p>2019-05-26 13:33:26</p>
                        </van-step>
                        <van-step>
                              <h3>入住</h3>
                              <p>2019-05-26 18:33:25</p>
                        </van-step>
                        <van-step>
                              <h3>离店</h3>
                              <p>2019-05-27 12:03:25</p>
                        </van-step>
                        <van-step>
                              <h3>入住完成</h3>
                              <p>2019-05-27 12:03:25</p>
                        </van-step>
                  </van-steps>
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

            }
      }
</script>

<style>

</style>