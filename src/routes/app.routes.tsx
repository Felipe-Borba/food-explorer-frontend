import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DishCreate from "../pages/dish/Create";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/dish/create" element={<DishCreate />} />
      {/* <Route path="/movie/new" element={<MovieNew />} /> */}
      {/* <Route path="/movie/:id" element={<MoviePreview />} /> */}
    </Routes>
  );
};
