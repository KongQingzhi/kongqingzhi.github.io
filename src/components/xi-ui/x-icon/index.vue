<template>
  <svg
    class="icon"
    aria-hidden="true"
    :style="{ width: size, height: size, color: color }"
  >
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script setup lang="ts">
import { defineOptions, onMounted } from 'vue';
defineOptions({ name: 'IconComponent' });
defineProps({
  color: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
});

onMounted(() => import('../../../../.vitepress/theme/iconfont.js'));
</script>
