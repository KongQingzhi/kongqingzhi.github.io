<template>
  <main class="relative main isolate min-h-full">
    <img
      src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
      alt=""
      class="absolute inset-0 -z-10 size-full object-cover object-bottom"
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
          href="#"
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
