import { EntityManager } from "@mikro-orm/core";
import { startOrm } from "./database/mikroorm";

export interface ContextType {
  em: EntityManager;
}

export async function contextResolver(
  ctx: ContextType | any
): Promise<ContextType> {
  const orm = await startOrm();
  ctx.em = orm.em.fork();

  return ctx;
}
