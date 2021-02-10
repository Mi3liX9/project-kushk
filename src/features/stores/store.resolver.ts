import { Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Store } from "src/features/stores/store";
import { ContextType } from "src/pages/api/graphql";

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
  async stores(@Ctx() { entityManager }: ContextType) {
    return await entityManager.find(Store, {});
  }

  @Mutation(() => Store)
  async createStore(@Ctx() { entityManager }: ContextType) {
    const store = entityManager.create(Store, stores[0]);
    await entityManager.persistAndFlush(store);
    return store;
  }
}
