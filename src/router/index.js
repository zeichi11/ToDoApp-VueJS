import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'viewPath/Home.vue';
import About from 'viewPath/About.vue';
import TodoApp from 'viewPath/TodoApp.vue';

Vue.use(VueRouter);

const routes = [
	// config
	{
		name: 'index',
    path: '/',
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
    component: TodoApp,
    children: [
      {
        path: ':id'
      }
    ]
	}
];

export default new VueRouter({ routes });