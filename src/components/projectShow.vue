
<template>
    <div class="projectShow">
        <h1 class="text-center font-weight module-title">{{$t('m.project.project')}}</h1>
        <div id="certify" class='pro-web'>
            <swiper :options="swiperOption">
                <swiper-slide  v-for="(item,index) in imgList" :key="index"><img :src="item" /></swiper-slide>
            </swiper>
        </div>

        <div class="pro-mobile">
            <swiper>
                <swiper-slide  v-for="(item,index) in imgList" :key="index"><img :src="item" /></swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>



export default {
    data() {
        return {
            swiperOption: {
                watchSlidesProgress: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                loop: true,
                loopedSlides: 7,
                autoplay: true,
                on: {
                    progress: function(progress) {
                        for (var i = 0; i < this.slides.length; i++) {
                            var slide = this.slides.eq(i);
                            var slideProgress = this.slides[i].progress;
                            let modify = 1;
                            if (Math.abs(slideProgress) > 1) {
                                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                            }

                            var translate = slideProgress * modify * 50 + 'px';

                            var scale = 1 - Math.abs(slideProgress) /7;
                            var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                            slide.css('zIndex', zIndex);
                            slide.css('opacity', 1);
                            if (Math.abs(slideProgress) > 3) {
                                slide.css('opacity', 0);
                            }
                        }
                    },
                    setTransition: function(transition) {
                        for (var i = 0; i < this.slides.length; i++) {
                            var slide = this.slides.eq(i)
                            slide.transition(transition);
                        }
                    }
                }
            },
            imgList:[
                'static/image/pro_1.png',
                'static/image/pro_2.png',
                'static/image/pro_3.png',
                'static/image/pro_4.png',
                'static/image/pro_5.png',
                'static/image/pro_6.png',
                'static/image/pro_7.png',
            ]
        }
    },
}
</script>

<style>
#certify {
	position: relative;
	width: 1000px;
	margin: 0 auto
}

#certify .swiper-container {
	padding-bottom: 60px;
}

#certify  .swiper-slide {
	width: 200px;

	box-shadow: 0 8px 20px #ddd;
}
#certify  .swiper-slide img{
	width: 200px;
	display:block;
}
#certify  .swiper-slide p {
	line-height: 98px;
	padding-top: 0;
	text-align: center;
	color: #636363;
	font-size: 1.1em;
	margin: 0;
}

.projectShow>.pro-mobile{
    display: none;
}
.projectShow>.pro-web{
    margin: 40px 0;
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 1000px) {
    .projectShow>.pro-web{
        display: none;
    }
    .projectShow>.pro-mobile{
        display: block;
    }
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 768px) {
    .projectShow>.pro-web{
        display: none;
    }
    .projectShow>.pro-mobile{
        display: block;
    }
}
/*屏幕宽度小于768px时*/
@media screen and (max-width:414px) {
    .projectShow>.pro-web{
        display: none;
    }
    .projectShow>.pro-mobile{
        display: block;
    }
    .projectShow>.pro-mobile img{
        width: 100vw;
    }
}

</style>
