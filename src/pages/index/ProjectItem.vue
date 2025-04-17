<template>
  <div class="lg:w-96 space-y-4 bg-white rounded-xl p-6">
    <img
      :src="item.img"
      class="rounded-xl object-cover w-full md:h-56 overflow-hidden"
      alt=""
    />
    <div class="space-y-2">
      <h4 class="flex justify-between items-center">
        <span class="text-xl leading-6 font-bold">{{ item.name }}</span>

        <span class="text-sm text-gray-400">{{ item.date }}</span>
      </h4>

      <p class="text-gray-600 h-12">{{ item.describe }}</p>
    </div>

    <div class="flex justify-between items-center">
      <div
        class="text-sm text-gray-600 bg-slate-100 rounded-md max-w-min whitespace-nowrap px-2 py-1"
      >
        {{ item.type }}
      </div>
      <button
        class="rounded-lg bg-primary text-sm text-white px-8 lg:px-20 py-2"
        @click="handleGo(item.url)"
      >
        去看看
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    date: string;
    describe: string;
    img: string;
    name: string;
    type: string;
    url: string;
  };
}>();

const handleGo = (url: string) => {
  window.open(url, '_blank');
};
</script>
