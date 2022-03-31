import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <img src="./images/icon.png" />
      <Link to="/">Home</Link>
      <span>/</span>
      <Link to="/" className="breadcrumb-item">
        Users
      </Link>
    </div>
  );
}
