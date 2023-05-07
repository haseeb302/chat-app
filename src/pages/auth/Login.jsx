import { useState } from "react";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import "../../style.scss";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-header">
          <h2 className="app-logo">Chat Now!</h2>
          <p className="form-title">Login</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="label-input">
            <label>Email: </label>
            <input type="text" />
          </div>
          <div className="label-input">
            <label>Password: </label>
            <input type="text" />
          </div>
          <button>Login</button>
        </form>
        <div>
          <p>
            Don't have an account <Link to={"/register"}>register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
