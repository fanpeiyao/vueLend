
<template>
    <div class="team advi">
        <h1 class="text-center font-weight module-title">{{$t('m.advi.title')}}</h1>
        <div class='team-list web'>
            <el-card shadow="hover"  v-for="(item, key) in team" :key="key">
                <img :src='"static/image/"+item.img+".png"' class="image">
                <p>{{item.name}} </p>
                <span>{{item.job}}</span>
                <div class="introduce"  >
                    <div v-for="(p, key) in item.introduce" :key="key">{{p}}</div>
                </div>
            </el-card>
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
      team: this.$t("m.advi.team")
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
.advi {
  background: #f2f2f2;
  transition: all ease-out 0.3s;
}
</style>
