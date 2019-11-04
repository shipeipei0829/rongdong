<template>
      <!-- 小的头部标签 -->
      <div class='fail'>
            <p>
                  <img :src="getsrcurl(src)" alt="">
            </p>
            <p>{{value}}</p>
      </div>
</template>

<script>
      export default {
            name: "stayaimg",
            data() {
                  return {

                  };
            },
            props: {
                  src: {    //父元素的设置
                        type: String,
                        default: 'hot1'
                  },
                  value: {
                        type: String,
                        default: ''
                  },
                  width: {
                        type: String,
                        default: ''
                  },
                  height: {
                        type: String,
                        default: ''
                  },
                  borderadius: {
                        type: String,
                        default: ''
                  },
                  bgcolor: {
                        type: String,
                        default: '#FFD925'
                  },
                  margin_right: {   //包含图片的容器
                        type: String,
                        default: ''
                  },
                  fontsize: {    //文字的设置
                        type: String,
                        default: ''
                  },
                  fontcolor: {
                        type: String,
                        default: ''
                  },
                  font_weight: {
                        type: String,
                        default: ''
                  }
            },
            methods: {
                  getsrcurl(icon) {
                        return require("@/img/" + icon + ".png");
                  },
            },
            mounted() {

            },
            created() {

            },
            components: {

            }
      }
</script>

<style>
      .fail {
            display: flex;
            padding: 0.26rem 0rem 0.2rem 0.2rem;
            border-bottom: 0.02rem solid #E6E5E5;
      }

      .fail>p:first-child {
            width: 0.5rem;
            height: 0.5rem;
            margin-right: 0.11rem;
      }

      .fail>p:first-child>img {
            width: 100%;
            height: 100%;
      }

      .fail>p:last-child {
            padding-top: -0.2rem;
            font-size: 0.36rem;
            font-weight: 500;
            color: rgba(0, 0, 0, 1);
      }
</style>