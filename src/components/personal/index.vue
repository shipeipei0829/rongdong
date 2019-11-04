<template>
      <div>
            <Fail value='入住人信息' src='homemoney'></Fail>      
            <ul class="ruzhu_list">
                  <li>
                        <div>
                              <p>姓名（房间 <span>1</span> ）</p>
                        </div>
                        <p>userName 13212341234</p>
                  </li>
                  <li class='ruzhu_top'>
                        <div>
                              <p>押金金额</p>
                        </div>
                        <p></p>
                  </li>

            </ul>
      </div>

</template>
<script>
      import Fail from "@/components/fail/index.vue"
      export default {
            data() {
                  return {
                  }
            },
            components: {
                  Fail
            },
            methods: {

            }
      }
</script>
<style>
      .ruzhu_list {
            padding: 0.3rem 0rem 0.34rem 0.17rem;
      }

      .ruzhu_list>li {
            display: flex;
            text-align: left;
      }

      .ruzhu_list>li>div {
            width: 2.5rem;
            font-weight: 400;
            color: rgba(115, 115, 115, 1);
      }

      .ruzhu_list>li>p {
            font-size: 0.3rem;
      }

      .ruzhu_top {
            margin-top: 0.35rem;
      }
</style>