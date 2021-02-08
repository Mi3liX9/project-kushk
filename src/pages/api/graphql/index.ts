import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { buildSchemaSync, Field, ID, Query, Resolver } from "type-graphql";
// import nc from "next-connect";

// const handler = nc<NextApiRequest, NextApiResponse>();

@Resolver()
class Store {
  @Query(() => String)
  hello() {
    return "Hello";
  }
}

const schema = buildSchemaSync({ resolvers: [Store] });

let apolloServerHandler: (req: any, res: any) => Promise<void>;

const getApolloServerHandler = async () => {
  if (!apolloServerHandler) {
    const apolloServer = new ApolloServer({
      schema,
    });

    apolloServerHandler = apolloServer.createHandler({
      path: "/api/graphql",
    });
  }
  return apolloServerHandler;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServerHandler = await getApolloServerHandler();
  return apolloServerHandler(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};
