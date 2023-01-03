import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DishCreate from "../pages/dish/Create";
import DishView from "../pages/dish/View";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/dish/create" element={<DishCreate />} />
      <Route path="/dish/view/:id" element={<DishView />} />
    </Routes>
  );
};
