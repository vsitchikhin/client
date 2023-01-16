import {defineStore} from 'pinia';

export const serviceStore = defineStore({
  id: 'service',

  state: () => ({
    service: [],
    records: [],
  }),

  actions: {
    SET_SERVICE_PAYLOAD(payload) {
      this.service = payload;
    },

    SET_NEW_RECORD(payload) {
      this.records.push(payload);
    },

    DELETE_RECORD(payload) {
      console.log(payload);
      console.log(this.records)
      this.records = this.records.filter(record => record.value.id !== payload.value.id);
    }
  }
})
