<template>
  <Layout>
    <template #not-found>
      <NotFoundPage />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme';
import { Content } from 'vitepress';
import NotFoundPage from '../pages/404/index.vue';
const { Layout } = DefaultTheme;
</script>
