
<template>
    <div class="investors">
        <h1 class="text-center font-weight module-title">{{$t('m.Investors.title')}}</h1>

        <div class='investors-content img_inv'>
            <div  class='investors-list' v-for="(item,key) in 3" :key='key'>
                <img src="static/image/gxb.png" alt="">
            </div>
        </div>
        <!-- <div class='investors-content'>
            <div  class='investors-list' v-for="(item,key) in 3" :key='key'>
                <div>
                    <div class="img"></div>
                    <p>GXS</p>
                </div>
                <div class='gongxinbao'>
                    公信宝
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scope>
.investors {
  position: relative;
}
.investors * {
  transition: all 0.2s;
}
.investors > img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
}
.investors .investors-content {
  display: flex;
  padding: 10px 0 40px;
  width: 900px;
  margin: auto;
  justify-content: space-between;
}
.investors .investors-content .investors-list {
  width: 30%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: center;
  background: url("/static/image/bg2.png");
}

.investors .investors-content .investors-list > div {
  width: 50%;
  color: #fff;
}
.investors .investors-content .investors-list > div .img {
  height: 90px;
  width: 90px;
  margin: auto;
  background: url("/static/image/app1.png") no-repeat;
  background-size: 100% 100%;
}
.investors .investors-content .investors-list > div p {
  letter-spacing: 2px;
  color: #fff;
}
.investors .investors-content .investors-list:hover {
  background: #fff;
  box-sizing: border-box;
}
.investors .investors-content .investors-list:hover > div {
  color: #595959;
}
.investors .investors-content .investors-list:hover > div .img {
  background: url("/static/image/app1.png") no-repeat;
  background-size: 100% 100%;
}
.investors .investors-content .investors-list:hover > div p {
  background: linear-gradient(45deg, #3671e2 0%, #509eff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.investors .investors-content .investors-list > div.gongxinbao {
  font-size: 28px;
}

.investors .investors-content.img_inv .investors-list {
  padding: 0;
}
.img_inv img {
  width: 100%;
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 1000px) {
  .investors .investors-content {
    width: 90%;
  }

  .investors .investors-content.img_inv .investors-list {
    padding: 0;
  }
}

/*屏幕宽度小于768px时*/

@media screen and (max-width: 768px) {
  .investors .investors-content .investors-list {
    width: 30%;
    padding: 10px;
  }
  .investors .investors-content .investors-list > div .img {
    width: 60px;
    height: 60px;
  }
  .investors .investors-content .investors-list > div.gongxinbao {
    font-size: 24px;
  }

  .investors .investors-content.img_inv .investors-list {
    padding: 0;
  }
}
@media screen and (max-width: 414px) {
  .investors .investors-content {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  .investors .investors-content .investors-list {
    width: 80%;
    margin-bottom: 20px;
  }

  .investors .investors-content.img_inv .investors-list {
    padding: 0;
  }
}
</style>
