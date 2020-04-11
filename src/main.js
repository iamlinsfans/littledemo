import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
import router from './router.js'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
// 按需导入mint-ui
import { Button } from 'mint-ui'
import './lib/mui/css/mui.min.css'
Vue.component('mybtn', Button)
Vue.use(VueRouter);
// Vue.use(MintUI);

var vm = new Vue({
    el:'#app',
    render: c=>c(app),
    router
})