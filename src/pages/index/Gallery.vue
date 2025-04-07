<template>
  <section class="py-10">
    <h2 class="leading-6">
      <span class="text-3xl font-bold tracking-wide">摄影图库</span>
      <span class="text-gray-600 ml-4 align-bottom">让瞬间成为永恒。</span>
    </h2>
    <div class="mt-8">
      <div class="relative h-[650px] overflow-hidden rounded-lg border-2">
        <div
          ref="swiperRef"
          class="absolute flex"
          :style="{ left: `-${currentIndex * 1456}px` }"
        >
          <div
            v-for="item in swiperList"
            :key="item.title"
            class="w-[1456px] h-[650px]"
          >
            <img :src="item.url" alt="" class="object-cover" />
          </div>
        </div>

        <div
          class="w-[400px] flex justify-center items-center h-full absolute right-0 p-10 backdrop-blur-md"
        >
          <div>
            <h3 class="text-8xl h-[200px] tracking-wider font-bold text-white">
              {{ swiperList[currentIndex].title }}
            </h3>
            <p
              class="text-gray-100 h-40 text-xl font-bold tracking-wider mt-20"
            >
              {{ swiperList[currentIndex].describe }}
            </p>
            <div class="flex mt-10 items-center justify-between">
              <div
                class="size-10 cursor-pointer rounded-full border-primary flex justify-center items-center border-2"
                @click="handleClickPrev"
              >
                <ChevronLeftIcon class="size-6 text-white" />
              </div>
              <ul class="flex space-x-2">
                <li
                  v-for="item in swiperList.length - 2"
                  :key="item"
                  class="border-primary cursor-pointer border-2 size-3 rounded-full"
                  :class="{ 'bg-primary': item === currentIndex }"
                  @click="handleClickDot(item)"
                />
              </ul>
              <div
                class="size-10 cursor-pointer rounded-full border-primary flex justify-center items-center border-2"
                @click="handleClickNext"
              >
                <ChevronRightIcon class="size-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

defineOptions({ name: 'GalleryComponent' });

const currentIndex = ref(1);
const swiperRef = ref<HTMLDivElement | null>(null);

const swiperList = [
  {
    describe: '万物静观皆自得，四时佳兴与人同 — 程颢《秋日偶成》',
    date: '2025-03-13',
    title: '万象集',
    url: new URL('../gallery/DSC_2162.JPG', import.meta.url).href,
  },
  {
    describe: '乱点碎红山杏发，平铺新绿水蘋生 — 白居易《南湖早春》',
    date: '2025-03-13',
    title: '芳华',
    url: new URL('../gallery/DSC_1468.jpg', import.meta.url).href,
  },
  {
    describe: '晓声隆隆催转日，暮声隆隆催月出 — 李贺《官街鼓》',
    date: '2025-03-13',
    title: '凝固的诗篇',
    url: new URL('../gallery/DSC_0283.JPG', import.meta.url).href,
  },
  {
    describe: '海上涛头一线来，楼前指顾雪成堆 — 苏轼《望海楼晚景》',
    date: '2025-03-13',
    title: '潮声录',
    url: new URL('../gallery/DSC_2201.jpg', import.meta.url).href,
  },
  {
    describe: '长风破浪会有时，直挂云帆济沧海 — 李白《行路难》',
    date: '2025-03-13',
    title: '云帆志',
    url: new URL('../gallery/DSC_2209.jpg', import.meta.url).href,
  },
  {
    describe: '万物静观皆自得，四时佳兴与人同 — 程颢《秋日偶成》',
    date: '2025-03-13',
    title: '万象集',
    url: new URL('../gallery/DSC_2162.JPG', import.meta.url).href,
  },
  {
    describe: '乱点碎红山杏发，平铺新绿水蘋生 — 白居易《南湖早春》',
    date: '2025-03-13',
    title: '芳华',
    url: new URL('../gallery/DSC_1468.jpg', import.meta.url).href,
  },
];
const router = useRouter();

const handleClickPrev = () => {
  if (currentIndex.value === 1) {
    swiperRef.value.style.transition = 'none';
    swiperRef.value.style.left = -1456 * (swiperList.length - 1) + 'px';
    // eslint-disable-next-line
    swiperRef.value.clientHeight;
    moveTo(swiperList.length - 2);
    return;
  }
  currentIndex.value -= 1;
  moveTo(currentIndex.value);
};

const handleClickNext = () => {
  if (currentIndex.value === swiperList.length - 2) {
    swiperRef.value.style.transition = 'none';
    swiperRef.value.style.left = '0px';
    // eslint-disable-next-line
    swiperRef.value.clientHeight;
    moveTo(1);
    return;
  }
  currentIndex.value += 1;
  moveTo(currentIndex.value);
};

const handleClickDot = (index: number) => {
  currentIndex.value = index;
  moveTo(currentIndex.value);
};

const handleClickMore = async () => {
  await router.push({ name: 'gallery' });
};

const moveTo = (index: number) => {
  swiperRef.value.style.transitionProperty = 'all';
  swiperRef.value.style.transitionDuration = '1s';
  currentIndex.value = index;
};
</script>
