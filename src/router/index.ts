import { createWebHashHistory, createRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import articleDetailRoutes from './articleDetailRoutes';

const routes: RouteRecordRaw[] = [
  {
    name: 'index',
    component: () => import('@/pages/index/index.vue'),
    path: '/',
  },
  {
    component: () => import('@/pages/gallery/index.vue'),
    name: 'gallery',
    path: '/gallery',
  },
  {
    component: () => import('@/pages/article/index.vue'),
    name: 'article',
    path: '/article',
  },
  {
    children: articleDetailRoutes,
    name: 'detail',
    path: '/detail',
  },
  {
    component: () => import('@/pages/about/index.vue'),
    name: 'about',
    path: '/about',
  },
  {
    component: () => import('@/pages/404/index.vue'),
    path: '/:pathMatch(.*)*',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
