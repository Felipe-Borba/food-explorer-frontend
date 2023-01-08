export interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  type: DishType;
  created_at: string;
  updated_at: string;
}

export type DishType = "principal" | "sobremesa" | "bebida";

export interface DishContext {
  data: {
    principal: Dish[];
    sobremesa: Dish[];
    bebida: Dish[];
  };
  refreshList({ filter: string }): Promise<void>;
}
