import Vue from 'vue'
import Router from 'vue-router'
import Customers from '../components/Customers'
import Counter from '../components/Counter'
import About from '../components/About'
import Add from '../components/Add'
import Edit from '../components/Edit'
import CustomerDetails from '../components/CustomerDetails'
import Logos from '@/components/Logos'




Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/counter', name: 'Counter', component: Counter},
    {path: '/', component: Customers},
    {path: '/about', component: About},
    {path: '/add', component: Add},
    {path: '/customer/:id', component: CustomerDetails},
    {path: '/edit/:id', component: Edit},
    {path: '/logos', component: Logos},
  ]
})