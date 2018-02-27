import { module, test } from 'qunit';
import { reject } from 'rsvp';

module('Unit | promise', function() {

  test('this fails unexpectedly', function(assert) {
    reject('should not throw');
    assert.ok(true);
  });

  test('without value id does not fail', function(assert) {
    reject();
    assert.ok(true);
  });

  test('passes with native Promise', function(assert) {
    Promise.reject('does not throw');
    assert.ok(true);
  });
});
