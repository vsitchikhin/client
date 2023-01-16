import {defineStore} from 'pinia';

export const authStore = defineStore({
  id: 'auth',

  state: () => ({
    users: [] as any,
    user: {} as any,
  }),

  actions: {
    SET_USER_PAYLOAD(payload: any) {
      this.user = this.users.find(user => user.login === payload.login);
    },

    PUSH_NEW_USER(payload: any) {
      this.users.push(payload);
    }
  }
})
