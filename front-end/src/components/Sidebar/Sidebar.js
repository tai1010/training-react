import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Dashboard from "../../assets/images/Dashbord.png";
import User from "../../assets/images/User.png";
import Games from "../../assets/images/Game.png";
import Categories from "../../assets/images/Categories.png";
import Document from "../../assets/images/Document.png";
import Setting from "../../assets/images/Setting.png";
import Location from "../../assets/images/Location.png";

export default function Sidebar() {
  return (
    <div className="side-bar">
      <div className="side-bar-item">
        <Link to="/">
          <img src={Dashboard} alt="Dashboard" />
          <span>Dashboard</span>
        </Link>
      </div>
      <div className="side-bar-content">
        <p>Main</p>
        <div className="side-bar-item is-active">
          <Link to="/Users">
            <img src={User} alt="User" />
            <span>Users</span>
          </Link>
        </div>
        <div className="side-bar-item">
          <Link to="/">
            <img src={Games} alt="Games" />
            <span>Posts</span>
          </Link>
        </div>
        <div className="side-bar-item">
          <Link to="">
            <img src={Categories} alt="Categories" />
            <span>Categories</span>
          </Link>
        </div>
      </div>
      <div className="side-bar-content">
        <p>Setting</p>
        <div className="side-bar-item">
          <Link to="">
            <img src={Document} alt="Document" />
            <span>Profile</span>
          </Link>
        </div>
        <div className="side-bar-item">
          <Link to="">
            <img src={Setting} alt="Setting" />
            <span>Roles</span>
          </Link>
        </div>
        <div className="side-bar-item">
          <Link to="">
            <img src={Location} alt="Location" />
            <span>Maps</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
