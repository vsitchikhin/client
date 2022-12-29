import {defineStore} from 'pinia';
import {UserDto} from 'stores/main.types';

export const authStore = defineStore({
  id: 'auth',

  state: () => ({
    user: {} as UserDto,
  }),

  actions: {
    SET_USER_PAYLOAD(payload: UserDto) {
      this.user = payload;
    }
  }
})
