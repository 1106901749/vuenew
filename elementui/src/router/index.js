import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/HomeWelcome.vue'
import User from '../components/user/user.vue'

Vue.use(VueRouter)

const routes = [
	{path:'/',
	redirect:'login'},
	{ path:'/login',
	name:'login',
	component:Login},
	{ path:'/home',
	component:Home,
	redirect:'/HomeWelcome',
	children:[
		{path:'/HomeWelcome',
		component:Welcome},
		{path:'/user',component:User}
	]}
]

const router = new VueRouter({
  routes
})
//挂载路由导航守卫
router.beforeEach((to,from,next)=>{
	//to将要访问的路径
	//from代表从哪个路径跳转而来
	//next是一个函数，表示放行
	//next()放行 next('/login')强制跳转
	if(to.path ==='/login') return next();
	const tokenstr =window.sessionStorage.getItem('token');
	if(!tokenstr) return next('/login')
	next()
	
})
export default router
