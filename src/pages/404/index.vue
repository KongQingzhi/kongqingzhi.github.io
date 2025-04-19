<template>
  <main class="relative mx-auto min-h-[77vh] isolate">
    <img
      src="./404.jpg"
      alt=""
      class="absolute inset-0 -z-10 size-full object-cover object-left"
    />
    <div class="mx-auto max-w-7xl px-6 py-40 text-center lg:px-8">
      <p class="text-8xl font-semibold text-white">404</p>
      <h1
        class="mt-16 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl"
      >
        页面走丢了...
      </h1>
      <p
        class="mt-6 text-pretty text-lg font-medium text-white/70 sm:text-xl/8"
      >
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="mt-10 flex items-center text-white justify-center gap-x-6">
        <a
          href="/"
          class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >返回首页</a
        >
        <RouterLink to="/about" class="text-sm font-semibold"
          >联系我 <span aria-hidden="true">&rarr;</span>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue';
defineOptions({ name: 'NotFoundPage' });
</script>
