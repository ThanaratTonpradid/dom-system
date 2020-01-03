import { RouteConfig } from 'vue-router';

export default [
  {
    path: '/',
    redirect: {
      name: 'home',
    },
  },
  {
    path: '/',
    component: () => import('../layouts/AppLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
      },
    ],
  },
] as RouteConfig[];
