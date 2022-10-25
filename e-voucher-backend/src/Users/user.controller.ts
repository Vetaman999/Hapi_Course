import { Request, ResponseToolkit, ServerRoute } from "@hapi/hapi";
import { DataSource, Repository } from "typeorm";
import { User } from "../database/entities/user.entity";
import { Afiliado } from "../database/entities/afiliado.entity";

export const userController = (
    dataSource: DataSource
): Array<ServerRoute> => {
    const userRepository: Repository<User> =
        dataSource.getRepository(User);
    return [
        {
            method: "GET",
            path: "/users",
            options: {
                description: "Get comprobantes",
                notes: "Returns a list of comprobantes",
                tags: ["api"],
            },
            handler: async ({ query }: Request, h: ResponseToolkit, err?: Error) => {
                return await userRepository.find()
            },
        }
    ]
}