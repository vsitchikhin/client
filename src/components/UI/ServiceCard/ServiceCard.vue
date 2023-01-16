<template>
  <div class="service-card">
    <spa-image :src="service.image_url" class="service-card__image" />
    <div class="service-card__container">
      <div class="service-card__name">{{service.name}}</div>
      <div class="service-card__description">
        <text-shaver :max-height="72" :text="service.description" />
      </div>
    </div>
    <div class="space-card__container">
      <div class="service-card__price">{{service.price}} ₽</div>
      <div class="service-card__button" @click="gotoService">Узнать подробнее</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SpaImage from 'components/UI/SpaImage/SpaImage.vue';
import TextShaver from 'components/UI/AuthIcon/TextShaver/TextShaver.vue';
import {useRouter} from 'vue-router';

const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
})

const router = useRouter();


function gotoService() {
  router.push({ path: `/service/${props.service?.id}/` })
}
</script>

<style scoped lang="scss">
  @import 'src/css/quasar.variables.scss';

  .service-card {
    width: 100%;
    height: 100%;
    max-height: 172px;
    margin: 24px 0;
    display: flex;
    color: $font-grey;
    border: 1px solid $font-grey;
    position: relative;

    &__container {
      max-width: 40%;
      height: 100%;
      padding: 4px 12px;

      &:last-child {
        max-width: 30%;
      }
    }

    &__image {
      max-width: 30%;
    }

    &__description {
      font-size: 14px;
      font-weight: 400;
    }

    &__name {
      font-size: 20px;
      font-weight: 600;
    }

    &__price {
      font-size: 16px;
      font-weight: 600;
      margin-top: 40%;
      margin-left: 15%;
      width: 100%;
    }

    &__button {
      position: absolute;
      bottom: 20px;
      right: 4px;
      padding: 8px 4px;
      border-radius: 8px;
      font-size: 8px;
      font-weight: 600;
      background-color: $secondary;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        background-color: $positive;
        transition: 0.3s;
        color: $font-main;
      }
    }
  }
</style>
