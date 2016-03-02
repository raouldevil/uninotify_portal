'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.register([
    require('vision'),
    require('./routes/messages')
], (err) => {

  if (err) {
    throw err;
  }

  server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        layout: true,
        path: './views/templates',
        layoutPath: './views/layouts',
  });

  // Start the server
  server.start((err) => {
    console.log('Server running at:', server.info.uri);
  });

});
