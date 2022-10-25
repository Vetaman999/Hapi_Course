import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { DataSource } from "typeorm";
import { comprobanteController } from "./app";
import { userController } from "./Users/user.controller";



export const routes = (server: Server, dataSource: DataSource) => {
  server.route(comprobanteController(dataSource));
  server.route(userController(dataSource));
};
