const expect = require('chai').expect
const server = require('../server');

describe('test', () => {
    it('should reaturn a string', () => {
        expect('ci with travis').to.equal('ci with travis');
    });
});