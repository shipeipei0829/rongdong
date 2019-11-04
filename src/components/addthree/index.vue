<template>
      <div class='banner_banner'>
            <div class="banner_list">
                  <p>时间留存</p>
                  <p>时间：5小时</p>
                  <p>使用截止日期：2020-01-01</p>
                  <p class='banner_list_bottom'>查看使用规则</p>
            </div>
      </div>
</template>
<script>
      export default {
            data() {
                  return {

                  };
            },
      }
</script>
<style>
      .banner_list {
            background: #fff;
            margin-top: 0.35rem;
      }

      .banner_list>p {
            font-weight: bold;
      }

      .banner_list>p:first-child {
            color: #118589;
            font-size: 0.5rem;
            padding-top: 0.1rem;
      }

      .banner_list>p:nth-child(2),
      .banner_list>p:nth-child(3) {
            color: #000;
            font-size: 0.3rem;
      }

      .banner_list>p:last-child {
            padding-bottom: 0.2rem;
      }

      .banner_list>p:last-child>span:first-child {
            color: #000;
      }

      .banner_list>p:last-child>span:last-child {
            color: #FD9525;
      }

      /* 转售失败 */
      .banner_listlast {
            color: #E72D2D;
      }

      /* 剩余时间存储 */
      .banner_list_bottom {
            color: #FD9627;
      }
</style>