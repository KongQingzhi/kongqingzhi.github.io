import { defineConfig } from 'vitepress';
import sidebar from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '孔庆志的博客',
  description: '孔庆志的博客',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 站点标题和图标
    siteTitle: '孔庆志的博客',
    logo: '/logo.png',
    // 导航链接
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        activeMatch: '/front-end/',
        items: [
          { text: 'HTML & CSS', link: '/front-end/html&css/' },
          { text: 'JS & TS', link: '/front-end/js&ts/' },
          { text: 'Vue', link: '/front-end/vue/' },
          { text: '微信小程序', link: '/front-end/wechat-miniprogram/' },
          { text: '工具', link: '/front-end/tools/' },
          { text: '实践', link: '/front-end/practice/' },
        ],
      },
      { text: '组件', link: '/components/', activeMatch: '/components/' },
      { text: '摄影', link: '/photography/', activeMatch: '/photography/' },
      { text: '关于', link: '/about/', activeMatch: '/about/' },
    ],
    // 侧边栏
    sidebar,
    // 社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/KongQingzhi' }],

    // 本地搜索
    search: {
      provider: 'local',
    },
    // 右侧目录
    outline: {
      level: 'deep',
      label: '目录',
    },
    // 编辑此页
    editLink: {
      pattern:
        'https://github.com/KongQingzhi/kongqingzhi.github.io/tree/master/src/:path',
      text: '在 GitHub 上编辑此页',
    },
    // 更新时间
    lastUpdated: {
      text: '上次更新',
    },
    // 分页器
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    // 主题切换 label
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '浅色模式',
    // 返回顶部
    returnToTopLabel: '返回顶部',
  },
  // 指定根目录
  srcDir: 'src/pages',
  // 不含有.html的路由
  cleanUrls: true,
  // 路由重写
  rewrites: {
    'about/index.md': 'about/a.md',
  },
  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },

  vite: {
    // Vite 配置选项
  },
});
