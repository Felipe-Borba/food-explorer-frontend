import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-in" />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};
