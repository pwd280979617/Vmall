import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

const home = () => import('../views/home/Home')
const category = () => import('../views/category/Category')
const cart = () => import('../views/cart/Cart')
const profile = () => import('../views/profile/Profile')
const detail = () => import('../views/detail/Detail')

const router = new VueRouter({
    routes:[ //路由匹配规则
        { path: '/', redirect: '/home'}, //redirect重定向
        { path: '/home', component: home},
        { path: '/category', component: category},
        { path: '/cart', component: cart},
        { path: '/profile', component: profile},
        { path: '/detail/:iid', component: detail}
    ],
    mode: 'history'
})

export default router