import {Service} from 'stores/service';
import {RecordDto, ServiceFullDto} from 'stores/main.types';
import {serviceStore} from 'stores/Service/service.store';
import {BASE_URL} from 'stores/consts';

export class ServiceService extends Service {
  private store;

  public constructor() {
    super();
    this.store = serviceStore();
  }

  public get service() {
    return this.store.service;
  }

  public get records() {
    return this.store.records;
  }

  public async loadRecords(body: any) {
    const records = fetch(`${BASE_URL}/records`, {
      method: 'POST',
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then(data => data);

    records.then((res) => {
      console.log('payload');
      console.log(res.payload)
      res.payload.forEach((record: RecordDto) => {
        this.store.SET_NEW_RECORD(record);
      })
    })
  }

  public async loadService(id: number) {
    const service = fetch(`${BASE_URL}/service/${id}`)
      .then((response) => response.json())
      .then(data => data);

    service.then((res) => {
      console.log(res.payload)
      this.store.SET_SERVICE_PAYLOAD(res.payload)
    })
  }

  public async createRecord(service: ServiceFullDto) {
    console.log(service);

    const newRecord = fetch(`${BASE_URL}/newRecord`, {
      method: 'POST',
      body: JSON.stringify(service),
    })
      .then((response) => response.json())
      .then(data => data);

    newRecord.then(res => this.store.SET_NEW_RECORD(res.payload));
  }

  public async deleteRecord(record: RecordDto) {
    const deleteRecord = fetch(`${BASE_URL}/deleteRecord`, {
      method: 'POST',
      body: JSON.stringify(record),
    })
      .then((response) => response.json())
      .then(data => data);

    this.store.DELETE_RECORD(record);
  }
}
