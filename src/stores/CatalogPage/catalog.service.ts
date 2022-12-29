import {Service} from 'stores/service';
import {catalogStore} from 'stores/CatalogPage/catalog.store';
import {BASE_URL} from 'stores/consts';

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
    const services = fetch(BASE_URL + '/services')
      .then((response) => response.json())
      .then(data => data);

    services.then((res) => {
      console.log(res.payload)
      this.store.SET_SERVICES_PAYLOAD(res.payload);
    });
  }
}
