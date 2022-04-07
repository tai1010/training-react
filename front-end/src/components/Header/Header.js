import React from "react";
import "./style.scss";
import Logo from "../../assets/images/Logo.png";
import Search from "../../assets/images/Search.png";
import Ellipse from "../../assets/images/Ellipse.png";
import Notification from "../../assets/images/Notification.png";
import Group from "../../assets/images/Group.png";
import Beared from "../../assets/images/Beared.png";

export default function Header() {
  return (
    <header>
      <div className="header-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header-search">
        <div className="header-search__bar">
          <img src={Search} alt="Search" />
          <input
            className="search__bar__input"
            placeholder="Search..."
            size="10"
          />
        </div>
      </div>
      <div className="header-ellipse-icon">
        <img src={Ellipse} alt="Ellipse" />
      </div>
      <div className="header-notification-icon">
        <img src={Notification} alt="Notification" />
      </div>
      <div className="header-group-icon">
        <img src={Group} alt="Group" />
      </div>
      <div className="header-person-icon">
        <img src={Beared} alt="Bearing" />
      </div>
      <div className="header-person">
        <div className="last-name">Taisei</div>
        <div className="authority">Administrator</div>
      </div>
    </header>
  );
}
