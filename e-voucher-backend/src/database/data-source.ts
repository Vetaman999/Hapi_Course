import "reflect-metadata";
import { DataSource } from "typeorm";
import { Comprobante } from "./entities/comprobante.entity";
import { ComprobanteAnticipo } from "./entities/comprobante_anticipo.entity";
import { User } from "./entities/user.entity";
import { Afiliado } from "./entities/afiliado.entity";  

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "12345",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [Comprobante, ComprobanteAnticipo, User, Afiliado],
  migrations: [],
  subscribers: [],
});
