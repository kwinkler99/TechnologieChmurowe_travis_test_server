const expect = require('chai').expect
const server = require('../server');

describe('node test', () => {

    describe('get test', () => {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).to.equal({'array': []});
            done();
        });
    })

    describe('post test', () => {
        
    })

    describe('put test', () => {
        
    })

    describe('delete test', () => {
        
    })
    it('should reaturn a string', () => {
        expect('ci with travis').to.equal('ci with travis');
    });
});