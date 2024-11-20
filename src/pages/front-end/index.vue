<template>
  <div
    v-for="item in list"
    :key="item.title"
    class="grid grid-cols-8 my-4 shadow-sm hover:translate-x-4 hover:shadow-md cursor-pointer transition-all duration-400 items-center overflow-hidden rounded-md bg-white"
  >
    <div class="col-span-1">
      <svg
        id="visual"
        viewBox="0 0 100 50"
        width="100"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <rect x="0" y="0" width="100" height="50" fill="#ffffff"></rect>
        <path
          d="M57 0L58.7 1.2C60.3 2.3 63.7 4.7 58.7 7C53.7 9.3 40.3 11.7 38 14C35.7 16.3 44.3 18.7 48.7 21.2C53 23.7 53 26.3 52.5 28.8C52 31.3 51 33.7 52.7 36C54.3 38.3 58.7 40.7 57.2 43C55.7 45.3 48.3 47.7 44.7 48.8L41 50L0 50L0 48.8C0 47.7 0 45.3 0 43C0 40.7 0 38.3 0 36C0 33.7 0 31.3 0 28.8C0 26.3 0 23.7 0 21.2C0 18.7 0 16.3 0 14C0 11.7 0 9.3 0 7C0 4.7 0 2.3 0 1.2L0 0Z"
          fill="#0066FF"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
    </div>

    <div class="col-span-6 space-y-4 pr-10">
      <div class="truncate text-lg hover:text-sky-600 font-semibold">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue';
defineOptions({ name: 'FrontEndPage' });
const list = [
  {
    path: './project-format/index.md',
    title: '前端项目工程规范',
  },
  {
    path: './vitepress-integrate-tailwind-css/index.md',
    title: '在 VitePress 中集成 Tailwind CSS',
  },
  {
    path: './vue-use-alibaba-icon/index.md',
    title: '在 Vue 中使用阿里巴巴图标库',
  },
];
</script>
