import "./components.scss";

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
      <input
        type="text"
        placeholder="Search chats"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredChats.map((chat, index) => (
          <li key={index}>{chat}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
