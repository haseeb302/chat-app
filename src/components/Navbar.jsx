import "./styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h2 className="username">Haseeb</h2>
      <div className="left-container">
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
