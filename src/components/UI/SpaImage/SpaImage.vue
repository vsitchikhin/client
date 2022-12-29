<template>
  <div ref="imageContainerRef" class="image">
    <div class="image__sizer" :style="imageSizeStyles" />
    <div class="image__image" :style="imageStyles" :class="imageClasses" />
  </div>
</template>

// ------------ TypeScript ------------
<script setup lang="ts">
import { computed, ComputedRef, PropType, ref, Ref } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  aspectRatio: {
    type: Number,
    default: () => 16 / 9,
  },
});

const imageContainerRef: Ref<HTMLElement | null> = ref(null);

const imageSizeStyles = computed(() => {
  return {
    'padding-bottom': `${100 / props.aspectRatio}%`,
  };
});

const imageStyles: ComputedRef<Record<string, string>> = computed(() => {
  return {
    'background-image': `url("${props.src}")`,
  };
});
</script>

<style scoped lang="scss">

.image {
  width: 100%;
  position: relative;

  &__image {
    position: absolute;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

}
</style>
