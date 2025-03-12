import React from "react";
import { Outlet } from "react-router-dom";
import ChatSidebar from "../ChatSidebar";
import ChatHeader from "../ChatHeader";
import "./Layout.css";

const Layout = ({ darkMode }) => {
  return (
    <div className={`layout-container ${darkMode ? 'dark-mode' : ''}`}>
      <ChatSidebar />
      <div className="layout-main">
        <ChatHeader />
        <div className="layout-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
