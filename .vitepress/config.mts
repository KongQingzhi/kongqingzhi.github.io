import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '孔庆志的博客',
  description: '孔庆志的博客',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/front-end' },
      { text: '摄影', link: '/photography' },
      { text: '关于', link: '/about' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    logo: '/logo.svg',
    siteTitle: '孔庆志的博客',
  },
  // 指定根目录
  srcDir: './src',
  // 不含有.html的路由
  cleanUrls:true,
  // 路由重写
  rewrites:{
    'about/index.md':'about/a.md'
  },
  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  }
})
