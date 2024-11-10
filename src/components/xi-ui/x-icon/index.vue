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
import { defineOptions } from 'vue';
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
</script>
