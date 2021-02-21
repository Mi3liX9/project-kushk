import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { MikroORM } from "@mikro-orm/core";
import { startOrm } from "src/utils/database/mikroorm";
import { buildSchemaSync } from "type-graphql";
import { StoreResolver } from "src/features/stores/store.resolver";
import { contextResolver as context } from "src/utils/context";

const schema = buildSchemaSync({ resolvers: [StoreResolver] });

let apolloServerHandler: (req: any, res: any) => Promise<void>;

const getApolloServerHandler = async (orm: MikroORM) => {
  if (!apolloServerHandler) {
    const apolloServer = new ApolloServer({
      schema,
      context,
      // context: () => ({
      //   em: orm.em.fork(),
      // }),
    });

    apolloServerHandler = apolloServer.createHandler({
      path: "/api/graphql",
    });
  }
  return apolloServerHandler;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const orm = await startOrm();
  const apolloServerHandler = await getApolloServerHandler(orm);
  return apolloServerHandler(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};
