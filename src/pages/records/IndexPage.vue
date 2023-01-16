<template>
  <div class="records">
    <template v-if="isUserLoginned">
      <div class="records__header">Мои записи</div>
      <record-card v-for="record in records" :key="record.id" :record="record" />
    </template>
    <div v-else class="records__header">
      Для просмотра записей необходимо зарегистрироваться
      <div class="records__header-link" @click="gotoLogin">Войти</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {AuthService} from 'stores/Auth/auth.service';
import {useRouter} from 'vue-router';
import {ServiceService} from 'stores/Service/service.service';
import RecordCard from 'components/UI/RecordCard/RecordCard.vue';

const router = useRouter();

const authService = new AuthService();
const serviceService = new ServiceService();
const user = authService.user;
const records = computed(() => serviceService.records);

const isUserLoginned = computed(() => !!authService.user.email);

const body = {
  user_id: user?.id,
}

if (user.id) {
  serviceService.loadRecords(body);
}

function gotoLogin() {
  router.push({path: '/signup'})
}
</script>

<style scoped lang="scss">
  @import 'src/css/quasar.variables.scss';

  .records {
    padding: 8px;

    &__header {
      font-size: 24px;
      line-height: 28px;
      max-height: 28px;
      margin-top: 24px;
      margin-left: 8px;
      font-weight: 600;
      color: $font-grey;
    }

    &__header-link {
      margin: 8px auto;
      transform: translateX(-50%);
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      border-bottom: 1px solid $font-grey;
      transition: 0.3s;
      cursor: pointer;
      max-width: 44px;

      &:hover {
        color: $positive;
        border-color: $positive;
        transition: 0.3s;
      }
    }
  }
</style>
