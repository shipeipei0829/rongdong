<template>
      <div class='walk'>
            <dl class="walk_content landlady_body">
                  <dt class="landlady">
                        <div>
                              <img src="./../../img/fangdong.png" alt="">
                        </div>
                        <p>Jens</p>
                  </dt>
                  <dd class='landlady_right'>
                        <p>欢迎您入住我的小院，望你在此度过一个美好的时光，需要帮助及时联系我！</p>
                        <div>
                              <p @click='onXiaoxi()'><img src="./../../img/xiaoxi.png" alt=""></p>
                              <p @click='onTap()'><img src="./../../img/tap.png" alt=""></p>
                        </div>
                  </dd>
            </dl>
      </div>
</template>

<script>
      export default {
            data() {
                  return {

                  }
            },
            methods: {
                  onTap() {
                        console.log('电话')
                  },
                  onXiaoxi() {
                        console.log('消息')
                  }
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

      .walk_content>p {
            font-size: 0.5rem;
            font-weight: bold;
            color: #118589;
            padding: 0.4rem 0rem;
      }

      .walk_content>div {
            display: flex;
            padding-bottom: 0.45rem;
      }

      .walk_content>div>p {
            flex: 1;
            font-size: 0.3rem;
            font-weight: bold;
            color: #000000;
      }
</style>