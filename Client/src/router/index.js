import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'viewPath/Home'
import About from 'viewPath/About'
import TodoApp from 'viewPath/TodoApp'
import Board from 'viewPath/Board'
import SignIn from 'viewPath/SignIn'

Vue.use(VueRouter)

const routes = [
  // config
  {
    name: 'signin',
    path: '/',
    component: SignIn
  },
  {
    name: 'board',
    path: '/board',
    component: Board,
    children: [
      {
        path: 'id'
      }
    ]
  },
  {
    name: 'home',
    path: '/home',
    component: Home
  },
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
