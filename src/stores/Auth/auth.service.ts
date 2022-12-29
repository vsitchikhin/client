import {Service} from 'stores/service';
import {authStore} from 'stores/Auth/auth.store';
import {BASE_URL} from 'stores/consts';
import {UserDto, UserShortDto} from 'stores/main.types';

export class AuthService extends Service {
  private store;

  public constructor() {
    super();
    this.store = authStore();
  }

  public get user() {
    return this.store.user;
  }

  public async registerNewUser(user: UserDto) {
    const payload = await fetch(BASE_URL + '/login', {
      method: 'POST',
      body: JSON.stringify(user),
    });

    return payload.json();
  }

  public async loginUser(user: UserShortDto) {
    if (this.user.email) {
      return;
    }

    const payload = fetch(BASE_URL + '/signup', {
      method: 'POST',
      body: JSON.stringify(user),
    }).then(res => res.json()).then(data => data);

    payload.then(res => {
      this.store.SET_USER_PAYLOAD(res.payload[0])
    });
  }

  public logout() {
    this.store.SET_USER_PAYLOAD({} as UserDto)
  }
}
