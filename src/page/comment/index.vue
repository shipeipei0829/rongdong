<template>
<div class="commentwap">
    <Headers bgcolor="rgb(17, 133, 137, 0)" title="用户评价" class="tophead" />
    <div class="commenttop">
        <div class="bgimg">
            <img src="./../../img/commit.jpg" alt="">
        </div>
        <div class="commentall">
            <div class="commentallcon">
                <Detailsgrade v-if="flag" :objdate="top" />
            </div>
            
        </div>
        <div class="commenttype">
            <div class="type">
                <p><span @click="setimgtype('all')">全部 ({{top.comments}})</span></p>
                <p><span @click="setimgtype('img')">晒图 ({{top.countImg}})</span></p>
            </div>
        </div>
    </div>
    <div class="commentcon">
        <div class="list-content" id="list-content">

          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                @load="onLoad"
                :offset="20"
            >
                <div class="list-item">
                    <div v-for="(x,index) in bottom" :key="index"  class="item">
                        <div class="toptitle clearfix">
                            <div class="headimg fl">
                                <div class="imgwap">
                                    <img :src="x.avatar" alt="">
                                </div> 
                            </div>
                            <div class="cen fl">
                                <span class="name">{{x.nickName}}</span>
                                <span class="ip">{{x.area}}</span>
                                <span class="date"> {{x.checkInTime}} </span>
                                <span class="pxing">
                                    <van-rate
                                        v-model="x.score*1"
                                        allow-half
                                        void-icon="star"
                                        void-color="#eee"
                                        />
                                    </span>
                                
                            </div>
                            <div class="teliname fr">
                                {{x.roomName}}
                            </div>
                        </div>
                        <div class="cont item3">
                            {{x.comment}}
                        </div>
                        <div class="commentimg">
                            <div class="imgwap clearfix">
                                <div @click="handleImg(x.imgList)">
                                            <span class="imgconwap" v-for="(d,index) in x.imgList" :key="index">
                                                <img :src="d.img" alt="">
                                            </span>

                                </div>

                                
                            </div>
                        </div>
                        <div class="lookallwap">
                            <p class="lookallcon" style="display:none;">展开查看全部</p>
                        </div>
                        <div class="lookallwap">
                            <p class="lookalldate"><van-icon name="notes-o" /> <i class="text">{{x.createTime}}</i></p> 
                        </div>
                        <div class="shopreply clearfix" v-if="x.reply != ''">
                            <van-icon class="fl icon" name="comment" />
                            
                            <i class="fr text">{{x.reply}}</i>
                        </div>
                        <div class="lookallwap" style="display:none;">
                            <p class="lookallcon">展开查看全部</p>
                        </div>
                    </div>

                </div>
                <div v-if="notdata" class="notdata">
                  暂无数据
                </div>
            </van-list>
         </van-pull-refresh>
      </div>

    </div>

</div>
</template>

