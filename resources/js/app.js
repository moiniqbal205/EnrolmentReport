/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

window.Vue = require('vue').default

import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

// Bootstrap and dependencies
import 'bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

// Plugins
import './plugins/globalComponents'
import 'material-icons/iconfont/material-icons.css'

// Pages
import App from './pages/App.vue'

// Routes
import router from './router'

// Axios
import Axios from 'axios'
Vue.prototype.$api = Axios

Vue.use(Vuesax, {
    theme: {
        colors: {
            // --- light-sea-green ---
            primary: '#20b2aa'
        }
    }
})

Vue.component('example-component', require('./components/ExampleComponent.vue').default)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    el: '#app',
    render: (h) => h(App)
})
