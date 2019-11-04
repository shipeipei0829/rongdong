<template>
  <div class="evaluate" style="height:100vh;background:#F0F0F0;">
    <!-- 头部导航 -->
    <Leftheader title="评价"></Leftheader>
    <!-- 头部图片 -->
    <div class="evaluate_top">
      <dl class="evaluate_toplist">
        <dt>
          <img src="./../../img/conjiudian.jpg" alt />
        </dt>
        <dd>
          <p>{{hotelName}}</p>
          <p>{{roomName}}</p>
          <p>1间房丨含早丨{{roomName}}丨有窗丨60m²丨7-10层</p>
        </dd>
      </dl>
    </div>
    <!-- 评价 -->
    <div class="evaluate_text">
      <p>评价</p>
      <!-- 自定义输入框 -->
      <textarea
        class="evaluate_textlist"
        placeholder="请写下您对本次入住的感受！"
        v-model="comment.text"
        v-if="fileimg"
      ></textarea>
      <!-- 查看评论 -->
      <div class="evaluate_textlist viewfileimg" v-if="!fileimg">
        <p v-text="comment.text"></p>
        <ul>
          <li class="lii" v-for="(item,index) in page.comment.fileList" :key="index">
            <img :src="item.content" alt class="imgg" />
          </li>
          <!-- <li class="li"><img src="./../../img/conjiudian.jpg" alt="" class="img"></li>
                  <li class="li"><img src="./../../img/conjiudian.jpg" alt="" class="img"></li>
                  <li class="li"><img src="./../../img/conjiudian.jpg" alt="" class="img"></li>
          <li class="li"><img src="./../../img/conjiudian.jpg" alt="" class="img"></li>-->
        </ul>
      </div>
    </div>
    <!-- 上传图片 -->
    <div class="evaluate_text" v-if="fileimg">
      <p>添加图片</p>
      <van-uploader
        v-model="comment.fileList"
        :max-count="5"
        multiple
        class="fileimg"
        :after-read="afterRead"
      />
    </div>

    <!-- 星星评价 -->
    <div class="evaluate_text" style="padding-bottom:1.46rem;">
      <p>商家评价</p>
      <div class="evaluate_textlast">
        <div>
          <p>商家服务</p>
          <van-rate v-model="comment.score.serve" />
        </div>

        <div>
          <p>商家位置</p>
          <van-rate v-model="comment.score.adress" />
        </div>
        <div>
          <p>商家服务</p>
          <van-rate v-model="comment.score.serve1" />
        </div>

        <div>
          <p>商家位置</p>
          <van-rate v-model="comment.score.adress1" />
        </div>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="upload_button" @click="upload_button(orderId)" v-if="fileimg">提交</div>
  </div>
</template>
<script>
// 返回上一步
import { saveHotelRoomComment } from "../../api/order";
import Leftheader from "@/components/header/index";

//提示
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
  data() {
    return {
      value: "",
      upload_list: false,
      upload_upload: true,
      upload_index: false,
      orderlist: "",
      hotelName: "",
      roomName: "",
      orderId: this.$route.query.orderId,
      comment: {
        text: "", //评论
        fileList: [], //上传图片数组
        score: {
          serve: 5,
          adress: 5,
          serve1: 5,
          adress1: 5
        } //评分
      },
      fileimg: true,
      fileList: ""
    };
  },
  components: {
    Leftheader
  },
  methods: {
    afterRead() {
      // 此时可以自行将文件上传至服务器
      // console.log(file);
    },
    // afterRead(file) {
    //   // 此时可以自行将文件上传至服务器
    //   console.log(file);
    // },
    //提交存储评价
    upload_button() {
      if (this.comment.text == "") {
        Toast("请您对本次入住进行评价");
        return;
      }
      const data = {
        hotelId: "", //酒店id
        roomId: "", //房间id
        orderId: "", //订单id
        service: "", //服务评分
        location: "", //位置评分
        facilities: "", //设施评分
        health: "", //卫生评分
        reply: "", //商家评论时间
        comment: "", //评论
        video: "" //视频url
      };
      saveHotelRoomComment(data).then();
      this.$router.replace({ path: "/order/index" });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style>
.lii {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.2rem;
  overflow: hidden;
  margin-right: 0.2rem;
}
.imgg {
  width: 1.5rem;
  height: 1.5rem;
}
.viewfileimg {
  height: auto;
}
.van-uploader__preview-delete {
  right: -0.1rem;
  top: -0.1rem;
  position: absolute;
  height: 0.4rem;
  width: 0.4rem;
  border-radius: 50%;
}
.fileimg {
  width: 100%;
  height: 1.82rem;
  background-color: #fff;
}
/* 星星 */
.van-rate__icon {
  font-size: 0.5rem;
}
.van-rate {
  padding-top: 0.1rem;
}
.van-uploader__wrapper {
  height: 1.82rem;
  padding: 0.27rem 0.39rem;
}
.van-uploader__preview-image {
  height: 1.28rem;
  width: 1.28rem;
}
.van-image img {
  height: 1.28rem;
  width: 1.28rem;
}
.van-uploader__upload {
  height: 1.28rem;
  width: 1.28rem;
}
.evaluate_top {
  width: 100%;
  background: #fff;
}

.evaluate_toplist {
  display: flex;
}

.evaluate_toplist dt {
  width: 2rem;
  height: 2rem;
  margin: 0.4rem 0.32rem 0.4rem 0.4rem;
}

.evaluate_toplist dt img {
  width: 100%;
  height: 100%;
}

.evaluate_toplist dd {
  text-align: left;
  padding-top: 0.3rem;
}

.evaluate_toplist dd > p:first-child,
.evaluate_toplist dd > p:nth-child(2) {
  font-size: 0.5rem;
  font-weight: 400;
}

.evaluate_toplist dd > p:first-child {
  color: #000;
}

.evaluate_toplist dd > p:nth-child(2) {
  color: #4f4f4f;
}

.evaluate_toplist dd > p:last-child {
  font-size: 0.24rem;
  color: #4f4f4f;
  font-weight: 400;
}

/* 自定义输入框样式 */
.evaluate_text > p {
  text-align: left;
  font-size: 0.44rem;
  font-weight: 400;
  color: #000000;
  padding: 0.31rem 0rem 0.27rem 0.37rem;
}

.evaluate_textlist {
  width: 100%;
  min-height: 2.5rem;
  background: #fff;
  text-align: left;
  color: #6c6c6c;
  font-size: 0.44rem;
  font-weight: 400;
  padding: 0.44rem 0rem 0rem 0.37rem;
  resize: none;
}

.van-field__control {
  border: none !important;
}

/* 设置 placeholder 颜色设置 */
input::-webkit-input-placeholder {
  color: #6c6c6c;
}

/* 星星评价 */
.evaluate_textlast {
  padding: 0.61rem 0rem 0.47rem 0.39rem;
  background: #fff;
}

.evaluate_textlast > div {
  display: flex;
  height: 1rem;
  line-height: 1rem;
}

.evaluate_textlast > div > p {
  padding-right: 0.58rem;
  color: #000000;
  font-size: 0.5rem;
  font-weight: 400;
}

/* 底部按钮 */
.upload_button {
  width: 100%;
  height: 1.44rem;
  background: #e72d2d;
  line-height: 1.44rem;
  font-size: 0.5rem;
  font-weight: 400;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>