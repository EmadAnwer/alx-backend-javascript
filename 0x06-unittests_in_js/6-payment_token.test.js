const { assert } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');
describe('getPaymentTokenFromAPI', () => {
  it("should return resolve with the value 'Promise'", () => {
    return getPaymentTokenFromAPI(true).then((response) => {
      assert.deepEqual(response, { data: 'Successful response from the API' });
    });
  });
});
