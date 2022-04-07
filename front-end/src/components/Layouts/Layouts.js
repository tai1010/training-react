import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Breadcrumb from "../Content/Breadcrumb/Breadcrumb";
import Sidebar from "../Sidebar/Sidebar";

function Layouts({ children }) {
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
