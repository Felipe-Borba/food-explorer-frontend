import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ApiResponse, api, apiErrorParser } from "../../services/api";
import { DishContext, DishData, DishType } from "./types";

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
      const response = await api.get("/dish");
      console.log(response.status, response.data);

      return [];
    } catch (error) {
      console.log(error);

      return [];
    }
  }

  return (
    <DishCtx.Provider value={{ getDishList }}>{children}</DishCtx.Provider>
  );
}
