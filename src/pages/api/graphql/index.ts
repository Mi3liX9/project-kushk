import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { buildSchemaSync } from "type-graphql";
import { MikroORM } from "@mikro-orm/core";
import { StoreResolver } from "../../../features/stores/store.resolver";
import { setupConnection } from "src/utils/server/mikroorm";

const schema = buildSchemaSync({ resolvers: [StoreResolver] });

let apolloServerHandler: (req: any, res: any) => Promise<void>;

const getApolloServerHandler = async (orm: MikroORM) => {
  if (!apolloServerHandler) {
    const apolloServer = new ApolloServer({
      schema,
      context: () => ({
        em: orm.em.fork(),
      }),
    });

    apolloServerHandler = apolloServer.createHandler({
      path: "/api/graphql",
    });
  }
  return apolloServerHandler;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const orm = await setupConnection();
  const apolloServerHandler = await getApolloServerHandler(orm);
  return apolloServerHandler(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};