export default [
  {
    component: () => import('@/pages/front-end/front-end-engineering/index.md'),
    meta: { title: '前端工程化' },
    name: 'frontEndEngineering',
    path: 'front-end-engineering',
  },
  {
    component: () =>
      import('@/pages/front-end/eslint-not-recognize-global-types/index.md'),
    meta: { title: '解决 eslint 无法识别全局类型的问题' },
    name: 'eslintNotRecognizeGlobalTypes',
    path: 'eslint-not-recognize-global-types',
  },
  {
    component: () =>
      import('@/pages/front-end/wechat-miniprogram/subscribe-message/index.md'),
    meta: { title: '微信小程序订阅消息' },
    name: 'subscribeMessage',
    path: 'subscribe-message',
  },
  {
    component: () => import('@/pages/front-end/vue-use-alibaba-icon/index.md'),
    meta: { title: '如何在 vue 项目中使用阿里巴巴图标库并封装成组件' },
    name: 'vueUseAlibabaIcon',
    path: 'vue-use-alibaba-icon',
  },
  {
    component: () =>
      import('@/pages/front-end/vitepress-integrate-tailwind-css/index.md'),
    meta: { title: 'VitePress 中集成 Tailwind CSS' },
    name: 'vitepressIntegrateTailwindCss',
    path: 'vitepress-integrate-tailwind-css',
  },
  {
    component: () =>
      import('@/pages/front-end/html&css/three-column-layout/index.md'),
    meta: { title: 'CSS 三栏布局完全指南' },
    name: 'threeColumnLayout',
    path: 'three-column-layout',
  },
  {
    component: () => import('@/pages/front-end/html&css/html-base/index.md'),
    meta: { title: 'HTML 基础' },
    name: 'htmlBase',
    path: 'html-base',
  },
];
