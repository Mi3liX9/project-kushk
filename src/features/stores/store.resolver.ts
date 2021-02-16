import {
  Ctx,
  Mutation,
  Query,
  Resolver,
  InputType,
  Field,
  Arg,
} from "type-graphql";
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

@InputType()
class FindSotreDto {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  title?: string;
}

@Resolver()
export class StoreResolver {
  @Query(() => [Store])
  async stores(@Ctx() { em }: ContextType) {
    return await em.find(Store, {});
  }

  @Query(() => Store, { nullable: true })
  async store(@Arg("data") data: FindSotreDto, @Ctx() { em }: ContextType) {
    const { id, title } = data;
    return await em.findOne(Store, {
      $or: [{ title }, { id }],
    });
  }

  @Mutation(() => Store)
  async createStore(@Ctx() { em }: ContextType, @Arg("title") title: string) {
    const store = em.create(Store, { title });
    await em.persistAndFlush(store);
    return store;
  }
}
