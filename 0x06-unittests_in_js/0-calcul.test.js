const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('not rounded', () => {
    assert.equal(calculateNumber(1, 1), 2);
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('has decimal point >= 0.5 ', () => {
    assert.equal(calculateNumber(1.5, 1), 3);
    assert.equal(calculateNumber(1, 2.6), 4);
    assert.equal(calculateNumber(1.5, 2.6), 5);
    assert.equal(calculateNumber(1.4, 2.6), 4);
  });

  it('one arg has decimal point >= 0.5 ', () => {
    assert.equal(calculateNumber(1.4, 1), 2);
    assert.equal(calculateNumber(1, 2.1), 3);
    assert.equal(calculateNumber(1.4, 1.4), 2);
  });

  it('should return NaN', () => {
    assert.equal(calculateNumber(), NaN);
    assert.equal(calculateNumber(1, 'e'), NaN);
    assert.equal(calculateNumber('e', 'e'), NaN);
  });
});
