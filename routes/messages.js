'use strict';

exports.register = function(server, options, next) {

    server.route({
        method: 'GET',
        path: '/messages',
        handler: function(request, reply) {
            reply.view('messages_index',  { message: 'Hellow world!', sent: '21 August 201' });
        }
    });

    return next();
};

exports.register.attributes = {
    name: 'routes-messages'
};