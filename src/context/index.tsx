import React, { PropsWithChildren } from "react";
import { AuthProvider } from "./Auth";
import { DishProvider } from "./Dish";

export default function Context(props: PropsWithChildren) {
  return (
    <AuthProvider>
      <DishProvider>{props.children}</DishProvider>
    </AuthProvider>
  );
}
