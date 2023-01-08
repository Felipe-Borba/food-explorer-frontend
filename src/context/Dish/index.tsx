import { PropsWithChildren, createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { DishContext, DishType, Dish } from "./types";

const DishCtx = createContext<DishContext | null>(null);

export function useDish() {
  const context = useContext(DishCtx);

  if (!context) {
    throw new Error("DishContext not loaded!");
  }

  return context;
}

export function DishProvider({ children }: PropsWithChildren) {
  const [principal, setPrincipal] = useState<Dish[]>([]);
  const [sobremesa, setSobremesa] = useState<Dish[]>([]);
  const [bebida, setBebida] = useState<Dish[]>([]);

  async function refreshList({ filter = "" }) {
    try {
      const response = await api.get("/dish", { params: { filter } });
      const dishes = response.data.dishes as Dish[];

      setPrincipal(dishes.filter((dish) => dish.type === "principal"));
      setSobremesa(dishes.filter((dish) => dish.type === "sobremesa"));
      setBebida(dishes.filter((dish) => dish.type === "bebida"));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DishCtx.Provider
      value={{ data: { bebida, principal, sobremesa }, refreshList }}
    >
      {children}
    </DishCtx.Provider>
  );
}
