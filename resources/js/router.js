import Vue from 'vue'
import VueRouter from 'vue-router'

// Explore
import Index from './layouts/Index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        }
    ]
})

export default router
