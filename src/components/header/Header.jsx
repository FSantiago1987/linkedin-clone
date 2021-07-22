import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  Sms,
  Notifications,
  SupervisorAccount,
  Home,
} from "@material-ui/icons";
import { logout } from "../../features/userSlice";
import { auth } from "../../features/firebase/firebase";


function Header() {

  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />
        <div className="header-search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOption title="Home" Icon={Home} />
        <HeaderOption title="My Network" Icon={SupervisorAccount} />
        <HeaderOption title="Jobs" Icon={BusinessCenter} />
        <HeaderOption title="Messaging" Icon={Sms} />
        <HeaderOption title="Notifications" Icon={Notifications} />
        <HeaderOption title="Me" onClick={logoutApp} avatar={true}/>
      </div>
    </div>
  );
}

export default Header;
