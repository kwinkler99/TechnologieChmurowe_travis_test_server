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
        it("send put request", (done) => {
            let new_info = {
                id: 0,
                update: 'change information'
            }
            chai.request(app)
                .put('/' + new_info.id)
                .send({update: new_info.update})
                .end((err, res) => {
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.eql({ update: 'change information' })

                    done(); 
                })
        })
    })

    describe('delete test', () => {
        it("send delete request", (done) => {
            let delete_info = {
                id: 0
            }
            chai.request(app)
                .delete('/' + delete_info.id)
                .end((err, res) => {
                    expect(res.body).to.eql({ deleteId: delete_info.id })

                    done(); 
                })
        })
        it("send get request", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(res.body.array).to.have.lengthOf(0)
                    done(); 
                })
        });
    })
});