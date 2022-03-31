import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="side-bar">
      <div className="side-bar-item">
        <Link to="/">
          <img src="./images/Dashbord.png" />
          <span>Dashboard</span>
        </Link>
      </div>
      <div className="side-bar-content">
        <p>Main</p>
        <div className="side-bar-item is-active">
          <Link to="/Users">
            <img src="./images/3User.png" />
            <span>Users</span>
          </Link>
        </div>
        <div className="side-bar-item">
          <Link to="/">
            <img src="./images/Game.png" />
            <span>Posts</span>
          </Link>
        </div>
        <div className="side-bar-item">
          <Link to="">
            <img src="./images/Categories.png" />
            <span>Categories</span>
          </Link>
        </div>
      </div>
      <div className="side-bar-content">
        <p>Setting</p>
        <div className="side-bar-item">
          <Link to="">
            <img src="./images/Document.png" />
            <span>Profile</span>
          </Link>
        </div>
        <div className="side-bar-item">
          <Link to="">
            <img src="./images/Setting.png" />
            <span>Roles</span>
          </Link>
        </div>
        <div className="side-bar-item">
          <Link to="">
            <img src="./images/Location.png" />
            <span>Maps</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
