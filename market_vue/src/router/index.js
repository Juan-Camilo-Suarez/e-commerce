import {createRouter, createWebHistory} from 'vue-router'
import store from "@/store";


import HomeView from '../views/HomeView.vue'
import Product from "../views/Product.vue"
import Category from "../views/Category.vue"
import Search from "@/views/Search.vue";
import Cart from "@/views/Cart.vue";
import SingUp from "@/views/SingUp.vue";
import Login from "@/views/Login.vue";
import MyAccount from "@/views/MyAccount.vue";
import Checkout from "@/views/Checkout.vue";
import Success from "@/views/Success.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/sign-up',
        name: 'SingUp',
        component: SingUp
    },
    {
        path: '/log-in',
        name: 'Login',
        component: Login
    },
    {
        path: '/my-account',
        name: 'MyAccount',
        component: MyAccount,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/:category_slug/:product_slug',
        name: 'Product',
        component: Product
    },
    {
        path: '/:category_slug/:product_slug',
        name: 'Product',
        component: Product
    },
    {
        path: '/:category_slug/',
        name: 'Category',
        component: Category,
    },
    {
        path: '/search/',
        name: 'Search',
        component: Search,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/cart/checkout',
        name: 'Checkout',
        component: Checkout,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/cart/success',
        name: 'Success',
        component: Success,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
        next({name: 'LogIn', query: {to: to.path}});
    } else {
        next()
    }
})

export default router
