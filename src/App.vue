<template>
  <Nav class="fixed z-[9999] w-full top-0" />
  <main class="container tracking-wider pt-16 mx-auto px-4 sm:px-10">
    <RouterView />
  </main>
  <Foot />
</template>

<script setup lang="ts">
import Nav from '@/components/Nav.vue';
import Foot from '@/components/Foot.vue';
</script>
