import {defineStore} from 'pinia';
import {RecordDto, ServiceFullDto} from 'stores/main.types';

export const serviceStore = defineStore({
  id: 'service',

  state: () => ({
    service: [] as ServiceFullDto[],
    records: [] as RecordDto[],
  }),

  actions: {
    SET_SERVICE_PAYLOAD(payload: ServiceFullDto[]) {
      this.service = payload;
    },

    SET_NEW_RECORD(payload: RecordDto) {
      this.records.push(payload);
    },

    DELETE_RECORD(payload: RecordDto) {
      this.records = this.records.filter(record => record.id !== payload.id);
    }
  }
})
