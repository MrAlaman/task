import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import edit from './edit.vue'
import index from './index.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

var router = new VueRouter({
	routes: [
		{ 
		path: '/edit', 
		name: 'edit',
		component: edit 
		},
		{
		path: '/',
		name: 'main',
		component: index
		}
	]
})

new Vue({
  el: "#app",
  render: h1 => h1(App),
  router
})
