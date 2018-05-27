<template>
    <div class="header-vue">
        <div class="content">
            <div class="logo-box">
                <img src="static/image/logo.png" class="web-logo">
                <img src="static/image/logo2.png" alt="" class="mobile-logo">
            </div>
            <div class="check-box">
                <ul>
                    <li class="a">{{$t('m.header.home')}}</li>
                    <li  class="a"><a href="http://">{{$t('m.header.whitePaper')}}</a></li>
                    <li class="a"><a href="http://">{{$t('m.header.lendChain')}}</a></li>
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
        "ch": "简体中文",
        "en": "English"
      }
    };
  },
  computed: {
    lang() {
      return this.$i18n.locale || "en";
    },
    displayedLang() {
      return this.langs[this.lang] || "English";
    },
    langConfig() {
      return compoLang.filter(config => config.lang === this.lang)[0]["header"];
    }
  },
  methods: {
    switchLang(targetLang) {
      if (this.lang === targetLang) return;
      localStorage.setItem("ELEMENT_LANGUAGE", targetLang);
      this.$i18n.locale = targetLang;
    },
    handleLangDropdownToggle(visible) {
      this.langDropdownVisible = visible;
    }
  },
  created() {}
};
</script>
<style scope>
.el-dropdown-menu {
  background: #509fff;
  border: 0;
  box-shadow: none;
  color: #fff;
}
.el-popper[x-placement^="bottom"] .popper__arrow,
.el-popper[x-placement^="bottom"] .popper__arrow::after {
  display: none;
}
.el-dropdown-menu__item {
  color: #fff;
}
.header-vue {
  height: 50px;
  width: 100%;
  background: #fff;
}
.logo-box .mobile-logo {
  display: none;
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
.header-vue .content .logo-box > img {
  height: 33px;
  cursor: pointer;
}
.header-vue .content .check-box li {
  display: inline;
  cursor: pointer;
  margin-right: 30px;
  font-size: 12px;
}

.header-vue .content .check-box li.a {
     position: relative;
}

.header-vue .content .check-box li.a >a {
     color: #333;
}

.header-vue .content .check-box li .el-dropdown {
  padding: 2px 10px;
  border: 1px solid #999;
  border-radius: 20px;
  font-size: 12px;
}
.header-vue .content .check-box li i {
  transition: 0.2s;
}
.header-vue .content .check-box li .el-dropdown.is-active i {
  -ms-transform: rotate(180deg) translateY(3px);
  transform: rotate(180deg) translateY(3px);
}
.header-vue .content .check-box li:hover,
.header-vue .content .check-box li:hover span,
.header-vue .content .check-box li > .el-dropdown.is-active i,
.header-vue .content .check-box li > .el-dropdown:hover,
.header-vue .content .check-box li.a:hover >a{
  color: #409eff;
}


.header-vue .content .check-box li.a:before {
  left: 0;
  bottom: 0;
  width: 100%;
     bottom: -3px;
  height: 2px;
  background: #409eff;
  transform: scaleX(0);
  content: '';
  position: absolute;
  transition: transform .5s ease;

}
.header-vue .content .check-box li.a:hover:before {
  transform: scaleX(1);
}



.header-vue .el-dropdown {
  color: #333;
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 768px) {
  .header-vue .content {
    width: 100%;
    padding: 10px;
  }
  .logo-box .mobile-logo {
    display: block;
  }
  .logo-box .web-logo {
    display: none;
  }
  .header-vue .content .check-box li {
    font-size: 10px;
    margin-right: 6px;
  }
  .header-vue .content .check-box li .el-dropdown {
    padding: 2px 5px;
    border: 1px solid #ccc;
    font-size: 10px;
  }
}
</style>
