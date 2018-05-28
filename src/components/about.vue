
<template>
    <div class="about">
            <div class='content'>

                <img src="static/image/logo2.png" alt="">

                <h1 class="text-center font-weight module-title">{{$t('m.about.title')}}</h1>
                <p class="text-left content-text"><span class="font-w600">{{$t('m.name')}}</span>{{$t('m.about.content')}}</p>

            </div>
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
.about {
  background: url(/static/image/bg_about.png) #fff repeat;
  background-size: cover;
  transition: all ease-out 0.3s;
}
.about .font-w600 {
  font-weight: 600;
}
.about .content {
  padding-bottom: 40px;
  width: 1100px;
  min-height: 200px;
  margin: auto;
  position: relative;
  padding-left: 255px;
}
.about .content img {
  width: 179px;
  height: 187px;
  position: absolute;
  top: 73px;
  left: 0;
}
.content .content-text {
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 1px;
  color: #262626;
  padding-top: 17px;
  padding-bottom: 19px;
}
.ablout {
  padding: 38px 0 41px;
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 768px) {
  .about .content {
    padding-bottom: 40px;
    width: 100%;
    min-height: 200px;
    margin: auto;
    position: relative;
    padding: 20px;
  }
  .about .content img {
    width: 60px;
    top: 28px;
    left: 20px;
    display: block;
  }
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 414px) {
  .content .content-text {
    padding-top: 0;
    font-size: 12px;
  }
    .ablout h1{

      padding: 10px 0;
    }
.about .content {
    padding:0 20px;
}
  .about .content img {

    display: none;
  }
}

@media screen and (max-width: 400px) {
  .about .content img {
    display: none;
  }
}
</style>
