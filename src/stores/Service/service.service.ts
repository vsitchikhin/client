import { Service } from 'stores/service';
import { serviceStore } from 'stores/Service/service.store';
import {catalogStore} from 'stores/CatalogPage/catalog.store';

export class ServiceService extends Service {
  private store;
  private servicesStore;

  public constructor() {
    super();
    this.store = serviceStore();
    this.servicesStore = catalogStore()
  }

  public get service() {
    return this.store.service;
  }

  public get records() {
    return this.store.records;
  }

  public async loadRecords(body: any) {
    console.log(body);
  }

  public async loadService(id: number) {
    const services = this.servicesStore.services;
    const service = services.find(service => service.id === id);
    this.store.SET_SERVICE_PAYLOAD(service);
  }

  public async createRecord(service: any) {
    this.store.SET_NEW_RECORD(service)
  }

  public async deleteRecord(record) {
    this.store.DELETE_RECORD(record);
  }
}
