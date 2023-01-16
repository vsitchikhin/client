import { defineStore } from 'pinia';

export const mainPageStore = defineStore({
  id: 'main',

  state: () => ({
    mainImages: [] as any[],
    staff: [] as any[],
  }),

  actions: {
    SET_IMAGES_PAYLOAD(payload) {
      this.mainImages = payload;
    },

    SET_STAFF_PAYLOAD(payload) {
     this.staff = payload;
    }
  }
})
