<template>
  <div class="info-grid">
    <staff-card v-for="staff in info" :key="staff.id" :staff="staff" class="info-grid__staff" />
  </div>
</template>

<script setup lang="ts">
import StaffCard from 'components/UI/InfoGrid/StaffCard.vue';

const props = defineProps({
  info: {
    type: Array,
    required: true,
  }
})

</script>

<style scoped lang="scss">
  .info-grid {
    display: grid;
    grid-template-columns: 49% 49%;
    flex-direction: column;

    gap: 20px 2%;
    padding: 20px 8px;
    margin: 0 auto;
  }
</style>
