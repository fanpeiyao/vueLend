
<template>
    <div class="Application">
        <h1 class="text-center font-weight module-title">{{$t('m.app.title')}}</h1>
        <ul>
            <li>
                <img src="static/image/app1.png" alt="">
                <h4 class="font-weight">{{$t('m.app.mortgage[0]')}}<br/>{{$t('m.app.mortgage[1]')}}</h4>
                <em></em>
            </li>
            <li>
                <img src="static/image/app2.png" alt="">
                <h4 class="font-weight">{{$t('m.app.history[0]')}}<br/>{{$t('m.app.history[1]')}}</h4>
                <em></em>
            </li>
            <li>
                <img src="static/image/app3.png" alt="">
                <h4 class="font-weight">{{$t('m.app.security[0]')}}<br/>{{$t('m.app.security[1]')}}</h4>
                <em></em>
            </li>
            <li>
                <img src="static/image/app4.png" alt="">
                <h4 class="font-weight">{{$t('m.app.engine[0]')}}<br/>{{$t('m.app.engine[1]')}}</h4>
                <em></em>
            </li>
        </ul>

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
.Application {
  width: 100%;
  transition: all ease-out 0.3s;
  height: 316px;
  min-height: 316px;
  position: relative;
}
.Application > img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
}
.Application ul {
  width: 1000px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.Application ul li {
  width: 25%;
  text-align: center;
  cursor: pointer;
}
.Application ul li img {
  width: 62px;
  margin-bottom: 20px;
}

.Application ul li em {
  background: linear-gradient(45deg, #4e9aff 0%, #4989ff 100%);
  height: 2px;
  width: 15px;
  display: block;
  border-radius: 1px;
  margin: 15px auto 0;
}
@media screen and (max-width: 1000px) {
    .Application ul {
        width: 80%;
        margin: auto;
    }
}
@media screen and (max-width: 414px) {
    .Application ul {
    width: 100%;
     justify-content: space-around;
}

.Application ul li{

      width: 17%;
}
}
</style>
