import { StoreResolver } from "app/features/stores/store.resolver";
import { ProductResolver } from "app/features/products/product.resolver";
import { buildSchemaSync } from "type-graphql";

export const schema = buildSchemaSync({
  resolvers: [StoreResolver, ProductResolver],
});
