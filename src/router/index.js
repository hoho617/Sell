import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/goods_list'
import Title from '@/views/title';
import Image from '@/views/image'

import  Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/hello'
    },
    {
      path:'/hello',
      component:HelloWorld
    },
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList,
      children:[ //定义子路由开始
        {
          path:'title', //不能以/开头，否则会匹配到根目录下
          name:'Title',
          component:Title
        },
        {
          path:'image', //不能以/开头，否则会匹配到根目录下
          name:'Image',
          component:Image
        }
      ]
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    }
  ]
})
