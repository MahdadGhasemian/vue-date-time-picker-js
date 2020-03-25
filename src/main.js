import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueHighlightJS from 'vue-highlight.js'
import { routes } from './routes'

import vIcon from 'vue-icon'
Vue.use(vIcon, 'v-icon')

/*
 * Use Vue Highlight.js
 */
Vue.use(VueHighlightJS)
import 'highlight.js/styles/atom-one-dark-reasonable.css'

/**
 * Define some global variables
 */
Vue.prototype.$prefix = 'vdp-' //shorted to reduce the css size

const router = new VueRouter({
  routes: routes,
  mode: 'hash'
})
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.pageTitle) {
    document.title = to.meta.pageTitle + ' | ' + ' vue datetime picker'
  }
  next()
})
Vue.use(VueRouter)

/**
 * Import datepicker and define component
 */
import VueDatetimePickerJs from './picker/VueDatetimePickerJs.vue'
Vue.component('date-picker', VueDatetimePickerJs)

import Card from './components/card.vue'
Vue.component('card', Card)

Vue.config.ignoredElements = ['date-picker']

import './assets/scss/app.scss'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
