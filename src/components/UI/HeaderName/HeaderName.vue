<template>
  <div class="header-name">
    <div>{{name}}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
  @import 'src/css/quasar.variables.scss';

  .header-name {
    color: $font-main;
    font-size: 32px;
    line-height: 56px;
  }
</style>
