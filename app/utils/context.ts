import { EntityManager } from "@mikro-orm/core";
import { startOrm } from "./database/mikroorm";

export async function contextResolver(ctx: IContext | any): Promise<IContext> {
  const orm = await startOrm();
  ctx.em = orm.em.fork();

  return ctx as IContext;
}

export interface IContext {
  em: EntityManager;
}
