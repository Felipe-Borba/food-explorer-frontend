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

export interface DishData {
  dish: Dish | null;
  dishList: Dish[];
}

export type DishType = "principal" | "sobremesa" | "bebida";

export interface DishContext {
  getDishList(type: DishType): Promise<DishList[]>;
}
