import account from './main/account.vue'
import goodlist from './main/goodlist.vue'
import login from './main/login.vue'
import register from './main/register.vue'
import VueRouter from 'vue-router'

var router = new VueRouter ({
    routes:[
        // acount goodlist
        { path:'/account', component:account ,children:[
            {path: 'login', component:login},
            {path: 'register', component:register}
        ]},
        { path:'/goodlist', component:goodlist }
    ]
})

export default router