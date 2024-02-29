const chai = require('chai');

const calculateNumber = require('./2-calcul_chai.js');
describe('calculateNumber using chai', () => {
  describe('test SUM', () => {
    it('not rounded', () => {
      chai.expect(calculateNumber('SUM', 1, 1)).to.be.equal(2);
      chai.expect(calculateNumber('SUM', 1, 3)).to.be.equal(4);
    });

    it('has decimal point >= 0.5 ', () => {
      chai.expect(calculateNumber('SUM', 1.5, 1)).to.be.equal(3);
      chai.expect(calculateNumber('SUM', 1, 2.6)).to.be.equal(4);
      chai.expect(calculateNumber('SUM', 1.5, 2.6)).to.be.equal(5);
      chai.expect(calculateNumber('SUM', 1.4, 2.6)).to.be.equal(4);
    });

    it('one arg has decimal point >= 0.5 ', () => {
      chai.expect(calculateNumber('SUM', 1.4, 1)).to.be.equal(2);
      chai.expect(calculateNumber('SUM', 1, 2.1)).to.be.equal(3);
      chai.expect(calculateNumber('SUM', 1.4, 1.4)).to.be.equal(2);
    });
  });
  describe('test SUBTRACT', () => {
    it('not rounded', () => {
      chai.expect(calculateNumber('SUBTRACT', 1, 1)).to.be.equal(0);
      chai.expect(calculateNumber('SUBTRACT', 1, 3)).to.be.equal(-2);
    });

    it('has decimal point >= 0.5 ', () => {
      chai.expect(calculateNumber('SUBTRACT', 1.5, 2.6)).to.be.equal(-1);
      chai.expect(calculateNumber('SUBTRACT', 1.4, 2.6)).to.be.equal(-2);
    });

    it('one arg has decimal point >= 0.5 ', () => {
      chai.expect(calculateNumber('SUBTRACT', 1.4, 1)).to.be.equal(0);
      chai.expect(calculateNumber('SUBTRACT', 1, 2.1)).to.be.equal(-1);
      chai.expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.be.equal(0);
    });
  });

  describe('test DIVIDE', () => {
    it('not rounded', () => {
      chai.expect(calculateNumber('DIVIDE', 1, 1)).to.be.equal(1);
      chai.expect(calculateNumber('DIVIDE', 1, 3)).to.be.equal(1 / 3);
      chai.expect(calculateNumber('DIVIDE', 1.5, 2)).to.be.equal(1);
    });
  });

  describe('test error', () => {
    it('error', () => {
      chai.expect(calculateNumber('DIVIDE', 1, 0)).to.be.equal('Error');
      chai.expect(calculateNumber('not a type', 1, 3)).to.be.equal('Error');
      chai.expect(calculateNumber('DIVIDE', 1, 0.4)).to.be.equal('Error');
    });
  });
});
