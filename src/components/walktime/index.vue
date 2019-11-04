<template>
      <div class='walk'>
            <div class='walk_content'>
                  <p>转售中</p>
                  <div>
                        <p>入住：<span>2019.07.23 11:00</span> </p>
                        <p>离店： <span>2019.07.23 11:00</span> </p>
                  </div>
            </div>
      </div>
</template>
<script>
      export default {
            data() {
                  return {

                  }
            },
            methods: {
                  onDetails() {  //跳转到我的订单
                        this.$router.push({ path: '/page/jump/details' })
                  },
            }
      }
</script>

<style>
      .walk {
            width: 100%;
            padding: 0rem 0.48rem;
            margin-bottom: 0.5rem;
      }

      .walk_content {
            background: #fff;
            border-radius: 0.1rem;
      }
</style>