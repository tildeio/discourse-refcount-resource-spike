import UserAvatar from "./user-avatar";
import { tracked } from "@glimmer/tracking";
import Component from "@glimmer/component";
import { on } from "@ember/modifier";

export default class extends Component {
  <template>
    <div class="row">
      <label>
        <input type="checkbox" {{on "input" this.toggleAvatar}}>
        Show Avatar
      </label>
      {{#if this.showAvatar}}
        <p>
          <UserAvatar />
        </p>
      {{/if}}
    </div>
  </template>

  @tracked showAvatar = false;
  toggleAvatar = (e) => this.showAvatar = e.target.checked;
}
