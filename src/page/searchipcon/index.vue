<template>
  <div class="searchip">

    <div class="alldayipcon">
      <div class="titlewap">
        <span class="title"><i>热门商圈</i></span>
      </div>
      <div class="ipcon">
        <Tagbtn marginright=".44rem" class="bott" color="#5B5B5B" border="1px solid
           #fff" bgcolor="#fff" fontsize=".39rem" width="1.98rem" height=".78rem" lineheight=".78rem" value="三里屯" />
        <Tagbtn marginright=".44rem" class="bott" color="#5B5B5B" border="1px
           solid #fff" bgcolor="#fff" fontsize=".39rem" width="1.98rem" height=".78rem" lineheight=".78rem"
          value="三里屯" />
        <Tagbtn marginright=".44rem" class="bott" color="#5B5B5B" border="1px 
          solid #fff" bgcolor="#fff" fontsize=".39rem" width="1.98rem" height=".78rem" lineheight=".78rem"
          value="三里屯" />
        <Tagbtn marginright=".44rem" class="bott" color="#5B5B5B" border="1px 
          solid #fff" bgcolor="#fff" fontsize=".39rem" width="1.98rem" height=".78rem" lineheight=".78rem"
          value="三里屯" />
        <Tagbtn marginright=".44rem" class="bott" color="#5B5B5B" border="1px
           solid #fff" bgcolor="#fff" fontsize=".39rem" width="1.98rem" height=".78rem" lineheight=".78rem"
          value="三里屯" />

      </div>
    </div>

    <div class="alldayipcon">
      <div class="titlewap">
        <span class="title"><i>行政区域</i></span>
      </div>
      <div class="ipcon">
        <Tagbtn class="bott" color="#5B5B5B" border="1px solid #fff" bgcolor="#fff" fontsize=".39rem" width="1.98rem"
          height=".78rem" lineheight=".78rem" value="三里屯" />
      </div>
    </div>

  </div>
</template>

<script>
  // options 为可选参数，无则不传
  import '@/../public/cdn/common.js'
  import Tagbtn from '@/components/tagbtn/index'
  export default {
    name: 'Searchip',
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
        this.$router.go(-1)
      }
    },
    mounted() {

    },
    watch: {
      checkValue(newVal) {
        console.log(newVal)
      },
    },
    components: {
      Tagbtn
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .alldayipcon {
    text-align: left;
    padding-left: .47rem;
    padding-top: .2rem;

    .ipcon {
      padding-top: .64rem;
      padding-left: .2rem;

      .bott {
        margin-bottom: .42rem;
      }
    }

    .titlewap {
      padding-right: .47rem;
      position: relative;

      .title {
        display: block;
        border-top: 1px solid #DCDCDC;
        font-size: .39rem;
        color: #737373;
        line-height: .39rem;

        i {
          position: absolute;
          left: 0;
          top: -.18rem;
          background: #F0F0F0;
          padding-right: .4rem;
        }
      }

    }

  }
</style>