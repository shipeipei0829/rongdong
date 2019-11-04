<template>
      <div class='search_list'>
            <p>已发送请求待验证</p>
            <ul class='search_list_list'>
                  <li>
                        <div>
                              <div>
                                    <img src="./../../img/headimg.jpg" alt="">
                              </div>
                              <div>
                                    <p>TY</p>
                                    <p>我是TY请求添加......</p>
                              </div>
                        </div>
                        <div>
                              等待添加
                        </div>
                  </li>
            </ul>
      </div>
</template>
<script>
      export default {
            data() {
                  return {

                  }
            },
      }
</script>

<style scoped>
      .search_list>p {
            padding: 0.37rem 0rem 0.21rem 0.52rem;
            font-size: 0.34rem;
            color: #BEBEBE;
            font-weight: 500;
            text-align: left;
      }

      .search_list_list {
            background: #fff;
            padding: 0rem 0.41rem 0rem 0.34rem;
      }

      .search_list_list>li {
            display: flex;
            justify-content: space-between;
            border-bottom: 0.03rem solid #D7D7D7;
      }

      .search_list_list>li>div:first-child {
            display: flex;
      }

      .search_list_list>li>div:first-child>div:first-child {
            width: 1.42rem;
            height: 1.42rem;
            margin: 0.34rem 0.51rem 0.24rem 0.14rem;
      }

      .search_list_list>li>div:first-child>div:first-child>img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
      }

      .search_list_list>li>div:first-child>div:last-child {
            text-align: left;
            padding-top: 0.52rem;
      }

      .search_list_list>li>div:first-child>div:last-child>p:first-child {
            color: #000;
            font-size: 0.42rem;
            font-weight: 500;
      }

      .search_list_list>li>div:first-child>div:last-child>p:last-child {
            font-weight: 400;
            font-size: 0.36rem;
      }

      .search_list_list>li>div:last-child {
            color: #000000;
            font-size: 0.36rem;
            background: #F0F0F0;
            width: 1.74rem;
            height: 0.57rem;
            text-align: center;
            line-height: 0.57rem;
            font-weight: 400;
            margin-top: 0.83rem;
      }
</style>