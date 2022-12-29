import {Service} from 'stores/service';
import {mainPageStore} from 'stores/MainPage/mainPage.store';
import {BASE_URL} from 'stores/consts';

export class MainPageService extends Service {
  private store;

  public constructor() {
    super();
    this.store = mainPageStore();
  }

  public get images() {
    return this.store.mainImages;
  }

  public get staff() {
    return this.store.staff;
  }

  public async loadImages() {
    const images = fetch(BASE_URL + '/')
      .then((response) => response.json())
      .then(data => data);

    images.then((res) => {
      this.store.SET_IMAGES_PAYLOAD(res.payload)
    });
  }

  public async loadStaff() {
    const staff = fetch(BASE_URL + '/staff')
      .then((response) => response.json())
      .then(data => data);

    staff.then(res => {
      this.store.SET_STAFF_PAYLOAD(res.payload)
    });
  }
}
