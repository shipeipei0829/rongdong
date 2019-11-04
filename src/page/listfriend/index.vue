<template>
  <div class="ipregion">
    <Headers title="好友列表" />
    <div>
      <van-search
        v-model="checkValue"
        placeholder="搜索"
        show-action
        @search="onSearch"
        >
      <!--<div slot="action" @click="onSearch">搜索</div>-->
      </van-search>
    </div>
    <div class="ipregionCon">

        <div class="ipcon">
          <div class="cont">
            <van-index-bar>
              <van-index-anchor class="indextitle" index="A" />
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg.jpg" alt=""></span></div>
                 <div></div>
                 <div class="name">阿笑</div>
               </div> 
              </van-cell>
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg1.jpg" alt=""></span></div>
                 <div></div>
                 <div class="name">阿美</div>
               </div> 
              </van-cell>
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg2.jpg" alt=""></span></div>
                 <div></div>
                 <div class="name">阿君</div>
               </div> 
              </van-cell>
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg3.jpeg" alt=""></span></div>
                 <div></div>
                 <div class="name">阿必</div>
               </div> 
              </van-cell>

              <van-index-anchor class="indextitle" index="B" />
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg1.jpg" alt=""></span></div>
                 <div></div>
                 <div class="name">毕老师</div>
               </div> 
              </van-cell>
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg1.jpg" alt=""></span></div>
                 <div></div>
                 <div class="name">不算话</div>
               </div> 
              </van-cell>
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg2.jpg" alt=""></span></div>
                 <div></div>
                 <div class="name">补上补下</div>
               </div> 
              </van-cell>
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg3.jpeg" alt=""></span></div>
                 <div></div>
                 <div class="name">卟蒜子</div>
               </div> 
              </van-cell>
              
              <van-index-anchor class="indextitle" index="C" />
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg1.jpg" alt=""></span></div>
                 <div></div>
                 <div class="name">C罗</div>
               </div> 
              </van-cell>
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg.jpg" alt=""></span></div>
                 <div></div>
                 <div class="name">超苹果</div>
               </div> 
              </van-cell>
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg2.jpg" alt=""></span></div>
                 <div></div>
                 <div class="name">潮流</div>
               </div> 
              </van-cell>
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg.jpg" alt=""></span></div>
                 <div></div>
                 <div class="name">卟蒜子</div>
               </div> 
              </van-cell>

              <van-index-anchor class="indextitle" index="J" />
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg.jpg" alt=""></span></div>
                 <div></div>
                 <div class="name">俊俊</div>
               </div> 
              </van-cell>
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg1.jpg" alt=""></span></div>
                 <div></div>
                 <div class="name">军嫂</div>
               </div> 
              </van-cell>
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg2.jpg" alt=""></span></div>
                 <div></div>
                 <div class="name">均色</div>
               </div> 
              </van-cell>
              <van-cell >
               <div class="item">
                 <div class="img"><span><img src="./../../img/headimg3.jpeg" alt=""></span></div>
                 <div></div>
                 <div class="name">救济</div>
               </div> 
              </van-cell>


              
            </van-index-bar>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Headers from '@/components/header/index'
import Headertitle from '@/components/headertitle/index'
import Tagbtn from '@/components/tagbtn/index'
export default {
  name: 'Ipregion',
  data(){
    return{
       checkValue:''
    }
  },
  methods:{

    onSearch(){

    },
    onCancel(){

    }
  },
  mounted(){

  },
  created(){

  },
  watch:{
    activeNames(val){
      console.log(val)
    }
  },
  components: {
    Headers,
    Headertitle,
    Tagbtn,
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
  .ipregionCon{
    background: #fff;
    .ipcon{
      text-align: left;
      .item{
        display: grid;
        grid-template-columns: 1.43rem .48rem 1fr;
        div{padding: .17rem 0;}
        .img{
          span{
            width: 1.43rem;
            height: 1.43rem;
            display: flex;
            align-items: center;
            justify-content:center;
            border-radius: 50%;
            overflow: hidden;
            img{
              width: 100%;
            }

          }
        }
        .name{
          font-size:.42rem;
          line-height: 1.43rem;
          border-bottom: 1px solid #eee;
        }
      }
      .indextitle{
        background: #eee;
        padding-top: .18rem;
        padding-bottom: .18rem;
        
        /deep/ .van-index-anchor{
          font-size: .42rem;
          padding-left: .34rem;
        }
      }
      /deep/ .van-cell:not(:last-child)::after{
        border-bottom: none;
      }
      /deep/ .van-cell{
        padding:0px;
        padding-left: .44rem;
        .van-cell__title{
          span{
            font-size: .36rem;
          }
        }
      }
      /deep/ .van-index-bar__index{
        font-size: .3rem;
        line-height: .4rem;
      }
    }



  }
</style>
