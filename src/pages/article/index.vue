<template>
  <section>
    <PageTitle title="博客文章" aside="积累错误，总结经验。" />
    <div class="space-y-4 mb-10">
      <ArticleTItle
        v-for="item in articleList"
        :key="item.title"
        :article="item"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue';
import ArticleTItle from '@/components/ArticleTItle.vue';
defineOptions({ name: 'ArticlePage' });

const articleList = [
  {
    path: '',
    title: '前端工程化',
  },
  {
    path: '',
    title: 'CSS 三栏布局完全指南',
  },
  {
    path: '',
    title: 'VitePress 中集成 Tailwind CSS',
  },
  {
    path: '',
    title: '如何在 vue 项目中使用阿里巴巴图标库并封装成组件',
  },
  {
    path: '',
    title: '解决 eslint 无法识别全局类型的问题',
  },
  {
    path: '',
    title: '微信小程序订阅消息',
  },
  {
    path: '',
    title: 'HTML 基础',
  },
];
</script>
