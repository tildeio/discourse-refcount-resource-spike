import {
  destroy,
  associateDestroyableChild,
  registerDestructor,
} from '@glimmer/destroyable';

export default class Refcount {
  static create(factory) {
    const refcount = new Refcount(factory);

    return {
      link(parent) {
        associateDestroyableChild(parent, refcount);
        return refcount;
      },
    };
  }

  #refcount = 0;
  #factory;
  #instance = null;

  constructor(factory) {
    this.#factory = factory;
  }

  clone() {
    if (this.#refcount++ === 0) {
      console.log('Creating new instance of factory');
      this.#instance = this.#factory().link(this);
    }

    return new RefcountInstance(this.#instance, () => {
      if (--this.#refcount === 0) {
        this.#destroy();
      }
    });
  }

  #destroy() {
    console.log('Destroying factory');

    destroy(this.#instance);
    this.#instance = null;
  }
}

export class RefcountInstance {
  #value;

  constructor(instance, callback) {
    this.#value = instance;

    registerDestructor(this, callback);
  }

  link(parent) {
    associateDestroyableChild(parent, this);
    return this.#value;
  }
}
