import React from "react";
import Login from "./pages/Auth/index";
import { useRoutes } from "react-router-dom";

const routes = [
  {
    component: <Login />,
    path: "/login",
  },
];

export default function Router() {
  return useRoutes(routes);
}
