import { ContextType } from "src/types/ContextType";
import { startOrm } from "./database/mikroorm";

export async function contextResolver(
  ctx: ContextType | any
): Promise<ContextType> {
  const orm = await startOrm();
  ctx.em = orm.em.fork();

  return ctx;
}
