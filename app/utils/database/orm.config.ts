import { Options } from "@mikro-orm/core";
import { AnyEntity, EntityClass } from "@mikro-orm/core/typings";
import { Product } from "app/features/products/product";
import { Store } from "app/features/stores/store";

type EntitiesType = EntityClass<AnyEntity<any>>[];

const entities: EntitiesType = [Store, Product];

const config: Options = {
  entities,
  type: "mongo",
  clientUrl: process.env.MONGO_CLIENT_URL,
};

export default config;
