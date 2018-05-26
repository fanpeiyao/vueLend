
<template>
    <div class="home">
        <!-- <process></process>
        <v-banner></v-banner>

        <v-about></v-about>
        <v-app></v-app>
        <v-team></v-team>
        <project-show></project-show>

        <news></news> -->
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

import news from '@/components/news.vue'

export default {
    components: {
        vHeader,
        vBottom,
        projectShow,
        news,
        vBanner,vAbout,vApp,vTeam,process

    },
    data() {
        return {

        }
    },
}
</script>

<style>

</style>
