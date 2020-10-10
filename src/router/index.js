import Vue from 'vue'
import VueRouter from 'vue-router'
const City = () => import("views/city/City")
const Address = () => import("views/address/Address")
const Home = () => import("views/home/Home")
const Main = () => import("views/main/Main")
const Search = () => import("views/search/Search")
const Discover = () => import("views/discover/Discover")
const Order = () => import("views/order/Order")
const Person = () => import("views/person/Person")
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
    path: "/main",
    component: Main,
    redirect: "/main/home",
    children: [
      { path: "/main/home", component: Home },
      { path: "/main/search", component: Search },
      { path: "/main/search/:keyword", component: Search, props: true },
      { path: "/main/discover", component: Discover },
      { path: "/main/order", component: Order },
      { path: "/main/person", component: Person }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
