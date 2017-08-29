import Vue from 'vue'
import Router from 'vue-router'
import Flexbox from '@/components/Flexbox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Flexbox',
      component: Flexbox
    }
  ]
})
