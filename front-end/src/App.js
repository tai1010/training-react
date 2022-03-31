import React from "react";
import "./App.css";
import Post from "./components/Content/Post/Post";
import User from "./components/Content/User/User";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Breadcrumb from "./components/Content/Breadcrumb/Breadcrumb";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="sub-container">
          <Breadcrumb />
          <div className="sub-container-item">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Post />}></Route>
                <Route path="/Users" element={<User />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
