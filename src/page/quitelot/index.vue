<template>
      <div>
            <Headers title="新的朋友" />
            <!-- <SearchList></SearchList> -->
            <div class='search'>
                  <!-- 搜索 -->
                  <van-search placeholder="请输入搜索关键词" v-model="SearchValue" @cancel="onCancel()" @click="onSearch()">
                  </van-search>
                  <p @click="onSearch()">搜索</p>
            </div>
            <!-- 引进的子组件 -->
            <div>
                  <router-view></router-view>
            </div>

      </div>
</template>
<script>
      // 引入头部导航
      import Headers from '@/components/header/index'
      export default {
            data() {
                  return {
                        SearchValue: ''
                  }
            },
            mounted() {

            },
            components: {
                  Headers,
            },
            methods: {

            },
            watch: {
                  SearchValue(SearchValue) {
                        console.log(this.SearchValue)
                        let val = SearchValue.length;
                        console.log(val)
                        if (val == 0) {
                              this.$router.replace({ path: '/quitelot/quitelotone/index ' })
                        } else {
                              this.$router.replace({ path: '/quitelot/quitelottwo/index ' })
                        }
                  }

            },
            methods: {
                  getsrcurl(icon) {
                        return require("@/img/" + icon + "");
                  },
                  onSearch() {
                        this.$router.replace({ path: '/quitelot/quitelottwo/index ' })
                  },
                  onCancel() {
                        this.$router.replace({ path: '/quitelot/quitelotone/index ' })
                  }
            },
            computed: {
            }
      }
</script>
<style scoped>
      .search {
            display: flex;
            background: #fff;
            justify-content: space-between;
            padding-right: 0.48rem;
      }

      .search>p {
            width: 1.3rem;
            height: 0.57rem;
            line-height: 0.57rem;
            text-align: center;
            background: url('./../../img/green.png') no-repeat;
            background-size: 100% 100%;
            color: #fff;
            margin-top: 0.37rem;
      }

      .van-search,
      .van-cell {
            width: 7.9rem;
      }
</style>