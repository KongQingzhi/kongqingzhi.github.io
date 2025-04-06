<template>
  <div class="shell h-[100vh] overflow-scroll" style="perspective: 3px">
    <div
      class="image bg-cover h-[100vh] -z-[1]"
      style="background-image: url('/src/pages/gallery/DSC_2209.jpg')"
    />
    <div class="heading -z-[1] text-white text-[30px]">
      <h1>When you are confused</h1>
    </div>
    <div class="h-[50vh] bg-white">
      <h1>Set goals in your mind</h1>
    </div>

    <div
      class="image bg-cover h-[100vh] -z-[1]"
      style="background-image: url('/src/pages/gallery/DSC_2200.jpg')"
    />
    <div class="heading -z-[1] text-white text-[30px]">
      <h1>When you're down</h1>
    </div>
    <div class="h-[50vh] bg-white">
      <h1>Try to wake up the beast in your heart</h1>
    </div>

    <div
      class="image bg-cover h-[100vh] -z-[1]"
      style="background-image: url('/src/pages/gallery/DSC_2182.jpg')"
    />
    <div class="heading -z-[1] text-white text-[30px]">
      <h1>When prople leave you</h1>
    </div>
    <div class="h-[50vh] bg-white">
      <h1>It's time to start your season</h1>
    </div>

    <div
      class="image bg-cover h-[100vh] -z-[1]"
      style="background-image: url('/src/pages/gallery/DSC_0773-3.jpg')"
    />
    <div class="heading -z-[1] text-white text-[30px]">
      <h1>Come on,stranger.</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'GalleryPage' });
</script>

<style lang="scss" scoped>
.shell div {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  letter-spacing: 2px;
}

.shell::-webkit-scrollbar {
  display: none;
}

.image {
  transform: translateZ(-1px) scale(1.6);
}

.heading {
  transform: translateY(-30vh) translateZ(1px);
}
</style>
