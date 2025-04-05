<template>
  <section class="grid grid-cols-2 py-10 gap-10">
    <div class="relative">
      <div
        class="absolute rounded-full z-[2] left-52 bg-white w-[320px] h-[320px]"
      />
      <div
        class="absolute rounded-full top-6 left-0 bg-primary w-[400px] h-[400px]"
      />
      <img
        width="360px"
        class="absolute top-6 left-20 z-[3]"
        height="500px"
        :src="banner"
        alt=""
      />
    </div>
    <div class="space-y-10">
      <p class="leading-[80px] font-black text-6xl text-danger font-[Anton]">
        And line and see and calm, and listen and forget and with the wind.
      </p>
      <p
        class="leading-[48px] font-bold tracking-widest text-4xl text-[#020252] font-[Lobster]"
      >
        Life is passionate because of you.
      </p>
      <div
        class="relative cursor-pointer hover:shadow-[2px_2px_5px_0px_rgba(52,208,178,1)] shadow-[6px_6px_0px_0px_rgba(52,208,178,1)] group w-44 h-14 transition-all duration-300 overflow-hidden bg-white border-4 border-danger"
        @click="handleGo"
      >
        <div
          class="absolute -top-10 -left-8 w-64 h-4 z-0 bg-primary -rotate-12 transition-all duration-300 group-hover:h-40"
        />
        <span
          class="absolute z-10 leading-[48px] text-center transition-all top-0 right-0 bottom-0 left-0 duration-300 text-primary group-hover:text-danger font-[Anton] text-4xl"
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
