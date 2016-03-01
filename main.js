var express = require('express')
var app = express()
require('./routes')(app)

var server = app.listen(8080, () => {
  var host = server.address().address
  var port = server.address().port

  console.log('Notifications app listening at http://%s:%s', host, port);
});