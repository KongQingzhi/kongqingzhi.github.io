<template>
  <section>
    <!-- <ScrollShell /> -->
    <GalleryPart
      v-for="item in galleryParts"
      :key="item.title"
      :title="item.title"
      v-bind="item"
    />
  </section>
</template>

<script setup lang="ts">
// import ScrollShell from './ScrollShell.vue';
import GalleryPart from './GalleryPart.vue';

defineOptions({ name: 'GalleryPage' });

const galleryParts = [
  {
    describe: '乱点碎红山杏发，平铺新绿水蘋生 — 白居易《南湖早春》',
    title: '芳华',
    imageList: [
      {
        url: new URL('DSC_1423.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_1306.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_1307.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_1338.jpg', import.meta.url).href,
        height: 2592,
        width: 3800,
      },
      {
        url: new URL('DSC_1341.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_1392.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_1394.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_1408.jpg', import.meta.url).href,
        height: 2495,
        width: 3529,
      },
      {
        url: new URL('DSC_1419.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_1453.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_1499.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_1517.jpg', import.meta.url).href,
        height: 3872,
        width: 2592,
      },
      {
        url: new URL('DSC_1470.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_1461.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_1466.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_1468.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
    ],
  },
  {
    describe: '晓声隆隆催转日，暮声隆隆催月出 — 李贺《官街鼓》',
    title: '凝固的诗篇',
    imageList: [
      {
        url: new URL('DSC_0283.JPG', import.meta.url).href,
        height: 1944,
        width: 2896,
      },
      {
        url: new URL('DSC_2201.jpg', import.meta.url).href,
        height: 2126,
        width: 3565,
      },
      {
        url: new URL('DSC_0773-3.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_1456.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2222.jpg', import.meta.url).href,
        height: 3835,
        width: 2473,
      },
      {
        url: new URL('DSC_2220.jpg', import.meta.url).href,
        height: 2565,
        width: 3831,
      },
      {
        url: new URL('DSC_1477.jpg', import.meta.url).href,
        height: 3498,
        width: 2407,
      },
      {
        url: new URL('DSC_0816-3.jpg', import.meta.url).href,
        height: 1578,
        width: 3268,
      },
      {
        url: new URL('DSC_0743-3.jpg', import.meta.url).href,
        height: 3872,
        width: 2592,
      },
      {
        url: new URL('DSC_0737-3.jpg', import.meta.url).href,
        height: 2526,
        width: 3653,
      },
      {
        url: new URL('DSC_0767-3.jpg', import.meta.url).href,
        height: 2471,
        width: 3691,
      },
    ],
  },
  {
    describe: '海上涛头一线来，楼前指顾雪成堆 — 苏轼《望海楼晚景》',
    title: '潮声录',
    imageList: [
      {
        url: new URL('DSC_0967.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_1490.jpg', import.meta.url).href,
        height: 2350,
        width: 3510,
      },
      {
        url: new URL('DSC_1497.jpg', import.meta.url).href,
        height: 2577,
        width: 3849,
      },
      {
        url: new URL('DSC_1509.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
    ],
  },
  {
    describe: '长风破浪会有时，直挂云帆济沧海 — 李白《行路难》',
    title: '云帆志',
    imageList: [
      {
        url: new URL('DSC_2168.jpg', import.meta.url).href,
        height: 3872,
        width: 2592,
      },
      {
        url: new URL('DSC_2173.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2224.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2225.jpg', import.meta.url).href,
        height: 2458,
        width: 3712,
      },
      {
        url: new URL('DSC_2226.jpg', import.meta.url).href,
        height: 3872,
        width: 2592,
      },
      {
        url: new URL('DSC_2227.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2174.jpg', import.meta.url).href,
        height: 3872,
        width: 2592,
      },
      {
        url: new URL('DSC_2177.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2179.jpg', import.meta.url).href,
        height: 2512,
        width: 3752,
      },
      {
        url: new URL('DSC_2181.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2182.jpg', import.meta.url).href,
        height: 3872,
        width: 2592,
      },
      {
        url: new URL('DSC_2188.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2190.jpg', import.meta.url).href,
        height: 3767,
        width: 2346,
      },
      {
        url: new URL('DSC_2192.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2193.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2198.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2199.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2200.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2204.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2206.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2208.jpg', import.meta.url).href,
        height: 2402,
        width: 3871,
      },
      {
        url: new URL('DSC_2209.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2210.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2215.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2216.jpg', import.meta.url).href,
        height: 2332,
        width: 3839,
      },
      {
        url: new URL('DSC_2218.jpg', import.meta.url).href,
        height: 2592,
        width: 3872,
      },
      {
        url: new URL('DSC_2221.jpg', import.meta.url).href,
        height: 3752,
        width: 2512,
      },
    ],
  },
  {
    describe: '万物静观皆自得，四时佳兴与人同 — 程颢《秋日偶成》',
    title: '万象集',
    imageList: [
      {
        url: new URL('DSC_2159.JPG', import.meta.url).href,
        height: 2896,
        width: 1944,
      },
      {
        url: new URL('DSC_2162.JPG', import.meta.url).href,
        height: 1944,
        width: 2896,
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
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
