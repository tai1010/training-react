import React from "react";
import "./style.scss";
import Logo from "../../assets/images/Logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Stack, Avatar, Typography } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const navigate = useNavigate();
  // const name = localStorage.getItem("user");
  function logout() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <header>
      <div className="header-left">
        <div className="header-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          mx={4}
        >
          <Input
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Stack>
      </div>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        mx={4}
      >
        <NotificationsActiveIcon />
        <MailOutlineIcon />
        <Avatar src="/broken-image.jpg" />
        <div>
          <Typography>Administrator</Typography>
          <Typography>Taisei</Typography>
        </div>
        <Avatar
          onClick={() => {
            logout();
          }}
        >
          <LogoutIcon fontsize="small" />
        </Avatar>
      </Stack>
    </header>
  );
}
