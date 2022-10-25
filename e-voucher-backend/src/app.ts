import { Server } from "@hapi/hapi";
import { AppDataSource } from "./database/data-source";
import { routes } from "./routes";
import { plugins } from "./plugins/plugins";
export { comprobanteController } from "./comprobante/comprobante.controller";

export const init = async () => {
  const server = new Server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: true,
    },
  });

  AppDataSource.initialize()
    .then(async () => {
      console.log("Database connection established");
    })
    .catch((error) => console.log(error));

  routes(server, AppDataSource);
  await server.register(plugins);
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (e) => {
  console.log(e);
  process.exit(0);
});