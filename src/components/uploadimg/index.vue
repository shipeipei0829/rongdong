<template>
      <div>
            <div class='upload evaluate_text' v-model='upload'>
                  <p>添加图片</p>
                  <!-- 组件 -->
                  <div class='upload_upload' v-if='upload_upload'>
                        <!-- 上传的图片 -->
                        <p>
                              <van-uploader :after-read="onRead" accept="image/*" multiple>
                                    <img src="./../../img/upload.png" alt="" class="head-img">
                              </van-uploader>
                        </p>
                  </div>
                  <ul class='upload_list' v-if='upload_list'>
                        <li>
                              <img src="./../../img/tuijian.jpg" alt="">
                              <span class='upload_show'>
                                    <van-icon name="cross" />
                              </span>
                        </li>
                        <li>
                              <img src="./../../img/tuijian.jpg" alt="">
                              <span class='upload_show'>
                                    <van-icon name="cross" />
                              </span>
                        </li>
                        <li>
                              <img src="./../../img/tuijian.jpg" alt="">
                              <span class='upload_show'>
                                    <van-icon name="cross" />
                              </span>
                        </li>
                        <li>
                              <img src="./../../img/tuijian.jpg" alt="">
                              <span class='upload_show'>
                                    <van-icon name="cross" />
                              </span>
                        </li>
                        <li>
                              <p v-if='upload_index'>
                                    <!-- 4/5 -->
                              </p>
                              <!-- <span class='upload_show'>
                                    <van-icon name="cross" />
                              </span> -->
                        </li>
                  </ul>
            </div>
      </div>
</template>
<script>
      export default {
            data() {
                  return {
                        upload: [],
                        upload_list: false,
                        upload_upload: true,
                        upload_index: false,
                        image_img: ''
                  }
            },
            components: {

            },
            methods: {
                  upload_button() {

                  },
                  onRead(file) {
                        console.log(file.file);
                        //将原图片显示为选择的图片
                        // this.$refs.goodsImg.src = file.content;
                  }
            }
      }
</script>
<style>
      .upload_upload {
            width: 100%;
            background: #fff;
            padding: 0.27rem 0rem 0.27rem 0.39rem;
      }

      .upload_upload>p {
            width: 1.28rem;
            height: 1.28rem;
      }

      .head-img {
            width: 1.28rem;
            height: 1.28rem;
      }

      .upload_list {
            display: flex;
            padding: 0.27rem 0rem 0.27rem 0.39rem;
            background: #fff;
      }

      .upload_list li {
            width: 1.28rem;
            height: 1.28rem;
            text-align: center;
            line-height: 1.28rem;
            color: 0.4rem;
            font-weight: 400;
            color: #6C6C6C;
            margin-right: 0.53rem;
            position: relative;
      }

      .upload_list li span {
            position: absolute;
            width: 0.37rem;
            height: 0.37rem;
            right: 0rem;
            top: -0.18rem;
            padding-top: 0.08rem;
            line-height: 0.37rem;
            font-size: 0.3rem;
            color: #fff;
            background: #6C6C6C;
            border-radius: 50%;
      }

      .upload_list li img {
            width: 100%;
            height: 100%;
      }
</style>