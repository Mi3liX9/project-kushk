import {
  Entity,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { Field, ID, ObjectType } from "type-graphql";
import { Category } from "../categories/category";
import { Product } from "../products/Product";

@Entity()
@ObjectType()
export class Store {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @Property()
  type: string;

  @Field(() => String)
  @Property()
  title: string;

  @Field(() => String)
  @Property()
  icon: string;

  @Field(() => String, { nullable: true })
  @Property()
  description?: string;

  @Field(() => [Product])
  // @Property()
  products: Product[];

  // @Field(() => [Category])
  // categories: Category[];
}
