import { PropsWithChildren, createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { DishContext, DishType } from "./types";

const DishCtx = createContext<DishContext | null>(null);

export function useDish() {
  const context = useContext(DishCtx);

  if (!context) {
    throw new Error("DishContext not loaded!");
  }

  return context;
}

export function DishProvider({ children }: PropsWithChildren) {
  const [filter, setFilter] = useState(); //TODO

  async function getDishList(type: DishType) {
    try {
      const response = await api.get("/dish", { params: { type } });

      return response.data.dishes;
    } catch (error) {
      console.log(error);

      return [];
    }
  }

  return (
    <DishCtx.Provider value={{ getDishList }}>{children}</DishCtx.Provider>
  );
}
