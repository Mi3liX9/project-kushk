import { Field, ID, ObjectType } from "type-graphql";
import { Category } from "../categories/category";
import { Store } from "../stores/store";

@ObjectType()
export class Section {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => [Store])
  stores: Store[];

  @Field(() => [Category])
  categories: Category[];
}
