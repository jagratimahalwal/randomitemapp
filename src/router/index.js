import Vue from 'vue'
import Router from 'vue-router'


// Page content
import Categories from '@/components/Categories';
import Home from '@/components/Home';
import RandomItem from '@/components/RandomItem';
import Description from '@/components/Description';
import CategoryWise from '@/components/CategoryWise';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/Home',
      name: 'home',
      component: Home
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
    }
  ]
})
