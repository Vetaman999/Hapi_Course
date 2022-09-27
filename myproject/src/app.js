const hapi = require('@hapi/hapi')

const init = async () => {

    const server = hapi.server({
        port: 3000,
        host: 'localhost'
    })
    await server.start();
    console.log('Server running on: ', server.info.uri);

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return "hello World"
        }
    });

    server.route({
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return "About"
        }
    });

    server.route({
        method: 'GET',
        path: '/hello/{user}',
        handler: (request, h) => {
            return `Hello ${request.params.user}!`;
        }
    })

}

init()