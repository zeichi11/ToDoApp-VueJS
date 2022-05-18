import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'viewPath/Home.vue';
import About from 'viewPath/About.vue';
import TodoApp from 'viewPath/TodoApp.vue';

Vue.use(VueRouter);

const routes = [
	// config
	{
		path: "/",
		component: Home,
	},
	{
		path: "/about",
		component: About,
	},
	{
		path: "/todos",
		component: TodoApp,
	}
];

export default new VueRouter({ routes });