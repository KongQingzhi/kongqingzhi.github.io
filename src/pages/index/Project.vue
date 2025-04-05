<template>
  <section class="py-10">
    <h2 class="leading-6">
      <span class="text-3xl font-bold tracking-wide">项目简介</span>
      <span class="text-gray-600 ml-4 align-bottom"
        >设计及开发项目总结，不限于开发完成的项目</span
      >
    </h2>

    <div class="mt-8 grid gap-8 grid-cols-3">
      <ProjectItem v-for="item in projectList" :key="item.name" :item="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectItem from './ProjectItem.vue';
import chrome from '@/assets/index/chrome.png';
import huigou from '@/assets/index/huigou.png';
import passion from '@/assets/index/passion.png';
import taro from '@/assets/index/taro.png';

defineOptions({ name: 'ProjectComponent' });

const projectList = [
  {
    date: '2023-03-16',
    describe: '面向日本用户的中国商品代购平台。',
    img: taro,
    name: '淘太郎',
    type: 'Web',
    url: 'https://www.yiwutaro.com/',
  },
  {
    date: '2023-03-16',
    describe: '校园跑腿服务平台，提供校园内的跑腿服务。',
    img: '',
    name: '叮叮校园',
    type: '微信小程序',
    url: 'https://www.yiwutora.com',
  },
  {
    date: '2023-03-16',
    describe: '校园快递代取平台，提供高校与驿站的快递代取服务。',
    img: '',
    name: '惠购校园镖局',
    type: '微信小程序',
    url: 'https://www.yiwutora.com',
  },
  {
    date: '2023-03-16',
    describe: '网购省钱的电商导购平台，为消费者提供网购返利等一站式省钱服务。',
    img: huigou,
    name: '惠购网',
    type: 'Web & App',
    url: 'https://www.tbxzs.com/index',
  },

  {
    date: '2023-03-16',
    describe: '淘太郎网站的浏览器下单辅助插件。',
    img: chrome,
    name: '淘汰郎下单助手',
    type: 'Chrome 插件',
    url: 'https://chromewebstore.google.com/detail/%E6%B7%98%E5%A4%AA%E9%83%8E%E4%B8%8B%E5%8D%95%E5%8A%A9%E6%89%8B/nahdggilmmpnphekajnpckogaeibnfci?hl=zh-CN&utm_source=ext_sidebar',
  },
  {
    date: '2023-03-16',
    describe: '记录个人生活和技术文章的个人博客。',
    img: passion,
    name: 'Passion',
    type: 'Web',
    url: '#',
  },
];
</script>
