<template>
  <div>
    <Banner />
    <Title />
    <Project />
    <Gallery />
  </div>
</template>

<script setup lang="ts">
import Banner from './Banner.vue';
import Title from './Title.vue';
import Project from './Project.vue';
import Gallery from './Gallery.vue';

defineOptions({ name: 'HomePage' });
</script>
