import Header from './components/includes/Header.vue'
import Sidebar from './components/includes/Sidebar.vue'
import InstallDocs from './components/InstallDocs.vue'
import SimpleDate from './components/examples/SimpleDate.vue'
import SimpleFormat from './components/examples/SimpleFormat.vue'
import PropsDocs from './components/PropsDocs.vue'
import EventsDocs from './components/EventsDocs.vue'
import All from './components/All.vue'

const cmp = component => ({
  default: component,
  header: Header,
  sidebar: Sidebar
})

export const routes = [
  {
    path: '/',
    name: 'home',
    meta: { pageTitle: 'Home' },
    components: cmp(SimpleDate)
  },
  {
    path: '/installation',
    name: 'installation',
    meta: { pageTitle: 'Installation' },
    components: cmp(InstallDocs)
  },
  {
    path: '/formatting',
    name: 'formatting',
    meta: { pageTitle: 'Formatting' },
    components: cmp(SimpleFormat)
  },
  {
    path: '/all',
    name: 'all-example',
    meta: { pageTitle: 'All Example' },
    components: cmp(All)
  },
  {
    path: '/events',
    name: 'events',
    meta: { pageTitle: 'Events' },
    components: cmp(EventsDocs)
  },
  {
    path: '/props',
    name: 'props',
    meta: { pageTitle: 'Props' },
    components: cmp(PropsDocs)
  },
  {
    path: '*',
    name: '404',
    meta: { pageTitle: 'Home', showInMenu: false },
    components: cmp(SimpleDate)
  }
]
