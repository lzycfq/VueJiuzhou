import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import Home from '@/views/home'
import Activity from '@/views/activity'
import SevenStar from '@/views/seven-star'
import Special from '@/views/special'
import Admission from '@/views/admission'
import Information from '@/views/information'
import RedLines from '@/views/red-lines'
import Wechat from '@/views/wechat'
import Share from '@/views/share'
import Resources from '@/views/resources'
import Express from '@/views/express'
import Introduce from '@/views/introduce'
import JoinIn from '@/views/join-in'
import Contact from '@/views/contact'
import NotFoundComponent from '@/views/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      // redirect: '/home',
			children: [
        {
					path: '',
					component: Home
				},
				{
					path: 'home',
					component: Home
        },
        {
					path: 'activity',
					component: Activity
				},
        {
					path: 'seven-star',
					component: SevenStar
				},
        {
					path: 'order',
					component: SevenStar
				},
        {
					path: 'special',
					component: Special
				},
        {
					path: 'admission',
					component: Admission
				},
        {
					path: 'information',
					component: Information
				},
        {
					path: 'red-lines',
					component: RedLines
				},
        {
					path: 'wechat',
					component: Wechat
				},
        {
					path: 'share',
					component: Share
				},
        {
					path: 'resources',
					component: Resources
				},
        {
					path: 'express',
					component: Express
				},
        {
					path: 'introduce',
					component: Introduce
				},
        {
					path: 'join-in',
					component: JoinIn
				},
        {
					path: 'contact',
					component: Contact
				}
      ]
    },
    {
			path: '*',
      component: NotFoundComponent,
      hidden: true
    }
  ]
})
