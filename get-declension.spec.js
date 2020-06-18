const assert = require('assert');
const getDeclension = require('./get-declension.js');

describe('getDeclension', () => {
  it('it works', () => {
    const declension = getDeclension(3, ['яблоко', 'яблока', 'яблок']);
    assert.strictEqual(declension, 'яблока');
  });
});
