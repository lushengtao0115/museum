import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
import Homemain from '../views/Homemain.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	redirect: '/homemain',
	children: [
		{
			path: '/Homemain',
			name: 'Homemain',
			component: Homemain
		}
	]
  }
]

const router = new VueRouter({
  routes
})

export default router
