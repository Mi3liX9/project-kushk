import { StoreResolver } from "src/features/stores/store.resolver";
import { buildSchemaSync } from "type-graphql";

export const schema = buildSchemaSync({ resolvers: [StoreResolver] });
