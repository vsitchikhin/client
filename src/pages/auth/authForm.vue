<template>
  <div class="auth">
    <input v-model="User.login" id="login" type="text" class="auth__input" placeholder="Логин">
    <input v-model="User.password" id="password" type="password" class="auth__input" placeholder="Пароль">
    <div class="auth__button" @click="signIn(User)">Войти</div>
    <div class="auth__link" @click="gotoLogin">Нет аккаунта?</div>
  </div>
</template>

<script setup lang="ts">
import {UserShortDto} from 'stores/main.types';
import {AuthService} from 'stores/Auth/auth.service';
import {useRouter} from 'vue-router';

const authService = new AuthService();
const router = useRouter();

const User: UserShortDto = {
  login: '',
  password: '',
}

function signIn(User: UserShortDto) {
  authService.loginUser(User);
  router.push({path: '/catalog'})
}

function gotoLogin() {
  router.push({ path: '/login' });
}
</script>

<style scoped lang="scss">
@import 'src/css/quasar.variables.scss';

.auth {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 40px auto;

  &__input {
    margin-top: 8px;
    border: none;
    padding-left: 4px;
    cursor: pointer;
  }

  &__button {
    margin-top: 12px;
    background-color: $secondary;
    padding: 8px 0;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: $font-grey;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: $positive;
      color: $font-main;
      transition: 0.3s;
    }
  }

  &__link {
    margin: 4px auto;
    border-bottom: 1px solid $font-grey;
    cursor: pointer;
    color: $font-grey;
    transition: 0.3s;

    &:hover {
      color: $positive;
      border-color: $positive;
      transition: 0.3s;
    }
  }
}
</style>
