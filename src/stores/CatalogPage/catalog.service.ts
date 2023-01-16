import {Service} from 'stores/service';
import {catalogStore} from 'stores/CatalogPage/catalog.store';

export class CatalogService extends Service {
  private store;

  public constructor() {
    super();
    this.store = catalogStore();
  }

  public get services() {
    return this.store.services;
  }

  public async loadServices() {
    console.log('loaded');
  }
}
