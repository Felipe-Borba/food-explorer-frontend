import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DishView() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  return <div>index{id}</div>;
}
