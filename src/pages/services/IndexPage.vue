<template>
  <div class="services">
    <div class="services__header">
      {{ service?.name }}
    </div>
    <div class="services__image">
      <spa-image :src="service?.image_url" />
    </div>
    <div class="services__description">
      {{ service?.description }}
    </div>
    <div class="services__info">
      <div class="services__date">Возможна запись на дату: {{ date[0] }}</div>
      <div class="services__info-staff">
        К мастеру: {{ service?.staff_name }} {{ service?.staff_surname }}
      </div>
      <div class="service__info-price">
        По цене: {{ service?.price }} ₽
      </div>
    </div>

    <div class="services__record" @click="createRecord">Записаться</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ServiceService } from 'stores/Service/service.service';
import SpaImage from 'components/UI/SpaImage/SpaImage.vue';
import { AuthService } from 'stores/Auth/auth.service';
const router = useRouter();
const route = useRoute();

const serviceService = new ServiceService();
const authService = new AuthService();

serviceService.loadService(+route.params.id);
const service = computed(() => serviceService.service);

const user = authService.user;

const date = computed(() => service.value?.date);

function createRecord() {
  if (!authService.user.email) {
    router.push({ path: '/signup' });
    return;
  }

  serviceService.createRecord(service);
}
</script>

<style scoped lang="scss">
@import 'src/css/quasar.variables.scss';

.services {
  padding: 8px;
  color: $font-grey;

  &__header {
    font-size: 24px;
    line-height: 28px;
    max-height: 28px;
    margin-top: 24px;
    margin-left: 8px;
    font-weight: 600;
    color: $font-grey;
  }

  &__description {
    font-size: 14px;
    font-weight: 400;
    margin-top: 32px;
    margin-bottom: 24px;
  }

  &__info {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }

  &__record {
    background-color: $positive;
    padding: 12px;
    color: $font-main;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    border-radius: 10px;
    max-width: 50%;
    margin: 20px auto;
    transition: 0.3s;

    &:hover {
      color: $font-grey;
      background-color: $secondary;
    }
  }
}
</style>
