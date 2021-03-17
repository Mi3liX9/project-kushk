import {
  Ctx,
  Mutation,
  Query,
  Resolver,
  InputType,
  Field,
  Arg,
} from "type-graphql";
import { Store } from "app/features/stores/store";
import { ContextType } from "app/utils/context";

@InputType()
class FindSotreDto {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  title?: string;
}

@InputType()
class CreateSotreDto {
  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  icon?: string;
}

@Resolver()
export class StoreResolver {
  @Query(() => [Store])
  async stores(@Ctx() { em }: ContextType) {
    return await em.find(Store, {}, ["products"]);
  }

  @Query(() => Store, { nullable: true })
  async store(@Arg("data") data: FindSotreDto, @Ctx() { em }: ContextType) {
    const { id, title } = data;
    return await em.findOne(
      Store,
      {
        $or: [{ title }, { id }],
      },
      ["products"]
    );
  }

  @Mutation(() => Store)
  async createStore(
    @Ctx() { em }: ContextType,
    @Arg("data") data: CreateSotreDto
  ) {
    const store = em.create(Store, data);
    await em.persistAndFlush(store);
    return store;
  }
}
