import Vue from 'vue'
import Router from 'vue-router'
import Categories from '@/components/Categories'
import Home from '@/components/Home'
import RandomItem from '@/components/RandomItem'
import Description from '@/components/Description'
import CategoryWise from '@/components/CategoryWise'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/Description',
      name: 'Description',
      component: Description
    },
    {
      path: '/RandomItem',
      name: 'randomize',
      component: RandomItem
    },
    {
      path: '/CategoryWise',
      name: 'CategoryWise',
      component: CategoryWise
    },
    {
      path: '/*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
