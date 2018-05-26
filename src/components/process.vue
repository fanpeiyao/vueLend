
<template>
    <div class="plan">
        <h1 class="text-center font-weight module-title">{{$t('m.plan.title')}}</h1>
        <!-- 桌面 -->
        <div class="web">
            <ol class="timeline">
                <span class="time">{{$t('m.plan.year')}}</span>
                <li v-for="(item, key) in timeline">
                    <p v-if="key != 2 && key!=4">{{item.thing}}</p>
                    <div v-else>
                        <div>{{item.thing}}</div>
                    </div>
                    <span>
                        {{item.time}}
                    </span>
                </li>
            </ol>
        </div>
        <!-- 移动 -->
        <div class="mobile">
            <ul class="timeline">
                <li class="time">
                    <div class="content">2018</div>
                </li>
                <li class="branch" v-for="(item, key) in timeline">
                    <div class="content">
                    <p class="skin-color">{{item.time}} </p>
                    <p>{{item.thing}}</p>
                    </div>
                </li>
                <!-- <li class="branch">
                    <div class="content">
                    <p class="skin-color">asdsdf'v </p>
                    <p>aa.</p>
                    </div>
                </li>
                <li class="branch">
                    <div class="content">
                    <p class="skin-color">asdsdf'v </p>
                    <p>aa.</p>
                    </div>
                </li>
                <li class="branch">
                    <div class="content">
                    <p class="skin-color">asdsdf'v </p>
                    <p>aa.</p>
                    </div>
                </li>

                <li class="branch">
                    <div class="content">
                    <p class="skin-color">asdsdf'v </p>
                    <p>aa.</p>
                    </div>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: this.$t("m.plan.timeLine")
    };
  }
};
</script>

<style scope>
.plan {
  position: relative;
  background: #fff;
}
.skin-color {
  color: #509fff;
}

.plan .mobile {
  padding-bottom: 30px;
  display: none;
}

.plan .web {
  padding: 100px 0 140px;
}
.plan .web .timeline .time {
  position: absolute;
  left: -12px;
  top: -25px;
}

.plan .web .timeline {
  position: relative;
  display: block;
  background-color: #7991b2;
  border-radius: 5px;
  height: 6px;
  margin: auto;
  padding-left: 80px;
  width: 1000px;
}
.plan .web .timeline li {
  word-wrap: break-word;
  position: relative;
  display: block;
  float: left;
  width: 180px;
  top: -95px;
}
.plan .web .timeline li > div {
  position: relative;
  height: 35px;
}
.plan .web .timeline li > div > div {
  position: absolute;
  width: 300px;
}

.plan .web .timeline li:first-of-type {
  top: -78px;
}
.plan .web .timeline li:first-of-type::before {
  top: 73px;
}
.plan .web .timeline li:first-of-type::after {
  top: 42px;
}
.plan .web .timeline li:last-child > div > div {
  width: 268px;
}
.plan .web .timeline li::before {
  content: "";
  position: absolute;
  top: 88px;
  width: 15px;
  height: 15px;
  background: #509fff;
  border: 3px solid #fff;
  border-radius: 15px;
}
.plan .web .timeline li::after {
  content: "";
  width: 1px;
  height: 40px;
  background: #509fff;
  position: absolute;
  z-index: 2;
  top: 58px;
  left: 7px;
}
.plan .web .timeline li span {
  display: block;
  color: #509fff;
}

.plan .web .timeline li:nth-child(2n + 1) {
  top: 50px;
}
.plan .web .timeline li:nth-child(2n + 1)::before {
  top: -55px;
}

.plan .web .timeline li:nth-child(2n + 1)::after {
  top: -48px;
}

.plan .mobile .timeline {
  list-style: none;
  width: 275px;
  margin: 0 auto;
  position: relative;
  padding: 0;
}
.plan .mobile .timeline:before {
  content: "";
  top: 18px;
  width: 6px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  background: #7991b2;
  border-radius: 5px;
  z-index: 2;
}
.plan .mobile .timeline:after {
  content: "";
  clear: both;
  display: table;
}
.plan .mobile .timeline .time {
  float: left;
  width: 100%;
  text-align: center;
  margin: 15px 0;
}
.plan .mobile .timeline .time .content {
  font-size: 14px;
  margin-left: -80px;
}
.plan .mobile .timeline .time:first-child {
  margin-top: 0;
}
.plan .mobile .timeline .branch {
  position: relative;
  padding: 10px;
  left: 183px;
  width: 275px;
  float: right;
  margin: 15px 0 15px 25px;
}

.plan .mobile .timeline .branch:before {
  content: "";
  width: 50px;
  height: 1px;
  background: #509fff;
  position: absolute;
  left: auto;
  z-index: 2;
  right: 272px;
  top: 32px;
}
.plan .mobile .timeline .branch:nth-child(2n + 1):after {
  top: 5px;
  left: 313px;
}
.plan .mobile .timeline .branch .content {
  font-size: 14px;
  position: relative;
}
.plan .mobile .timeline .branch .content:before {
  content: "";
  width: 15px;
  height: 15px;
  background: #509fff;
  border: 3px solid #fff;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  position: absolute;
  left: auto;
  z-index: 2;
  right: 303px;
  top: 15px;
}
.plan .mobile .timeline .branch .content h3 {
  margin: 0;
}
.plan .mobile .timeline .branch .content p {
  margin: 0 0 5px;
}
.plan .mobile .timeline .branch:nth-child(2n + 1) {
  float: left;
  margin: 15px 23px 15px 0;
}
.plan .mobile .timeline .branch:nth-child(2n + 1) .content:before {
  left: 317px;
}
.plan .mobile .timeline .branch:nth-child(2n + 1) .content {
  text-align: right;
  right: 380px;
}
.plan .mobile .timeline .branch:nth-child(2n + 1):before {
  right: 320px;
}

/*屏幕宽度小于768px时*/
@media screen and (max-width: 1000px) {
  .plan .web {
    display: none;
  }
  .plan .mobile {
    display: block;
  }
}
</style>
