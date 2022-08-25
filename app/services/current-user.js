import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import UserStream from '../models/user-stream';
import Refcount from '../models/refcount';

export default class CurrentUserService extends Service {
  @tracked username = null;

  // @use tracker = rc(() =>
  //   UserStream.listen((username) => {
  //     this.username = username;
  //   })
  // );

  #tracker = Refcount.create(() =>
    UserStream.listen((username) => {
      this.username = username;
    })
  ).link(this);

  #revision = 0;
  #interval = null;

  tracking() {
    return this.#tracker.clone();
  }
}
