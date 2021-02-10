import { MikroORM } from "@mikro-orm/core";
import { Store } from "src/features/stores/store";

const entities = [Store];

export const setupConnection = async () =>
  await MikroORM.init({
    entities,
    type: "mongo",
    clientUrl:
      "mongodb+srv://mighty:mighty@haladb.b5jdt.mongodb.net/kiosk?retryWrites=true&w=majority",
  });
