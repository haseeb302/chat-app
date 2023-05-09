import React from "react";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

import "./styles/sidebar.scss";

const Sidebar = () => {
  const chats = ["Chat 1", "Chat 2", "Chat 3", "Chat 4"];

  return (
    <div className="sidebar">
      <div className="navbar">
        <Navbar />
      </div>
      <Search />
      <div className="chats-list">
        <Chats />
      </div>
    </div>
  );
};

export default Sidebar;
