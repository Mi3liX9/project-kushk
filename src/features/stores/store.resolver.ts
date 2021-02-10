import { Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Store } from "src/features/stores/store";
import { ContextType } from "src/types/ContextType";

export const stores: any[] = [
  {
    title: "معطم الفراتي",
    icon: "https://d.top4top.io/p_185160wxc1.jpg",
    type: "restaurant",
    description: "it is just a test",
  },
];

@Resolver()
export class StoreResolver {
  @Query(() => [Store])
  async stores(@Ctx() { em }: ContextType) {
    return await em.find(Store, {});
  }

  @Mutation(() => Store)
  async createStore(@Ctx() { em }: ContextType) {
    const store = em.create(Store, stores[0]);
    await em.persistAndFlush(store);
    return store;
  }
}
