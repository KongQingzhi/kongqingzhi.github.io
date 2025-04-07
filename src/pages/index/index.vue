<template>
  <div>
    <Banner />
    <Title />
    <Project />
    <Article />
    <Gallery />
  </div>
</template>

<script setup lang="ts">
import Banner from './Banner.vue';
import Title from './Title.vue';
import Project from './Project.vue';
import Gallery from './Gallery.vue';
import Article from './Article.vue';

defineOptions({ name: 'HomePage' });
</script>
