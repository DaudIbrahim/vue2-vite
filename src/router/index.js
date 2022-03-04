/** https://v3.router.vuejs.org/guide/#javascript */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 1. Define route components. (Imported from other files)
import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/components/Test.vue'
import Login from '@/components/Login.vue'

// 2. Define some routes (Each route should map to a component.)
const routes = [
  { path: '/', component: HelloWorld },
  { path: '/test', component: Test },
  { path: '/login', component: Login },
  { path: '*', component: HelloWorld}
]

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
  mode: 'history',
  routes
})

/**
 * 4. Setup Navigation Guards
 * Due - Work In Progress
 */

export default router
