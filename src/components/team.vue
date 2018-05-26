
<template>
    <div class="team">
        <h1 class="text-center font-weight module-title">{{$t('m.team.title')}}</h1>
        <div class='team-list'>
            <el-card shadow="hover"  >
                <img src="static/image/samuel.png" class="image">
                <p>{{$t('m.team.ayi.name')}} </p>
                <span>{{$t('m.team.ayi.job')}}</span>
                <div class="introduce">{{$t('m.team.zhu.introduce')}}</div>
            </el-card>

            <el-card shadow="hover"  >
                <img src="static/image/samuel.png" class="image">
                <p>{{$t('m.team.samuel.name')}} </p>
                <span>{{$t('m.team.samuel.job')}}</span>
                <div class="introduce">{{$t('m.team.zhu.introduce')}}</div>
            </el-card>

            <el-card shadow="hover"  >
                <img src="static/image/samuel.png" class="image">
                <p>{{$t('m.team.zhu.name')}} </p>
                <span>{{$t('m.team.zhu.job')}}</span>
                <div class="introduce">{{$t('m.team.zhu.introduce')}}</div>
            </el-card>

            <el-card shadow="hover"  >
                <img src="static/image/samuel.png" class="image">
                <p>{{$t('m.team.ayi.name')}} </p>
                <span>{{$t('m.team.ayi.job')}}</span>
                <div class="introduce">{{$t('m.team.zhu.introduce')}}</div>
            </el-card>

            <el-card shadow="hover"  >
                <img src="static/image/samuel.png" class="image">
                <p>{{$t('m.team.samuel.name')}} </p>
                <span>{{$t('m.team.samuel.job')}}</span>
                <div class="introduce">{{$t('m.team.zhu.introduce')}}</div>
            </el-card>

            <el-card shadow="hover"  >
                <img src="static/image/samuel.png" class="image">
                <p>{{$t('m.team.zhu.name')}} </p>
                <span>{{$t('m.team.zhu.job')}}</span>
                <div class="introduce">{{$t('m.team.zhu.introduce')}}</div>
            </el-card>

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<style scope>
.team .team-list {
    width: 900px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.team .team-list  .el-card{
    width: 30%;
    text-align: center;
    cursor: pointer;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 25px;
    /* height: 217px; */
    position: relative;
    /* overflow: hidden; */
}
.team .team-list  .el-card .introduce{
    height: 1px;width: 100%;
    opacity: 0;
    transition: height 0.5s ease-in-out;
    padding: 10px 10px 0 15px;
    text-align: left;
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 25px;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;
}
.team .team-list .el-card img{
    width: 100%;
    width: 100px;
    margin-bottom: 10px;
    border-radius: 50%;
}
.team .team-list .el-card p{
    padding: 0 20px;
    line-height: 30px;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    width: 100%;
    word-wrap: break-word;
    letter-spacing: 1px;
}
.team .team-list span{
    padding:2px 0;
    color:#999;
     display: block;
}


.team .team-list  .el-card:hover{
    color:#fff;
    background: linear-gradient(45deg,  #4886ff 0%,#509fff 100%);
}
.team .team-list  .el-card:hover .el-card__body {
    position: absolute;
    border-radius: 5px;
    background: linear-gradient(45deg,  #4886ff 0%,#509fff 100%);
    z-index: 9;
}

.team .team-list .el-card:hover p{
    color:#fff;
}
.team .team-list .el-card:hover span{
    color:#fff;
}

.team .team-list  .el-card:hover .introduce{
    height: auto;
    opacity: 1;

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
