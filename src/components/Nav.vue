<template>
  <div class="bg-primary shadow-md">
    <div class="mx-auto px-10 container flex-wrap py-3 flex justify-between">
      <h1 class="size-10 cursor-pointer relative" @click="handleClickLogo">
        <img :src="Logo" alt="log" />
        <div class="absolute leading-5 bottom-0 text-lg left-7 font-bold text-white">
          <i class="text-info">a</i><i>ssion</i>
        </div>
      </h1>
      <ul class="flex text-base space-x-10">
        <li
          v-for="{ name, text } in menuList"
          :key="name"
          @click="handleClickMenu(name)"
          class="menu-item relative cursor-pointer text-white leading-10 text-center"
          :class="[route.name === name ? 'menu-item-active' : '']"
        >
          {{ text }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from '@/assets/logo.png';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const menuList = [
  {
    name: 'index',
    text: '首页',
  },
  {
    name: 'article',
    text: '文章',
  },
  {
    name: 'gallery',
    text: '图库',
  },
  {
    name: 'about',
    text: '关于',
  },
];

const handleClickMenu = (name: string) => {
  router.push({ name: name });
};

const handleClickLogo = () => {
  router.push({ name: 'index' });
};
</script>

<style scoped lang="scss">
.menu-item {
  letter-spacing: 2px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 100%;
    width: 0;
    margin: 0 auto;
    border-bottom: 2px solid #fff;
    transition: 0.2s all linear;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  &:hover ~ &::after {
    left: 0;
  }
}

.menu-item-active {
  font-weight: 600;
}
</style>
