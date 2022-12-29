<template>
  <div class="image-gallery">
    <swiper
      :space-between="24"
      with-pagination
      class="image-gallery__slider"
    >
      <swiper-slide
        v-for="image in images"
        :key="image.id"
        class="image-gallery__slide"
      >
        <spa-image :src="image.url" class="image-gallery__image"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import {PropType} from 'vue';
import {Image} from 'components/UI/ImageGallery/imageGallery.types';

import 'swiper/css';
import 'swiper/css/pagination';
import SpaImage from 'components/UI/SpaImage/SpaImage.vue';

const props = defineProps({
  images: {
    type: Array as PropType<Image[]>,
    required: true,
  }
})

</script>

<style scoped lang="scss">
  .image-gallery {
    width: 100%;
    min-height: 240px;

    &__slider {
      padding: 8px;
    }
  }
</style>
