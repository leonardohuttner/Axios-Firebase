import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import UsuarioEditar from './components/Roll.vue'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[{
        path: '/',
        component: Login
    },{
        path: '/page/',
        component: Profile,
        props:true,
    },{
        path: '/edit',
        component: UsuarioEditar
    }]
})