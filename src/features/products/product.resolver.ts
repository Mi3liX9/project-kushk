import { Query, Resolver } from "type-graphql";
import { Store } from "src/features/stores/store";

@Resolver()
export class StoreResolver {
  @Query(() => [Store])
  stores() {
    return stores;
  }
}
