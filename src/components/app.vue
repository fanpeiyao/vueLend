
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
  padding-bottom: 80px;
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
  width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.Application ul li {
  width: 25%;
  text-align: center;
  cursor: pointer;
  font-size: 22px;
}
.Application ul li img {
  width: 90px;
  margin-bottom: 35px;
}
.Application ul li em {
  background: linear-gradient(45deg, #4e9aff 0%, #4989ff 100%);
  height: 4px;
  width: 30px;
  display: block;
  border-radius: 2px;
  margin: 25px auto 0;
}
@media screen and (max-width: 1000px) {
  .Application ul {
    width: 80%;
    margin: auto;
  }

  .Application ul li img {
    width: 62px;
    margin-bottom: 20px;
  }

  .Application > h1 {
    padding-top: 40px;
  }
  .Application ul {
    padding-top: 0;
  }

  .Application ul li {
    font-size: 14px;
  }
  .Application {
    width: 100%;
    transition: all ease-out 0.3s;
    height: 310px;
    min-height: 310px;
    position: relative;
  }
  .Application ul li em {
    height: 2px;
    width: 15px;
    margin: 15px auto 0;
  }
}
@media screen and (max-width: 414px) {
  .Application ul {
    width: 100%;
    justify-content: space-around;
  }

  .Application {
    height: auto;
    min-height: auto;
    padding-bottom: 40px;
  }
  .Application ul li {
    width: 17%;
  }
}
</style>
