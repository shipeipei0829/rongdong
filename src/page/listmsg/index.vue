<template>
  <div class="listmsg">
    <div class="headerswap">
      <Headers title="信息" />
      <van-icon @click="handleShowHide('top')" class="icon my-container" name="add-o" />
      <div class="props" v-show="show">
        <p @click="handleRouter('relation')" class>
          <van-icon class="icons" name="column" />联系人
        </p>
        <p @click="handleRouter('addrelation')" class>
          <van-icon class="icons" name="manager" />添加好友
        </p>
        <span class="kailong"></span>
      </div>
    </div>
    <div class="listcon">
      <ul>
        <li class @click="service()">
          <div class="img">
            <img src="./../../img/headimg.jpg" alt />
          </div>
          <div></div>
          <div class="con">
            <p class="name">官方客服</p>
            <p class="info">欢迎加入...，请问有什么问题请及时</p>
            <span class="time">2109-09-21</span>
          </div>
        </li>
        <li class @click="service()">
          <div class="img">
            <img src="./../../img/headimg.jpg" alt />
          </div>
          <div></div>
          <div class="con">
            <p class="name">小周</p>

            <p class="info">欢迎加入...，请问有什么问题请及时</p>
          </div>
        </li>
      </ul>
    </div>
    <Footers />

    <van-overlay :show="show" z-index="3" @click="handleShowHide('top')" />
  </div>
</template>

<script>
  import Footers from "@/components/footer/index";
  import Headers from "@/components/header/index";
  export default {
    name: "listmsg",
    data() {
      return {
        show: false,
        actions: [
          { name: "联系人" },
          { name: "添加好友" },
          { name: "选项", subname: "描述信息" }
        ]
      };
    },
    methods: {
      handleShowHide(type) {
        if (type == "top") {
          this.show = !this.show;
        }
      },
      handleRouter(type) {
        if (type == "addrelation") {
          this.$router.push({ path: "/page/apply/index" });

        }
        if (type == "relation") {
          this.$router.push({ path: "/listfriend/index" });
        }
      },
      getContainer() {
        return document.querySelector(".my-container");
      },
      service() {
        this.$router.push({ path: "/service/window" });
      }
    },
    mounted() { },
    watch: {},
    components: {
      Footers,
      Headers
    }
  };
</script>
<style lang="scss" scoped>
  .listmsg {
    background: #f0f0f0;

    .listcon {
      padding-top: 0.34rem;

      li {
        padding-left: 0.48rem;
        padding-top: 0.2rem;
        display: grid;
        grid-template-columns: 1.42rem 0.45rem 1fr;

        div {
          display: inline-block;
        }

        .img {
          display: flex;
          align-items: center;
          justify-content: center;

          height: 1.42rem;
          overflow: hidden;
          border-radius: 50%;
          margin-bottom: 0.2rem;

          img {
            width: 100%;
          }
        }

        .con {
          padding-top: 0.17rem;
          padding-bottom: 0.2rem;
          border-bottom: 1px solid #dcdcdc;
          position: relative;

          .time {
            position: absolute;
            right: 0.47rem;
            top: 0.2rem;
            font-size: 0.3rem;
            line-height: 0.3rem;
            color: #5c5c5c;
          }

          p {
            width: 6.8rem;
          }

          .name {
            font-size: 0.42rem;
            color: #191919;
            line-height: 0.42rem;
            margin-bottom: 0.25rem;
            width: 5.5rem;
          }

          .info {
            font-size: 0.36rem;
            color: #5c5c5c;
            line-height: 0.36rem;
            padding-bottom: 0.24rem;
          }

          text-align: left;
        }
      }
    }

    .headerswap {
      position: relative;

      .kailong {
        width: 0;
        height: 0;
        border-right: 0.2rem solid transparent;
        border-left: 0.2rem solid transparent;
        border-bottom: 0.2rem solid #fff;
        position: absolute;
        top: -0.19rem;
        right: 0.3rem;
      }

      .icon {
        position: absolute;
        font-size: 0.53rem;
        right: 0.43rem;
        top: 0.35rem;
        color: #ffffff;
        z-index: 2;
      }

      .props {
        background: #fff;
        position: absolute;
        right: 0.23rem;
        top: 1.45rem;
        font-size: 0.39rem;
        width: 5.05rem;
        z-index: 4;
        text-align: left;
        padding-left: 0.55rem;
        border-radius: 0.13rem;

        p {
          margin: 0.69rem 0 0.69rem 0rem;

          .icons {
            color: #727272;
            font-size: 0.65rem;
            vertical-align: middle;
            margin-right: 0.15rem;
          }
        }
      }
    }

    /deep/ .van-nav-bar .van-nav-bar__left {
      display: none;
    }
  }
</style>