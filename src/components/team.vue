
<template>
    <div class="team">
        <h1 class="text-center font-weight module-title">{{$t('m.team.title')}}</h1>
        <div class='team-list'>
            <el-card shadow="hover"  v-for="(item, key) in team" :key="key">
                <img :src='"static/image/"+item.img+".png"' class="image">
                <p>{{item.name}} </p>
                <span>{{item.job}}</span>
                <div class="introduce">{{item.introduce}}</div>
            </el-card>
            <!-- flex布局，两边对齐，只有五个所以加一个占位 -->
            <el-card style="opacity:0"></el-card>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      team: this.$t("m.team.team")
    };
  }
};
</script>

<style scope>
.team {
  background: #fff;
  padding-bottom: 30px;
}
.team .team-list {
  width: 900px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
.team .team-list .el-card  .el-card__body {
    padding: 20px 15px 20px  10px;
}
.team .team-list .el-card p {
  padding: 0 20px;
  line-height: 30px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  width: 100%;
  word-wrap: break-word;
  letter-spacing: 1px;
}
.team .team-list span {
  padding: 2px 0;
  color: #999;
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
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 414px) {
  .team .team-list {
    width: 100%;
    justify-content: center;
  }
  .team .team-list .el-card {
    width: 80%;
  }
}
</style>
