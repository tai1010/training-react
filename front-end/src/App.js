import React from "react";
import "./App.css";
import Post from "./components/Content/Post/Post";
import User from "./components/Content/User/User";
import Login from "./components/Content/Login/Login";
import Dashboard from "./components/Content/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/dashbord" element={<Dashboard />}></Route>
      <Route path="/Posts" element={<Post />}></Route>
      <Route path="/Users" element={<User />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
