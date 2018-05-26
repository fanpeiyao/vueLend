
<template>
    <div class="team advi">
        <h1 class="text-center font-weight module-title">{{$t('m.advi.title')}}</h1>
        <div class='team-list'>
            <el-card shadow="hover"  v-for="(item, key) in team" :key="key">
                <img :src='"static/image/"+item.img+".png"' class="image">
                <p>{{item.name}} </p>
                <span>{{item.job}}</span>
                <div class="introduce">{{item.introduce}}</div>
            </el-card>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            team:this.$t('m.advi.team')
        }
    },
}
</script>

<style scope>
.advi{
      background: #f2f2f2;
}
</style>
