import Vue from 'vue'
import VueRouter from 'vue-router'

// LOGIN ROUTE
import LoginView from '../views/LoginView.vue'
// TEACHER AND STUDENT HOME PAGE
import HomeView from '../views/HomeView.vue'
// STUDENT SUBJECT PAGE
import SubjectView from '../views/SubjectView.vue'
// ADMIN HOME PAGE
import AdminView from '../views/AdminView.vue'
// ADMIN ACTIONS
import ListarUsuario from '../views/adminActions/UserView.vue'
import ListarAcao from '../views/adminActions/ActionView.vue'
import ListarMatriculaTurma from '../views/adminActions/EnrolledView.vue'
import ListarTurma from '../views/adminActions/ClassView.vue'
import ListarDisciplina from '../views/adminActions/SubjectsView.vue'
import ListarPapel from '../views/adminActions/RoleView.vue'

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
    path: "/admin/usuarios",
    name: "usuario-listar",
    component: ListarUsuario
  },
  {
    path: "/admin/acoes",
    name: "acoes-listar",
    component: ListarAcao
  },
  {
    path: "/admin/matriculas-turma",
    name: "matriculas-turma-listar",
    component: ListarMatriculaTurma
  },
  {
    path: "/admin/turmas",
    name: "turma-listar",
    component: ListarTurma
  },
  {
    path: "/admin/materias",
    name: "disciplina-listar",
    component: ListarDisciplina
  },
  {
    path: "/admin/papeis",
    name: "papel-listar",
    component: ListarPapel
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
