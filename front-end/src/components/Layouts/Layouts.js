import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Breadcrumb from "../Content/Breadcrumb/Breadcrumb";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

function Layouts({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("result") == null) navigate("/login");
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="sub-container">
          <Breadcrumb />
          <div className="sub-container-inner">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layouts;
