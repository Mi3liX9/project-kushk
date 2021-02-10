import { EntityManager } from "@mikro-orm/core";

export interface ContextType {
  em: EntityManager;
}
