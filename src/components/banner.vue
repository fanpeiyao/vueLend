<template>
    <div class="bottom-vue">
        <h1 class=' text-center text-white'>Join Us</h1>
        <ul>
            <li  v-for="(item, key) in bottomList" :key="key">
                <a :href="item.path" target="blank">
                    <i class="iconfont" :class="item.icon"></i>
                </a>
            </li>
        </ul>
        <div class="copyRight text-center text-white">
            Copyright © 2018 Lend Chain LTD.All Rights Reserved
        </div>
    </div>
</template>

<script>
export default {
    name: 'bottom',
    data() {
        return {
            bottomList: [
            ],

        };
    },
    computed: {


    },
    methods: {

    },
    created() {

    }
}
</script>

<style scope>


/*屏幕宽度小于768px时*/
@media screen and (max-width: 768px) {

}
</style>
