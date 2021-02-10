import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { EntityManager } from "@mikro-orm/core";
import { setupConnection } from "src/utils/server/mikroorm";
import { getApolloServerHandler } from "src/utils/type-graphql";

export interface ContextType {
  entityManager: EntityManager;
}

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
