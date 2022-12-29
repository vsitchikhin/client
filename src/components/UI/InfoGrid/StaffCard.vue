<template>
  <div class="staff-card">
    <div class="staff-card__fio">{{staff.name}} {{staff.surname}}</div>
    <spa-image :src="staff.url" class="staff-card__image" />
  </div>
</template>

<script setup lang="ts">
import {StaffDto} from 'stores/main.types';
import {PropType} from 'vue';
import SpaImage from 'components/UI/SpaImage/SpaImage.vue';

const props = defineProps({
  staff: {
    type: Object as PropType<StaffDto>,
    required: true,
  }
})
</script>

<style scoped lang="scss">
  @import 'src/css/quasar.variables.scss';

  .staff-card {
    font-size: 18px;
    color: $font-grey;
    font-weight: 600;
    width: 100%;

    &__image {
      width: 100%;
    }
  }
</style>
