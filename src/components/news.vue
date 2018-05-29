
<template>
    <div class="news">
        <h1 class="text-center font-weight module-title">{{$t('m.news.title')}}</h1>
        <div class='news-slide'>
            <swiper :options="swiperOption">
                <swiper-slide>
                    <el-card shadow="hover"  class='news-list'>
                        <a href="https://mp.weixin.qq.com/s/cL-tGzEU1OXGYxPFXO8OtQ" target="_black"><img src="static/image/new1.png" class="image">
                        <p>{{$t('m.news.card[0].title')}}</p>
                        <span>{{$t('m.news.card[0].time')}}</span></a>
                    </el-card>
                    <el-card shadow="hover"  class='news-list'>
                        <a href=" https://mp.weixin.qq.com/s/SxcmB1UtKaDMi8wPVrkmcA" target="_black">
                        <img src="static/image/new3.png" class="image">
                        <p>{{$t('m.news.card[1].title')}}</p>
                        <span>{{$t('m.news.card[1].time')}}</span></a>
                    </el-card>
                    <el-card shadow="hover"  class='news-list'>
                        <a href="https://mp.weixin.qq.com/s/OcINL6eWEqCaw-I0Dk6Xpg" target="_black">
                        <img src="static/image/new2.png" class="image">
                        <p>{{$t('m.news.card[2].title')}}</p>
                        <span>{{$t('m.news.card[2].time')}}</span>
                        </a>
                    </el-card>
                </swiper-slide>
                <!-- <swiper-slide>
                    Slide 2
                </swiper-slide>
                <swiper-slide>Slide 3</swiper-slide> -->

            </swiper>

            <div class="swiper-pagination" slot="pagination"></div>
        </div>


        <div class='news-mobile'>
            <swiper :options="swiperOption2">
                <swiper-slide>
                    <el-card shadow="hover"  class='news-list'>
                        <a href="https://mp.weixin.qq.com/s/cL-tGzEU1OXGYxPFXO8OtQ" target="_black"><img src="static/image/new1.png" class="image">
                        <p>{{$t('m.news.card[0].title')}}</p>
                        <span>{{$t('m.news.card[0].time')}}</span></a>
                    </el-card>
                </swiper-slide>
                <swiper-slide>
                    <el-card shadow="hover"  class='news-list'>
                        <a href=" https://mp.weixin.qq.com/s/SxcmB1UtKaDMi8wPVrkmcA" target="_black">
                        <img src="static/image/new3.png" class="image">
                        <p>{{$t('m.news.card[1].title')}}</p>
                        <span>{{$t('m.news.card[1].time')}}</span></a>
                    </el-card>
                </swiper-slide>
                <swiper-slide>
                    <el-card shadow="hover"  class='news-list'>
                        <a href="https://mp.weixin.qq.com/s/OcINL6eWEqCaw-I0Dk6Xpg" target="_black">
                        <img src="static/image/new2.png" class="image">
                        <p>{{$t('m.news.card[2].title')}}</p>
                        <span>{{$t('m.news.card[2].time')}}</span>
                        </a>
                    </el-card>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          //控制底部按钮点击切换
          clickable: true
        },
        freeMode: false,
        autoplay: false
      },
      swiperOption2: {
        pagination: {
          el: ".swiper-pagination",
          //控制底部按钮点击切换
          clickable: true
        },
        freeMode: false,
        autoplay: false
      },
      imgList: [
        "static/image/pro_1.png",
        "static/image/pro_2.png",
        "static/image/pro_3.png"
      ]
    };
  }
};
</script>

<style>
.news {
  background: #fff;
  padding-bottom: 110px;
}
.news .news-slide {
  width: 1100px;
  margin: auto;
  position: relative;
}

.news .news-slide .swiper-pagination-bullets {
  bottom: -45px;
  margin: auto;
  left: 0;
  right: 0;
}

.news .news-slide .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 4px;
  border: 1px solid #237eed;
  background: #fff;
  opacity: 0.6;
}

.news
  .news-slide
  .swiper-pagination-bullets
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #237eed;
  opacity: 1;
}
.news .news-slide .swiper-slide {
  display: flex;
  justify-content: space-between;
}
.news .news-slide .news-list {
  width: 32%;
  cursor: pointer;
  background: #fff;
}
.news .news-slide .news-list .el-card__body {
  padding: 0;
}
.news .news-slide .news-list img {
  width: 100%;
  margin-bottom: 20px;
}
.news .news-slide .news-list p {
  padding: 0 20px;
  line-height: 30px;
  font-size: 18px;
  font-weight: 500;
  color: #262626;
  width: 100%;
  word-wrap: break-word;
  letter-spacing: 1px;
}
.news .news-slide .news-list span {
  padding: 17px 20px;
  color: #999;
  display: block;
}

.news .news-mobile {
  display: none;
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 900px) {
  .news .news-slide {
    width: 100%;
    padding: 0 10px;
  }
}

/*屏幕宽度小于768px时*/
@media screen and (max-width: 414px) {
  .news {
    padding-bottom: 40px;
  }
  .news .news-slide {
    display: none;
  }
  .news .news-mobile {
    display: block;
    width: 100%;
  }
  .news .news-mobile .el-card {
    margin: auto;
    width: 80%;
  }

  .news .news-mobile .el-card .el-card__body {
    padding: 0;
  }

  .news .news-mobile .el-card .el-card__body img {
    width: 100%;
  }
  .news .news-mobile .el-card__body p {
    padding: 0 20px;
    line-height: 30px;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    width: 100%;
    word-wrap: break-word;
    letter-spacing: 1px;
  }
  .news .news-mobile .el-card__body span {
    padding: 10px 20px 30px;
    color: #999;
    display: block;
  }
}
</style>
