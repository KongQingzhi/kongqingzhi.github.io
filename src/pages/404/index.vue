<template>
  <main class="relative main mx-auto isolate min-h-full">
    <img
      src="./404.jpg"
      alt=""
      class="absolute inset-0 -z-10 size-full object-cover object-left"
    />
    <div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
      <p class="text-8xl font-semibold text-white">404</p>
      <h1
        class="mt-16 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl"
      >
        Page not found
      </h1>
      <p
        class="mt-6 text-pretty text-lg font-medium text-white/70 sm:text-xl/8"
      >
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="mt-10 flex items-center text-white justify-center gap-x-6">
        <a
          href="/"
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Go back home</a
        >
        <a href="#" class="text-sm font-semibold"
          >Contact support <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue';
defineOptions({ name: 'NotFoundPage' });
</script>

<style scoped>
.main {
  min-height: calc(100vh - 4rem);
}
</style>
