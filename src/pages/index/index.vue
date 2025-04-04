<template>
  <div>
    <Banner />
    <Title />
    <Project />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Banner from './Banner.vue';
import Title from './Title.vue';
import Project from './Project.vue';

defineOptions({ name: 'HomePage' });

const router = useRouter();
</script>
