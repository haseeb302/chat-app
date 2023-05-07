import { signOut } from "firebase/auth";
import "./styles/navbar.scss";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar-container">
      <img
        src={currentUser.photoURL}
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
      />
      <h2 className="username">{currentUser.displayName}</h2>
      <div className="left-container">
        <button className="logout" onClick={() => signOut(auth)}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
