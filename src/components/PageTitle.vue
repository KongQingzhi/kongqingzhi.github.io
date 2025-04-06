<template>
  <div class="flex items-end flex-wrap py-2 my-4 border-b-2 border-primary">
    <h3 class="text-3xl mr-8 font-bold text-center text-block">{{ title }}</h3>
    <p class="text-center text-gray-400">{{ aside }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  aside: string;
  title: string;
}>();
</script>
