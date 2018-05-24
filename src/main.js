// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import i18n from '@/assets/i18n/i18n';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css';




import messages from './assets/i18n/lang'

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    i18n,
    components: { App },
    template: '<App/>'
})
