
<template>
    <div class="home">
        <v-banner></v-banner>
        <v-about></v-about>
        <v-app></v-app>
        <project-show></project-show>
        <flow></flow>
        <process></process>
        <investors></investors>
        <v-team></v-team>
        <advi></advi>
        <news></news>
    </div>
</template>

<script>
import vHeader from '@/components/header.vue'
import vBanner from '@/components/banner.vue'
import vBottom from '@/components/bottom.vue'
import vAbout from '@/components/about.vue'
import vApp from '@/components/app.vue'
import vTeam from '@/components/team.vue'
import projectShow from '@/components/projectShow.vue'
import process from '@/components/process.vue'
import news from '@/components/news.vue'
import flow from '@/components/flow.vue'
import investors from '@/components/investors.vue'
import advi from '@/components/advi.vue'

export default {
    components: {
        vHeader,vBottom,projectShow,news,vBanner,vAbout,vApp,vTeam,process,flow,investors,advi
    }
}
</script>
