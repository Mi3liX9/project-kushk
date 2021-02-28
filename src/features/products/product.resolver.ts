import { ContextType } from "src/types/ContextType";
import { Ctx, Query, Resolver } from "type-graphql";
import { Product } from "./Product";

@Resolver()
export class ProductResolver {
  @Query(() => [Product])
  products(@Ctx() ctx: ContextType) {
    return ctx.em.find(Product, {});
  }
}
