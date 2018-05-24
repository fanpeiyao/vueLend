
<template>
    <div class="news">
        <h1 class="text-center font-weight module-title">{{$t('m.news.title')}}</h1>
        <div class='news-slide'>
            <swiper :options="swiperOption">
                <swiper-slide>

                    <el-card shadow="hover"  class='news-list'>
                        <img src="http://element-cn.eleme.io/static/hamburger.50e4091.png" class="image">
                        <p>ssssssssdddddddddddddddddddddddddddddddddddddddds</p>
                        <span>102093-2-22</span>
                    </el-card>

                    <el-card shadow="hover"  class='news-list'>
                            鼠标悬浮时显示
                    </el-card>
                    <el-card shadow="hover"  class='news-list'>
                            鼠标悬浮时显示
                    </el-card>
                    <el-card shadow="hover"  class='news-list'>
                            鼠标悬浮时显示
                    </el-card>


                </swiper-slide>
                <swiper-slide>

                    <div class='news-list'>sssssssssssss</div>
                    <div class='news-list'>ssssssssss</div>
                    <div class='news-list'>ddddddddddd</div>
                    <div class='news-list'>qqqqqqqqqqqqq</div>
                </swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>

            </swiper>

            <div class="swiper-pagination" slot="pagination"></div>
        </div>

    </div>
</template>

<script>



export default {
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                },
                freeMode : false,
                autoplay:false
            },
            imgList:[
                'static/image/pro_1.png',
                'static/image/pro_2.png',
                'static/image/pro_3.png',
            ]
        }
    },
}
</script>

<style>
.news .news-slide{
    width: 1000px;
    margin: auto;
    margin-bottom: 80px;
    position: relative;
}

.news .news-slide  .swiper-pagination-bullets {
    bottom: -30px;
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

.news .news-slide .swiper-pagination-bullets .swiper-pagination-bullet.swiper-pagination-bullet-active{
    background:  #237eed;
    opacity: 1;
}
.news .news-slide .swiper-slide{
    display: flex;
     padding: 10px;
    justify-content: space-between;
}
.news .news-slide .news-list{
    width:24%;
    cursor: pointer;
    background: #fff;

}
.news .news-slide .news-list .el-card__body {
    padding: 0;
}
.news .news-slide .news-list img{
    width: 100%;
    margin-bottom: 20px;
}
.news .news-slide .news-list p{
    padding: 0 20px;
    line-height: 30px;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    width: 100%;
    word-wrap: break-word;
    letter-spacing: 1px;
}
.news .news-slide .news-list span{
    padding: 10px 20px;
    color:#999;
     display: block;
}


/*屏幕宽度小于768px时*/
@media screen and (max-width: 1000px) {
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 768px) {
}
/*屏幕宽度小于768px时*/
@media screen and (max-width:414px) {
}

</style>
