<template>
  <div ref="containerRef">
    <PageTitle :title="title" :aside="describe" />

    <div
      v-if="columnCount"
      class="my-10 grid min-h-[70vh]"
      :style="{
        gap: `${gap}px`,
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
      }"
    >
      <div
        v-for="(col, index) in columns"
        :key="index"
        class="flex flex-col"
        :style="{
          gap: `${gap}px`,
        }"
      >
        <div v-for="image in col" :key="image.url">
          <img
            :src="image.url"
            alt=""
            :weight="columnWidth"
            class="w-full h-auto object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue';
import { computed, ref, onMounted } from 'vue';

interface Image {
  height: number;
  width: number;
  url: string;
}

const props = defineProps<{
  title: string;
  describe: string;
  imageList: Image[];
}>();

const containerRef = ref<HTMLElement | null>(null);
const columnCount = ref(4);
const columnWidth = ref(0);
const gap = ref(16);
const minColumnWidth = ref(300); // 最小列宽
// 计算列宽
const calcColWidth = () => {
  if (!containerRef.value) {
    return;
  }
  // 获取容器宽度
  const containerWidth = containerRef.value.clientWidth;

  // 计算列数
  const columnsCount = Math.floor(
    (containerWidth + gap.value) / (minColumnWidth.value + gap.value)
  );
  // 至少一列
  columnCount.value = Math.max(columnsCount, 1);
  // 总 gap 宽度
  const totalGapWidth = (columnCount.value - 1) * gap.value;
  // 计算实际宽度
  columnWidth.value = (containerWidth - totalGapWidth) / columnCount.value;
};

// 获取列高
const calcColumnHeight = (col: Image[]) => {
  return col.reduce((acc, image) => {
    const imageHeight = (image.height / image.width) * columnWidth.value;
    return acc + imageHeight + gap.value;
  }, 0);
};

// 创建响应式布局
const columns = computed(() => {
  const cols: Image[][] = Array.from({ length: columnCount.value }, () => []);
  if (!columnWidth.value) {
    return cols;
  }
  props.imageList.forEach((image) => {
    // 获取最短的列
    let shortestColumn = cols[0];
    cols.forEach((col) => {
      if (calcColumnHeight(col) < calcColumnHeight(shortestColumn)) {
        shortestColumn = col;
      }
    });
    // 添加图片到最短的列
    shortestColumn.push(image);
  });
  return cols;
});

// 响应式调整
const resizeObserver = new ResizeObserver(() => {
  calcColWidth();
});

onMounted(() => {
  if (containerRef.value) {
    resizeObserver.observe(containerRef.value);
  }
});
</script>
