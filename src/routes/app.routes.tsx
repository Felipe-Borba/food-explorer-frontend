import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      {/* <Route path="/profile" element={<Profile />} />
      <Route path="/movie/new" element={<MovieNew />} />
      <Route path="/movie/:id" element={<MoviePreview />} /> */}
    </Routes>
  );
};
