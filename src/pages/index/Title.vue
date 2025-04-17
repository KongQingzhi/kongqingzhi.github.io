<template>
  <div class="mb-10">
    <div
      class="flex h-40 tracking-[8px] lg:tracking-[14px] text-2xl sm:text-[40px] xl:text-[56px] text-[#020252] font-black justify-around items-center"
    >
      <p>生命不息</p>
      <div ref="scrollDownRef" class="scroll-down">
        <div class="chevrons">
          <div class="chevron-down"></div>
          <div class="chevron-down"></div>
        </div>
      </div>
      <p>进步不止</p>
    </div>

    <div id="top" class="next h-4 bg-primary"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const scrollDownRef = ref<HTMLElement>(null);

defineOptions({ name: 'TitleComponent' });

onMounted(() => {
  if (scrollDownRef.value) {
    scrollDownRef.value.addEventListener('click', () => {
      const nextElement = document.getElementById('top');
      if (!nextElement) return;
      const top = nextElement.offsetTop;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }
});
</script>

<style lang="scss" scoped>
.scroll-down {
  position: relative;
  top: 0;
  left: 0;
  width: 2rem;
  height: 3.5rem;
  border: 0.1875rem solid #f75652;
  border-radius: 2rem;
  cursor: pointer;

  .chevrons {
    padding: 0.375rem 0 0;
    margin-left: -0.1875rem;
    margin-top: 3.5rem;
    width: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .chevron-down {
      border: solid #f75652;
      border-width: 0 0.1875rem 0.1875rem 0;
      display: inline-block;
      width: 0.625rem;
      height: 0.625rem;
      transform: rotate(45deg);
    }

    .chevron-down:nth-child(odd) {
      animation: pulse54012 500ms ease infinite alternate;
    }

    .chevron-down:nth-child(even) {
      animation: pulse54012 500ms ease infinite alternate 250ms;
    }

    @keyframes pulse54012 {
      from {
        opacity: 0;
      }

      to {
        opacity: 0.5;
      }
    }
  }
}

.scroll-down::before {
  content: '';
  position: absolute;
  bottom: 1.875rem;
  left: 50%;
  width: 0.375rem;
  height: 0.375rem;
  margin-left: -0.1875rem;
  background-color: #f75652;
  border-radius: 100%;
  animation: scroll-down-anim 2s infinite;
  box-shadow: 0 -0.3125rem 0.1875rem 0.0625rem #2a547066;
}

@keyframes scroll-down-anim {
  0% {
    opacity: 0;
    height: 6px;
  }

  40% {
    opacity: 1;
    height: 10px;
  }

  80% {
    transform: translate(0, 20px);
    height: 0.625rem;
    opacity: 0;
  }

  100% {
    height: 0.8175rem;
    opacity: 0;
  }
}
</style>
