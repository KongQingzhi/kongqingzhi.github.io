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
import articleDetailRoutes from '@/router/articleDetailRoutes.ts';

defineOptions({ name: 'ArticlePage' });

const articleList = articleDetailRoutes.map((item) => {
  return {
    title: item.meta.title,
    path: 'detail/' + item.path,
  };
});
</script>
