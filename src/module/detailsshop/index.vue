<template>
  <div class="shopconwap">
    <div class="shopcon">
      <div class="showitem">
        <div class="itemwap"><img src="./../../img/tuijian.jpg" alt=""></div>
        <div class="title">北冰洋300m</div>
        <div class="clearfix rmbwap"> <span class="fl rmb">￥3.99</span> <span class="fr">
            <van-icon class="add" name="plus" info="9" /></span> </div>
      </div>

      <div class="showitem">
        <div class="itemwap"><img src="./../../img/tuijian.jpg" alt=""></div>
        <div class="title">北冰洋300m</div>
        <div class="clearfix rmbwap"> <span class="fl rmb">￥3.99</span> <span class="fr">
            <van-icon class="add" name="plus" info="9" /></span> </div>
      </div>

      <div class="showitem">
        <div class="itemwap"><img src="./../../img/tuijian.jpg" alt=""></div>
        <div class="title">北冰洋300m</div>
        <div class="clearfix rmbwap"> <span class="fl rmb">￥3.99</span> <span class="fr">
            <van-icon class="add" name="plus" info="9" /></span> </div>
      </div>

      <div class="showitem">
        <div class="itemwap"><img src="./../../img/tuijian.jpg" alt=""></div>
        <div class="title">北冰洋300m</div>
        <div class="clearfix rmbwap"> <span class="fl rmb">￥3.99</span> <span class="fr">
            <van-icon class="add" name="plus" info="9" /></span> </div>
      </div>

      <div class="showitem">
        <div class="itemwap"><img src="./../../img/tuijian.jpg" alt=""></div>
        <div class="title">北冰洋300m</div>
        <div class="clearfix rmbwap"> <span class="fl rmb">￥3.99</span> <span class="fr">
            <van-icon class="add" name="plus" info="9" /></span> </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "Detailsshop",
    data() {
      return {

      };
    },
    props: {
      value: {
        type: String,
        default: '标题'
      },
      width: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: ''
      },
      borderadius: {
        type: String,
        default: ''
      },
      bgcolor: {
        type: String,
        default: '#FFD925'
      },
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
    },
    mounted() {

    },
    created() {

    },
    components: {
    }
  };
</script>
<style scoped>
  /*商城*/
  .showitem {
    display: inline-block;
    margin-right: .5rem;
  }

  .showitem .add {
    font-size: .1rem;
    color: #888;
    background: #e4e4e4;
    border-radius: 50%;
    padding: .08rem;
  }

  .showitem .rmb {
    font-size: .36rem;
    color: #FF9623;
    font-weight: bold;
  }

  .showitem .rmbwap span {
    vertical-align: middle;
    line-height: 0.4rem;
  }

  .showitem {
    width: 2rem;
    height: 2.6rem;
    text-align: center;
  }

  .showitem .itemwap {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: .1rem;
    border: 1px solid #DCDCDC;
    overflow: hidden;
    margin: 0 auto
  }

  .showitem .itemwap img {
    width: 100%;
  }

  .showitem .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    display: box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .shopconwap {
    padding-left: .4rem;
    padding-right: .4rem;
    padding-bottom: .3rem;
    width: auto;
    overflow-x: auto;
  }

  .shopcon {

    text-align: left;
    white-space: nowrap;
  }
</style>