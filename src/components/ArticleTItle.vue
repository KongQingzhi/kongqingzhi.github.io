<template>
  <div
    class="grid grid-cols-9 my-4 shadow-sm dark:shadow-slate-900 border border-sky-100 dark:border-gray-800 hover:translate-x-2 hover:border-primary hover:text-primary cursor-pointer transition-all duration-500 items-center overflow-hidden rounded-md"
    @click="navigate(article.path)"
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
        <rect x="0" y="0" width="100" height="50" fill="transparent"></rect>
        <path
          d="M57 0L58.7 1.2C60.3 2.3 63.7 4.7 58.7 7C53.7 9.3 40.3 11.7 38 14C35.7 16.3 44.3 18.7 48.7 21.2C53 23.7 53 26.3 52.5 28.8C52 31.3 51 33.7 52.7 36C54.3 38.3 58.7 40.7 57.2 43C55.7 45.3 48.3 47.7 44.7 48.8L41 50L0 50L0 48.8C0 47.7 0 45.3 0 43C0 40.7 0 38.3 0 36C0 33.7 0 31.3 0 28.8C0 26.3 0 23.7 0 21.2C0 18.7 0 16.3 0 14C0 11.7 0 9.3 0 7C0 4.7 0 2.3 0 1.2L0 0Z"
          fill="#34d0b2"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
    </div>

    <div class="col-span-8 space-y-4 pr-10">
      <div class="truncate text-lg font-semibold">
        {{ article.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

interface Article {
  path: string;
  title: string;
}

defineProps<{ article: Article }>();

const router = useRouter();

const navigate = async (path: string) => {
  await router.push({ path });
};
</script>
