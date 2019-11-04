<template>
      <div>
            <div class='staylist_top'>
                  <div class='staylist_banner'>
                        <div>
                              <p><img src="./../../img/jiu.png" alt=""></p>
                              <p>北京东直门雅辰悦居酒店</p>
                        </div>
                        <p class='jiedai' :style="{  'color':'fontcolor' }" v-if="code==0">待接单</p>
                  </div>
                  <!-- 中间大图片 -->
                  <div style='width:100%; height:100%;'>
                        <img src="./../../img/pageda.png" alt="" style='width:100%; height:100%;'>
                  </div>
                  <dl class='staylist_banner staylist_last'>
                        <dt class='tent_top'>
                              <p>悦局60平双床房</p>
                              <p>1间房丨含早丨双床丨有窗丨60m²丨7-10层</p>
                        </dt>
                        <dd class='tent_bottom' @click='ontap()'>
                              <a :href="'tel:'+tel">
                                    <p><img src="./../../img/tap.png" alt=""></p>
                                    <p>联系商家</p>
                              </a>

                        </dd>
                  </dl>
                  <div class="dizhi">
                        <div class='dizhi_left'>
                              <p>
                                    <img src="./../../img/weizhi.png" alt="">
                              </p>
                              <p>北京市东城区香河园街1号院11号楼</p>
                        </div>
                        <div class='dizhi_right'>
                              <p>详情</p>
                              <p>
                                    <img src="./../../img/xiangcha.png" alt="">
                              </p>
                        </div>
                  </div>
                  <div class='staylist_bottom'>
                        <div>
                              <p>入住</p>
                              <p>5月23日 <span>周四</span> </p>
                              <p>12:00</p>
                        </div>
                        <p @click='hotelShow()'>共29小时</p>
                        <div>
                              <p>离店</p>
                              <p>5月24日 <span>周五</span> </p>
                              <p>17:00</p>
                        </div>
                  </div>
            </div>
      </div>
</template>
<script>

      export default {
            data() {
                  return {
                        tel: '15901065056'
                  }
            },
            props: {
                  fontcolor: {
                        type: String,
                        default: '#118589'
                  }
            },
            components: {

            },
            methods: {
                  hotelShow() {
                        this.$parent.show = true;
                  },
                  ontap() {
                        // window.location.href = 'tel://15901065056'
                  },

            }
      }

</script>
<style>
      .staylist {
            width: 100%;
            padding: 0rem 0.5rem;

      }

      .staylist_top {
            border-radius: 0.1rem;
            padding: 0rem 0.5rem 0.74rem 0.5rem;
            margin: 0.3rem 0rem;
      }

      .staylist_banner {
            display: flex;
            justify-content: space-between;
            background: #fff;
      }

      .jiedai {
            font-size: 0.33rem;
            font-weight: 400;
            color: #4F4F4F;
            padding-top: 0.28rem;
      }

      .staylist_banner div {
            display: flex;
            padding: 0.21rem 0rem 0.23rem 0rem;
      }



      .staylist_banner div p:first-child {
            width: 0.55rem;
            height: 0.55rem;
            margin-right: 0.15rem;
      }

      .staylist_banner div p:first-child img {
            width: 100%;
            height: 100%;
      }

      .staylist_banner div p:last-child {
            font-size: 0.36rem;
            font-weight: 600;
            color: rgba(0, 0, 0, 1);
      }

      .staylist_last {
            padding: 0.33rem 0.1rem 0.18rem 0.25rem;
            border-bottom: 0.03rem solid #E6E5E5;
      }

      .tent_top p:first-child {
            font-size: 0.36rem;
            font-weight: 500;
            color: #000;
            margin-left: -2.6rem;
      }


      .tent_bottom>a {
            display: block;
            display: flex;
      }

      .tent_bottom>a>P:first-child {
            width: 0.41rem;
            height: 0.41rem;
            margin-right: 0.12rem;
      }

      .tent_bottom {
            padding-top: 0.51rem;
      }

      .tent_bottom>a>P:first-child img {
            width: 100%;
            height: 100%;
      }

      .tent_bottom>a>P:last-child {
            font-size: 0.3rem;
            font-weight: 300;
            color: #FF9623;
      }

      .dizhi {
            display: flex;
            justify-content: space-between;
            padding: 0.3rem 0.1rem 0rem 0.25rem;
      }

      .dizhi div {
            display: flex;
      }

      .dizhi_left p:first-child {
            width: 0.55rem;
            height: 0.44rem;
            margin-right: 0.1rem;
      }

      .dizhi_left p:first-child img {
            width: 100%;
            height: 100%;
      }

      .dizhi_left p:last-child {
            font-size: 0.3rem;
            font-weight: 400;
            color: rgba(46, 46, 46, 1);
      }

      .dizhi_right p:first-child {
            font-size: 0.3rem;
            font-weight: 300;
            color: #FF9623;
            margin-right: 0.18rem;
      }

      .dizhi_right p:last-child {
            margin-top: 0.05rem;
            width: 0.14rem;
            height: 0.3rem;
      }

      .dizhi_right p:last-child img {
            width: 100%;
            height: 100%;
      }

      .staylist_bottom {
            display: flex;
            padding: 0.5rem 0.25rem 0rem 0.25rem;
            justify-content: space-between;
            background: #fff;
      }

      .staylist_bottom div p:first-child {
            font-size: 0.36rem;
            font-weight: 300;
            color: rgba(74, 74, 74, 1);
            text-align: center;
      }

      .staylist_bottom div p:nth-child(2) {
            font-size: 0.3rem;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            text-align: center;
      }

      .staylist_bottom div p:last-child {
            font-size: 0.3rem;
            font-weight: 400;
            color: rgba(74, 74, 74, 1);
            text-align: center;
      }

      .staylist_bottom>p {
            background: #008489;
            width: 1.48rem;
            height: 0.6rem;
            border-radius: 0.3rem;
            text-align: center;
            line-height: 0.6rem;
            color: #fff;
            font-size: 0.24rem;
            font-weight: 400;
            margin-top: 0.6rem;
      }
</style>