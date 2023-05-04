import React from "react";
import Chats from "./Chats";
import Navbar from "./Navbar";

import "./styles/sidebar.scss";

const Sidebar = () => {
  const chats = ["Chat 1", "Chat 2", "Chat 3", "Chat 4"];
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredChats = chats.filter((chat) => {
    return chat.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="sidebar">
      <div className="navbar">
        <Navbar />
      </div>
      <input
        type="text"
        placeholder="Search chats"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="chats-list">
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
      </div>
    </div>
  );
};

export default Sidebar;
