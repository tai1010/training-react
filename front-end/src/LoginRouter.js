import React from "react";
import Login from "./pages/Auth/index";
import { Routes, Route, Router } from "react-router-dom";

function LoginRouter() {
  return (
    <Router>
      <Route path="/login" element={<Login />}></Route>
    </Router>
  );
}

export default LoginRouter;
