import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SubjectView from '../views/SubjectView.vue'
import AdminView from '../views/AdminView.vue'
import ListarUsuario from '../views/usuario/ListarUsuario.vue'
import EditarUsuario from '../components/EditarUsuario.vue'
import CriarUsuario from '../components/CriarUsuario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/subject',
    name: 'subject',
    component: SubjectView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
  },
  {
    path: "/admin/listar",
    name: "usuario-listar",
    component: ListarUsuario
  },
  {
    path: "/admin/listar/editar",
    name: "usuario-editar",
    component: EditarUsuario
  },
  {
    path: "/admin/listar/criar",
    name: "usuario-criar",
    component: CriarUsuario
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
