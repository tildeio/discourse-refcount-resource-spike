import { module, test } from 'qunit';
import { setupRenderingTest } from 'tracking-resource/tests/helpers';
import { render, click, pauseTest } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Row /><Row />`);

    await click('.row:nth-child(1) input');
    await click('.row:nth-child(2) input');
    await click('.row:nth-child(1) input');
    await click('.row:nth-child(2) input');
    console.log('end of test');
    // await click('input');

    // assert.dom(this.element).hasText('');

    // // Template block usage:
    // await render(hbs`
    //   <Row>
    //     template block text
    //   </Row>
    // `);

    // assert.dom(this.element).hasText('template block text');
  });
});
