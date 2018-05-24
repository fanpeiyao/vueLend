
<template>
    <div class="home">
        <p>{{$t('m.hello')}}</p>



        <project-show></project-show>
        <news></news>
    </div>
</template>

<script>


import vHeader from '@/components/header.vue'
import vBottom from '@/components/bottom.vue'
import projectShow from '@/components/projectShow.vue'

import news from '@/components/news.vue'

export default {
    components: {
        vHeader,
        vBottom,
        projectShow,
        news

    },
    data() {
        return {

        }
    },
}
</script>

<style>

</style>
