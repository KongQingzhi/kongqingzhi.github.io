<template>
  <div>
    <Banner />
    <Title />
    <Project />
  </div>
</template>

<script setup lang="ts">
import Banner from './Banner.vue';
import Title from './Title.vue';
import Project from './Project.vue';

defineOptions({ name: 'HomePage' });
</script>
