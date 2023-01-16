import {Service} from 'stores/service';
import {authStore} from 'stores/Auth/auth.store';

export class AuthService extends Service {
  private store;

  public constructor() {
    super();
    this.store = authStore();
  }

  public get user() {
    return this.store.user;
  }

  public async registerNewUser(user: any) {
    this.store.PUSH_NEW_USER(user)
  }

  public async loginUser(user: any) {
    const users = this.store.users;
    const loginUser = users.find(u => u.login === user.login && u.password === user.password);
    this.store.SET_USER_PAYLOAD(loginUser);
  }

  public logout() {
    this.store.SET_USER_PAYLOAD({})
  }
}
