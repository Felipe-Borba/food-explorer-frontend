import { ApiResponse } from "../../services/api";

export interface Dish {
  id: number;
  name: string;
}

export interface DishList {
  id: number;
  name: string;
}

export interface DishData {
  dish: Dish | null;
  dishList: DishList[];
}

export type DishType = "principal" | "sobremesa" | "bebida";

export interface DishContext {
  getDishList(type: DishType): Promise<DishList[]>;
}
