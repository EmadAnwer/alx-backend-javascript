const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should return the sum of rounded numbers for integer inputs', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return the sum of rounded numbers for one integer and one float input', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return the sum of rounded numbers for two float inputs', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return the sum of rounded numbers for two float inputs rounding up', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
