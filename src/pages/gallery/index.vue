<template>
  <section>
    <ScrollShell />
    <GalleryPart
      v-for="item in galleryParts"
      :key="item.title"
      :title="item.title"
      v-bind="item"
    />
  </section>
</template>

<script setup lang="ts">
import ScrollShell from './ScrollShell.vue';
import GalleryPart from './GalleryPart.vue';

defineOptions({ name: 'GalleryPage' });

const galleryParts = [
  {
    describe: '乱点碎红山杏发，平铺新绿水蘋生 — 白居易《南湖早春》',
    title: '芳华',
    imageList: [
      'src/pages/gallery/DSC_1423.jpg',
      'src/pages/gallery/DSC_1306.jpg',
      'src/pages/gallery/DSC_1307.jpg',
      'src/pages/gallery/DSC_1338.jpg',
      'src/pages/gallery/DSC_1341.jpg',
      'src/pages/gallery/DSC_1392.jpg',
      'src/pages/gallery/DSC_1394.jpg',
      'src/pages/gallery/DSC_1408.jpg',
      'src/pages/gallery/DSC_1419.jpg',
      'src/pages/gallery/DSC_1453.jpg',
      'src/pages/gallery/DSC_1499.jpg',
      'src/pages/gallery/DSC_1517.jpg',
      'src/pages/gallery/DSC_1470.jpg',
      'src/pages/gallery/DSC_1461.jpg',
      'src/pages/gallery/DSC_1466.jpg',
      'src/pages/gallery/DSC_1468.jpg',
      '',
    ],
  },
  {
    describe: '晓声隆隆催转日，暮声隆隆催月出 — 李贺《官街鼓》',
    title: '凝固的诗篇',
    imageList: [
      'src/pages/gallery/DSC_0283.JPG',
      'src/pages/gallery/DSC_2201.jpg',
      'src/pages/gallery/DSC_0773-3.jpg',
      'src/pages/gallery/DSC_1456.jpg',
      'src/pages/gallery/DSC_2222.jpg',
      'src/pages/gallery/DSC_2220.jpg',
      'src/pages/gallery/DSC_1477.jpg',
      'src/pages/gallery/DSC_0816-3.jpg',
      'src/pages/gallery/DSC_0743-3.jpg',
      'src/pages/gallery/DSC_0737-3.jpg',
      'src/pages/gallery/DSC_0767-3.jpg',
    ],
  },
  {
    describe: '海上涛头一线来，楼前指顾雪成堆 — 苏轼《望海楼晚景》',
    title: '潮声录',
    imageList: [
      'src/pages/gallery/DSC_0967.jpg',
      'src/pages/gallery/DSC_1490.jpg',
      'src/pages/gallery/DSC_1497.jpg',
      'src/pages/gallery/DSC_1509.jpg',
    ],
  },
  {
    describe: '长风破浪会有时，直挂云帆济沧海 — 李白《行路难》',
    title: '云帆志',
    imageList: [
      'src/pages/gallery/DSC_2168.jpg',
      'src/pages/gallery/DSC_2173.jpg',
      'src/pages/gallery/DSC_2224.jpg',
      'src/pages/gallery/DSC_2225.jpg',
      'src/pages/gallery/DSC_2226.jpg',
      'src/pages/gallery/DSC_2227.jpg',
      'src/pages/gallery/DSC_2174.jpg',
      'src/pages/gallery/DSC_2177.jpg',
      'src/pages/gallery/DSC_2179.jpg',
      'src/pages/gallery/DSC_2181.jpg',
      'src/pages/gallery/DSC_2182.jpg',
      'src/pages/gallery/DSC_2188.jpg',
      'src/pages/gallery/DSC_2190.jpg',
      'src/pages/gallery/DSC_2192.jpg',
      'src/pages/gallery/DSC_2193.jpg',
      'src/pages/gallery/DSC_2198.jpg',
      'src/pages/gallery/DSC_2199.jpg',
      'src/pages/gallery/DSC_2200.jpg',
      'src/pages/gallery/DSC_2204.jpg',
      'src/pages/gallery/DSC_2206.jpg',
      'src/pages/gallery/DSC_2208.jpg',
      'src/pages/gallery/DSC_2209.jpg',
      'src/pages/gallery/DSC_2210.jpg',
      'src/pages/gallery/DSC_2215.jpg',
      'src/pages/gallery/DSC_2216.jpg',
      'src/pages/gallery/DSC_2218.jpg',
      'src/pages/gallery/DSC_2221.jpg',
    ],
  },
  {
    describe: '万物静观皆自得，四时佳兴与人同 — 程颢《秋日偶成》',
    title: '万象集',
    imageList: [
      'src/pages/gallery/DSC_2159.JPG',
      'src/pages/gallery/DSC_2162.JPG',
      '',
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
