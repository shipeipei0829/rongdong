
<template>
  <div class="moreinfo" style="background:#fff;height:100vh;width:100%">
    <Headertop :title="title" />
    <ul class="more">
      <li class="more_item">
        <div class="more_item_lf">备注说明</div>
        <input type="text" class="more_item_rt" placeholder="请输入公司名称">
      </li>
      <li class="more_item">
        <div class="more_item_lf">地址</div>
        <input type="text" class="more_item_rt" placeholder="填写注册地址">
      </li>
      <li class="more_item">
        <div class="more_item_lf">电话</div>
        <input type="text" class="more_item_rt" placeholder="填写手机号">
      </li>
      <li class="more_item">
        <div class="more_item_lf">开户行</div>
        <input type="text" class="more_item_rt" placeholder="填写开户银行">
      </li>
      <li class="more_item">
        <div class="more_item_lf">备注说明</div>
        <input type="text" class="more_item_rt" placeholder="银行账号">
      </li>
    </ul>
  </div>
</template>

<script>
import Headertop from "@/components/header/index";

export default {
  name: "Moreinfo",
  data() {
    return {
      title: "填写发票信息"
    };
  },
  props: {
    msg: {}
  },
  methods: {},
  mounted() {},
  components: {
    Headertop
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.more_item {
  display: flex;
  justify-content: space-between;
  height: 1.18rem;
  line-height: 1.18rem;
  border-top: 1px solid #f0f0f0;
  font-size: .42rem;
  background: #fff;
}
.more_item_lf{
  padding-left: .53rem;
  font-weight: bold;

}
.more_item_rt{
  color: #6C6C6C;
  padding-right: .5rem;
}
input{
  outline: none;
  border: none;
}
input::-webkit-input-placeholder { 
    color:rgba(153,153,153,1);text-align: right; 
}
input::-moz-placeholder { color:rgba(153,153,153,1); text-align: right;} /* firefox 19+ */
input:-ms-input-placeholder { color:rgba(153,153,153,1);text-align: right; } /* Internet Explorer 10+ */
input:-moz-placeholder { color:rgba(153,153,153,1); text-align: right;} /* firefox 14-18 */
</style>
