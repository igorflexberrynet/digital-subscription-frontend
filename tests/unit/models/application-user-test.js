import { moduleForModel, test } from 'ember-qunit';

moduleForModel('application-user', 'Unit | Model | application-user', {
  // Specify the other units that are required for this test.
  needs: [
    'model:application-user',
    'model:employee-in-organization',
    'model:organization',
    'model:service',
    'model:subscription',
    'model:visit'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
