const request = require('request');
const assert = require('assert');
describe('home', () => {
  it('should return 200', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      assert.equal(res.statusCode, 200);
      done();
    });
  });

  it('should return Welcome to the payment system', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      assert.equal(body, 'Welcome to the payment system');
      done();
    });
  });

  it('should return 404', (done) => {
    request('http://localhost:7865/any_endpoint', (err, res, body) => {
      assert.equal(res.statusCode, 404);
      done();
    });
  });
});
