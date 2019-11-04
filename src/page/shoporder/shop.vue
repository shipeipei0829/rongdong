<template>
  <div class="shop">
    <Headers title="购物车" />
    <!-- 购物车列表 -->
    <ul>
      <li
        class="con"
        v-for="(item,index) in list"
        :key="item.id"
        :class="{move:candelete.id==item.id}"
        @touchstart="touchStart(item)"
        @touchend="touchEnd(item)"
      >
        <!-- 复选框 -->
        <van-checkbox v-model="checked">
          <img
            slot="icon"
            slot-scope="props"
            :src="props.checked ? icon.active : icon.inactive"
            class="icon"
          />
        </van-checkbox>
        <!-- 订单信息 -->
        <van-card
          price="43.00"
          title="LME 美妆 美体护理 杏仁蜂蜜身体保湿润肤乳500ml"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="footer">
            <van-button size="mini">-</van-button>
            <van-button size="mini">2</van-button>
            <van-button size="mini">+</van-button>
          </div>
        </van-card>
        <!-- 左滑删除 -->
        <div class="del" @click="deleteItem(index)">删除</div>
      </li>
    </ul>
    <!-- 加入购物车 -->
    <van-goods-action style="bottom:0rem;">
      <van-goods-action-button
        type="warning"
        text="合计·"
        style="background:#fff;border-color:#fff;color:#008489;border-shadow:2px #008489"
      />
      <van-goods-action-button
        type="danger"
        text="确定"
        style="background:#008489;border-color:#008489"
      />
    </van-goods-action>
  </div>
</template>

<script>
import Headers from "@/components/header/index";
import { Checkbox, CheckboxGroup } from "vant";

Vue.use(Checkbox).use(CheckboxGroup);
import { Card } from "vant";

Vue.use(Card);
export default {
  name: "Shop",
  data() {
    return {
      checked: true,
      icon: {
        active: "../../../static/image/gou.png",
        inactive: "../../../static/image/gou1.png"
      },
      active: 0,
      activeKey: 0,
      activeId: 1,
      list: [
        {
          id: "1001"
        },
        {
          id: "1002"
        },
        {
          id: "1003"
        }
      ],
      clientNum: {}, // 记录开始滑动（x1）,结束滑动（x2）的鼠标指针的位置
      candelete: {} // 滑动的item
    };
  },
  props: {
    msg: {}
  },
  methods: {
    /**
     * 删除item
     * index是下标
     */
    deleteItem(index) {
      this.list.splice(index, 1);
      // splice方法是删除数组某条数据，或者向某个位置添加数据
    },
    touchStart(item) {
      let touchs = event.changedTouches[0];
      // 记录开始滑动的鼠标位置
      this.clientNum.x1 = touchs.pageX;
      this.candelete = {};
    },
    touchEnd(item) {
      let touchs = event.changedTouches[0];
      // 记录结束滑动的鼠标位置
      this.clientNum.x2 = touchs.pageX;
      this.candelete = {};
      // 判断滑动距离大于50，判定为滑动成功，否则失败
      if (
        this.clientNum.x2 < this.clientNum.x1 &&
        Math.abs(this.clientNum.x1) - Math.abs(this.clientNum.x2) > 50
      ) {
        event.preventDefault();
        this.candelete = item;
      } else if (
        this.clientNum.x2 > this.clientNum.x1 &&
        Math.abs(this.clientNum.x2) - Math.abs(this.clientNum.x1) > 10
      ) {
        event.preventDefault();
        this.candelete = {};
      }
    },
    onClickNav(index) {
      this.mainActiveIndex = index;
    },
    onClickItem(data) {
      this.activeId = data.id;
    }
  },
  mounted() {},
  components: {
    Headers
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop >>> .van-card__thumb img {
  width: 80%;
  height: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.shop {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
ul {
  overflow-x: hidden; /*隐藏ul x轴的滚动条*/
}
li.move {
  transform: translateX(-60px); /*滑动后x轴位移-60px,使其可见*/
}
.del {
  position: absolute;
  top: 0;
  right: -1px;
  z-index: 3;
  width: 60px;
  height: 100%;
  text-align: center;
  color: #fff;
  background-color: #ff5b45;
  transform: translateX(60px); /*默认x轴位移60px，使其隐藏*/
  font-size: 0.5rem;
  align-items: center;
  display: -webkit-flex;
  justify-content: center;
}
.con {
  position: relative;
  transform: translateX(0);
  transition: all 0.3s; /*滑动效果更生动*/
  display: flex;
  padding-left: 10px;
}
.icon {
  width: 0.4rem;
  height: 0.4rem;
}
.van-card {
  padding-left: 0.1rem;
  margin-right: 0.29rem;
  margin-top: 0;
  border-bottom: 1px solid #eeeeee;
  position: relative;
}
.van-checkbox {
  width: 0.91rem;
  overflow: hidden;
  position: relative;
}
.shop >>> .van-checkbox__icon {
  position: absolute;
  right: 0;
}
.van-card__thumb {
  width: 1.8rem;
  height: 1.8rem;
  position: relative;
}
.shop >>> .van-card__content {
  min-height: 1.8rem;
}
.shop >>> .van-card__title {
  font-size: 0.36rem;
  line-height: 0.66rem;
  color: #4d4d4d;
  text-align: left;
  height: 1.32rem;
  max-height: 1.32rem;
}
.shop >>> .van-card__bottom {
  width: 2rem;
  text-align: left;
  font-size: 0.45rem;
  margin-bottom: 0.21rem;
}
.shop >>> .van-card__footer {
  position: absolute;
  right: 0;
  top: 1.32rem;
}
.van-card__footer .van-button,
.van-button--mini + .van-button--mini {
  margin-left: 0;
}
</style>
