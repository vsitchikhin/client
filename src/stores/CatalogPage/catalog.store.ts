import {defineStore} from 'pinia';
import {ServiceShortDto} from 'stores/main.types';

export const catalogStore = defineStore({
  id: 'catalog',

  state: () => ({
    services: [] as ServiceShortDto[],
  }),

  actions: {
    SET_SERVICES_PAYLOAD(payload: ServiceShortDto[]) {
      this.services = payload;
    }
  }
})
