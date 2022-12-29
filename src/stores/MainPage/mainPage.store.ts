import { defineStore } from 'pinia';
import {Image} from 'components/UI/ImageGallery/imageGallery.types';
import {StaffDto} from 'stores/main.types';

export const mainPageStore = defineStore({
  id: 'main',

  state: () => ({
    mainImages: [] as Image[],
    staff: [] as StaffDto[],
  }),

  actions: {
    SET_IMAGES_PAYLOAD(payload: Image[]) {
      this.mainImages = payload;
    },

    SET_STAFF_PAYLOAD(payload: StaffDto[]) {
     this.staff = payload;
    }
  }
})
