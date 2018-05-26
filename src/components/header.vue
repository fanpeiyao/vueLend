<template>
    <div class="header-vue">
        <div class="content">
            <div class="logo-box">
                <img src="static/image/logo.png">
            </div>
            <div class="check-box">
                <ul>
                    <li>{{$t('m.header.home')}}</li>
                    <li>{{$t('m.header.whitePaper')}}</li>
                    <li>{{$t('m.header.lendChain')}}</li>
                    <li>
                        <el-dropdown  trigger="click"    :class="{ 'is-active': langDropdownVisible  }">
                            <span class="el-dropdown-link">
                                {{displayedLang }}
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown"  @input="handleLangDropdownToggle">
                                <el-dropdown-item v-for="(value, key) in langs"
                                :key="key" @click.native="switchLang(key)">
                                {{ value }}
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            langDropdownVisible: true,
            langs: {
                'zh-CN': '简体中文',
                'en-US': 'English'
            }
        };
    },
    computed: {
        lang() {
            return this.$i18n.locale || 'en-US';
        },
        displayedLang() {
            return this.langs[this.lang] || 'English';
        },
        langConfig() {
            return compoLang.filter(config => config.lang === this.lang)[0]['header'];
        },

    },
    methods: {
        switchLang(targetLang) {
            if (this.lang === targetLang) return;
            localStorage.setItem('ELEMENT_LANGUAGE', targetLang);
            this.$i18n.locale = targetLang;
        },
        handleLangDropdownToggle(visible) {
            this.langDropdownVisible = visible;
        }
    },
    created() {

    }
  }
</script>
<style scope>
.header-vue {
    height: 80px;
    width: 100%;
    background: #fff;
}
.header-vue .content {
    height: 100%;
    width: 80%;
    background: #fff;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header-vue .content .logo-box>img{
    height: 50px;
    cursor: pointer;
}
.header-vue .content .check-box li{
    display: inline;
    cursor: pointer;
    margin-right: 30px;
}
.header-vue .content .check-box li .el-dropdown{
    padding: 2px 10px;
    border: 1px solid #999;
    border-radius: 20px;
}
.header-vue .content .check-box li  i{
     transition: .2s;
}
.header-vue .content .check-box li .el-dropdown.is-active i {
    -ms-transform: rotate(180deg) translateY(3px);
    transform: rotate(180deg) translateY(3px);
}
.header-vue .content .check-box li:hover,.header-vue .content .check-box li:hover span,.header-vue .content .check-box li>.el-dropdown.is-active i, .header-vue .content .check-box li>.el-dropdown:hover  {
    color: #409eff;
}
.header-vue .el-dropdown {
    color: #333;
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 768px) {

}
</style>