<script>
import Detailsgrade from '@/module/detailsgrade/index'
import Headers from '@/components/header/index'
import {loadHotelcomment} from '@/api/home/details'
import { ImagePreview } from 'vant';
export default {
  name: "Comment",
  data() {
    return {
      pvalue:4,
      value: 5, //星级酒店评分
      collectStatus:true, //收藏状态
      hotelId:'',
      roomId:'',
      onlyShowImg:0,
      flag:false,
      top:{},//头部评分
      bottom:[],//底部内容

      notdata:false,//是否显示暂无数据
      thispage:true,//是否首次加载  true 为第一次加载 false 为翻页
      loading: false,   //是否处于加载状态    下拉加载 是否显示   
      finished: false,  //是否已加载完所有数据 为true 时无法下拉架子啊
      isLoading: false,   //是否处于下拉刷新状态

      currentPage:1,
    };
  },
  props: {
    ismark: {
      type: Boolean,
      default: false
    }, //显示已下架遮罩
    itemtype: {
      type: Boolean,
      default: true//酒店或者民宿 true 酒店  falsle 民宿
    } //酒店类型

  },
  methods: {
      setimgtype(type){
          if(type == 'img'){
              this.onlyShowImg = 1
          }
          if(type == 'all'){
              this.onlyShowImg = 0
          }
          this.loadcon()
      },
    onRefresh() {       //下拉刷新
        console.log('下拉刷新')
        //setTimeout(() => {
            this.finished = true;
            this.isLoading = false;
            this.thispage == false
            this.currentPage = 1
            this.thispage = true
            this.onLoad()
            
        //}, 500);
    },
    onLoad() {      //上拉加载

        var t = this
      console.log('加载')
      this.finished = false;
      var thiscurrentPage = 1
      if(this.thispage == true){
        thiscurrentPage = this.currentPage
      }else{
        thiscurrentPage = this.currentPage + 1
      }
      this.currentPage = thiscurrentPage
      this.loadcon()
      return false
    },
      
      loadcon(){
          var t = this
        loadHotelcomment({hotelId:t.hotelId,roomId:t.roomId,onlyShowImg:t.onlyShowImg,limit:8,page:t.currentPage}).then((res)=>{
         console.log(res)
         if(res.code==0){
             
             t.top = res.data.score 
             t.flag = true
             if(res.data.pageList.records.length > 0){
                 
                this.notdata = false
                if(t.thispage == true){//第一次加载页面
                    t.bottom = res.data.pageList.records
                    t.thispage = false
                   
                }else{
                    t.bottom = [...t.bottom,...res.data.pageList.records]
                    if(res.data.pageList.current ==  res.data.pageList.pages){//如果最后一页,禁止下拉
                        t.finished = true;
                    }
                }
            }else{
                t.finished = true;//是否取消 下拉上拉加载
                this.notdata = true
                t.listDateMore = []
            }
            t.loading = false
          }
        }).catch(() => {
            t.finished = true;
            t.loading = false
        });
      }
  },
  handleImg(data){
      console.log(data)
        if(data != ''){
            console.log(data)
            var arryimg = []
            for(var x in data){
                arryimg.push(data[x].img)
            }
            ImagePreview({
                images: arryimg,
                startPosition: 0,
                onClose() {
                    // do something
                }
            });
        }
    },
  mounted() {
      this.hotelId = this.$route.query.hotelId
      this.roomId = this.$route.query.roomId

      let winHeight = document.documentElement.clientHeight                          //视口大小
      document.getElementById('list-content').style.height = (winHeight - 0) +'px'  //调整上拉加载框高度
  },
  components:{
    Detailsgrade,
    Headers
  }
};
</script>
<style lang="scss" scoped>
/deep/ #app{
    background: #Fff;
}
.commentwap{
    .list-item{
        background: #Fff;
    }
    /deep/ .van-loading{
        width: auto;
    }
    
    .commentcon{
        padding: 0 .45rem .3rem .45rem;
        $padd:.6rem;
        .item{
            box-shadow:0px 0px 5px #eae8e8;
            padding: .34rem 0 .23rem 0;
            margin-top: .4rem;
            .commentimg{
                padding-left: $padd;
                padding-right:  $padd;
                padding-top: .22rem;
                padding-bottom: .22rem;
                .imgwap{
                    white-space:nowrap;
                    overflow: auto;
                    text-align: left;
                    .imgconwap{
                        display: inline-block;
                        width: 2.4rem;
                        height: 2.4rem;
                        overflow: hidden;

                        margin-right: .3rem;
                        margin-left: .3rem;
                        border-radius: .2rem;
                        position: relative;
                        img{
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%,-50%);
                            width: 100%;
                        }
                    }
                }
            }
            .toptitle{
                span{
                    display: inline-block;
                }
                padding-left: $padd;
                padding-right:  $padd;
                .teliname{
                    font-size: .36rem;
                    color: #008489;
                    text-align: right;
                }
                .cen{
                    padding-left: .3rem;
                    width: 4.1rem;
                    span{
                        display: block;
                        text-align: left;
                    }
                    .name{font-size: .45rem;font-weight: bold;line-height: .45rem;}
                    .ip{font-size: .36rem; color: #008489;line-height: .36rem;margin: .12rem 0 .18rem 0}
                    .date{font-size: .30rem; color: #727171;line-height: .30rem;margin-bottom: .12rem}
                    .pxing{font-size: .25rem;line-height: .25rem;}
                }
                .headimg{
                    .imgwap{
                        width: 1.6rem;
                        height: 1.6rem;
                        overflow: hidden;
                        border-radius: 50%;
                        position: relative;
                        img{
                            width: 100%;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            margin: 0 auto;
                        }
                    }

                }

            }
            .cont{
                text-align: left;
                margin-top: .15rem;
                color: #434343;
                font-size: .36rem;
                padding-left: $padd;
                padding-right: $padd;
            }
            .shopreply{
                padding-left: $padd;
                padding-right: $padd;
                text-align: left;
                border-top: 1px solid #EEEEEE;
                padding-top: .21rem;
                margin-top: .15rem;
                .icon{
                    font-size: .36rem;
                    padding-top: .04rem;
                }
                .text{
                    width: 8.1rem;
                    font-size: .33rem;
                }
            }
            .lookallwap{
                text-align: right;
                padding-left: $padd;
                padding-right: $padd;
                .lookallcon{
                    color: #FF9623;
                    font-size: .3rem;
                }
                .lookalldate{
                    i{color: #008489;font-size: .5rem;vertical-align: middle;}
                    .text{
                        color: #727171;
                        font-size: .3rem;
                        margin-left: 3px;
                    }
                }
            }
            .item3{
                overflow:hidden; 
                text-overflow:ellipsis;
                display:-webkit-box;
                -webkit-box-orient:vertical;
                -webkit-line-clamp:3;
            }
        }
    }
    .commenttop{
        position: relative;
        height: 6.32rem;
        border-bottom: 1px solid #F0F0F0;
        background: #fff;
        .commenttype{
            margin-top: 2rem;
            padding: 0 .48rem;
            .type{
                p{
                    display: inline-block;
                    width: 50%;
                }
                span{
                    display: inline-block;
                    font-size: .42rem;
                    line-height: .42rem;
                    padding: .1rem .15rem;
                    border-radius: .2rem;
                    border:1px solid #eae8e8;
                    box-shadow:0px 0px 5px #eae8e8;
                    color:#383838;
                }
            }
        }
        .commentall{
            position: absolute;
            z-index: 2;
            top: 1.4rem;
            width: 100%;
            
            .commentallcon{
                width: 9.84rem;
                margin: auto;
                box-shadow:0px 3px 5px #eae8e8;
                border-radius: .1rem;
                background: #fff;
            }
        }
        .bgimg{
            display: flex;
            align-items: center;
            justify-content:center;
            height: 3.16rem;
            overflow: hidden;
            img{
                width: 100%;
            
            }
        }
    }
    .tophead{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
    }


}
</style> 