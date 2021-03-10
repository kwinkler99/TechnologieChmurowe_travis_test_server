const expect = require('chai').expect
const chai = require('chai'), chaiHttp = require('chai-http');
const { app } = require('../server');

chai.use(chaiHttp);

describe('node test', () => {

    describe('get test', () => {
        it("send get request", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(res.body).to.be.an('object')
                    done(); 
                })
        });
    })

    describe('post test', () => {
        it("send post request", (done) => {
            let new_info = {
                new: 'new information'
            }
            chai.request(app)
                .post('/')
                .send(new_info)
                .end((err, res) => {
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.eql({ addSthNew: 'new information' })

                    done(); 
                })
        })
    })

    describe('put test', () => {
        
    })

    describe('delete test', () => {
        
    })
});