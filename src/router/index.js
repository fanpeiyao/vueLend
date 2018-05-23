import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from '@/views/home'

let routes = [
    {
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '*',
        redirect:'/'
    }
]

var router = new VueRouter({
        routes
})
// js添加动态路由
/* router.addRoutes([
    {
        path: '/test-add',
        component: s3.httpVueLoader ("http://localhost:8084/static/a.vue")
    }
])
 */

export default router
