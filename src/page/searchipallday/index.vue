<template>
  <div class="searchipalldaywap">

    <div class="searchipallday">
      <ul>
        <li>
          <span class="left"><van-icon name="location" class="icon" /> <i class="text">上饶</i></span> <span class="right"><p class="top">地标</p><p>北京-昌平</p></span>
        </li>
        <li>
          <span class="left"><van-icon name="location" class="icon" /> <i class="text">上饶</i></span> <span class="right"><p class="top">地标</p><p>北京-昌平</p></span>
        </li>
        <li>
          <span class="left"><van-icon name="location" class="icon" /> <i class="text">上饶</i></span> <span class="right"><p class="top">地标</p><p>北京-昌平</p></span>
        </li>
        <li>
          <span class="left"><van-icon name="location" class="icon" /> <i class="text">上饶</i></span> <span class="right"><p class="top">地标</p><p>北京-昌平</p></span>
        </li>
        <li>
          <span class="left"><van-icon name="location" class="icon" /> <i class="text">上饶</i></span> <span class="right"><p class="top">地标</p><p>北京-昌平</p></span>
        </li>
        <li>
          <span class="left"><van-icon name="location" class="icon" /> <i class="text">上饶</i></span> <span class="right"><p class="top">地标</p><p>北京-昌平</p></span>
        </li>
        
      </ul>
    </div>

  </div>
</template>

<script>
// options 为可选参数，无则不传

import Headers from '@/components/header/index'
export default {
  name: 'Searchipallday',
  data(){
    return{
      checkValue:'',
      
    }
  },
  props: {
    msg:{

    }
  },
  //beforeRouteLeave (to, from, next) {    // 导航离开该组件的对应路由时调用
    
  //},
  methods:{
    getsrcurl(icon){
      return require("@/img/"+icon+"");
    },
    onSearch(){
      
    },
    onCancel(){
      this.$router.go(-1)
    }
  },
  mounted(){
    
  },
  watch:{
    checkValue(newVal){
      console.log(newVal)
    },
  },
  components: {
    Headers
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.searchipalldaywap{
  .searchipallday{
    background: #fff;
    ul{
      padding: 0 .48rem;
      li{
        border-bottom: 1px solid #F0F0F0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        span{
          display:inline-block;
        }
        .left{
          height: 1.33rem;
          text-align: left;
          .text{
            line-height: 1.33rem;
            font-size: .39rem;
          }
        }
        .right{
          font-size: .3rem;
          line-height: .3rem;
          text-align: right;
          .top{
            padding-top: .26rem;
            padding-bottom: .3rem;
          }
        }
        .icon{
          display: inline-block;
          width: .47rem;
          height: .47rem;
          font-size: .35rem;
          line-height: .47rem;
          background: #FE7066;
          color: #fff;
          border-radius: 50%;
          text-align: center;
          margin-right: .25rem;
        }
      }

    }
  }
}
</style>
