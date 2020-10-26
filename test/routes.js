const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

chai.use(chaiHttp);
chai.should();

describe("rpi", () => {
    describe("GET /rpi", () => {
        it("should get rpi status", (done) => {
             chai.request(app)
                 .get('/rpi')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
        });

        it("should get rpi status of a single pin", (done) => {
            chai.request(app)
                .get('/rpi/27')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                 });
        });
    });
});
