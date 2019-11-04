<template>
      <div class="success">
            <p> 转售成功-待支付打扫费</p>
            <div>
                  <p>入住：<span>2019.07.23 11:00</span> </p>
                  <p>离店：<span>2019.07.23 11:00</span> </p>
            </div>
            <div>
                  <p>
                        <span>
                              成交价：
                        </span>
                        <span>
                              ¥136.00
                        </span>
                  </p>
                  <p @click='onSuccess()'>
                        支付
                  </p>
            </div>
      </div>
</template>
<script>
      export default {
            data() {
                  return {
                        num: ''
                  }
            },
            props: {
                  fontcolor: {
                        type: String,
                        default: '#118589'
                  }
            },
            components: {

            },
            methods: {
                  // 支付按钮
                  onSuccess() {
                        // let info = { name: 'hou', age: 24, id: '001' }
                        // window.localStorage.setItem('zhang', JSON.stringify(info));
                        // let add = JSON.parse(localStorage.getItem('zhang'))
                        // this.num = add;
                        // console.log(this.num)
                        // console.log(this)
                        // console.log(window)
                  },
            }
      }
</script>

<style>
      .success {
            width: 100%;
            border-radius: 0.1rem;
            margin-bottom: 0.29rem;
            background: #fff;
      }

      .success>p {
            font-size: 0.5rem;
            color: #118589;
            font-weight: bold;
            line-height: 44px;
      }

      .success>div {
            display: flex;
            justify-content: space-around;
      }

      .success>div:nth-child(2) {
            font-size: 0.3rem;
            font-weight: bold;
            color: #000000;
      }

      .success>div:last-child {
            margin-top: 0.2rem;
            padding-bottom: 0.46rem;
      }

      .success>div:last-child>p:first-child {
            font-size: 0.3rem;
            padding-top: 0.08rem;
            font-weight: bold;
      }

      .success>div:last-child>p:first-child>span:first-child {
            color: #000000;
      }

      .success>div:last-child>p:first-child>span:last-child {
            color: #FD9525;
      }

      .success>div:last-child>p:last-child {
            width: 3.33rem;
            height: 0.6rem;
            text-align: center;
            line-height: 0.6rem;
            border: 1px solid #FD9525;
            border-radius: 0.3rem;
            color: #FD9525;
            margin-right: -0.4rem;
      }
</style>