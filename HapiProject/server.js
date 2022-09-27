'use strict'

//importamos hapi desde "@hapi/hapi" 
const Hapi = require('@hapi/hapi');
const location = require("hapi-geo-locate");
const inert = require("@hapi/inert");

//crear una funcion asincrona llamada "init"
const init = async () => {

    //crear una variable servidor
    const server = Hapi.Server({
        host: 'localhost',
        port: 9000
    });

    /*
    Forma 1:
    await server.register([{
        plugin: require("hapi-geo-locate"),
        options: {
            enabledByDefauld: true
        }
    }, {
        plugin: require('@hapi/inert')
    }
    ]);
    */

    //Forma 2
    await server.register(location);
    await server.register(inert);

    server.route([{
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return "Hello World...!!!"
        }
    }, {
        method: 'GET',
        path: '/users/{user?}',
        handler: (request, h) => {

            if (request.params.user) {
                return `Hello ${request.params.user}`;
            } else {
                return "Hello Stranger...!!!";
            }
        }
    }, {
        method: 'GET',
        path: '/location',
        handler: (request, h) => {
            return request.location;
        }
    }
    ]);

    await server.start();
    console.log(`Server started on: ${server.info.uri}`);

}

process.on('unhadledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();