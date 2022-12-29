<template>
  <div class="catalog">
    <div class="catalog__header">Каталог услуг</div>
    <service-card
      v-for="service in services"
      :key="service.id"
      :service="service"
      class="catalog__service-card"
    />
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {CatalogService} from 'stores/CatalogPage/catalog.service';
import ServiceCard from 'components/UI/ServiceCard/ServiceCard.vue';

const catalogService = new CatalogService();

catalogService.loadServices();

const services = computed(() => catalogService.services);
</script>

<style scoped lang="scss">
  .catalog {
    padding: 0 8px;

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
