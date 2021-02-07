import { Category } from "./Category";

export class Product {
  id: string;

  title: string;

  description?: string;

  images: string[];

  categories: Category[];

  price: number;
}
