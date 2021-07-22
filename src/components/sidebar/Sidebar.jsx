import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar.css";
import{ selectUser } from '../../features/userSlice';
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <span className="sidebar-hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="Sidebar">
      <div className="sidebar-top">
        <img
          src="https://images.unsplash.com/photo-1507992781348-310259076fe0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar-avatar">
          {user?.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">1,453</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNumber">1,241</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem("webdevelopment")}
        {recentItem("programming")}
        {recentItem("nodejs")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default Sidebar;
