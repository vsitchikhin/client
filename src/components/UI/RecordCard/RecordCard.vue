<template>
  <div class="record-card">
    <div class="container">
      <div class="record-card__header">{{ record.value.name }}</div>
      <div class="record-card__price">{{ record.value.price }}</div>
      <div class="record-card__master">{{record.value.staff_name}}</div>
      <div class="record-card__date">{{record.value.date}}</div>
    </div>
    <div class="record-card__delete" @click="deleteRecord">
      <svg class="feather feather-trash-2 record-card__trash" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ServiceService} from 'stores/Service/service.service';

const props = defineProps({
  record: {
    type: Object,
    required: true,
  }
})

console.log(props.record);

const recordService = new ServiceService();

function deleteRecord() {
  recordService.deleteRecord(props.record);
}
</script>

<style scoped lang="scss">
@import 'src/css/quasar.variables.scss';

.record-card {
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  color: $font-grey;
  border: 1px solid $font-grey;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;

  &__trash {
    width: 44px;
    height: 44px;
    margin-top: 35%;
    margin-right: 24px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: $negative;
      transition: 0.3s;
    }
  }
}

</style>
