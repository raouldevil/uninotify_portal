var expect = require('Chai').expect
var request = require('request')

var url = 'http://localhost:8080'
var url2 = 'https://trainer-staging.mytimeslot.co.za'

describe('routes', () => {
    it('/ should respond to GET', done => {
        request.get(url + "/" + "?greeting=Hi!", (error, response, body) => {
            expect(response.statusCode).to.equal(200)
            expect(JSON.parse(response.body).greeting).to.equal('Hi!')
            done()
        })
    }),
})