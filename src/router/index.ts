import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/layout' },
  { name: 'layout', path: '/layout', component: () => import('@/views/layout/index.vue') }
  // { name: 'article-edit', path: '/article-edit/:type/:id', props: true, component: () => import('@/views/article-edit/index.vue') }
];

export const routesMenu: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    children: [{ name: 'vis-server', path: '/vis-server', component: () => import('@/views/vis-server/index.vue') }]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes.concat(routesMenu)
});

export default router;
