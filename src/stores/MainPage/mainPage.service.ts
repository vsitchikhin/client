import {Service} from 'stores/service';
import {mainPageStore} from 'stores/MainPage/mainPage.store';
import {staffStore} from 'stores/MainPage/staff.store';
import {imagesStore} from 'stores/images/images.store';

export class MainPageService extends Service {
  private store;
  private staffStore;
  private imagesStore;

  public constructor() {
    super();
    this.store = mainPageStore();
    this.staffStore = staffStore();
    this.imagesStore = imagesStore();
  }

  public get images() {
    return this.store.mainImages;
  }

  public get staff() {
    return this.store.staff;
  }

  public async loadImages() {
    const images = this.imagesStore.images;
    this.store.SET_IMAGES_PAYLOAD(images);
  }

  public async loadStaff() {
    const staff = this.staffStore.staff;
    this.store.SET_STAFF_PAYLOAD(staff);
  }
}
