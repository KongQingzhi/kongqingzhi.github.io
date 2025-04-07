import { createWebHistory, createRouter } from 'vue-router';
const routes = [
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
  history: createWebHistory('/dist/'),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
