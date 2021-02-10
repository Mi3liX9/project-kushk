import { Field, Float, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => [String])
  images: string[];

  @Field(() => Float)
  price: number;
}
