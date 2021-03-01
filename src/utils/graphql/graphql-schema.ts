import { StoreResolver } from "src/features/stores/store.resolver";
import { ProductResolver } from "src/features/products/product.resolver";
import { buildSchemaSync } from "type-graphql";

export const schema = buildSchemaSync({
  resolvers: [StoreResolver],
});
