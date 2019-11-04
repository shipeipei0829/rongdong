<template>
  <div class="alldayip">
    <Headers title="位置/地名" />
    <div class="alldayipwap">
      <van-search v-model="checkValue" placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
    </div>
    <div class="alldayipconwap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  // options 为可选参数，无则不传
  import Tagbtn from '@/components/tagbtn/index'
  import Headers from '@/components/header/index'
  export default {
    name: 'Searchipallday',
    data() {
      return {
        checkValue: '',

      }
    },
    props: {
      msg: {

      }
    },
    //beforeRouteLeave (to, from, next) {    // 导航离开该组件的对应路由时调用

    //},
    methods: {
      getsrcurl(icon) {
        return require("@/img/" + icon + "");
      },
      onSearch() {

      },
      onCancel() {

      }
    },
    mounted() {
      this.$router.replace({ path: '/alldayip/searchipcon/index' })
    },
    watch: {
      checkValue(newVal) {
        console.log()
        if (newVal.length > 0) {
          this.$router.replace({ path: '/alldayip/searchipallday/index' })
        } else {
          this.$router.replace({ path: '/alldayip/searchipcon/index' })
        }
      },

    },
    components: {
      Headers,
      Tagbtn
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .alldayip {
    background: #F0F0F0;
    height: 100vh;

    /deep/ .van-search {
      background: #F0F0F0 !important;

      .van-search__content {
        background: #fff;
      }
    }
  }

  .alldayipconwap {
    padding-top: .62rem;
    border-top: 1px solid #DCDCDC
  }
</style>