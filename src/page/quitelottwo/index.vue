<template>
      <div class='result'>
            <p>搜索结果</p>
            <ul class='result_list'>
                  <li>
                        <div>
                              <div>
                                    <img src="./../../img/headimg.jpg" alt="">
                              </div>
                              <div>
                                    <p>天青色等烟雨</p>
                                    <p>
                                          <span>
                                                手机号：
                                          </span>
                                          <span>
                                                1338384942
                                          </span>
                                    </p>
                              </div>
                        </div>
                  </li>
            </ul>
      </div>
</template>
<script>

</script>

<style scoped>
      .result>p {
            padding: 0.18rem 0rem 0.18rem 0.41rem;
            color: #040404;
            font-size: 0.36rem;
            font-weight: 500;
            text-align: left;
      }

      .result_list>li {
            padding: 0.24rem 0rem 0.29rem 0.51rem;
            background: #fff;
            text-align: left;

      }

      .result_list>li>div {
            border-bottom: 0.03rem solid #D7D7D7;
            display: flex;
      }

      .result_list>li>div>div:first-child {
            width: 1.42rem;
            height: 1.42rem;
            margin-right: 0.51rem;
      }

      .result_list>li>div>div:first-child>img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
      }

      .result_list>li>div>div:last-child>p:first-child {
            padding-top: 0.13rem;
            font-size: 0.42rem;
            color: #000000;
            font-weight: 500;
      }

      .result_list>li>div>div:last-child>p:last-child {
            color: #000;
            font-size: 0.36rem;
            font-weight: 400;
            opacity: 0.8;
      }
</style>