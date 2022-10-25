import { ServerRegisterPluginObject } from "@hapi/hapi";
import inert from "@hapi/inert";
import vision from "@hapi/vision";
import * as HapiSwagger from 'hapi-swagger';

const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
        title: 'API E-Voucher Documentation',
    }
};

export const plugins: Array<ServerRegisterPluginObject<any>> = [
    {
        plugin: inert
    },
    {
        plugin: vision
    },
    {
        plugin: HapiSwagger,
        options: swaggerOptions
    }
];