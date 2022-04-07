import React from "react";
import "./App.css";
import Post from "./components/Content/Post/Post";
import User from "./components/Content/User/User";
import Login from "./pages/Auth/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Post />}></Route>
      <Route path="/Users" element={<User />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
