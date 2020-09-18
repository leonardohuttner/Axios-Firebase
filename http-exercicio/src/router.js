import Vue from 'vue'
import Router from 'vue-router'
import Cadastro from './components/Cadastro.vue'
import Profile from './components/Profile.vue'
import UsuarioEditar from './components/Roll.vue'
import Validacao from './components/Validacao.vue'
import SignUp from './components/SignUp.vue'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[{
        path: '/',
        component: Cadastro
    },{
        path: '/page/',
        component: Profile,
        props:true,
    },{
        path: '/edit',
        component: UsuarioEditar
    },{
        path: '/validacao',
        component: Validacao
    },{
        path: '/signup',
        component: SignUp
    }]
})