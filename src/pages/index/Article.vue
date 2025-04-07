<template>
  <section class="py-10">
    <h2 class="leading-6">
      <span class="text-3xl font-bold tracking-wide">博客文章</span>
      <span class="text-gray-600 ml-4 align-bottom">积累错误，总结经验。</span>
    </h2>
    <div class="mt-8 grid md:grid-cols-2 gap-4">
      <ArticleItem
        v-for="item in articleList"
        :key="item.title"
        v-bind="item"
      />
    </div>
    <div>
      <div
        @click="handleClickMore"
        class="bg-primary w-40 cursor-pointer text-center mt-10 rounded-full px-3 text-white py-2 mx-auto"
      >
        更多
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ArticleItem from './ArticleItem.vue';

defineOptions({ name: 'ArticleComponent' });

const router = useRouter();

const articleList = [
  {
    date: '2025-03-14',
    describe:
      '在现代前端开发过程中，团队协作已成为常态，多个成员共同参与同一个大型项目的开发与维护。然而，随着团队规模的扩大，一个显著的问题逐渐浮现——开发规范的缺失。每个开发者都有自己的代码书写习惯和风格，这导致了代码风格的不一致。更糟糕的是，提交代码时的提交日志也常常缺乏统一的标准，随意性很大。这些问题不仅影响了代码的可读性和可维护性，还在后续的开发和维护过程中增加了不少困难。因此，建立一套统一的开发规范和约束机制变得尤为重要。',
    image: new URL('@/assets/index/project-format.png', import.meta.url).href,
    tag: ['eslint', 'prettier'],
    title: '前端项目工程规范',
    url: '',
  },
  {
    date: '2025-03-14',
    describe:
      '在现代网页设计中，三栏布局堪称最经典的布局方案之一。无论是传统门户网站、企业官网，还是复杂的后台管理系统，三栏布局因其出色的内容组织方式和良好的视觉层次，一直备受开发者青睐。',
    image: new URL('@/assets/index/three-column-layout.png', import.meta.url)
      .href,
    tag: ['html', 'css'],
    title: 'CSS 三栏布局完全指南',
    url: '',
  },
  {
    date: '2025-03-14',
    describe:
      '使用阿里巴巴图标库可以显著提升项目的开发效率和用户体验。它提供了丰富的免费图标资源，支持自定义上传和管理，多种格式下载，以及在线编辑功能。通过将图标转换为字体形式，可以方便地在前端项目中调用和使用，提高加载速度和兼容性。此外，它还支持项目协作，提供强大的搜索功能和社区交流平台，帮助团队高效管理和使用图标资源。',
    image: new URL('@/assets/index/vue-use-alibaba-icon.png', import.meta.url)
      .href,
    tag: ['vue'],
    title: '如何在 Vue 项目中使用阿里巴巴图标库并封装成组件',
    url: '',
  },
  {
    date: '2025-03-14',
    describe:
      '在 VitePress 中集成 TailwindCSS 主要是为了提升开发效率和增强页面的样式定制能力。VitePress 是一个基于 Vite 的静态站点生成器，专注于文档和博客的快速构建。TailwindCSS 是一个流行的低层次、实用优先的 CSS 框架，它通过提供一组预定义的类，帮助开发者快速实现自定义设计而不需要写很多自定义的 CSS。',
    image: new URL(
      '@/assets/index/vitepress-integrate-tailwind-css.png',
      import.meta.url
    ).href,
    tag: ['VitePress ', 'Tailwind CSS'],
    title: 'VitePress 中集成 Tailwind CSS',
    url: '',
  },
];

const handleClickMore = async () => {
  await router.push({ name: 'article' });
};
</script>
