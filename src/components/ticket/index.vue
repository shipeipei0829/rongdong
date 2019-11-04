<template>
  <div class="ticketrow">
    <div class="ticketrowcon clearfix" :id="id">
      <div class="left fl">
        <span>
          <span>{{value.num}}</span>
          <i>{{value.tit}}</i>
        </span>
      </div>
      <div class="right fl">
        <div class="con fl">
          <span class="time">{{date}}</span>
          <span class="type">{{text}}</span>
          <span class="info" @click="rule(id)">使用规则</span>
        </div>
        <div class="hand fl" @click="getcouponCon(id)">
          <p>立</p>
          <p>即</p>
          <p>领</p>
          <p>取</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getcoupon} from '@/api/home/details'// 加载详情
import { Notify } from 'vant';
export default {
  name: "Ticket",
  data() {
    return {
      active: 0
    };
  },
  props: {
    value: {
      type: Object,
      default: function() {
        return {
          num: "value.num",
          tit: "value.tit",
          id:"value.id"
        };
      }
    },
    id:{
      type:String,
      default:'id'
    },
    text: {
      type: String,
      default: "text" //
    },
    date: {
      type: String,
      default: "date"
    }
  },
  methods: {
    onClickLeft() {
      //this.$router.go(-1);
    },
    getcouponCon(id){
      getcoupon({couponId:id}).then(res => {
        console.log(res)
        if(res.code == 0){
          Notify({ type: 'success', message: '领取成功' });
        }else if(res.code == '1000' || res.code == "1001"){
          Notify({ type: 'danger', message: res.message });
        }
      }).finally((res) => {
        t.loading = false
      }).catch((res)=>{
    
      })
    },
    rule(id){
      this.$router.push({path:'/rule/index',query:{full:this.$route.params.i,id:id}})
    }
  },
  mounted() {}
};
</script>
<style scoped>
.ticketrow {
  width: 8.86rem;
  border-radius: 0.3rem;
  box-shadow: 0px 0.06rem 0.15rem 0px rgba(4, 0, 0, 0.15);
  margin: 0 auto;
  color: #fff;
  overflow: hidden;
}
.ticketrowwap {
  text-align: center;
}
.ticketrowcon .right div > span {
  display: block;
}
.ticketrowcon .right .con {
  width: 4.3rem;
  padding-left: 0.5rem;
  text-align: left;
  border-right: 1px dashed #fff;
  height: 100%;
}
.ticketrowcon .right .time {
  font-size: 0.33rem;
  line-height: 0.34rem;
  color: #fff;
  padding: 0.2rem 0 0.55rem 0;
}
.ticketrowcon .right .type {
  font-size: 0.5rem;
  font-weight: bold;
  line-height: 0.51rem;
  color: #fff;
  margin-bottom: 0.58rem;
}
.ticketrowcon .right .info {
  font-size: 0.3rem;
  line-height: 0.31rem;
  color: #fff;
}
.ticketrowcon .hand {
  width: 1.4rem;
  font-size: 0.57rem;
  line-height: 0.57rem;
  padding-top: 0.18rem;
}

.ticketrowcon .right {
  background: linear-gradient(
    top left,
    #fd7c28,
    #ff436f
  ); /*渐变从左上角到右下角*/
  background: -ms-linear-gradient(top left, #fd7c28, #ff436f);
  background: -webkit-linear-gradient(top left, #fd7c28, #ff436f);
  background: -moz-linear-gradient(top left, #fd7c28, #ff436f);
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  width: 5.83rem;
  box-sizing: border-box;
}
.ticketrow .left,
.ticketrow .right {
  height: 3.25rem;
}

.ticketrowcon {
  background: #fff;
  height: 100%;
}
.ticketrow .left {
  width: 3rem;
}
.ticketrow .left span {
  color: #fd7322;
  font-size: 1.8rem;
}
.ticketrow .left span i {
  font-size: 0.36rem;
}
</style>