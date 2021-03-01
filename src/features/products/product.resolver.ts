import { ContextType } from "src/types/ContextType";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { Store } from "../stores/store";
// import { Product } from "./product";

@InputType()
class AddProductDto {
  @Field(() => String)
  title: string;

  @Field(() => [String])
  images: string[];

  @Field(() => String)
  description?: string;
}

// @Resolver()
// export class ProductResolver {
//   @Query(() => [Product])
//   products(@Ctx() ctx: ContextType) {
//     return ctx.em.find(Product, {}, ["store"]);
//   }

//   @Query(() => Product)
//   product(@Ctx() { em }: ContextType, @Arg("id") id: string) {
//     return em.findOne(Product, { id }, ["store"]);
//   }

//   @Mutation(() => Product)
//   async addProduct(
//     @Ctx() { em }: ContextType,
//     @Arg("store") storeId: string,
//     @Arg("data") data: AddProductDto
//   ) {
//     const store = await em.findOne(Store, { id: storeId });
//     if (store) {
//       const product = em.create(Product, {
//         title: data.title,
//         description: data.description,
//         images: data.images,
//         store: storeId,
//       });

//       await em.persistAndFlush(product);

//       return product;
//     }
//     return {};
//   }
// }
