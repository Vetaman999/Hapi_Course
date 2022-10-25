import * as Hapi from '@hapi/hapi';
import { Server, ResponseToolkit, Request } from 'hapi';
import 'colors';
import { get } from 'node-emoji';

const init = async () => {
    const server: Server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    await server.start().then();
    console.log(
        get('rocket'),
        `Server running on ${server.info.uri}`.green,
        get('rokect')
    );
};

init();