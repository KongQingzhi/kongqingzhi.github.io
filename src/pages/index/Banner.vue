<template>
  <section class="lg:grid grid-cols-2 py-10 gap-10">
    <div
      class="relative lg:mt-16 sm:mt-20 mt-6 mx-auto lg:size-[452px] sm:size-[560px] size-[335px]"
    >
      <div
        class="bg-primary relative rounded-full sm:size-[400px] size-64"
      ></div>
      <div
        class="bg-white rounded-full lg:size-64 sm:size-80 size-48 relative sm:-top-[450px] -top-72 lg:left-48 sm:left-60 left-36"
      ></div>
      <img class="absolute left-0 top-0" :src="banner" alt="" />
    </div>
    <div class="space-y-5 md:space-y-10 2xl:space-y-16">
      <p
        class="leading-[50px] sm:leading-[60px] xl:leading-[80px] font-black text-4xl sm:text-5xl xl:text-6xl text-danger font-[Anton]"
      >
        And line and see and calm, and listen and forget and with the wind.
      </p>
      <p
        class="leading-10 sm:leading-[48px] font-bold sm:tracking-widest text-2xl sm:text-4xl text-[#020252] font-[Lobster]"
      >
        Life is passionate because of you.
      </p>
      <div
        class="relative mx-auto lg:mx-0 cursor-pointer hover:shadow-[2px_2px_5px_0px_rgba(52,208,178,1)] shadow-[6px_6px_0px_0px_rgba(52,208,178,1)] group w-44 h-14 transition-all duration-300 overflow-hidden bg-white border-4 border-danger"
        @click="handleGo"
      >
        <div
          class="absolute -top-10 -left-8 w-64 h-4 z-0 bg-primary -rotate-12 transition-all duration-300 group-hover:h-40"
        />
        <span
          class="absolute z-10 leading-[48px] text-center transition-all top-0 right-0 bottom-0 left-0 duration-300 text-primary group-hover:text-danger font-[Anton] text-2xl sm:text-4xl"
          >Get it!</span
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import banner from '@/assets/index/banner.svg';

defineOptions({ name: 'BannerComponent' });

const router = useRouter();

const handleGo = () => {
  router.push({ name: 'about' });
};
</script>
