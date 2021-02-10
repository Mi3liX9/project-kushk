import { MikroORM } from "@mikro-orm/core";
import { ApolloServer } from "apollo-server-micro";
import { StoreResolver } from "src/features/products/product.resolver";
import { buildSchemaSync } from "type-graphql";

const schema = buildSchemaSync({ resolvers: [StoreResolver] });

let apolloServerHandler: (req: any, res: any) => Promise<void>;

export const getApolloServerHandler = async (orm?: MikroORM) => {
  if (!apolloServerHandler) {
    const apolloServer = new ApolloServer({
      schema,
      context: () => ({
        entityManager: orm?.em.fork(),
      }),
    });

    apolloServerHandler = apolloServer.createHandler({
      path: "/api/graphql",
    });
  }
  return apolloServerHandler;
};
