<template>
  <q-page class="main-page">
    <div class="main-page__header">Главная страница</div>
    <image-gallery :images="images" class="main-page__gallery" />
    <div class="main-page__header">Персонал</div>
    <info-grid :info="staff" />
  </q-page>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {MainPageService} from 'stores/MainPage/mainPage.service';
import ImageGallery from 'components/UI/ImageGallery/ImageGallery.vue';
import InfoGrid from 'components/UI/InfoGrid/InfoGrid.vue';

const mainPageService = new MainPageService();

mainPageService.loadImages();
mainPageService.loadStaff();

const images = computed(() => mainPageService.images);
const staff = computed(() => mainPageService.staff);

</script>

<style scoped lang="scss">
  @import 'src/css/quasar.variables.scss';

  .main-page {
    &__gallery {
      margin-top: 36px;
    }

    &__header {
      font-size: 24px;
      line-height: 28px;
      max-height: 28px;
      margin-top: 24px;
      margin-left: 8px;
      font-weight: 600;
      color: $font-grey;
    }
  }
</style>
