let chai = require('chai');
let chaiHttp = require('chai-http');
const expert = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000/tweets';

describe('Get tweets containing a Hashtag', () => {
    it('Should return a list of tweets', (done) => {
        chai.request(url)
        .get('/etermax')
        .end( function(err,res) {
            // console.log(res.body)
            expert(res).to.have.status(200);
            done()
        });
    });
})