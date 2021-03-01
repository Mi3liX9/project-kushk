import {
  Collection,
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { Field, Float, ID, ObjectType } from "type-graphql";
import { Store } from "../stores/store";

@Entity()
@ObjectType()
export class Product {
  @PrimaryKey()
  _id: ObjectId;

  @SerializedPrimaryKey()
  @Field(() => ID)
  id: string;

  @Property()
  @Field(() => String)
  title: string;

  @Property()
  @Field(() => String, { nullable: true })
  description?: string;

  @Property()
  @Field(() => [String])
  images: string[];

  @Property()
  @Field(() => Float)
  price: number;

  @ManyToOne(() => Store)
  @Field(() => Store)
  store: Store;
}
