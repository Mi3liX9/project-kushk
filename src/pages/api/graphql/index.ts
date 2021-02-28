import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { MikroORM } from "@mikro-orm/core";
import { startOrm } from "src/utils/database/mikroorm";
import { contextResolver as context } from "src/utils/context";
import { schema } from "src/utils/graphql/graphql-schema";

let apolloServerHandler: (req: any, res: any) => Promise<void>;

const getApolloServerHandler = async (orm: MikroORM) => {
  if (!apolloServerHandler) {
    const apolloServer = new ApolloServer({
      schema,
      context,
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
