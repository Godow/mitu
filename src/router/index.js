import Vue from 'vue'
import Router from 'vue-router'
import vipvideo from '../components/vipvideo'
import movie from '../components/movie'
import music from '../components/music'
import youhui from '../components/youhuiquan'
import tiku from '../components/tiku'
import others from '../components/others'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: movie
    },
    {
      path: '/youhui',
      name: 'youhui',
      component: youhui
    },
    {
      path: '/vip',
      name: 'vipvideo',
      component: vipvideo
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/tiku',
      name: 'tiku',
      component: tiku
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },

    {
      path: '/others',
      name: 'others',
      component: others
    },
  
  ]
})
