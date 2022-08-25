/**
 * @typedef {import("../services/current-user.js/index.js").default} TrackingStreamService
 */

export default class UserTracker {
  /** @type {TrackingStreamService} */
  #service;
  #refcount = 0;

  constructor(service) {
    this.#service = service;
  }

  tracking() {
    console.log('tracking for the first time');

    if (this.#refcount++ === 0) {
      this.#service.subscribe(this);
    }

    return () => {
      if (--this.#refcount > 0) {
        return;
      }

      console.log('no longer tracking');

      this.#service.unsubscribe();
    };
  }
}
