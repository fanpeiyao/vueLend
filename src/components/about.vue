
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
  width: 846px;
  min-height: 200px;
  margin: auto;
  position: relative;
  padding-left: 215px;
}
.about .content img {
  width: 120px;
  position: absolute;
  top: 70px;
  left: 60px;
}
.content .content-text {
  font-size: 12px;
  letter-spacing: 1px;
  color: #262626;
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

@media screen and (max-width: 400px) {
  .about .content img {
    display: none;
  }
}
</style>
