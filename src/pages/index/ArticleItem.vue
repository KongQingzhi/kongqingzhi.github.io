<template>
  <div
    class="bg-white cursor-pointer xl:flex justify-between items-center gap-4 flex-wrap p-6 rounded-lg"
    @click="handleGo"
  >
    <img
      :src="image"
      class="rounded-xl object-cover w-full h-[192px] overflow-hidden"
      alt=""
    />
    <div class="flex-1">
      <h3
        class="text-2xl mt-4 lg:mt-0 break-words text-gray-800 text-ellipsis line-clamp-1 font-bold mb-2"
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
