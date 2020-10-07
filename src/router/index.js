import Vue from 'vue'
import VueRouter from 'vue-router'
const City = () => import("views/city/City")
const Address = () => import("views/address/Address")
const Home = () => import("views/home/Home")
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: City
  },
  {
    path: "/address",
    component: Address
  },
  {
    path: "/Home",
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
