import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import UserTracker from '../models/user-tracker';
import { registerDestructor } from '@glimmer/destroyable';

export default class CurrentUserService extends Service {
  @tracked subscribed = false;
  @tracked username = null;
  #tracker = new UserTracker(this);
  #revision = 0;
  #interval = null;

  subscribe() {
    console.log('subscribed');

    this.#interval = setInterval(() => {
      this.username = `@johndoe ${this.#revision++}`;
    }, 1000);

    registerDestructor(this, () => {
      this.unsubscribe();
    });

    this.subscribed = true;
  }

  unsubscribe() {
    console.log('unsubscribed');

    clearInterval(this.#interval);

    this.subscribed = false;
  }

  tracking() {
    return this.#tracker.tracking();
  }
}
