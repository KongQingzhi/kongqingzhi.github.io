<template>
  <ArticleTItle v-for="item in list" :key="item.title" :article="item" />
</template>

<script setup lang="ts">
import { defineOptions } from 'vue';
import ArticleTItle from '../../../components/ArticleTItle.vue';

defineOptions({ name: 'FrontEndPage' });

const list = [
  {
    path: 'html-base',
    title: 'HTML 基础',
  },
  {
    path: 'three-column-layout',
    title: '三栏布局',
  },
].map((item) => ({ ...item, path: `/front-end/html&css/${item.path}` }));
</script>
