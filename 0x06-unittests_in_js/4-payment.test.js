const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithMatch(consoleSpy, 'The total is: 10');
    sinon.assert.calledWithMatch(calculateNumberStub, 'SUM', 100, 20);
    consoleSpy.restore();
    calculateNumberStub.restore();
  });
});
