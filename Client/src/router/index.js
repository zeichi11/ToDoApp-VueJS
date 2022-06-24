import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'viewPath/Home.vue'
import About from 'viewPath/About.vue'
import TodoApp from 'viewPath/TodoApp.vue'
import Board from 'viewPath/Board.vue'

Vue.use(VueRouter)

const routes = [
  // config
  {
    name: 'board',
    path: '/',
    component: Board,
    children: [
      {
        path: 'id'
      }
    ]
  },
  // {
  //   name: 'index',
  //   path: '/',
  //   component: Home
  // },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'todos',
    path: '/todos',
    redirect: '/todos/all',
    component: TodoApp,
    children: [
      {
        path: ':id'
      }
    ]
  }
]

export default new VueRouter({ routes })
