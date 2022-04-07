import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import icon from "../../../assets/images/icon.png";

export default function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <img src={icon} alt="icon" />
      <Link to="/">Home</Link>
      <span>/</span>
      <Link to="/" className="breadcrumb-item">
        Users
      </Link>
    </div>
  );
}
