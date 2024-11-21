<template>
  <ArticleTItle v-for="item in list" :key="item.title" :article="item" />
</template>

<script setup lang="ts">
import { defineOptions } from 'vue';
import ArticleTItle from '../../components/ArticleTItle.vue';
defineOptions({ name: 'FrontEndPage' });
const list = [
  {
    path: '/front-end/project-format/index',
    title: '前端项目工程规范',
  },
  {
    path: '/front-end/vitepress-integrate-tailwind-css/index',
    title: '在 VitePress 中集成 Tailwind CSS',
  },
  {
    path: '/front-end/vue-use-alibaba-icon/index',
    title: '在 Vue 中使用阿里巴巴图标库',
  },
  {
    path: '/front-end/eslint-not-recognize-global-types/index',
    title: '解决 eslint 无法识别全局类型的问题',
  },
];
</script>
