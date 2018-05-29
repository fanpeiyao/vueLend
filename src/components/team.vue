
<template>
    <div class="team">
        <h1 class="text-center font-weight module-title">{{$t('m.team.title')}}</h1>
        <div class='team-list web'>
            <el-card shadow="hover"  v-for="(item, key) in team" :key="key">
                <img :src='"static/image/"+item.img+".png"' class="image">
                <p>{{item.name}} </p>
                <span>{{item.job}}</span>
                <div class="introduce">
                    <div v-for="(p, key) in item.introduce" :key="key">{{p}}</div></div>
            </el-card>
            <!-- flex布局，两边对齐，只有五个所以加一个占位 -->
            <el-card style="opacity:0;height: 0;padding: 0; margin: 0;"></el-card>
        </div>

        <div class='team-list mobile'>
            <div  v-for="(item, key) in team" :key="key"  @click="showCard($event)" >
                <el-card shadow="hover" >
                    <div>
                        <img :src='"static/image/"+item.img+".png"' class="image">
                        <p>{{item.name}} </p>
                        <span>{{item.job}}</span>
                        <div class="introduce">
                    <div v-for="(p, key) in item.introduce" :key="key">{{p}}</div></div>
                    </div>
                </el-card>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      team: this.$t("m.team.team")
    };
  },
  methods: {
    showCard($event) {
      if ($event.currentTarget.className == "mobileCard") {
        $event.currentTarget.className = "mobileCardno";
      } else {
        $event.currentTarget.className = "mobileCard";
      }
    }
  }
};
</script>

<style scope>
.team {
  background: #fff;
  padding-bottom:60px;
}
.team .team-list {
  width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.team .team-list.mobile {
  display: none;
}
.team .team-list .el-card {
  width: 30%;
  text-align: center;
  cursor: pointer;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 25px;
  position: relative;
}
.team .team-list .el-card .introduce {
  height: 1px;
  width: 100%;
  opacity: 0;
  transition: height 0.5s ease-in-out;
  padding: 10px 10px 0 15px;
  text-align: left;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 20px;
  -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
  transition: opacity 0.3s, -webkit-transform 0.3s;
  transition: opacity 0.3s, transform 0.3s;
  transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;
}
.team .team-list .el-card img {
  width: 100%;
  width: 100px;
  margin-bottom: 10px;
  border-radius: 50%;
}
.team .team-list .el-card .el-card__body {
  padding: 20px 15px 20px 10px;
}
.team .team-list .el-card p {
  padding: 0 20px;
  line-height: 30px;
  font-size: 22px;
  font-weight: 500;
  color: #262626;
  width: 100%;
  word-wrap: break-word;
  letter-spacing: 1px;
}
.team .team-list span {
  padding: 10px 0 0;
  color: #595959;
  font-size: 16px;
  display: block;
}

.team .team-list .el-card:hover {
  color: #fff;
  overflow: visible;
  background: linear-gradient(45deg, #4886ff 0%, #509fff 100%);
}
.team .team-list .el-card:hover .el-card__body {
  position: absolute;
  border-radius: 5px;
  width: 100%;
  background: linear-gradient(45deg, #4886ff 0%, #509fff 100%);
  z-index: 9;
}

.team .team-list .el-card:hover p {
  color: #fff;
}
.team .team-list .el-card:hover span {
  color: #fff;
}

.team .team-list .el-card:hover .introduce {
  height: auto;
  opacity: 1;
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 1000px) {
  .team .team-list {
    width: 90%;
  }
  .team .team-list .el-card p {
    font-size: 18px;
  }
  .team .team-list span {
    padding: 2px 0;
    color: #595959;
    font-size: 14px;
  }
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 414px) {
  .team .team-list {
    width: 100%;
    justify-content: center;
  }
  .team {
    padding-bottom: 20px;
  }
  .team .team-list.web {
    display: none;
  }
  .team .team-list.mobile {
    display: block;
  }
  .team .team-list.mobile .el-card {
    width: 80%;
    margin: auto;
  }

  .team .team-list > div {
    width: 100%;
    height: 215px;
    margin-bottom: 25px;
  }
  .team .team-list .mobileCard .el-card {
    color: #fff;
    overflow: visible;
    background: linear-gradient(45deg, #4886ff 0%, #509fff 100%);
  }
  .team .team-list .mobileCard .el-card .el-card__body {
    position: absolute;
    border-radius: 5px;
    width: 100%;
    background: linear-gradient(45deg, #4886ff 0%, #509fff 100%);
    z-index: 9;
  }
  .team .team-list .mobileCard .el-card .introduce {
    height: auto;
    opacity: 1;
    display: block;
  }
  .team .team-list .mobileCard .el-card p,
  .team .team-list .mobileCard .el-card span {
    color: #fff;
  }

  .team .team-list .mobileCardno .el-card {
    background: #fff;
    height: 215px;
    margin: auto;
  }
  .team .team-list .mobileCardno .el-card .el-card__body {
    padding: 20px 15px 20px 10px;
    background: #fff;
    width: 100%;
  }
  .team .team-list .mobileCardno .el-card .introduce {
    height: 1px;
    opacity: 0;

    display: none;
    transition: all 0.1s;
  }
  .team .team-list .mobileCardno .el-card p {
    color: #262626;
  }
  .team .team-list .mobileCardno .el-card span {
    color: #595959;
  }
}
</style>
