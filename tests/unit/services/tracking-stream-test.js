import { module, test } from 'qunit';
import { setupTest } from 'tracking-resource/tests/helpers';

module('Unit | Service | tracking-stream', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:tracking-stream');
    assert.ok(service);
  });
});
