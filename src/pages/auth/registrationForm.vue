<template>
  <div class="registration">
    <input v-model="User.email" id="email" type="email" class="registration__input" placeholder="email">
    <input v-model="User.password" id="password" type="password" class="registration__input" placeholder="Пароль">
    <input v-model="User.repPassword" id="password" type="password" class="registration__input" placeholder="Повторите пароль">
    <input v-model="User.login" id="login" type="text" class="registration__input" placeholder="Логин">
    <input v-model="User.name" id="name" type="text" class="registration__input" placeholder="Имя">
    <input v-model="User.surname" id="surname" type="text" class="registration__input" placeholder="Фамилия">
    <div class="registration__button" @click="registrate">Зарегистрироваться</div>
    <div class="registration__link" @click="gotoSignIn">Уже есть аккаунт?</div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
import {AuthService} from 'stores/Auth/auth.service';
import {UserDto} from 'stores/main.types';

const router = useRouter();
const authService = new AuthService();

const User: UserDto = {
  email: '',
  password: '',
  repPassword: '',
  login: '',
  name: '',
  surname: '',
};

function registrate() {
  console.log(JSON.stringify(User));
  const isPasswordsMatch = checkPasswords(User.password, User.repPassword)

  if (!isPasswordsMatch) {
    throw new Error('Пароли не совпадают!');
  }

  const payload = authService.registerNewUser(User);
}

function gotoSignIn() {
  router.push({path: '/signup'});
}

function checkPasswords(password1: string, password2: string): boolean {
  return password1 === password2;
}

</script>

<style scoped lang="scss">
  @import 'src/css/quasar.variables.scss';

  .registration {
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
