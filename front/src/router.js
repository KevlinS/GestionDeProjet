import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateProjet from './views/CreateProjet.vue'
import ProjetDetail from './views/ProjetDetail.vue'
import About from './views/About.vue'
import ProjetsListing from './views/ProjetsListing.vue'
import ProjetModifier from './views/ProjetModifier.vue'
import ProjetSupprimer from './views/ProjetSupprimer.vue'
import ClientsListing from './views/ClientsListing.vue'
import ClientDetail from './views/ClientDetail.vue'
import ClientModifier from './views/ClientModifier.vue'
import ClientSupprimer from './views/ClientSupprimer.vue'
import CreateClient from './views/CreateClient.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },
    {
      path: '/create-projet',
      name: 'CreateProjet',
      component: CreateProjet
    },
    {
      path: '/projets-listing',
      name: 'ProjetsListing',
      component: ProjetsListing
    },
    {
      path: '/projet-detail/:id',
      name: 'ProjetDetail',
      component: ProjetDetail
    },
    {
      path: '/projet-modifier/:id',
      name: 'ProjetModifier',
      component: ProjetModifier
    },
    {
      path: '/projet-supprimer/:id',
      name: 'ProjetSupprimer',
      component: ProjetSupprimer
    },
    {
      path: '/clients-listing',
      name: 'ClienttsListing',
      component: ClientsListing
    },
    {
      path: '/client-detail/:id',
      name: 'ClienttDetail',
      component: ClientDetail
    },
    {
      path: '/client-modifier/:id',
      name: 'ClienttModifier',
      component: ClientModifier
    },
    {
      path: '/client-supprimer/:id',
      name: 'ClientSupprimer',
      component: ClientSupprimer
    },
    {
      path: '/create-client',
      name: 'CreateClient',
      component: CreateClient
    },
  ]
})
