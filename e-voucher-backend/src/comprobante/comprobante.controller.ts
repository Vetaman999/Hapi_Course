import { Request, ResponseToolkit, ServerRoute } from "@hapi/hapi";
import { DataSource, Repository } from "typeorm";
import { PAGE_tAKE } from "../consts";
import { Comprobante } from "../database/entities/comprobante.entity";
import { createComprobante } from "./resources/createComprobante";

export const comprobanteController = (
  dataSource: DataSource
): Array<ServerRoute> => {
  const comprobanteRepository: Repository<Comprobante> =
    dataSource.getRepository(Comprobante);
  return [
    {
      method: "GET",
      path: "/comprobantes",
      options: {
        description: "Get comprobantes",
        notes: "Returns a list of comprobantes",
        tags: ["api"],
      },
      handler: async ({ query }: Request, h: ResponseToolkit, err?: Error) => {
        const options = { where: { ...query } };
        let page = options.where.page || 1;
        const limit = PAGE_tAKE;
        let skip = (page - 1) * limit;
        return await comprobanteRepository.find({
          take: limit,
          skip: skip,
          order: { cpec_fechaemision: "DESC" },
        });
      },
    },
    {
      method: "GET",
      path: "/comprobantes/ruc/{ruc}",
      options: {
        description: "Get comprobante by ruc",
        notes: "Returns a comprobante by the ruc passed in the path",
        tags: ["api"],
      },
      handler: async (
        { params: { ruc }, query }: Request,
        h: ResponseToolkit,
        err?: Error
      ) => {
        const options = { where: { ...query } };
        let page = options.where.page || 1;
        const limit = PAGE_tAKE;
        let skip = (page - 1) * limit;
        return comprobanteRepository.find({
          take: limit,
          skip: skip,
          where: { cpec_ndoreceptor: ruc },
          order: { cpec_fechaemision: "DESC" },
        });
      },
    },
    {
      method: "POST",
      path: "/comprobantes",
      options: {
        description: "Post comprobante",
        notes: "Creates a new comprobante",
        tags: ["api"],
      },
      handler: async (
        { payload }: Request,
        h: ResponseToolkit,
        err?: Error
      ) => {
        const newComprobante = payload as createComprobante;
        try {
          return await comprobanteRepository.save(newComprobante);
        } catch (error) {
          console.log(error);
        }
      },
    },
    {
      method: "DELETE",
      path: "/comprobantes/{id}",
      options: {
        description: "Delete comprobante",
        notes: "Deletes a comprobante by the id passed in the path",
        tags: ["api"],
      },
      handler: async (
        { params: { id } }: Request,
        h: ResponseToolkit,
        err?: Error
      ) => {
        try {
          return await comprobanteRepository.delete(id);
        } catch (error) {
          console.log(error);
        }
      },
    },
  ];
};
