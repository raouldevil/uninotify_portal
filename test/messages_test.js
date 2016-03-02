var expect = require('Chai').expect
var request = require('request')

var url = 'http://localhost:3000'

describe('routes', () => {
    it('/ should respond to GET', done => {
        request.get(url + "/messages", (error, response, body) => {
            expect(response.statusCode).to.equal(200)
            expect(response.body).to.include('Message:')
            done()
        })
    })
})