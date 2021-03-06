import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/test/test'
import MyHome from '@/views/myhome/MyHome'
import MyCatalog from "@/views/mycatalog/MyCatalog"
import MyMain from "@/views/mymain/MyMain"
import about from "@/views/mymain/about"
import detail from "@/views/mymain/content"
import timeline from "@/views/mymain/timeline"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MyHome',
            component: MyHome,
        },
        {
            path: '/main',
            name: 'MyMain',
            component: MyMain,
            redirect:"/main/catalog/",
            children:[
                {
                    path: "/main/catalog",
                    component: MyCatalog,
                },
                {
                    path: "/main/timeline",
                    component: timeline,
                },
                {
                    path: "/main/about",
                    component: about,
                },
            ]
        },
        {
            path: '/main/detail',
            name: 'Detail',
            component: detail,
        },
        {
            path: '/test',
            name: 'Test',
            component: Test,
        },
    ],
    scrollBehavior (to, from, savedPosition) { // 解决vue页面之间跳转，页面不是在顶部的问题
        return { x: 0, y: 0 }
    }
})



