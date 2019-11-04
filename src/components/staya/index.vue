<template>
      <div class='stay' :style="{
            'padding-left':'padding_left',
            'background':'bgcolor',    
      }">
            <p :style="{
                  'widtha':'widtha',
                  height:'heighta',
                  'margin-right':'margin_right'
            }">
                  <!--可以填写图片-->
                  <img :src="getsrcurl(src)" alt="" :style="{
                        'width':'widtha_a',
                  height:'heighta_a'
                  }">
                  {{valua}}
            </p>
            <p :style="{
                  'font-size':'fontsize',
                  'color':'fontcolor',
                  'font-weight':'font_weight',
                  'padding-top':'padding-top'
            }">{{value}}</p>
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
                  valua: {
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
      .stay {
            width: 100%;
            height: 1.2rem;
            background: #FF9623;
            display: flex;
            align-items: center;
            padding-left: 1rem;
      }

      .stay p:first-child {
            width: 0.35rem;
            height: 0.35rem;
            margin-right: 0.2rem;
      }

      .stay p:first-child img {
            width: 100%;
            height: 100%;
      }

      .stay p:last-child {
            font-size: 0.3rem;
            color: #fff;
            font-weight: bold;
            padding-top: 0.1rem;
      }
</style>