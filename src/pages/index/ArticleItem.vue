<template>
  <div
    class="bg-white cursor-pointer flex justify-between items-center gap-4 flex-wrap p-6 rounded-lg"
    @click="handleGo"
  >
    <div class="rounded-lg w-72 h-[192px]">
      <img :src="image" alt="" class="h-full object-cover" />
    </div>
    <div class="flex-1">
      <h3
        class="text-2xl break-words text-gray-800 text-ellipsis line-clamp-1 font-bold mb-2"
      >
        {{ title }}
      </h3>
      <div class="flex items-center flex-wrap">
        <div
          class="bg-[#34d0b133] mr-2 mt-1 rounded-full text-gray-400 px-4 py-0.5"
          v-for="item in tag"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
      <p class="break-words text-ellipsis mt-6 text-gray-400 line-clamp-4">
        {{ describe }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const props = defineProps<{
  date: string;
  describe: string;
  image: string;
  tag: string[];
  title: string;
  url: string;
}>();

const router = useRouter();

const handleGo = () => {
  router.push({ path: props.url });
};
</script>
