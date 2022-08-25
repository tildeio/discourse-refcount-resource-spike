import Component from '@glimmer/component';
import { registerDestructor, associateDestroyableChild } from '@glimmer/destroyable';
import { service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class UserAvatarComponent extends Component {
  <template>
    <p>{{this.currentUser.username}}</p>
  </template>

  @service currentUser;

  constructor(...args) {
    super(...args);

    this.currentUser.tracking().link(this);
  }
}
