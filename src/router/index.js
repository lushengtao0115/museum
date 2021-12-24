import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
import Homemain from '../views/Homemain.vue'
import Homemain1 from '../views/Homemain1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	redirect: '/Homemain',
	children: [
		{
			path: '/Homemain',
			name: 'Homemain',
			component: Homemain
		},
		{
			path: '/Homemain1',
			name: 'Homemain1',
			component: Homemain1
		}
	]
  }
]

const router = new VueRouter({
  routes
})

export default router
