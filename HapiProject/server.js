'use strict'

//importamos hapi desde "@hapi/hapi" 
const Hapi = require('@hapi/hapi');
const location = require("hapi-geo-locate");
const inert = require("@hapi/inert");
const path = require('path');
const vision = require('@hapi/vision');

//crear una funcion asincrona llamada "init"
const init = async () => {

    //crear una variable servidor
    const server = Hapi.Server({
        host: 'localhost',
        port: 9000,
        routes: {
            files: {
                relativeTo: path.join(__dirname, 'static')
            }
        }
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
    await server.register(vision);

    server.route([{
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.file('welcome.html');
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
    }, {
        method: 'GET',
        path: '/download',
        handler: (resquest, h) => {
            return h.file('welcome.html', {
                mode: 'attachment',
                filename: 'welcome-donwload.html'
            });
        },
    }, {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            if(request.payload.username === "Vetaman999" && request.payload.password === "1234"){
                return h.file('logged-in.html');    
            } else {
                return h.file('cant-log-in.html');    
            }
        },      
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