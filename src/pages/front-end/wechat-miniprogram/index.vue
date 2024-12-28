<template>
  <ArticleTItle v-for="item in list" :key="item.title" :article="item" />
</template>

<script setup lang="ts">
import { defineOptions } from 'vue';
import ArticleTItle from '../../../components/ArticleTItle.vue';
defineOptions({ name: 'FrontEndPage' });
const list = [
  {
    path: '/front-end/wechat-miniprogram/subscribe-message/index',
    title: '订阅通知',
  },
];
</script>
