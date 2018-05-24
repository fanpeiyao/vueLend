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
                {path:'',icon:'icon-msnui-computer'},
                {path:'https://weibo.com',icon:'icon-weibo1'},
                {path:'',icon:'icon-wechat'},
                {path:'',icon:'icon-facebook'},
                {path:'',icon:'icon-twitter'},
                {path:'',icon:'icon-emizhifeiji'},
                {path:'',icon:'icon-linkedin'},

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
    .bottom-vue{
        background: #12161f;
    }
    .bottom-vue h1{
        font-size: 30px;
        padding: 50px;
        font-weight: normal;
    }
    .bottom-vue  .copyRight{
        background: #161a24;
        height:40px;
        line-height:40px
    }
    .bottom-vue  ul{
        margin-bottom: 50px;
        display: flex;
        justify-content: center;
    }
    .bottom-vue  ul li{
        color:  #12161F;
        margin-right: 40px;
        height: 40px;
        line-height:40px;
        text-align: center;
        width: 40px;
        border-radius: 50%;
        background: linear-gradient(45deg, #4E9AFF 0%,#4989FF 100%);
    }
    .bottom-vue  ul li i{
        font-size: 20px;
        color: #333;
    }

/*屏幕宽度小于768px时*/
@media screen and (max-width: 768px) {

}
</style>
