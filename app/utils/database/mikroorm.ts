import { MikroORM } from "@mikro-orm/core";
import config from "./orm.config";

export const startOrm = async () => await MikroORM.init(config);
