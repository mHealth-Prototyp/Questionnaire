import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
        meta: {requiresAuth: true}
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/LoginPage.vue'),
        meta: {requiresAuth: false}
      },
      {
        path: 'documentation',
        name: 'documentation',
        component: () => import('src/pages/DocumentationPage.vue'),
        meta: {requiresAuth: false}
      },
      {
        path: 'organ-donation',
        name: 'organ-donation',
        component: () => import('pages/OrganDonationPage.vue'),
        meta: {requiresAuth: true}
      },
      {
        path: 'advance-directives',
        name: 'advance-directives',
        component: () => import('pages/AdvanceDirectivesPage.vue'),
        meta: {requiresAuth: true}
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('pages/AboutPage.vue'),
        meta: {requiresAuth: false}
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
