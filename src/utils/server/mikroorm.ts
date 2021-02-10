import { MikroORM } from "@mikro-orm/core";
import { Store } from "src/features/stores/store";

const entities = [Store];

export const setupConnection = async () =>
  await MikroORM.init({
    entities,
    type: "mongo",
    clientUrl: process.env.MONGO_CLIENT_URL,
  });
