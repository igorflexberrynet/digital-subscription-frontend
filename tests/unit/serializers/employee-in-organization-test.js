import { moduleForModel, test } from 'ember-qunit';

moduleForModel('employee-in-organization', 'Unit | Serializer | employee-in-organization', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:employee-in-organization',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:new-platform-digital-subscription-price-period',

    'model:application-user',
    'model:employee-in-organization',
    'model:organization',
    'model:service',
    'model:subscription',
    'model:visit'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
